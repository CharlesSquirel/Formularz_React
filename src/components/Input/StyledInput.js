import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const StyledInp = styled.input`
  padding: 20px;
  border-radius: 10px;
  outline: 0;
  &::placeholder {
    text-transform: capitalize;
  }
  &:focus {
    border: 2px solid green;
  }
`;

export const StyledLabel = styled.label`
  text-transform: capitalize;
`;
