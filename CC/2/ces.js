

try {
    openHikerSearch = parseInt(getVar('db_open_hiker_search'));
} catch (e) { }
openHikerSearch = openHikerSearch === -1 ? 1 : openHikerSearch;
// desc 描述的三行中每行的最大长度
let descLineMaxLen = -1;
try {
    descLineMaxLen = parseInt(getVar('db_desc_line_max_len'));
} catch (e) { }
descLineMaxLen = descLineMaxLen === -1 ? 25 : descLineMaxLen;
// 评论用户颜色
let userColor = "#FF215150";
try {
    userColor = getVar('db_user_color');
} catch (e) { }
userColor = userColor === '' ? "#2979FF" : userColor;
// 模块的间距
let line_model = -1;
try {
    line_model = parseInt(getVar('db_line_model'));
} catch (e) { }
line_model = line_model === -1 ? 0 : line_model;
// 模块间距类型（适配以后可能会有的无边距线）
let line_type_model = '';
try {
    line_type_model = getVar('db_line_type_model');
} catch (e) { }
line_type_model = line_type_model === '' ? "line" : line_type_model;

// 评分对应颜色 [ 力荐力荐，推荐推荐，还行还行，较差较差，很差很差]
let ratingTexts = [
"豆瓣评分",
"剧情介绍",
"〔元芳观影通道〕",
    "力荐",
    "推荐",
    "还行",
    "较差",
    "很差",
];
let ratingColors = [  
    "#00d437",
    "#9cdc00",
    "#ddcf00",
    "#00d437",
    "#9cdc00",
    "#ddcf00",
    "#ffa400",
    "#ff7800",
];

function getBigText(text) {
    return '<big>' + text + '</big>';
}
function getSmallText(text) {
    return '<small>' + text + '</small>';
}
function getTitleText(text) {
    return '<strong>' + text + '</strong>';
}
function getColorText(text, color) {
    return '<font color="' + color + '">' + text + '</font>';
}
function getGreyText(text) {
    return getColorText(text, 'grey');
}
function getAuthorText(text) {
    return getColorText(text, userColor);
}
function getRatingText(text) {
    let colorIndex = ratingTexts.indexOf(text);
    let textColor = colorIndex < 0 ? '#f9b700' : ratingColors[colorIndex];
    return getColorText(text, textColor);
}
function getAbbrevText(text) {
    let mText = text;
    if (text.length > descLineMaxLen) {
        mText = mText.substring(0, descLineMaxLen) + '...';
    }
    return mText;
}
function getCommentMeta(html) {
    return getSmallText(html);
}
String.prototype.replaceWithCallback = function (searchValue, replaceValue, callback) {
    let returnValue = this;
    if (callback != null) {
        returnValue = callback(this, searchValue, replaceValue);
    }
    return returnValue;
};

