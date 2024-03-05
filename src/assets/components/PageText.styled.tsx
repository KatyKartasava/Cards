import styled, { css } from "styled-components";

type PageTextPropsType = {
  color?: string
  fontSize?: string
  fontWeight?: string
  textline?: boolean
  headline?: boolean
}

export const PageText = styled.p<PageTextPropsType>`
  padding: 0 10px;

  ${props => props.headline && css<PageTextPropsType>`
    font-size: ${props => props.fontSize || '16px'};
    font-weight: ${props => props.fontWeight || '600'};
    color: #000;
    line-height: 19px; 
  `}

  ${props => props.textline && css<PageTextPropsType>`
    font-size: ${props => props.fontSize || '12px'};
    font-weight: ${props => props.fontWeight || '500'};
  `}
`