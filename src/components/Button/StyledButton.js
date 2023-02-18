import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #2e96e4;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 8px 30px;
`;
