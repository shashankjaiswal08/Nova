export const ease = [0.16, 1, 0.3, 1];
export const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: "0 18px 35px rgba(0,0,0,0.15)" },
  hover: {
    y: -8,
    scale: 1.01,
    boxShadow: "0 28px 60px rgba(92, 74, 196, 0.22)",
    transition: { duration: 0.28, ease },
  },
};

export const floatUp = {
  initial: { y: 18, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.75, ease } },
};
