import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home1';
import Users from './pages/Users1';
import './styles.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </Router>
);

export default App;
