import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    assetPrefix: true,
    client: {
      host: 'localhost',
      protocol: 'ws',
      port: 3000,
    },
  },
  server: {
    port: 3000,
  },
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'shell',
          remotes: {
            header_mfe: 'header_mfe@http://localhost:3091/mf-manifest.json',
            cards_mfe: 'cards_mfe@http://localhost:3092/mf-manifest.json',
            footer_mfe: 'footer_mfe@http://localhost:3093/mf-manifest.json',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});
