const pluginSass = require('eleventy-sass');
const ejsPlugin = require('@11ty/eleventy-plugin-ejs');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

module.exports = function (eleventyConfig) {
  eleventyConfig.setFreezeReservedData(false);

  // Add EJS plugin (required in Eleventy v3)
  eleventyConfig.addPlugin(ejsPlugin);

  eleventyConfig.addPlugin(pluginSass, {
    postcss: postcss([autoprefixer]),
    input: './src/css/*.sass',
    output: './_site/css',
  });
  eleventyConfig.addPassthroughCopy('src/css/*.css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/img');
  return {
    dir: {
      input: 'src',
    },
  };
};
