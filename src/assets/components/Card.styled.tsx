import styled from "styled-components";

type CardPropsType = {
  backgroundColor?: string
}

export const Card = styled.div<CardPropsType>`
  background-color: ${props => props.color || "#ffffff"};
  box-shadow: 0 14px 20px 5px rgb(0, 0, 0, 0.1);
  width: 300px;
  height: 350px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap: 20px;
`