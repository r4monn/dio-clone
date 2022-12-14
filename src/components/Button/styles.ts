import styled, { css } from 'styled-components';
import { ButtonContainerProps } from './types';

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background: #565656;
  border-radius: 22px;
  position: relative;

  color: #ffff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  border: 0;
  margin: 0 5px;


  cursor: pointer;

  &:hover {
    background: #E4105D;
    transition: all .4s;
  }

  ${({ variant }) => variant !== "primary" && css`
    min-width: 167px;
    height: 33px;

    background: #E4105D;

    &:hover {
      opacity: 0.6;
      cursor: pointer;
      transition: all .4s;
    }

    &::after {
      content: '';
      position: absolute;
      border: 1px solid #e4105D;
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
    }

  `}
`;