hexo.extend.generator.register('netlify-headers', function(locals){
  let fs = require('hexo-fs');
  let pathFn = require('path');
  let data = fs.readFileSync( pathFn.join( process.env.PWD || process.cwd() , '_headers'));
  return {
    path: '_headers',
    data: data
  };
});

hexo.extend.generator.register('netlify-redirects', function(locals){
  let fs = require('hexo-fs');
  let pathFn = require('path');
  let data = fs.readFileSync( pathFn.join( process.env.PWD || process.cwd() , '_redirects'));
  return {
    path: '_redirects',
    data: data
  };
});
