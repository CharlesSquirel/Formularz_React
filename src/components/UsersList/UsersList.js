import { Title, UsersSection, StyledTable } from "./StyledUsersList";

const UsersList = ({ newUsers }) => {
  return (
    <UsersSection>
      <Title>User List</Title>
      <StyledTable>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
          {newUsers.map(({ username, email, uid }) => {
            return (
              <tr key={username}>
                <td>{uid}</td>
                <td>{username}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </UsersSection>
  );
};

export default UsersList;
