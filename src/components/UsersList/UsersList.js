import { Title, UsersSection, StyledTable } from "./StyledUsersList";

const UsersList = ({ newUsers }) => {
  return (
    <UsersSection>
      <Title>User List</Title>
      <StyledTable>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
          {newUsers.map((user) => {
            return (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </UsersSection>
  );
};

export default UsersList;
