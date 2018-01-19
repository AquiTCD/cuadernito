hexo.extend.helper.register('relatedPostsGeneratorAmp', function(args){
  if(!args || !args.json || args.json.length === 0)return ''
  let listOpen = `<amp-list width=300 height=100 src="${args.json}" class="${args.class}" layout=responsive><template type="amp-mustache">`
  let listClose = '</template></amp-list>'
  let returnHTML = ''
  let ampList = (list) => {
    let body = ''
    let hasDate = list[0].date && list[0].date !== '' ? true : false
    let hasImg = list[0].img && list[0].img !== '' ? true : false
    let hasExcerpt = list[0].excerpt && list[0].excerpt !== '' ? true : false
    body += `<li class="${args.class + '-item'}">`
    if (hasDate) {
      body += `<div class="${args.class + '-date'}">{{date}}</div>`
    }
    if (hasImg) {
      body += `<div class="${args.class + '-img'}"><img src="{{img}}" alt="{{title}}" /></div>`
    }
    body += `<div class="${args.class}-title"><a href="{{path}}" title="{{title}}" rel="bookmark">{{title}}</a></div>`
    if (hasExcerpt) {
      body += `<div class="${args.class}-excerpt"><p>{{excerpt}}</p></div>`
    }
    body += '</li>'
    if (body !== '' ) {
      returnHTML = `${listOpen}${body}${listClose}`
    }
    return returnHTML
  }
  return ampList(args.json);
});
