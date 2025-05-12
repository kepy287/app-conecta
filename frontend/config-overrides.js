const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    const svgRegex = /\.svg$/;

    config.module.rules = config.module.rules.map(rule => {
      if (rule.test && rule.test.toString() === svgRegex.toString()) {
        return {
          ...rule,
          exclude: [/\.svg$/], // Excluir archivos .svg de la regla por defecto
        };
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            throwIfNamespace: false,
          },
        },
      ],
    });

    return config;
  }
);