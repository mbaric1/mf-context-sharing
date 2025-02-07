import { createBridgeComponent } from '@module-federation/bridge-react';
import App from './App';
import { NavContext, RemoteAppProps } from 'shared';
import { useMemo } from 'react';

const ExportApp = ({ nav }: RemoteAppProps) => {
  const ctx = useMemo(() => ({ title: 'Bridged Remote', ...nav }), [nav]);

  return (
    <NavContext.Provider value={ctx}>
      <App />
    </NavContext.Provider>
  );
};

export default createBridgeComponent({
  rootComponent: ExportApp,
});
