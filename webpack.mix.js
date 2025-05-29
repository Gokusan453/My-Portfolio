// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/script/main.js', 'build/app.js').setPublicPath('build');

mix.css('src/styles/main.css', 'build');