import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
export default function HomePage() {
  const [goNext, setGoNext] = useState(false);

  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-1000, 0, 1000],
    ["#1e293b", "#0f172a", "#1e293b"]
  );

  return (
    <motion.div
      className="flex h-screen w-screen items-center justify-center overflow-hidden"
      style={{ background }}
    >
      <div className="relative h-28 w-28">
        <motion.div
          //   animate={{
          //     scale: [1, 2, 2, 1, 1],
          //     rotate: [0, 0, 270, 270, 0],
          //     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          //     transitionDuration: ["1s", "2s", "1s", "2s", "1s"],
          //   }}
          className="absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center"
        >
          <BsPlus
            className={`h-20 w-20 fill-white font-thin transition-all ${
              goNext && "-rotate-45"
            }`}
          />
        </motion.div>

        <motion.div
          className="absolute z-20 h-28 w-28 rounded-md bg-white transition-shadow duration-500 hover:shadow-3xl"
          // whileHover={{ scale: 1.2, rotate: 90 }}
          // whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}

          drag="x"
          style={{ x }}
          dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
          dragElastic={1}
          onDrag={(event, info) => {
            info.offset.x > 500 && !goNext && setGoNext(true);
            info.offset.x < 500 && goNext && setGoNext(false);

            console.log(info.offset.x);
          }}
        />
      </div>
    </motion.div>
  );
}
