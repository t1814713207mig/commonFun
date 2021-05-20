if(process.env.NODE_ENV === 'production'){
    module.exports = require('./dist/commonFun.min.js')
} else {
    module.exports = require('./dist/commonFun.js')
}