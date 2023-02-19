import styled from "styled-components";

export const UsersSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 20px 0;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 32px;
`;

export const StyledTable = styled.table`
  width: 100%;
  tr {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    td:first-child {
      text-transform: capitalize;
    }
  }
`;
