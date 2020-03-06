var path = require('path');

module.exports = [
    {
        mode: 'development',
        entry: './src/lib/P404.jsx',
        output: {
            path: path.resolve('lib'),
            filename: 'P404.js',
            libraryTarget: 'commonjs2'
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|js)?$/,
                    exclude: /(node_modules)/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(png|jpe?g|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    },
    {
        mode: 'development',
        entry: './src/lib/P403.jsx',
        output: {
            path: path.resolve('lib'),
            filename: 'P403.js',
            libraryTarget: 'commonjs2'
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|js)?$/,
                    exclude: /(node_modules)/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(png|jpe?g|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    }
]