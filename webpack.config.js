const path = require ( 'path' );
const HTMLWebpackPlugin = require ( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require ( 'clean-webpack-plugin' );
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require ( 'mini-css-extract-plugin' );
const OptimizeCssAssetsPlugin = require ( 'optimize-css-assets-webpack-plugin' );
const TerserWebpackPlugin = require ( 'terser-webpack-plugin' );
const { BundleAnalyzerPlugin } = require ( 'webpack-bundle-analyzer' );
const Dotenv = require('dotenv-webpack');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 10,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        react: {
          test: /react\/|react-dom\//,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  };
  if ( isProd ) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin (),
      new TerserWebpackPlugin ()
    ];
  }
  return config;
};

const filename = ext => isDev ? `[name].${ ext }` : `[name].[hash].${ ext }`;

const cssLoaders = ( extra ) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      }
    }, 'css-loader'
  ];
  if ( extra ) {
    loaders.push ( extra );
  }
  return loaders;
};

const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  };

  if ( preset ) {
    opts.presets.push ( preset );
  }

  return opts;
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin ( {
      template: './public/index.html',
      minify: {
        collapseWhitespace: isProd
      }
    } ),
    new CleanWebpackPlugin (),
    new Dotenv(),
    new MiniCssExtractPlugin ( {
      filename: filename ( '.css' )
    } )
    // new CopyWebpackPlugin ([
    //   {
    //     from:'',
    //     to: ''
    //   }
    // ])
  ];
  if ( isProd ) {
    base.push ( new BundleAnalyzerPlugin () );
  }
  return base;
};

module.exports = {
  context: path.resolve ( __dirname, 'src' ),
  mode: 'development',
  entry: [ '@babel/polyfill', './index.jsx' ],
  output: {
    publicPath: '/',
    path: path.resolve ( __dirname, 'dist' ),
    filename: filename ( '.js' ),
    chunkFilename: isProd ? 'immutable/[contenthash].js' : '[name].js',
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],
    alias: {
      '@src': path.resolve ( __dirname, 'src' ),
      '@components': path.resolve ( __dirname, 'src/components' ),
      '@pages': path.resolve ( __dirname, 'src/pages' ),
      '@assets': path.resolve ( __dirname, 'src/assets' ),
      '@media': path.resolve(__dirname, 'src/utils/media'),
      '@utils': path.resolve ( __dirname, 'src/utils' ),
      '@commonStyles' : path.resolve(__dirname, 'src/styles/commonStylesAndStyledComponents'),
      '@swiper' : path.resolve(__dirname, 'src/core/swiper'),
      '@icons' : path.resolve(__dirname, 'src/components/icons'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@data': path.resolve(__dirname, 'src/data')
    }
  },
  optimization: optimization (),
  devtool: isDev ? 'inline-source-map' : 'source-map',
  plugins: plugins (),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders ()
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },

      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions ()
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions ( '@babel/preset-react' )
        }
      }
    ]
  },
  devServer: {
    contentBase: 'dist/',
    hot: true,
    inline: false,
    historyApiFallback: true,
    proxy: [
      {
        context: [ '/api' ],
        target: 'http://localhost:8000',
        pathRewrite: {
          '^/api/': '/',
        },
      },
    ],
  }


};
