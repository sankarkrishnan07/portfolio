import styled from "styled-components";
import GitHubIcon from "../ui/GitHubIcon";
import LinkedInIcon from "../ui/LinkedInIcon";
import XIcon from "../ui/XIcon";

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;

  li {
    display: inline-flex;
    svg {
      height: 24px;
      width: 24px;
      fill: rgba(255, 255, 255, 0.75);
    }
  }
`;

function Social() {
  return (
    <div>
      <SocialLinks>
        <li>
          <a
            href="https://github.com/sankarkrishnan07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/b-sankar-krishnan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
      </SocialLinks>
    </div>
  );
}

export default Social;
