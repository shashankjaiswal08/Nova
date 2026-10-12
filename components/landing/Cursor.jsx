"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Cursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useGSAP(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    const moveX = gsap.quickTo(cursor, "x", {
      duration: 0.22,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(cursor, "y", {
      duration: 0.22,
      ease: "power3.out",
    });

    const dotX = gsap.quickTo(dot, "x", {
      duration: 0.08,
      ease: "power2.out",
    });

    const dotY = gsap.quickTo(dot, "y", {
      duration: 0.08,
      ease: "power2.out",
    });

    let hoveringInteractive = false;

    const setHoverState = (nextHoverState) => {
      if (nextHoverState === hoveringInteractive) return;
      hoveringInteractive = nextHoverState;

      gsap.to(cursor, {
        scale: nextHoverState ? 1.8 : 1,
        opacity: nextHoverState ? 0.35 : 0.65,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(dot, {
        scale: nextHoverState ? 0.5 : 1,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMove = (event) => {
      moveX(event.clientX);
      moveY(event.clientY);
      dotX(event.clientX);
      dotY(event.clientY);
      setHoverState(Boolean(event.target.closest?.("a, button, [data-cursor-hover]")));
    };

    const handleDown = () => {
      gsap.to(cursor, {
        scale: 0.7,
        duration: 0.12,
        overwrite: "auto",
      });
    };

    const handleUp = () => {
      gsap.to(cursor, {
        scale: hoveringInteractive ? 1.8 : 1,
        duration: 0.2,
        ease: "back.out(2)",
        overwrite: "auto",
      });
    };

    const resetCursor = () => setHoverState(false);

    window.addEventListener("pointermove", handleMove, {
      passive: true,
    });

    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("blur", resetCursor);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("blur", resetCursor);

      gsap.killTweensOf(cursor);
      gsap.killTweensOf(dot);
    };
  }, { scope: cursorRef });

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99999]
          hidden
          h-10
          w-10
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border-2
          border-[var(--violet)]
          opacity-60
          md:block
        "
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10002]
          hidden
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[color:var(--violet)]/75
          md:block
        "
      />
    </>
  );
}
