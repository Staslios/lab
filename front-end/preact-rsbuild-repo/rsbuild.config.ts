import { defineConfig } from '@rsbuild/core';
import { pluginPreact } from '@rsbuild/plugin-preact';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginPreact()],
 performance: {
    chunkSplit: {
      strategy: 'custom',
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          // One chunk per component directory, for example
          components: {
            test: /src\/components\//,
            name(module) {
              const match = module.context?.match(/src\/components\/([^/]+)/);
              return match ? `component-${match[1]}` : 'components';
            },
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
});
