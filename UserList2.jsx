import React from 'react';
import Users from './Users';
//Used to transform or render a list of items - map()
//Used to filter out items in an array based on a condition. - filter()

const UserList = () => {
  const activeUsers = Users.filter(user => user.active);

  return (
    <div>
      <h2>Active Users</h2>
      <ol>
        {activeUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default UserList;
