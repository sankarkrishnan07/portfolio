import styled from "styled-components";
import Heading from "../ui/Heading";
import Avatar from "../ui/Avatar";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import ScrollDown from "../ui/ScrollDown";
import Resume from "../components/Resume";

const Intro = styled.div`
  max-width: 50rem;

  p {
    margin-top: 2rem;
  }
`;

const StyledLanding = styled.section`
  font-family: "Major Mono Display", monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap-reverse;

  h1 {
    overflow: hidden;
    span {
      display: inline-block;
    }
  }

  @media (max-width: 820px) {
    gap: 0.5rem;

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 20px;
    }

    ${Intro} > span {
      font-size: 14px;
    }
  }

  @media (max-width: 470px) {
    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 16px;
    }

    ${Intro} > span {
      font-size: 12px;
    }

    p {
      font-size: 12px;
    }
  }
`;

gsap.registerPlugin(TextPlugin);

function Landing() {
  const landingRef = useRef();
  const titleRef = useRef();
  const avatarRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      if (landingRef.current && avatarRef.current && tl) {
        tl.fromTo(
          "h1 span",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, stagger: 0.075, delay: 0.5 }
        )
          .fromTo(avatarRef.current, { opacity: 0 }, { opacity: 1 })
          .fromTo("p", { opacity: 0 }, { opacity: 1, delay: 0.5 })
          .fromTo(
            "a",
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1 }
          );
      }
    },
    { scope: landingRef }
  );

  useGSAP(
    () => {
      if (titleRef.current) {
        const words = [
          "Frontend Web Developer",
          "React Developer",
          "Logo Enthusiast",
        ];

        const tl = gsap.timeline({ repeat: -1, delay: 2 });

        words.forEach((word) => {
          const childTl = gsap.timeline({
            repeat: 1,
            yoyo: true,
            repeatDelay: 1.5,
          });
          childTl.to(titleRef.current, { duration: 1, text: word });
          tl.add(childTl);
        });
      }
    },
    { scope: titleRef }
  );

  return (
    <StyledLanding ref={landingRef}>
      <Intro>
        <span>Hello, I am</span>
        <Heading>
          <span>S</span>
          <span>A</span>
          <span>N</span>
          <span>K</span>
          <span>A</span>
          <span>R</span>
          &nbsp;
          <span>K</span>
          <span>R</span>
          <span>I</span>
          <span>S</span>
          <span>H</span>
          <span>N</span>
          <span>A</span>
          <span>N</span>
        </Heading>
        <Heading as="h2">
          &lt;<span ref={titleRef}></span>
          &#47;&gt;
        </Heading>
        <p>
          Focused in creating user-friendly interfaces with a knack for turning
          designs into interactive experiences.
        </p>
        <Resume />
      </Intro>
      <Avatar ref={avatarRef}>
        <img src="/sk.png" alt="" />
      </Avatar>
      <ScrollDown />
    </StyledLanding>
  );
}

export default Landing;
