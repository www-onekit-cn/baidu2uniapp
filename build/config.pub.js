const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'baidu2uniapp': utils.resolve('baidu2uniapp/index.js')
        }
    },
}