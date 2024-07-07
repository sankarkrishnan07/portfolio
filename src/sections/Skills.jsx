import styled from "styled-components";
import ReactLogo from "../ui/ReactLogo";
import TSLogo from "../ui/TSLogo";
import JSLogo1 from "../ui/JSLogo1";
import HTMLLogo from "../ui/HTMLLogo";
import CSSLogo from "../ui/CSSLogo";
import ViteLogo from "../ui/ViteLogo";
import SupabaseLogo from "../ui/SupabaseLogo";
import StorybookLogo from "../ui/StorybookLogo";
import SassLogo from "../ui/SassLogo";
import SCLogo from "../ui/SCLogo";
import ReduxLogo from "../ui/ReduxLogo";
import RouterLogo from "../ui/RouterLogo";
import ReactQueryLogo from "../ui/ReactQueryLogo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import PropTypes from "prop-types";
import AiLogo from "../ui/AiLogo";
import GSAPLogo from "../ui/GSAPLogo";
import TailwindcssLogo from "../ui/TailwindcssLogo";
import SQLLogo from "../ui/SQLLogo";
import GitHubLogo from "../ui/GitHubLogo";

const StyledSkills = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;

  li {
    display: inline-flex;
  }

  svg {
    height: 25px;
    width: 25px;
  }
`;

const SkillsWrap = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.5rem;
  align-items: center;
  justify-items: center;

  p {
    overflow: hidden;
  }

  ${StyledSkills} {
    height: 550px;
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    p {
      align-self: start;
    }
  }

  @media (max-width: 1000px) {
    ${StyledSkills} {
      height: 300px;
      width: 300px;
    }
  }

  @media (max-width: 650px) {
    p {
      font-size: 12px;
    }
  }
`;

const SkillsLabel = styled.div.attrs({ role: "listitem" })`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #000;
  z-index: 1;

  @media (max-width: 1000px) {
    height: 80px;
    width: 80px;
  }

  @media (max-width: 650px) {
    height: 60px;
    width: 60px;
    font-size: 14px;
  }
`;

const Skill = styled.li`
  position: absolute;
  max-height: 100px;
  max-width: 100px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: #fff;
  box-shadow: 0 0 2px 0 currentColor;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;

  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotate(
      calc(-360deg / ${(props) => props.length} * ${(props) => props.i})
    );
  }

  @media (max-width: 1000px) {
    background: none;
    box-shadow: none;
    font-size: 11px;
  }
`;

const SkillOuter = styled(Skill)`
  transform-origin: 270px;
  transform: translateX(-220px)
    rotate(calc(360deg / ${(props) => props.length} * ${(props) => props.i}));

  @media (max-width: 1000px) {
    transform-origin: 200px;
    transform: translateX(-150px)
      rotate(calc(360deg / ${(props) => props.length} * ${(props) => props.i}));
  }

  @media (max-width: 650px) {
    transform-origin: 160px;
    transform: translateX(-110px)
      rotate(calc(360deg / ${(props) => props.length} * ${(props) => props.i}));
  }
`;
const SkillInner = styled(Skill)`
  transform-origin: 168px;
  transform: translateX(-118px)
    rotate(calc(360deg / ${(props) => props.length} * ${(props) => props.i}));

  @media (max-width: 1000px) {
    transform-origin: 130px;
    transform: translateX(-80px)
      rotate(calc(360deg / ${(props) => props.length} * ${(props) => props.i}));
  }

  @media (max-width: 650px) {
    transform-origin: 110px;
    transform: translateX(-60px)
      rotate(calc(360deg / ${(props) => props.length} * ${(props) => props.i}));
  }
`;

const outerCircle = [
  { logo: ReactLogo, name: "React" },
  { logo: ReduxLogo, name: "Redux" },
  { logo: RouterLogo, name: "React Router" },
  { logo: ReactQueryLogo, name: "React Query" },
  { logo: JSLogo1, name: "Javasacript" },
  { logo: TSLogo, name: "Typescript" },
  { logo: HTMLLogo, name: "HTML" },
  { logo: CSSLogo, name: "CSS" },
  { logo: SassLogo, name: "SASS" },
  { logo: TailwindcssLogo, name: "Tailwind" },
  {
    logo: SCLogo,
    name: (
      <>
        Styled <br /> Components
      </>
    ),
  },
  {
    logo: AiLogo,
    name: (
      <>
        Adobe <br /> Illustrator
      </>
    ),
  },
];

const innerCircle = [
  { logo: GitHubLogo, name: "GitHub" },
  { logo: SQLLogo, name: "SQL/PLSQL" },
  { logo: GSAPLogo, name: "GSAP" },
  { logo: StorybookLogo, name: "Storybook" },
  { logo: ViteLogo, name: "Vite" },
  { logo: SupabaseLogo, name: "Supabase" },
];

gsap.registerPlugin(ScrollTrigger);

function Skills({ innerRef }) {
  useGSAP(
    () => {
      let posX = 225;
      gsap.matchMedia().add("(max-width:1000px)", () => {
        posX = 100;
      });

      gsap.from("li", {
        scrollTrigger: {
          trigger: innerRef.current,
          start: "20% 60%",
          end: "top 20%",
          toggleActions: "restart none none reverse",
        },
        rotation: 0,
        stagger: 0.1,
        left: 5,
        x: posX,
        opacity: 0,
      });

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
    <SkillsWrap ref={innerRef}>
      <StyledSkills>
        <SkillsLabel>SKILLS</SkillsLabel>

        {innerCircle.map((skill, i) => (
          <SkillInner key={i} i={i} length={innerCircle.length}>
            <div>
              {skill.logo && skill.logo()}
              <span>{skill.name}</span>
            </div>
          </SkillInner>
        ))}
        {outerCircle.map((skill, i) => (
          <SkillOuter key={i} i={i} length={outerCircle.length}>
            <div>
              {skill.logo && skill.logo()}
              <span>{skill.name}</span>
            </div>
          </SkillOuter>
        ))}
      </StyledSkills>
      <p>
        I specialize in frontend development, focusing on creating intuitive
        user interfaces that prioritize user experience. With a strong
        foundation in frontend technologies, I excel in crafting responsive web
        applications. My skills include designing reusable components, ensuring
        cross-browser compatibility, and optimizing performance. I have
        proficiency in version control using Git for collaborative development.
        Additionally, I use Storybook to efficiently develop and showcase UI
        components in isolation, ensuring rapid iteration and maintaining UI
        consistency. I am committed to continuous learning and staying updated
        with industry trends to deliver effective solutions that meet project
        goals.
      </p>
    </SkillsWrap>
  );
}

Skills.propTypes = {
  innerRef: PropTypes.any,
};

export default Skills;
