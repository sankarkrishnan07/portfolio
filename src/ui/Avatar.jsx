import styled from "styled-components";

const Avatar = styled.div`
  height: 250px;
  width: 250px;
  border: 2px solid #fff;
  border-radius: 100%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default Avatar;