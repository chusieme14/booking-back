const mix = require('laravel-mix');

mix.webpackConfig({
    resolve:{
       extensions: ['.js', '.vue', '.ts'],
       alias: {
          '@': path.resolve(__dirname, 'resources/js/src')
       }
    },
    output: {
      chunkFilename: "js/chunks/[name].js"
   },
   devServer: {
         headers: {
            "Access-Control-Allow-Origin": "*"
         }
   }
 });
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
.js('resources/js/app.js', 'js')
.postCss('resources/css/app.css', 'public/css', [
   //
]);
// .sass('resources/backoffice/sass/app.scss', 'backoffice/css')

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
   //         //
   //     ]);
// mix
// .js('resources/js/frontoffice/front_office.js', 'js')