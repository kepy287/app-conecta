const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    // Modificamos las reglas de Webpack
    config.module.rules = config.module.rules.map(rule => {
      // Buscamos la regla que maneja los archivos SVG
      if (rule.test && rule.test.toString() === /\.svg$/.toString()) {
        // Devolvemos una nueva regla con la configuración de @svgr/webpack
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
      // Devolvemos las otras reglas sin modificar
      return rule;
    });
    return config;
  }
);