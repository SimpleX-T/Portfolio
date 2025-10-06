import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

type EyeAnimationProps = { className?: string; scale?: number };
type Point = { x: number; y: number };
type EyePositions = { left: Point; right: Point };

const EyeAnimation = ({ className = "", scale = 1 }: EyeAnimationProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [cursorPosition, setCursorPosition] = useState<Point>({ x: 0, y: 0 });
  const [eyePositions, setEyePositions] = useState<EyePositions>({
    left: { x: 0, y: 0 },
    right: { x: 0, y: 0 },
  });

  useEffect(() => {
    // Function to handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate relative position from center
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;

      setCursorPosition({ x, y });
    };

    // Add event listener to the window (not just the container)
    window.addEventListener("mousemove", handleMouseMove);

    // Calculate eye positions once on mount
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const leftEyeX = rect.width / 2 - 40; // Adjust based on your eye spacing
      const rightEyeX = rect.width / 2 + 40;
      const eyeY = 0; // Center vertically

      setEyePositions({
        left: { x: leftEyeX, y: eyeY },
        right: { x: rightEyeX, y: eyeY },
      });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate pupil position based on cursor
  const calculatePupilPosition = (
    eyeX: number,
    eyeY: number,
    cursorX: number,
    cursorY: number
  ): Point => {
    // Maximum distance the pupil can move from center (in pixels)
    const maxDistance = 5 * scale;

    // Calculate direction vector from eye to cursor
    const dx = cursorX - eyeX;
    const dy = cursorY - eyeY;

    // Normalize and scale
    const length = Math.sqrt(dx * dx + dy * dy);
    const normalizedX = length > 0 ? dx / length : 0;
    const normalizedY = length > 0 ? dy / length : 0;

    // Apply max distance constraint
    return {
      x: normalizedX * Math.min(length, maxDistance),
      y: normalizedY * Math.min(length, maxDistance),
    };
  };

  const eyeSize = 16 * scale;
  const pupilSize = 8 * scale;

  // Calculate pupil positions
  const leftPupil = calculatePupilPosition(
    eyePositions.left.x,
    eyePositions.left.y,
    cursorPosition.x,
    cursorPosition.y
  );

  const rightPupil = calculatePupilPosition(
    eyePositions.right.x,
    eyePositions.right.y,
    cursorPosition.x,
    cursorPosition.y
  );

  return (
    <div
      className={`flex gap-8 pointer-events-none ${className}`}
      ref={containerRef}
    >
      {/* Left Eye */}
      <motion.div
        className="bg-[var(--bg-black-700)] rounded-full shadow-inner border-2 border-[var(--skin-color)] relative overflow-hidden"
        style={{ width: `${eyeSize}px`, height: `${eyeSize}px` }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="absolute bg-[var(--skin-color)] rounded-full"
          style={{
            width: `${pupilSize}px`,
            height: `${pupilSize}px`,
            top: `calc(50% + ${leftPupil.y}px)`,
            left: `calc(50% + ${leftPupil.x}px)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>

      {/* Right Eye */}
      <motion.div
        className="bg-[var(--bg-black-700)] rounded-full shadow-inner border-2 border-[var(--skin-color)] relative overflow-hidden"
        style={{ width: `${eyeSize}px`, height: `${eyeSize}px` }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="absolute bg-[var(--skin-color)] rounded-full"
          style={{
            width: `${pupilSize}px`,
            height: `${pupilSize}px`,
            top: `calc(50% + ${rightPupil.y}px)`,
            left: `calc(50% + ${rightPupil.x}px)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default EyeAnimation;
