const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {

    mode: "development",
    
    entry: "./index.js",

    output: {

      path: path.resolve(__dirname, "Public"),
      filename: "main.js",
    },

    target: "web",
    
    devServer: {

      port: "9500",
      static: ["./Public"],
      open: {
        
        app: {
          name: 'Google Chrome',
        }

      },
      hot: true,
      liveReload: true
      
    },

    resolve: {
      extensions: [".js", ".jsx", ".json"],
    },

    module: {

      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        }
      ],
    },
    
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  };
};
