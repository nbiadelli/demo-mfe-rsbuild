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
      port: 3093,
    },
  },
  server: {
    port: 3093,
  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications
        uniqueName: 'footer_mfe',
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'footer_mfe',
          exposes: {
            './button': './src/button.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});
