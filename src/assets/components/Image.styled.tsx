import styled from "styled-components";
import picture from "../images/desert.svg"

export const Image = styled.img`
  margin-top: 10px;
  width: 280px;
  height: 170px;
  border-radius: 10px;
  `
Image.defaultProps = {
  src: picture
};