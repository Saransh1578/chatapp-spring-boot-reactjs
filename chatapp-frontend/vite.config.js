import { defineConfig } from 'vite';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  resolve: {
    alias: {
      // Alias `global` to `globalThis` for browser environments
      global: require.resolve('global/'),
    },
  },
  define: {
    'global': 'globalThis',
  },
});
