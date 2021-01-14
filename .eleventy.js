let MarkdownIt = require("markdown-it");

const md = new MarkdownIt({
  html: true,
  linkify: true
});

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img/**/*");

  eleventyConfig.addFilter("md", raw => md.render(raw));
}