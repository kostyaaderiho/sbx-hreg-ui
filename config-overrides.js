const { aliasWebpack, aliasJest, configPaths } = require('react-app-alias');

const aliasMap = configPaths('./tsconfig.json');

const options = {
    alias: aliasMap
};

module.exports = aliasWebpack(options);
module.exports.jest = aliasJest(options);
