import { createRemoteComponent } from '@module-federation/bridge-react';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { lazy, Suspense, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavContext } from 'shared';
import './App.css';
import Home from './components/home';
import useTopnav from './hooks/useTopnav';
import RootLayout from './layouts/root.layout';
import { initRemoteModules } from './utils/remote.utils';

initRemoteModules();

const RemoteApp = lazy(() => loadRemote('remote/App') as never);

const Loading = () => <div>Loading...</div>;

const RemoteAppBridged = createRemoteComponent({
  loader: () => loadRemote('remote/Bridged'),
  fallback: () => <div>Error...</div>,
  loading: <Loading />,
}) as any;

const App = () => {
  const ctx = useTopnav('Host');

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: '/',
          Component: RootLayout,
          children: [
            {
              index: true,
              Component: Home,
            },
            {
              path: 'remote',
              element: (
                <Suspense fallback={<Loading />}>
                  <RemoteApp nav={ctx} />
                </Suspense>
              ),
            },
            {
              path: 'remote-bridged',
              element: <RemoteAppBridged nav={ctx} />,
            },
          ],
        },
      ]),
    [ctx],
  );

  return (
    <NavContext.Provider value={ctx}>
      <RouterProvider router={router} />
    </NavContext.Provider>
  );
};

export default App;
