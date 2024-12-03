import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'remote',
      exposes: {
        './App': './src/App.tsx',
        './Bridged': './src/export-app.tsx',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        shared: { singleton: true },
      },
    }),
  ],
});
