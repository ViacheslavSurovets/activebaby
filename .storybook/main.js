module.exports = {
  stories: ['../src/**/*.stories.[tj]s', '../src/**/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
