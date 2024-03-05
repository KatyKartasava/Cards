import styled, { css } from "styled-components";

export const BoxButton = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 10px;
`
type PageButtonPropsType = {
  color?: string
  save?: boolean
  see?: boolean
}

export const PageButton = styled.button<PageButtonPropsType>`
  padding: 4px 0 6px 0;
  width: 86px;
  border: none;
  border-radius: 5px;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;

  ${props => props.save && css<PageButtonPropsType>`
    border: 2px solid ${props => props.color || '#4e71fe'}; 
    color: #4e71fe;
    background-color: transparent;

    &:hover {
      border: 2px solid #4efeb5;
      color: #4efeb5;
      font-size: 12px;
    }
  `}

  ${props => props.see && css<PageButtonPropsType>`
    color: #fff;
    background-color: ${props => props.color || '#4e71fe'};

    &:hover {
      background-color: #4efeb5;
      font-size: 12px;
    }
  `}
    `