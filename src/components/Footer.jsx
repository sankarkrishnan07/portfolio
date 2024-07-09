import styled from "styled-components";
import ContactForm from "./ContactForm";
import Social from "./Social";
import PropTypes from "prop-types";

const FooterInfo = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-top: 1rem;
  text-align: right;

  p {
    font-size: 14px;
  }
`;

const StyledFooter = styled.footer`
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

      svg {
        height: 20px;
      }
    }
  }
`;

function Footer({ innerRef }) {

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
