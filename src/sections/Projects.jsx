import styled from "styled-components";
import Heading from "../ui/Heading";
import ProjectCard from "../ui/ProjectCard";
import Modal from "../ui/Modal";
import ProjectDetails from "../ui/ProjectDetails";
import Filter from "../ui/Filter";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import { filterOptions, projects } from "../data/projets";

const StyledProjectsWrap = styled.section`
  h3 {
    margin: 0;
    position: sticky;
    top: 0;
  }
`;

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 18.75rem);
  grid-template-rows: repeat(auto-fit, 10.875rem);
  justify-content: center;
  gap: 6rem 3rem;
  height: calc(100vh - 175px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2px 0 4.5rem 0;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

gsap.registerPlugin(ScrollTrigger);

function Projects({ innerRef }) {
  const [activeFilter, setActiveFilter] = useState(filterOptions[0]);

  const projectsContainer = useRef();

  useGSAP(
    () => {
      gsap.from("a", {
        scrollTrigger: {
          trigger: projectsContainer.current,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "restart none none reverse",
        },
        x: 100,
        opacity: 0,
        stagger: 0.1,
      });
    },
    {
      scope: projectsContainer,
    }
  );

  const filteredProjects =
    activeFilter.value === "all"
      ? projects
      : projects.filter((project) => project.key === activeFilter.value);

  return (
    <StyledProjectsWrap ref={innerRef}>
      <Header>
        <Heading as="h3">Projects</Heading>
        <Filter
          options={filterOptions}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </Header>
      <Modal>
        <StyledProjects ref={projectsContainer}>
          {filteredProjects.map((project, i) => (
            <Modal.Trigger
              isCard={true}
              id={project.title}
              key={`Project ${i}`}
            >
              <ProjectCard project={project} />
            </Modal.Trigger>
          ))}
        </StyledProjects>
        {filteredProjects.map((project, i) => (
          <Modal.Window id={project.title} key={`Project ${i}`}>
            <ProjectDetails project={project} />
          </Modal.Window>
        ))}
      </Modal>
    </StyledProjectsWrap>
  );
}

Projects.propTypes = {
  innerRef: PropTypes.any,
};

export default Projects;
