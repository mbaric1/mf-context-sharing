import { Outlet } from 'react-router-dom';
import TopNav from '../components/topnav';

const RootLayout = () => {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
