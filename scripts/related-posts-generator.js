// Examples of helper
hexo.extend.helper.register('relatedPostsGenerator', function(args){
  if(!args || !args.json || args.json.length == 0)return '';

  let returnHTML = '';

  function generateHTML(list){
    let ret = '';
    ret += '<li class="' + args.class + '-item">';

    if(list.date && list.date != ''){
        ret += '<div class="'+args.class+'-date">' + list.date + '</div>';
    }

    // if(list.img && list.img != ''){
    //     ret += '<div class="'+args.class+'-img">' + '<img src="'+list.img+'" />' + '</div>';
    // }
    ret += '<a href="' + list.path + '" title="'+ list.title +'" rel="bookmark">'+ list.title + '</a>';
    if(list.excerpt &&  list.excerpt != ''){
        ret += '<div class="'+args.class+'-excerpt"><p>' + list.excerpt + '</p></div>';
    }

    ret +=  '</li>';
    return ret;
  }

  for(let i=0; i<args.json.length; i++){
      returnHTML += generateHTML(args.json[i]);
  }

  if(returnHTML != '')returnHTML = '<div class="relatedPosts_title">関連記事</div><ul class="' + args.class + '">' + returnHTML + '</ul>';

  return returnHTML;
});
