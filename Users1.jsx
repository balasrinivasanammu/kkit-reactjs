import { useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = user => {
    setUsers([...users, user]);
  };

  const deleteUser = email => {
    setUsers(users.filter(u => u.email !== email));
  };

  const editUser = user => {
    setEditingUser(user);
  };

  const updateUser = updated => {
    setUsers(users.map(u => (u.email === updated.email ? updated : u)));
    setEditingUser(null);
  };

  return (
    <div className="users-page">
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
      />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default Users;
