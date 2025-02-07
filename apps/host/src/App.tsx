import { loadRemote } from '@module-federation/enhanced/runtime';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home';
import RootLayout from './layouts/root.layout';
import { initRemoteModules } from './utils/remote.utils';

import { createRemoteComponent } from '@module-federation/bridge-react';
import './App.css';

initRemoteModules();

const RemoteApp = lazy(() => loadRemote('remote/App') as any);

const RemoteAppBridged = createRemoteComponent({
  loader: () => loadRemote('remote/Bridged'),
  fallback: () => <div>Error...</div>,
  loading: <div>Loading...</div>,
});

const router = createBrowserRouter([
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
        Component: RemoteApp,
      },
      {
        path: 'remote-bridged',
        Component: RemoteAppBridged as any,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
