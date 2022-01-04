// next.config.js
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  lessVarsFilePath: './src/assets/styles/antd-custom.less',

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
