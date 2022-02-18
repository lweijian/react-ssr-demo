const path = require('path');
module.exports = {
    mode:'development',
    devtool: 'cheap-source-map',
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:[
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                }
            }
        ]
    }
}
