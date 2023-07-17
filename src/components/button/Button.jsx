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
  height: 40px;
  &.btn-large {
    height: 60px;
  }
  &.btn-delete {
    background: red;
    border-color: red;
    &:hover {
      background: red;
    }
  }
  &:hover {
    background: #3119ee;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Button = ({ text, handler, className }) => {
  return (
    <ButtonContainer onClick={handler} className={className}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
