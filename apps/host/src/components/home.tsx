import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <ul>
        <li>
          <Link to="/remote">Go to remote app</Link>
        </li>
        <li>
          <Link to="/remote-bridged">Go to remote bridged app</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
