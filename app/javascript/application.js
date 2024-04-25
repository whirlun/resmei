// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require_self


import hljs from 'highlight.js';
window.addEventListener("load", (e) => {console.log("loaded"); hljs.HighlightJS.highlightAll()});