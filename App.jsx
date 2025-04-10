import React from 'react';
import UsersList from './components/UsersList';
import PostsList from './components/PostsList';
import RandomQuote from './components/RandomQuote';

import UserForm from './components/UserForm';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>API Fetching Examples</h1>
      <UsersList />
      <PostsList />
      <RandomQuote />
      <h1>React Controlled Form with Validation</h1>
      <UserForm />
    </div>
  );
};

export default App;
