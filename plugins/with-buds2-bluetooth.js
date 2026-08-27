const { withProjectBuildGradle } = require('@expo/config-plugins');
module.exports = function withBuds2Bluetooth(config) {
  return withProjectBuildGradle(config, (modConfig) => modConfig);
};
