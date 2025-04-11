const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <div className="list-container">
      <h3>User List</h3>
      {users.length === 0 && <p>No users yet.</p>}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> ({user.email})
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.email)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
