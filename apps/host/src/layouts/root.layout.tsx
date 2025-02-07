import { useCallback, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavContext } from 'shared';
import TopNav, { TopNavProps } from '../components/topnav';

const RootLayout = () => {
  const [topNav, setTopNav] = useState<TopNavProps>({ title: 'Host' });

  const handleUpdate = useCallback((t: string) => {
    setTopNav((prev) => ({ ...prev, title: t }));
  }, []);

  const context = useMemo(
    () => ({
      ...topNav,
      onUpdate: handleUpdate,
    }),
    [handleUpdate, topNav],
  );

  return (
    <NavContext.Provider value={context}>
      <header>
        <TopNav />
      </header>
      <main>
        <Outlet />
      </main>
    </NavContext.Provider>
  );
};

export default RootLayout;
