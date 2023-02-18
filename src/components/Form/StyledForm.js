import styled from "styled-components";
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 30px;
  border-radius: 10px;
`;
