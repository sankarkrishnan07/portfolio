import { useEffect, useRef, useState } from "react";
import Line from "../ui/Line";
import Spider from "../ui/Spider";
import gsap from "gsap";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";

const StyledSpiderCursor = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;

  @media (max-width: 1024px) {
    display: none;
  }
`;

function SpiderCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  const spiderRef = useRef();
  const lineRef = useRef();
  const timerRef = useRef();

  useEffect(() => {
    function handleMouseMove(e) {
      setIsMoving(true);
      setCursorPos({ x: e.clientX, y: e.clientY });

      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useGSAP(
    () => {
      if (spiderRef.current && lineRef.current) {
        const { x, y } = cursorPos;

        if (!isMoving) {
          gsap.to(spiderRef.current, {
            x: x - 10,
            y: y - 10,
            duration: 0.3,
            ease: "power1.inOut",
            onUpdate: () => {
              const { x: spiderPosX, y: spiderPosY } =
                spiderRef.current.getBoundingClientRect();

              gsap.set(lineRef.current, {
                attr: {
                  x1: spiderPosX + 10,
                  y1: spiderPosY + 10,
                  x2: x,
                  y2: y,
                },
              });
            },
          });
        }
      }
    },
    { dependencies: [cursorPos, isMoving] }
  );

  return (
    <StyledSpiderCursor>
      <Spider
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
        spiderRef={spiderRef}
      />
      <Line lineRef={lineRef} isMoving={isMoving} />
    </StyledSpiderCursor>
  );
}

export default SpiderCursor;
