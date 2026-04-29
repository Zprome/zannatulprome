import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const smoothX = useSpring(mouseX, {
    stiffness: 280,
    damping: 30,
    mass: 0.18,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 280,
    damping: 30,
    mass: 0.18,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 160);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-[320px] w-[320px] rounded-full md:block"
      style={{
        x: smoothX,
        y: smoothY,
        background:
          "radial-gradient(circle, rgba(198,169,114,0.14) 0%, rgba(198,169,114,0.08) 28%, rgba(198,169,114,0.03) 48%, transparent 72%)",
        filter: "blur(24px)",
        mixBlendMode: "screen",
      }}
    />
  );
}

export default CursorGlow;