let reviewRule = '@rule=js: ' + `var res={},d=[],colType="rich_text",html=getResCode(),hideImg=0;let userColor="#2979FF";try{userColor=getVar("db_user_color")}catch(t){}userColor=""===userColor?"#2979FF":userColor;let line_model=-1;try{line_model=parseInt(getVar("db_line_model"))}catch(t){}line_model=-1===line_model?0:line_model;let line_type_model="";try{line_type_model=getVar("db_line_type_model")}catch(t){}line_type_model=""===line_type_model?"line":line_type_model;let ratingTexts=["豆瓣评分","剧情介绍","〔元芳观影通道〕","力荐","推荐","还行","较差","很差"],ratingColors=["#00d437","#9cdc00","#ddcf00","#00d437","#9cdc00","#ddcf00","#ffa400","#ff7800"];function getBigText(t){return"<big>"+t+"</big>"}function getSmallText(t){return"<small>"+t+"</small>"}function getStrongText(t){return"<strong>"+t+"</strong>"}function getTitleText(t){return getStrongText(t)}function getItalicText(t){return"<i>"+t+"</i>"}function getColorText(t,e){return'<font color="'+e+'">'+t+"</font>"}function getGreyText(t){return getColorText(t,"grey")}function getAuthorText(t){return getColorText(t,userColor)}function getRatingText(t){let e=ratingTexts.indexOf(t);return getColorText(t,e<0?"#f9b700":ratingColors[e])}function getAbbrevText(t){let e=t;return t.length>descLineMaxLen&&(e=e.substring(0,descLineMaxLen)+"..."),e}function getCommentMeta(t){return getSmallText(t)}function styleSpanToStyleFontReplacement(t,e,l){let r=t;try{let o=t.match(e);for(let t=0;t<o.length;t++){let e=o[t];l=e,e.indexOf("font-weight: bold;")>-1&&(l=getStrongText(l)),e.indexOf("font-style: italic;")>-1&&(l=getItalicText(l)),r=r.replace(e,l)}}catch(t){}return r}String.prototype.replaceWithCallback=function(t,e,l){let r=this;return null!=l&&(r=l(this,t,e)),r};try{let t=getSmallText(getGreyText('<a href="'+MY_URL+'">[查看原文]</a>')),e=parseDomForHtml(html,"#content&&.article&&Html"),l=getBigText(getTitleText(parseDomForHtml(e,"h1&&Text")));e=parseDomForHtml(e,".main-hd&&Html");let r="",o="";!0===/(<a href="https:\\/\\/www.douban.com[\\s\\S]*?<\\/a>)/.test(e)&&(o=getAuthorText(parseDomForHtml(RegExp.$1,"Text")));let n="";!0===/(<a href="https:\\/\\/movie.douban.com[\\s\\S]*?<\\/a>)/.test(e)&&(n=getColorText(parseDomForHtml(RegExp.$1,"Text"),"#8965b4")),r=""!==o&&""!==n?o+" "+getGreyText("评论")+" "+n:"";let a="";try{a=getRatingText(parseDomForHtml(e,".main-title-rating&&title"))+" "}catch(t){}r=getSmallText(r+=" "+a+getGreyText(parseDomForHtml(e,".main-meta&&Text"))),d.push({title:l+" "+t+"<br>"+r}),d.push({col_type:"line"})}catch(t){}try{let t=parseDomForHtml(html,"#review-content&&Html"),e="";try{e="<blockquote>"+parseDomForHtml(t,".main-title-tip&&Html")+"</blockquote>"}catch(t){}let l=parseDomForHtml(t,".review-content&&Html").replaceWithCallback(/<span style=".*?">([\\s\\S]*?)<\\/span>/g,"",styleSpanToStyleFontReplacement),r="";try{r=getSmallText(getGreyText(parseDomForHtml(t,".copyright&&Html")))}catch(t){}let o=parseDomForHtml(t,".main-panel-useful&&Html"),n="<br>"+getSmallText(getColorText(parseDomForHtml(o,".useful_count&&Text"),ratingColors[0])),a="\\t\\t"+getSmallText(getColorText(parseDomForHtml(o,".useless_count&&Text"),ratingColors[4]));d.push({title:e+l+r+n+a})}catch(t){}d.push({title:"““””"+getColorText("· · · 查看评论 · · ·","#ad8b25"),url:MY_URL+"#comment-list",col_type:"text_center_1"}),res.data=d,setHomeResult(res);`;






/**
 * 获取 影片/书籍 信息
 * @type {string}
 */
