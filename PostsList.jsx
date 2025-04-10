import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error('Axios error:', err));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.slice(0, 5).map(post => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
