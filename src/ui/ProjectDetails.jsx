import styled from "styled-components";
import ProjectImg from "./ProjectImg";
import Pills from "./Pills";
import Heading from "./Heading";
import Button from "./Button";
import CodeIcon from "./CodeIcon";
import PlayIcon from "./PlayIcon";
import PropTypes from "prop-types";

const StyledProjectDetails = styled.div`
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    img {
      box-shadow: 0 0 1px 2px #3f3f3f;
      border-radius: 4px;
    }
  }

  main p {
    font-size: 0.875rem;
    font-weight: 300;
  }

  footer {
    align-self: end;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      padding: 0;
    }
  }

  @media (max-width: 792px) {
    header {
      flex-direction: column;

      ${ProjectImg} {
        align-self: center;
      }
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: flex-start;

  h3 {
    margin: 0;
  }
`;

const Year = styled.span`
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`;

function ProjectDetails({ project }) {
  const { title, tags = [], img, year, desc, code, app } = project;

  return (
    <StyledProjectDetails>
      <header>
        <ProjectImg size="small">
          <img src={`/${img}.png`} alt={title} />
        </ProjectImg>
        <Details>
          <Heading as="h3">{title}</Heading>
          <Year>{year}</Year>
          <Pills>
            {tags.map((tag, i) => (
              <span key={`${title}-tag${i}`}>{tag}</span>
            ))}
          </Pills>
        </Details>
      </header>
      <main>
        <p>{desc}</p>
      </main>
      <footer>
        <Button
          as="a"
          href={`https://github.com/sankarkrishnan07/${code}`}
          variant="icon"
          size="large"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodeIcon />
        </Button>
        <Button
          as="a"
          href={`https://${app}.vercel.app`}
          variant="icon"
          size="large"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PlayIcon />
        </Button>
      </footer>
    </StyledProjectDetails>
  );
}

ProjectDetails.propTypes = {
  project: PropTypes.object,
};

export default ProjectDetails;
