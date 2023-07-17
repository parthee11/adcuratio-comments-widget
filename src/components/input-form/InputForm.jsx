/* eslint-disable react/prop-types */
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.25rem;
  width: 500px;
  border-radius: 4px;
  div {
    &:first-child {
      flex: 1;
    }
    input {
      box-sizing: border-box;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      height: 40px;
      width: 100%;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    }
    .input-large {
      height: 60px;
    }
    .error {
      color: red;
      font-size: 14px;
      margin-left: 0.5rem;
      margin-top: 0.5rem;
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
  className,
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
          className={className}
        />
        {error && <span className="error">{error}</span>}
      </div>
      <div>{children}</div>
    </InputContainer>
  );
};

export default InputForm;
