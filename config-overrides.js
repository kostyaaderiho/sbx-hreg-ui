const { aliasWebpack, configPaths } = require('react-app-alias');

const aliasMap = configPaths('./tsconfig.json');

const options = {
    alias: aliasMap
};

module.exports = aliasWebpack(options);
