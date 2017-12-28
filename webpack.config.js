module.exports = {
    // webpack folder's main js - excluded from jekll's build process.
    entry: "./webpack/main.js",
    output: {
        // we're going to put the generated file in the assets folder so jekyll will grab it.
        path: __dirname + '/js/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};