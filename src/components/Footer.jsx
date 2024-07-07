import styled from "styled-components";
import ContactForm from "./ContactForm";
import Social from "./Social";
import PropTypes from "prop-types";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const FooterInfo = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-top: 1rem;
  text-align: right;

  p {
    font-size: 12px;
  }
`;

const StyledFooter = styled.footer`
  font-family: "Major Mono Display", monospace;
  box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.1);

  & > div {
    padding: 1.5rem 3rem;
    max-width: 80rem;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    & > div {
      padding: 1.5rem;
    }

    ${FooterInfo} {
      gap: 0.5rem;
      align-items: unset;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 12px;
      }

      p {
        font-size: 10px;
      }

      svg {
        height: 20px;
      }
    }
  }
`;

function Footer({ innerRef }) {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: innerRef.current,
      start: "1px bottom",
      end: "bottom bottom",
      snap: {
        snapTo: 1,
        duration: 0.5,
        ease: "power1.inOut",
      },
    });
  });

  return (
    <StyledFooter ref={innerRef}>
      <div>
        <ContactForm />
        <FooterInfo>
          <div>
            <Social />
          </div>
          <div>
            <span>Sankar Krishnan</span>
            <p>Passionately Crafting Web Experiences</p>
          </div>
        </FooterInfo>
      </div>
    </StyledFooter>
  );
}

Footer.propTypes = {
  innerRef: PropTypes.any,
};

export default Footer;
