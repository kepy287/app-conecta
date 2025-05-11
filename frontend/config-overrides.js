const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.map((oneOfRule) => {
          if (
            oneOfRule.test &&
            oneOfRule.test.toString() === /\.svg$/.toString() &&
            oneOfRule.loader === require.resolve('@svgr/webpack')
          ) {
            return {
              ...oneOfRule,
              options: {
                ...oneOfRule.options,
                throwIfNamespace: false,
              },
            };
          }
          return oneOfRule;
        });
      } else if (rule.test && rule.test.toString() === /\.svg$/.toString()) {
        return {
          ...rule,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                throwIfNamespace: false,
              },
            },
          ],
        };
      }
      return rule;
    });

    return config;
  }
);