try {
    let sub_info_html = parseDomForHtml(html, "#wrapper&&Html")
        .replace(/\n/g, '');
    let sub_original_title = parseDomForHtml(sub_info_html, 'h1&&Text');
    let sub_cover = parseDomForHtml(sub_info_html, '#mainpic&&a&&img&&src');
    // let sub_title = parseDomForHtml(sub_info, '.sub-detail&&.sub-title&&Text');
    let sub_meta_html = parseDomForHtml(sub_info_html, '#info&&Html');
    let actor = '';
    let type = '';
    let showDate = '';
    if (mUrl.indexOf('book') > -1) {
        try {
            if (/(<span>[\s\S]*?<span class="pl"> 作者<\/span>[\s\S]*?(?=<br>))/.test(sub_meta_html) === true) {
                actor = '<div class="actor">' + RegExp.$1 + '</div>';
                actor = parseDomForHtml(actor, '.actor&&Text')
            }
        } catch (e) { }
        try {
            if (/(<span class="pl">出版社:<\/span>[\s\S]*?(?=<br>))/.test(sub_meta_html) === true) {
                type = '<div class="type">' + RegExp.$1 + '</div>';
                type = parseDomForHtml(type, '.type&&Text')
            }
        } catch (e) { }
        try {
            if (/(<span class="pl">出版年:<\/span>[\s\S]*?(?=<br>))/.test(sub_meta_html) === true) {
                showDate = '<div class="date">' + RegExp.$1 + '</div>';
                showDate = parseDomForHtml(showDate, '.date&&Text')
            }
        } catch (e) { }
    } else {
        actor = parseDomForHtml(sub_meta_html, '.actor&&Text');
        try {
            if (/(<span class="pl">类型:<\/span>[\s\S]*?(?=<br>))/.test(sub_meta_html) === true) {
                type = '<div class="type">' + RegExp.$1 + '</div>';
                type = parseDomForHtml(type, '.type&&Text')
            }
        } catch (e) { }
        try {
            if (/(<span class="pl">(上映日期|首播):<\/span>[\s\S]*?(?=<br>))/.test(sub_meta_html) === true) {
                showDate = '<div class="date">' + RegExp.$1 + '</div>';
                showDate = parseDomForHtml(showDate, '.date&&Text')
            }
        } catch (e) { }
    }
    let sub_meta = getAbbrevText(actor)
        + (type === '' ? '' : ('\n' + getAbbrevText(type)))
        + (showDate === '' ? '' : ('\n' + getAbbrevText(showDate)));
    let db_title = '';
    try {
        db_title = urlSplits[1];
    } catch (e) { }
    // 搜索参数
    let searchValue = getVar('db_search_value');
    let sub_url = openHikerSearch === 1
        ? ('hiker://search?s='
            + (db_title === '' || db_title === undefined
                ? sub_original_title
                : db_title)
            + searchValue
        )
        : mUrl;
    d.push({
        title: sub_original_title,
        pic_url: sub_cover,
        url: sub_url,
        desc: sub_meta,
        col_type: 'movie_1_vertical_pic_blur'
    });
    for (let i = 0; i < line_model; i++) {
        
    }
} catch (e) { }
var video_id = parseDom(getResCode(), 'head&&meta[name="mobile-agent"]&&content').split("subject\/")[1].split("\/")[0];
var sub= parseDomForHtml(html, "#wrapper&&Html")
        .replace(/\n/g, '');
var video_name = parseDomForHtml(sub, 'h1&&span&&Text');
//var sy= parseDomForHtml(html, "body&&.related-info&&Html")
       // .replace(/\n/g, '');
//var juq1 =parseDomForHtml(sy, '.indent&&span&&text');
var video_time = parseDom(getResCode(), 'body&&span[property="v:initialReleaseDate"]&&content').replace(getUrl()+"/","");
// var juq = parseDom(getResCode(), 'body&&.related-info&&.indent&&text').replace(getUrl()+"/","");
var video_brief = parseDom(getResCode(), 'body&&#link-report&&Text').replace(getUrl()+"/","");
var video_score_num = parseDom(getResCode(), 'body&&.lnk-sharing&&data-desc').replace(getUrl()+"/","").split("/");
var video_pic = parseDom(getResCode(), 'body&&img[rel="v:image"]&&src');
var pics = '<body>' + parseDom(getResCode(), 'body&&.related-pic-bd&&Html') + '</body>';
var pics_list = parseDomForArray(pics, 'body&&li');
var search='hiker://search?s='+video_name+'&rule=Zyou·渡';


