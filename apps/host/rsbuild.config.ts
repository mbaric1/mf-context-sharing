import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'host',
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        shared: { singleton: true },
      },
    }),
  ],
});
