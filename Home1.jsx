import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>Welcome to the CRUD App</h1>
    <Link to="/users">Go to Users</Link>
  </div>
);

export default Home;
