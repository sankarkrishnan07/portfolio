import styled from "styled-components";
import Header from "../components/Header";
import Landing from "../sections/Landing";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import SpiderCursor from "../components/SpiderCursor";
import SpiderScroll from "../components/SpiderScroll";
import { useRef, useState } from "react";
import About from "../sections/About";
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Loader from "./Loader";
import gsap from "gsap";

const StyledAppLayout = styled.div`
  /* visibility: hidden; */
`;

const Main = styled.main`
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;

  & > section {
    height: calc(100vh - 4.375rem);
    padding: 1.5rem 0;
    background: #1f1f1f;

    &:not(&:last-child) {
      box-shadow: 0 -1px 0 0 inset rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: 700px) {
    padding: 0 1.5rem;

    & > section {
      height: calc(100vh - 3.75rem);
    }
  }
`;

function AppLayout() {
  const [isLoading, setIsLoading] = useState(true);

  const loaderRef = useRef();

  const layoutRef = useRef();
  const mainRef = useRef();

  const skillsRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  const sectionRefs = [skillsRef, projectsRef, aboutRef, contactRef];

  useGSAP(
    () => {
      if (loaderRef.current) {
        const tl = gsap.timeline();
        tl.to(loaderRef.current, {
          "--logo-fill": "#fff",
          "--logo-stroke-dashoffset": 0,
          duration: 3,
          ease: "power1.in",
        }).to(loaderRef.current, {
          opacity: 0,
          onComplete: () => setIsLoading(false),
        });
      }

      if (mainRef.current) {
        const sections = Array.from(mainRef.current.children);

        sections.forEach((section) => {
          ScrollTrigger.create({
            trigger: section,
            start: `top bottom`,
            end: `bottom bottom`,
            snap: {
              snapTo: 1,
              duration: 0.5,
              ease: "power1.inOut",
            },
          });
        });
      }
    },
    { dependencies: [isLoading] }
  );

  return isLoading ? (
    <Loader innerRef={loaderRef} />
  ) : (
    <>
      <SpiderCursor />
      <SpiderScroll />
      <StyledAppLayout ref={layoutRef}>
        <Header sectionRefs={sectionRefs} />
        <Main ref={mainRef}>
          <Landing />
          <Skills innerRef={skillsRef} />
          <Projects innerRef={projectsRef} />
          <About innerRef={aboutRef} />
        </Main>
        <Footer innerRef={contactRef} />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
