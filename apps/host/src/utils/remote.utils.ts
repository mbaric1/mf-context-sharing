import { init } from '@module-federation/enhanced/runtime';

export const initRemoteModules = () => {
  init({
    name: 'host',
    remotes: [
      {
        name: 'remote',
        entry: 'http://localhost:3001/mf-manifest.json',
        alias: 'remote',
      },
    ],
  });
};
