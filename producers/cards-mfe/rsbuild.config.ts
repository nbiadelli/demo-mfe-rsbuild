import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    assetPrefix: true,
    client: {
      host: 'localhost',
      protocol: 'ws',
      port: 3092
    },
  },
  server: {
    port: 3092,
  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications
        uniqueName: 'cards_mfe'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'cards_mfe',
          exposes: {
            './button': './src/button.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});
