import { NavLink } from 'react-router';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <ul>
        <li>
          <NavLink to="/remote">Go to remote app</NavLink>
        </li>
        <li>
          <NavLink to="/remote-bridged">Go to remote bridged app</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
