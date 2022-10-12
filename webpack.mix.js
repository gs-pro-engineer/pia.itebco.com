const mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack');
const workboxPlugin = require('workbox-webpack-plugin');
require('laravel-mix-alias');
require('dotenv')
    .config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

let proxyUrl = process.env.BROWSERSYNC_PROXY_URL || 'localhost:3000';

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/vendor.scss', 'public/css')
    .sass('resources/sass/style.scss', 'public/css')
    .sass('resources/sass/print.scss', 'public/css')
    .browserSync(proxyUrl) // this is the alias/virtual host which will be called to load http://localhost:3000
    .copyDirectory('resources/public', 'public')
    .webpackConfig({
        resolve: {
            alias: {
            'jquery$': path.resolve(path.join(__dirname, 'node_modules', 'jquery')),
            }
        },
        devtool: "cheap-module-source-map", // "eval-source-map" or "inline-source-map" or "cheap-module-source-map" or "eval"
        plugins: [
            // new BundleAnalyzerPlugin(), // load this package to see which plugins with its size detail
            new CompressionPlugin({ // very import to compress the assets
                filename: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$|\.svg$/,
                threshold: 10240,
                minRatio: 0.8
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new workboxPlugin.InjectManifest({
                maximumFileSizeToCacheInBytes: 20971520,
                swSrc: path.join(`${__dirname}/resources/js/service-worker`, 'source-sw.js'),
                swDest: path.join(`${__dirname}/public`, 'service-worker.js'),
                exclude: [/\.map$/, /manifest\.json$/, '/public/*.map', '/public/manifest.json', '/public/mix-manifest.json', '/public/*.config'],
                include: [
                    path.join(`${__dirname}/public`, 'offline.html'),
                    path.join(`${__dirname}/public`, 'index.html'),
                    path.join(`${__dirname}/public`, 'index.php')
                ],
                manifestTransforms: [
                    (originalManifest) => {
                        const manifest = originalManifest.map((entry) => {
                            entry.url = entry.url.match(/app\.(?:css|js)$/g) ? `${entry.url}?id=${entry.revision.substring(0,20)}` : entry.url;
                            return entry;
                        });
                        const warnings = [];
                        return { manifest, warnings };
                    }
                ]
            }),
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                'window.jQuery': 'jquery',
            }),
        ],
        output: {
            chunkFilename: 'js/chunks/[name].js?id=[chunkhash]',
        }
    });

mix.alias({
    '@resources'  : '/resources',
    '@images'     : '/resources/images',
    '@js'         : '/resources/js',
    '@api'        : '/resources/js/api',
    '@components' : '/resources/js/components',
    '@core'       : '/resources/js/core',
    '@helpers'    : '/resources/js/helpers',
    '@mixins'     : '/resources/js/mixins',
    '@router'     : '/resources/js/router',
    '@store'      : '/resources/js/store',
    '@filters'    : '/resources/js/filters',
    '@plugins'    : '/resources/js/plugins',
    '@utils'      : '/resources/js/utils',
    '@views'      : '/resources/js/views',
    '@sass'       : '/resources/sass',
    '@var'        : '/resources/var'
});

mix.autoload({
    'jquery': ['window.jQuery', 'jQuery']
});

if (mix.inProduction()) { // In production environtment use versioning
    mix.version();
} else {
    mix.sourceMaps();
}
