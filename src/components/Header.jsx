import styled from "styled-components";
import Logo from "../ui/Logo";
import Nav from "./Nav";
import PropTypes from "prop-types";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap/all";

const StyledHeader = styled.header`
  font-family: "Major Mono Display", monospace;
  background: #1f1f1f;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);

  & > nav {
    max-width: 80rem;
    padding: 0.625rem 2.5rem 0.625rem 3rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 700px) {
    & > nav {
      padding: 0.625rem 1.5rem;
    }
  }
`;

function Header({ sectionRefs }) {
  const headerRef = useRef();
  const navRef = useRef();

  useGSAP(() => {
    if (headerRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(headerRef.current, { opacity: 0 }, { opacity: 1, delay: 5 })
        .fromTo(
          navRef.current.children[0],
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        )
        .fromTo(
          navRef.current.children[2].children,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
          "<"
        );
    }
  });

  return (
    <StyledHeader ref={headerRef}>
      <nav ref={navRef}>
        <Logo
          handleClick={() => window.scrollTo({ top, behavior: "smooth" })}
        />
        <Nav sectionRefs={sectionRefs} />
      </nav>
    </StyledHeader>
  );
}

Header.propTypes = {
  sectionRefs: PropTypes.any,
};

export default Header;
