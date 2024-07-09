import styled from "styled-components";
import Heading from "../ui/Heading";
import TimeLineCard from "../components/TimeLine";
import PropTypes from "prop-types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  align-items: center;

  @media (max-width: 1060px) {
    grid-template-columns: 1fr;

    p {
      padding-bottom: 1rem;
    }
  }

  @media (max-width: 650px) {
    p {
      font-size: 12px;
    }
  }
`;

function About({ innerRef }) {
  useGSAP(
    () => {
      gsap.from("p", {
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 20%",
          end: "top top",
          toggleActions: "restart none none reverse",
        },
        height: 0,
        opacity: 0,
      });
    },
    {
      scope: innerRef,
    }
  );

  return (
    <section ref={innerRef}>
      <Heading as="h3">About</Heading>
      <StyledAbout>
        <p>
          I graduated with a Bachelor of Engineering in Mechanical Engineering
          from Kumaraguru College of Technology, securing a CGPA of 8.88. My
          career began as Packaged App Development Associate in Accenture and I
          have since evolved into a passionate web developer. I am always
          curious to learn new things and enjoy sketching and designing logos as
          well. Checkout my resume to know more!
        </p>
        <TimeLineCard />
      </StyledAbout>
    </section>
  );
}

About.propTypes = {
  innerRef: PropTypes.any,
};

export default About;
