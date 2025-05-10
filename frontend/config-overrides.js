const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    const svgRule = config.module.rules.find(rule => rule.test && rule.test.toString() === /\.svg$/.toString());

    if (svgRule) {
      svgRule.use = [
        {
          loader: '@svgr/webpack',
          options: {
            throwIfNamespace: false,
          },
        },
      ];
    }

    return config;
  }
);