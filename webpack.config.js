const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    entry:{
        "commonFun":"./src/index.js",
        "commonFun.min":"./src/index.js"
    },
    output:{
        filename:"[name].js",
        library:"commonFun",
        libraryExport:"default",
        libraryTarget:"umd"
    },
    mode:"none",
    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin({
                include:/\.min\.js$/
            })
        ]
    }
}