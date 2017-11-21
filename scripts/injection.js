const fs = require('hexo-fs');
const pathFn = require('path');
hexo.extend.helper.register('ampcss', function(args){
  let result = '';
  let path = args;
  if (path.indexOf('?') < 0 && path.substring(path.length - 4, path.length) !== '.css') path += '.css';
  fs.readFile(this.url_for(path)).then(function(content){
    result += '<style amp-custom>' + content + '</style>';
   })
  return result;
}, {async: false});
