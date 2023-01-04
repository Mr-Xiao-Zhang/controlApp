import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  antd: {
    mobile: false,
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile-v2',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  theme: {
    '@primary-color': '#ffff33',
  },
});
