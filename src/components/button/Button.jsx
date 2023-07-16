/* eslint-disable react/prop-types */
import styled from "styled-components";

const ButtonContainer = styled.button`
  padding: 0.5rem;
  border: 1px solid #3119fe;
  background: #3119fe;
  border-radius: 4px;
  color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-right: 0.5rem;
  &:hover {
    background: #3119ee;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Button = ({ text, handler }) => {
  return <ButtonContainer onClick={handler}>{text}</ButtonContainer>;
};

export default Button;
