import styled from "styled-components";
import ProjectImg from "./ProjectImg";
import Pills from "./Pills";
import Heading from "./Heading";
import Button from "./Button";
import CodeIcon from "./CodeIcon";
import PlayIcon from "./PlayIcon";

const StyledProjectDetails = styled.div`
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
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
`;

const Year = styled.span`
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`;

function ProjectDetails() {
  return (
    <StyledProjectDetails>
      <header>
        <ProjectImg size="small">
          <img src="/test.png" alt="project" />
        </ProjectImg>
        <Details>
          <Heading as="h3">Title</Heading>
          <Year>2024</Year>
          <Pills>
            <span>React</span>
            <span>React Query</span>
            <span>Supabase</span>
          </Pills>
        </Details>
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptatibus, a molestias dolorem quam dicta, magnam dolorum veniam
          delectus doloribus sint officia veritatis sed nam exercitationem
          beatae aliquam magni? Facilis?
        </p>
      </main>
      <footer>
        <Button as="a" href="#" variant="icon" size="large">
          <CodeIcon />
        </Button>
        <Button as="a" href="#" variant="icon" size="large">
          <PlayIcon />
        </Button>
      </footer>
    </StyledProjectDetails>
  );
}

export default ProjectDetails;