/**
 * 豆瓣评分
 */
try {
    let rating = parseDomForHtml(html, '#interest_sectl&&Html');
    let rating_title = '';
    let rating_content = '';
    let rating_show = parseDomForHtml(rating, '.rating_self&&div[class^=rating_right]&&Text');
    if (rating_show === '尚未播出' || rating_show === '尚未上映') {
     //   rating_content = Color((getBigText('豆瓣评分') , '#FF215150 ' ) + getSmallText(getGreyText(rating_show)));
    } else {
        let ratingText = parseDomForHtml(rating, '.rating_self&&strong&&Text');
        rating_content += getBigText('豆瓣评分 '
            + (ratingText === ''
                ? getSmallText(getGreyText('影片暂无评分'))
                : (getTitleText(ratingText) + '0 分<br>'))
         );
        let rating_array = [];
        if (mUrl.indexOf('book') > -1) {
            rating_array = rating.match(/<span class="stars[\s\S]*?(?=<br>)/g);
        } else {
            rating_array = parseDomForArray(rating, '.ratings-on-weight&&.item');
        }
        for (let i = 0; i < rating_array.length; i++) {
            let ratingItem = rating_array[i];
            if (i === 0) rating_content +='' ;
            if (i === 2) rating_content +='<br>' ;
            if (i === 3) rating_content += '\t\t';
            rating_content +='\t\t\t\t\t🌟'+ getColorText(parseDomForHtml(ratingItem, 'Text'), ratingColors[i])  ;
        }
    }
    let dContent = rating_title + (rating_title === '' ? '' : '<br>') + rating_content;
    d.push({
        title: dContent
    });
    for (let i = 0; i < line_model; i++) {
        
    }
} catch (e) { }
//剧情介绍
try {
    let sub_intro = parseDomForHtml(html, '.related-info||.related_info&&Html')
        .replace(/\n/g, '');
    let sub_intro_title = parseDomForHtml(sub_intro, 'h2&&Text')
        .replace(/(.*?的)|(· · · · · ·)|(&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·)|(· · · · · ·)/g, '');
    sub_intro_title = getBigText(getGreyText(sub_intro_title));
    let sub_intro_content = '';
    try {
        sub_intro_content = parseDomForHtml(sub_intro, '.related-info||.related_info&&span[class=clear]&&Html');
    } catch (e) {
        sub_intro_content = parseDomForHtml(sub_intro, '.indent&&Html');
    }
    try {
        sub_intro_content = parseDomForHtml(sub_intro_content, '.related-info||.related_info&&Html');
    } catch (e) { }
    dContent = sub_intro_title + sub_intro_content;
    d.push({
        title: '剧情简介：<br>'+sub_intro_content
    });} catch (e) { }


d.push({
title:'💐💐💐〔点击此转观影〕💐💐💐',
url:search,
col_type:'icon_1_search'
});
  
  















try{
var url_icn='https://s1.ax1x.com/2020/10/10/0yRoan.png';
//var url_search='hiker://search?s='+video_name+'&rule=
var urls = '<body>' + parseDom(getResCode(), 'body&&.bs&&Html') + '</body>';
var urls_list = parseDomForArray(urls, 'body&&li');

for(var v in urls_list){
 var urls_name=parseDomForHtml(urls_list[v],'a&&Text');
// if(urls_name=="腾讯视频"){
// var url_icon='https://s1.ax1x.com/2020/10/10/0yRN8K.png';
// var url_search='hiker://search?s='+video_name+'&rule=Zyou影视';
// }else if(urls_name=="优酷视频"){
// var url_icon='https://s1.ax1x.com/2020/10/10/0yRUgO.png';
// var url_search='hiker://search?s='+video_name+'&rule=Zyou影视';
// }else if(urls_name=="爱奇艺视频"){
// var url_icon='https://s1.ax1x.com/2020/10/10/0yRoan.png';
// var url_search='hiker://search?s='+video_name+'&rule=Zyou影视';
// }else if(urls_name=="哔哩哔哩"){
// var url_icon='https://s1.ax1x.com/2020/10/30/BYAI0J.png';
// var url_search='hiker://search?s='+video_name+'&rule=Zyou影视';
// }else if(urls_name=="咪咕视频"){
// var url_icon='https://s1.ax1x.com/2020/10/10/0yfPTs.png';
// var url_search='hiker://search?s='+video_name+'&rule=Zyou影视';
// }else if(urls_name=="芒果TV"){
// var url_icon='https://s1.ax1x.com/2020/10/10/0yRq2T.png';
// var url_search='hiker://search?s='+video_name+'&rule=Zyou影视';
// }else if(urls_name=="搜狐视频"){
// var url_icon='https://s1.ax1x.com/2020/11/05/BWeGeP.png';
// var url_search=parseDomForHtml(urls_list[v],'a&&href');
// }else{
// var url_icon='https://s1.ax1x.com/2020/11/05/BWeNFS.png';
// var url_search=parseDomForHtml(urls_list[v],'a&&href');
// }
// d.push({
// //title:urls_name,
// //pic_url:url_icon,
// //url:url_search,
// //col_type:'icon_2_round'
// });
  }

}catch(e){}
/**
 * 剧情简介/书籍内容介绍
 */

    
// d.push({
// title:'影片预告花絮',
// pic_url:'https://s1.ax1x.com/2020/11/05/BRCl6O.png',
// url:'https://movie.douban.com/subject/'+video_id+'/trailer'+`@rule=js:var res = {};var d = [];var content = '<body>' + parseDom(getResCode(), 'body&&#content&&Html') + '</body>';var title_list = parseDomForArray(content, 'body&&h2[id]');var list_list = parseDomForArray(content, 'body&&.video-list');for(var i in title_list){d.push({title:parseDomForHtml(title_list[i],'h2&&Text').split(" · · · · · ·")[0],url:'',col_type:'long_text'});var video_list = parseDomForArray(list_list[i], 'ul&&li');for(var j in video_list){d.push({title:parseDomForHtml(video_list[j],'a:not([class])&&Text'),desc:parseDomForHtml(video_list[j],'strong&&Text'),pic_url:parseDomForHtml(video_list[j],'img&&src'),url:parseDomForHtml(video_list[j],'a&&href')+'@lazyRule=body&&source&&src',col_type:'pic_2'});}}res.data = d;setHomeResult(res);`,
// col_type:'text_center_1'
// });
  



d.push({
title:'⬇⬇⬇⬇〔影片预告花絮〕⬇⬇⬇⬇',
url:'toast://Zyou烦躁警告：戳我干嘛(  ･᷄ὢ･᷅  )嗯？',
col_type:'text_center_1'
});

for(var i in pics_list){
  if(pics_list[i].indexOf("label-trailer")!=-1){
    d.push({
title:'预告片',
pic_url:parseDomForHtml(pics_list[i],'a&&style'),
url:'https://movie.douban.com/subject/'+video_id+'/trailer'+`@rule=js:var res = {};var d = [];var content = '<body>' + parseDom(getResCode(), 'body&&#content&&Html') + '</body>';var title_list = parseDomForArray(content, 'body&&h2[id]');var list_list = parseDomForArray(content, 'body&&.video-list');for(var i in title_list){d.push({title:parseDomForHtml(title_list[i],'h2&&Text').split(" · · · · · ·")[0],url:'',col_type:'long_text'});var video_list = parseDomForArray(list_list[i], 'ul&&li');for(var j in video_list){d.push({title:parseDomForHtml(video_list[j],'a:not([class])&&Text'),desc:parseDomForHtml(video_list[j],'strong&&Text'),pic_url:parseDomForHtml(video_list[j],'img&&src'),url:parseDomForHtml(video_list[j],'a&&href')+'@lazyRule=body&&source&&src',col_type:'pic_2'});}}res.data = d;setHomeResult(res);`,
col_type:'movie_3'
    });
  }else if(pics_list[i].indexOf("label-short-video")!=-1){
    
// d.push({
// title:'预告片',
// pic_url:parseDomForHtml(pics_list[i],'a&&style'),
// url:parseDomForHtml(pics_list[i],'a&&href')+`@lazyRule=body&&source&&src`,
// col_type:'pic_2'
    // });
  // // }else if(pics_list[i].indexOf("label-short-video")!=-1){
    // d.push({
// title:'视频评论',
// pic_url:parseDomForHtml(pics_list[i],'a&&style'),
// url:parseDomForHtml(pics_list[i],'a&&href')+`@lazyRule=body&&source&&src`,
// col_type:'pic_2'
    // });
  }else{
    d.push({
title:'剧照',
pic_url:parseDomForHtml(pics_list[i],'img&&src') ,
url:parseDomForHtml(pics_list[i],'img&&src'),
col_type:'movie_3'
    });
  }
}
  
    
    
    d.push({col_type:'line_blank'});
/**
 * 短评
 */
try {
    let comments_html = parseDomForHtml(html, '#comments-section&&Html');
    let comments_title = getBigText(getGreyText(parseDomForHtml(comments_html, 'h2&&Html')
        .replace(/(.*?的)|(· · · · · ·)|(&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·)/g, '')))
        .replace(/<i[\s\S]*?>|<\/i>/g, '')
        .replace(/movie.douban.com/g, 'm.douban.com/movie');
    dContent = comments_title;
    d.push({
        title: dContent
    });
    let comments_content_html = parseDomForHtml(comments_html, '.tab-bd||#comment-list-wrapper&&Html');
    let comments_content_html_array = parseDomForArray(comments_content_html, '#hot-comments||#new_score&&.comment-item');
    for (let i = 0; i < comments_content_html_array.length; i++) {
        let commentHtmlItem = comments_content_html_array[i];
        let content = parseDomForHtml(commentHtmlItem, 'p&&Html');
        try {
            if (/<\/span>[\s\S]*?(<span class="[\s\S]*?full">[\s\S]*?<\/span>)/.test(content) === true) {
                content = RegExp.$1;
            }
        } catch (e) {
            content = parseDomForHtml(commentHtmlItem, 'p&&Html');
        }
        let watchStatus = parseDomForHtml(commentHtmlItem, '.comment-info&&Text');
        if (watchStatus.indexOf("看过")) watchStatus = '看过';
        else if (watchStatus.indexOf("想看")) watchStatus = '想看';
        let ratingText = '';
        try {
            ratingText = '\t' + getRatingText(parseDomForHtml(commentHtmlItem, '.comment-info&&.rating&&title'))
        } catch (e) { }
        let meta = getAuthorText(parseDomForHtml(commentHtmlItem, '.comment-info&&a&&Text'))
            + '\t'
            + getGreyText(watchStatus)
            + ratingText
            + '\t'
            + getGreyText(parseDomForHtml(commentHtmlItem, '.comment-info&&span[class^=comment-time]&&Text'));
        dContent = content + '<br>' + getCommentMeta(meta);
        d.push({
            title: dContent
                .replace(/<a class="source-icon"[\s\S]*?<\/a>/g, '')
                .replace(/\(<a href="javascript:;"[\s\S]*?>展开<\/a>\)/g, '')
        });
        if (i < comments_content_html_array.length - 1) {
            d.push({
                col_type: 'line'
            })
        }
    }
    for (let i = 0; i < line_model; i++) {
        
    }
} catch (e) { }

 
 d.push({col_type:'line_blank'});
try {
    let reviews_html = parseDomForHtml(html, '#reviews-wrapper&&Html');
    let reviews_title = getBigText(getGreyText(
        parseDomForHtml(reviews_html, 'h2&&Html')
            .replace('href="reviews"', 'href="' + mUrl + 'reviews"')
            .replace(/(.*?的)|(· · · · · ·)/g, '')
    ));
    dContent = reviews_title;
    d.push({
        title: dContent
    });
    let reviews_content_html = parseDomForHtml(reviews_html, 'div[class^=review-list]&&Html');
    let reviews_content_html_array = reviews_content_html.match(/<div class="main review-item"[\s\S]*?<\/div>/g);
    for (let i = 0; i < reviews_content_html_array.length; i++) {
        let reviewHtmlItem = reviews_content_html_array[i];
        let contentHtml = parseDomForHtml(reviewHtmlItem, '.main-bd&&Html');
        let reviewTitle = parseDomForHtml(contentHtml, 'h2&&Html');
        let reviewUrl = parseDomForHtml(reviewTitle, 'a&&href');
        let reviewRuleUrl = 'base64://' + base64Encode(reviewUrl + '#noHistory#' + reviewRule);
        reviewTitle = reviewTitle.replace(reviewUrl, reviewRuleUrl);
        let content = getTitleText(reviewTitle)
            + '<br>'
            + parseDomForHtml(contentHtml, '.review-short&&.short-content&&Html')
            + ' <small><a href="' + reviewRuleUrl + '">[查看全文]</a></small>'
        ;
        let ratingText = '';
        try {
            ratingText = '\t' + getRatingText(parseDomForHtml(reviewHtmlItem, '.main-hd&&.main-title-rating&&title'))
        } catch (e) { }
        let meta = getAuthorText(parseDomForHtml(reviewHtmlItem, '.main-hd&&.name&&Text'))
            + ratingText
            + '\t'
            + getGreyText(parseDomForHtml(reviewHtmlItem, '.main-hd&&.main-meta&&Text'));
        let responseHtml = '';
        let feedback = '';
        try{
            if (/(<a href="http[\s\S]*?class="reply[\s\S]*?<\/a>)/.test(reviewHtmlItem) === true) responseHtml = RegExp.$1;
            feedback = getGreyText('👍🏻' + parseDomForHtml(reviewHtmlItem, '.action&&.action-btn.up&&Text')
                + '\t'
                + '👎🏻' + parseDomForHtml(reviewHtmlItem, '.action&&.action-btn.down&&Text')
                + '\t'
                + responseHtml
            );
        } catch (e) { }
        dContent = content
            + '<br>'
            + getCommentMeta(meta)
            + (feedback === '' ?
                    ''
                    : ('<br>' + getCommentMeta(feedback))
            );
        d.push({
            title: dContent
                .replace(/<a class="source-icon"[\s\S]*?<\/a>/g, '')
                .replace(/\([\s\S][\r\n]<a href="javascript:;"[\s\S]*?title="展开">展开<\/a>\)/g, '')
                .replaceWithCallback(/(<p class="spoiler-tip">(.*?)<\/p>)/g,
                    '<blockquote class="spoiler-tip">{有剧透}</blockquote>',
                    function (source, searchValue, replaceValue) {
                        let returnValue = source;
                        if (searchValue.test(source) === true) {
                            let replaceText = RegExp.$2;
                            replaceText = replaceText === '' ? RegExp.$1 : replaceValue.replace('{有剧透}', replaceText);
                            returnValue = source.replace(RegExp.$1, replaceText)
                        }
                        return returnValue;
                    })
        });
        if (i < reviews_content_html_array.length - 1) {
            d.push({
                col_type: 'line'
            })
        }
    }
} catch (e) { }


res.data = d;setHomeResult(res);