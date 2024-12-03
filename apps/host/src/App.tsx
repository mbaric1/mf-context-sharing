import { loadRemote } from '@module-federation/enhanced/runtime';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './components/home';
import RootLayout from './layouts/root.layout';
import { initRemoteModules } from './utils/remote.utils';

import './App.css';
import { createRemoteComponent } from '@module-federation/bridge-react';

initRemoteModules();

const RemoteApp = lazy(() => loadRemote('remote/App') as any);

const RemoteAppBridged = createRemoteComponent({
  loader: () => loadRemote('remote/Bridged'),
  fallback: () => <div>Error...</div>,
  loading: <div>Loading...</div>,
});

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={RootLayout}>
          <Route index Component={Home}></Route>
          <Route path="remote" Component={RemoteApp}></Route>
          <Route path="remote-bridged" Component={RemoteAppBridged}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
