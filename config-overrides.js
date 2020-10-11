/*
 * @Description: 配置
 * @Author: Mankeung
 * @Date: 2020-09-26 14:19:33
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 10:42:56
 */
const { override, addDecoratorsLegacy, addBabelPlugins, addPostcssPlugins } = require('customize-cra')

module.exports = override(addDecoratorsLegacy(), ...addBabelPlugins(
  '@babel/plugin-syntax-dynamic-import'
), addPostcssPlugins([
  require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
    require('postcss-aspect-ratio-mini')({}),
    require('postcss-px-to-viewport')({
      viewportWidth: 750, // (Number) The width of the viewport.
      viewportHeight: 1334, // (Number) The height of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units.
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false // (Boolean) Allow px to be converted in media queries.
    }),
    require('postcss-write-svg')({
      utf8: false
    }),
    require('postcss-viewport-units')({}),
    require('cssnano')({
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    })
]))