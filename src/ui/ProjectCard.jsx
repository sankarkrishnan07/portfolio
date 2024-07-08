import styled from "styled-components";
import Heading from "./Heading";
import ProjectImg from "./ProjectImg";
import Pills from "./Pills";
import PropTypes from "prop-types";

const StyledProjectCard = styled.div`
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.4);
  border-radius: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s;
  position: relative;
  padding-bottom: 2rem;
  background: #3f3f3f;

  &:hover,
  &:hover header {
    box-shadow: 1.25rem 1.25rem 1.25rem rgba(0, 0, 0, 0.4);
  }

  header {
    width: 90%;
    border-radius: 10px;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: #3f3f3f;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.4);
  }
`;

const Year = styled.span`
  position: absolute;
  font-size: 0.75rem;
  right: 10px;
  top: 10px;
  background: #3f3f3f;
  border-radius: 10px;
  padding: 2px 6px;
`;

function ProjectCard({ project }) {
  const { title, tags = [], img, year } = project;

  return (
    <StyledProjectCard>
      <header>
        <Heading as="h4">{title}</Heading>
        <Pills>
          {tags.slice(0, 2).map((tag, i) => (
            <span key={`${title}-tag&${i}`}>{tag}</span>
          ))}
          {tags.length > 2 && (
            <span key={`${title}-more`}>+{tags.length - 2}</span>
          )}
        </Pills>
      </header>
      <ProjectImg>
        <img src={`/${img}.png`} alt={title} />
      </ProjectImg>
      <Year>{year}</Year>
    </StyledProjectCard>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
