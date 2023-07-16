/* eslint-disable react/prop-types */
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  padding: 0.25rem;
  border: 1px solid #333;
  width: 500px;
  border-radius: 4px;
  div {
    &:first-child {
      flex: 1;
    }
    input {
      box-sizing: border-box;
      padding: 0.5rem;
      border: 1px solid #000;
      border-radius: 4px;
      width: 100%;
    }
    .error {
      color: red;
      font-size: 14px;
      margin-left: 0.5rem;
      margin-top: 0.25rem;
      display: inline-block;
    }
  }
`;

const InputForm = ({
  value,
  onChangeHandler,
  placeholder,
  children,
  error,
}) => {
  return (
    <InputContainer>
      <div>
        <input
          type="text"
          autoFocus
          value={value}
          onChange={onChangeHandler}
          placeholder={placeholder}
        />
        {error && <span className="error">{error}</span>}
      </div>
      <div>{children}</div>
    </InputContainer>
  );
};

export default InputForm;
