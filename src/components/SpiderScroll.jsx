import styled from "styled-components";
import Spider from "../ui/Spider";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const SpiderContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 0;
  height: 100vh;
  width: 10px;
  pointer-events: none;
`;

const Web = styled.svg`
  position: absolute;
  right: 10%;
  top: 0;
`;

function SpiderScroll() {
  const containerRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollPosition(
        ((scrollTop - 50) / docHeight) * 100 > 0
          ? ((scrollTop - 50) / docHeight) * 100
          : 0
      );
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, delay: 8 }
      );
    }
  }, []);

  function handleClick() {
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <SpiderContainer ref={containerRef}>
      <Web height={`${scrollPosition}vh`} width="2">
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#fff" />
      </Web>
      <Spider
        style={{
          position: "absolute",
          top: 0,
          right: "10%",
          cursor: "pointer",
          pointerEvents: "all",
          transform: `translateX(50%) translateY(${scrollPosition}vh)`,
        }}
        onClick={handleClick}
      />
    </SpiderContainer>
  );
}

export default SpiderScroll;
