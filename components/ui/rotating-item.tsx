import { AnimatePresence, motion } from "motion/react";
import React from "react";

type RotatingItemProps = {
  index: number;
  items: React.ReactNode[];
  direction?: "up" | "down";
};

type RotatingItemPropsChildren = {
  index: number;
  direction?: "up" | "down";
  children: React.ReactNode[];
};

const variants = {
  initial: (direction: number) => ({
    opacity: 0,
    y: -direction,
  }),
  animate: { opacity: 1, y: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction,
  }),
};

export const RotatingItem = (props: RotatingItemPropsChildren) => {
  const { index, children, direction } = props;

  const motionDirection = direction === "up" ? -10 : 10;

  const itemsArray = React.Children.toArray(children);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        variants={variants}
        custom={motionDirection}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        {itemsArray[index]}
      </motion.div>
    </AnimatePresence>
  );
};
