import styled, { css } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MenuIcon from "../ui/MenuIcon";
import CloseIcon from "../ui/CloseIcon";
import PropTypes from "prop-types";

const NavMenu = styled.button`
  display: none;

  svg {
    fill: #fff;
  }

  @media (max-width: 700px) {
    display: inline-flex;
  }
`;

const NavButton = styled.button`
  padding: 0.5rem;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 1px 0 0 #61892f;
  }

  ${(props) =>
    props.active &&
    css`
      box-shadow: 0 1px 0 0 #61892f;
    `}
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    opacity: 0;
    position: fixed;
    right: 0px;
    left: 0px;
    top: 60px;
    background: #1f1f1f;
    box-shadow: 0 0 0 1px inset#3f3f3f;

    li {
      width: 100%;
      box-shadow: 0 -1px 0 0 inset#3f3f3f;

      button {
        text-align: center;
        width: 100%;
      }
    }
  }
`;

const navList = ["Skills", "Projects", "About", "Contact"];

function Nav({ sectionRefs }) {
  const [isActive, setIsActive] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const navRef = useRef();

  useEffect(() => {
    function handleScroll() {
      setActiveSection(null);
      if (sectionRefs) {
        const scrollPos = window.scrollY + window.innerHeight * 0.75;
        sectionRefs.forEach((section) => {
          const sectionTop = section.current.offsetTop;
          const sectionHeight = section.current.offsetHeight;

          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight)
            setActiveSection(section);
        });
      }
    }

    window.onscroll = handleScroll;
  }, [activeSection, sectionRefs]);

  useGSAP(
    () => {
      gsap.matchMedia().add("(max-width:700px)", () => {
        if (navRef.current && isActive) {
          gsap.to(navRef.current, {
            display: "flex",
            opacity: 1,
            duration: 0.5,
          });
        } else {
          gsap.to(navRef.current, {
            display: "none",
            opacity: 0,
            duration: 0.5,
          });
        }
      });

      gsap.matchMedia().add("(min-width:701px)", () => {
        gsap.to(navRef.current, {
          display: "flex",
          opacity: 1,
        });
      });
    },
    { dependencies: [isActive] }
  );

  function handleToggle() {
    setIsActive((active) => !active);
  }

  function handleNav(i) {
    window.scrollTo({
      top: sectionRefs[i].current.offsetTop,
      behavior: "smooth",
    });
    handleToggle();
  }

  return (
    <>
      <NavMenu onClick={handleToggle} aria-label="Menu">
        {isActive ? <CloseIcon /> : <MenuIcon />}
      </NavMenu>
      <NavList ref={navRef}>
        {navList.map((item, i) => (
          <li key={`navItem${i}`}>
            <NavButton
              active={activeSection === sectionRefs[i]}
              onClick={() => handleNav(i)}
            >
              {item}
            </NavButton>
          </li>
        ))}
      </NavList>
    </>
  );
}

Nav.propTypes = {
  sectionRefs: PropTypes.any,
};

export default Nav;
