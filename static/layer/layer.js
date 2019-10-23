/*! layer-v3.1.1 Web弹层组件 MIT License  http://layer.layui.com/  By 贤心 */
!function(e,t){"use strict";var i,n,a=e.layui&&layui.define,o={getPath:function(){var e=document.currentScript?document.currentScript.src:function(){for(var e,t=document.scripts,i=t.length-1,n=i;n>0;n--)if("interactive"===t[n].readyState){e=t[n].src;break}return e||t[i].src}();return e.substring(0,e.lastIndexOf("/")+1)}(),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"],getStyle:function(t,i){var n=t.currentStyle?t.currentStyle:e.getComputedStyle(t,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](i)},link:function(t,i,n){if(r.path){var a=document.getElementsByTagName("head")[0],s=document.createElement("link");"string"==typeof i&&(n=i);var l="layuicss-"+(n||t).replace(/\.|\//g,""),f=0;s.rel="stylesheet",s.href=r.path+t,s.id=l,document.getElementById(l)||a.appendChild(s),"function"==typeof i&&function t(){return++f>80?e.console&&console.error("layer.css: Invalid"):void(1989===parseInt(o.getStyle(document.getElementById(l),"width"))?i():setTimeout(t,100))}()}}},r={v:"3.1.1",ie:function(){var t=navigator.userAgent.toLowerCase();return!!(e.ActiveXObject||"ActiveXObject"in e)&&((t.match(/msie\s(\d+)/)||[])[1]||"11")}(),index:e.layer&&e.layer.v?1e5:0,path:o.getPath,config:function(e,t){return e=e||{},r.cache=o.config=i.extend({},o.config,e),r.path=o.config.path||r.path,"string"==typeof e.extend&&(e.extend=[e.extend]),o.config.path&&r.ready(),e.extend?(a?layui.addcss("modules/layer/"+e.extend):o.link("theme/"+e.extend),this):this},ready:function(e){var t="layer",i=(a?"modules/layer/":"theme/")+"default/layer.css?v="+r.v;return a?layui.addcss(i,e,t):o.link(i,e,t),this},alert:function(e,t,n){var a="function"==typeof t;return a&&(n=t),r.open(i.extend({content:e,yes:n},a?{}:t))},confirm:function(e,t,n,a){var s="function"==typeof t;return s&&(a=n,n=t),r.open(i.extend({content:e,btn:o.btn,yes:n,btn2:a},s?{}:t))},msg:function(e,t,n){var a="function"==typeof t,s=o.config.skin,f=(s?s+" "+s+"-msg":"")||"layui-layer-msg",c=l.anim.length-1;return a&&(n=t),r.open(i.extend({content:e,time:3e3,shade:!1,skin:f,title:!1,closeBtn:!1,btn:!1,resize:!1,end:n},a&&!o.config.skin?{skin:f+" layui-layer-hui",anim:c}:((-1===(t=t||{}).icon||void 0===t.icon&&!o.config.skin)&&(t.skin=f+" "+(t.skin||"layui-layer-hui")),t)))},load:function(e,t){return r.open(i.extend({type:3,icon:e||0,resize:!1,shade:.01},t))},tips:function(e,t,n){return r.open(i.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},n))}},s=function(e){var t=this;t.index=++r.index,t.config=i.extend({},t.config,o.config,e),document.body?t.creat():setTimeout((function(){t.creat()}),30)};s.pt=s.prototype;var l=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];l.anim=["layer-anim-00","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],s.pt.config={type:0,shade:.3,fixed:!0,move:l[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},s.pt.vessel=function(e,t){var n=this,a=n.index,r=n.config,s=r.zIndex+a,f="object"==typeof r.title,c=r.maxmin&&(1===r.type||2===r.type),u=r.title?'<div class="layui-layer-title" style="'+(f?r.title[1]:"")+'">'+(f?r.title[0]:r.title)+"</div>":"";return r.zIndex=s,t([r.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+a+'" times="'+a+'" style="z-index:'+(s-1)+'; "></div>':"",'<div class="'+l[0]+" layui-layer-"+o.type[r.type]+(0!=r.type&&2!=r.type||r.shade?"":" layui-layer-border")+" "+(r.skin||"")+'" id="'+l[0]+a+'" type="'+o.type[r.type]+'" times="'+a+'" showtime="'+r.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+s+"; width:"+r.area[0]+";height:"+r.area[1]+(r.fixed?"":";position:absolute;")+'">'+(e&&2!=r.type?"":u)+'<div id="'+(r.id||"")+'" class="layui-layer-content'+(0==r.type&&-1!==r.icon?" layui-layer-padding":"")+(3==r.type?" layui-layer-loading"+r.icon:"")+'">'+(0==r.type&&-1!==r.icon?'<i class="layui-layer-ico layui-layer-ico'+r.icon+'"></i>':"")+(1==r.type&&e?"":r.content||"")+'</div><span class="layui-layer-setwin">'+function(){var e=c?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return r.closeBtn&&(e+='<a class="layui-layer-ico '+l[7]+" "+l[7]+(r.title?r.closeBtn:4==r.type?"1":"2")+'" href="javascript:;"></a>'),e}()+"</span>"+(r.btn?function(){var e="";"string"==typeof r.btn&&(r.btn=[r.btn]);for(var t=0,i=r.btn.length;t<i;t++)e+='<a class="'+l[6]+t+'">'+r.btn[t]+"</a>";return'<div class="'+l[6]+" layui-layer-btn-"+(r.btnAlign||"")+'">'+e+"</div>"}():"")+(r.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],u,i('<div class="layui-layer-move"></div>')),n},s.pt.creat=function(){var e=this,t=e.config,a=e.index,s="object"==typeof(c=t.content),f=i("body");if(!t.id||!i("#"+t.id)[0]){switch("string"==typeof t.area&&(t.area="auto"===t.area?["",""]:[t.area,""]),t.shift&&(t.anim=t.shift),6==r.ie&&(t.fixed=!1),t.type){case 0:t.btn="btn"in t?t.btn:o.btn[0],r.closeAll("dialog");break;case 2:var c=t.content=s?t.content:[t.content||"http://layer.layui.com","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+l[4]+a+'" name="'+l[4]+a+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:delete t.title,delete t.closeBtn,-1===t.icon&&t.icon,r.closeAll("loading");break;case 4:s||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',delete t.title,t.tips="object"==typeof t.tips?t.tips:[t.tips,!0],t.tipsMore||r.closeAll("tips")}if(e.vessel(s,(function(n,r,u){f.append(n[0]),s?2==t.type||4==t.type?i("body").append(n[1]):c.parents("."+l[0])[0]||(c.data("display",c.css("display")).show().addClass("layui-layer-wrap").wrap(n[1]),i("#"+l[0]+a).find("."+l[5]).before(r)):f.append(n[1]),i(".layui-layer-move")[0]||f.append(o.moveElem=u),e.layero=i("#"+l[0]+a),t.scrollbar||l.html.css("overflow","hidden").attr("layer-full",a)})).auto(a),i("#layui-layer-shade"+e.index).css({"background-color":t.shade[1]||"#000",opacity:t.shade[0]||t.shade}),2==t.type&&6==r.ie&&e.layero.find("iframe").attr("src",c[0]),4==t.type?e.tips():e.offset(),t.fixed&&n.on("resize",(function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(a),4==t.type&&e.tips()})),t.time<=0||setTimeout((function(){r.close(e.index)}),t.time),e.move().callback(),l.anim[t.anim]){var u="layer-anim "+l.anim[t.anim];e.layero.addClass(u).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){i(this).removeClass(u)}))}t.isOutAnim&&e.layero.data("isOutAnim",!0)}},s.pt.auto=function(e){var t=this.config,a=i("#"+l[0]+e);""===t.area[0]&&t.maxWidth>0&&(r.ie&&r.ie<8&&t.btn&&a.width(a.innerWidth()),a.outerWidth()>t.maxWidth&&a.width(t.maxWidth));var o=[a.innerWidth(),a.innerHeight()],s=a.find(l[1]).outerHeight()||0,f=a.find("."+l[6]).outerHeight()||0,c=function(e){(e=a.find(e)).height(o[1]-s-f-2*(0|parseFloat(e.css("padding-top"))))};switch(t.type){case 2:c("iframe");break;default:""===t.area[1]?t.maxHeight>0&&a.outerHeight()>t.maxHeight?(o[1]=t.maxHeight,c("."+l[5])):t.fixed&&o[1]>=n.height()&&(o[1]=n.height(),c("."+l[5])):c("."+l[5])}return this},s.pt.offset=function(){var e=this,t=e.config,i=e.layero,a=[i.outerWidth(),i.outerHeight()],o="object"==typeof t.offset;e.offsetTop=(n.height()-a[1])/2,e.offsetLeft=(n.width()-a[0])/2,o?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&("t"===t.offset?e.offsetTop=0:"r"===t.offset?e.offsetLeft=n.width()-a[0]:"b"===t.offset?e.offsetTop=n.height()-a[1]:"l"===t.offset?e.offsetLeft=0:"lt"===t.offset?(e.offsetTop=0,e.offsetLeft=0):"lb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=0):"rt"===t.offset?(e.offsetTop=0,e.offsetLeft=n.width()-a[0]):"rb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=n.width()-a[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?n.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?n.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=n.scrollTop(),e.offsetLeft+=n.scrollLeft()),i.attr("minLeft")&&(e.offsetTop=n.height()-(i.find(l[1]).outerHeight()||0),e.offsetLeft=i.css("left")),i.css({top:e.offsetTop,left:e.offsetLeft})},s.pt.tips=function(){var e=this.config,t=this.layero,a=[t.outerWidth(),t.outerHeight()],o=i(e.follow);o[0]||(o=i("body"));var r={width:o.outerWidth(),height:o.outerHeight(),top:o.offset().top,left:o.offset().left},s=t.find(".layui-layer-TipsG"),f=e.tips[0];e.tips[1]||s.remove(),r.autoLeft=function(){r.left+a[0]-n.width()>0?(r.tipLeft=r.left+r.width-a[0],s.css({right:12,left:"auto"})):r.tipLeft=r.left},r.where=[function(){r.autoLeft(),r.tipTop=r.top-a[1]-10,s.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",e.tips[1])},function(){r.tipLeft=r.left+r.width+10,r.tipTop=r.top,s.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",e.tips[1])},function(){r.autoLeft(),r.tipTop=r.top+r.height+10,s.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",e.tips[1])},function(){r.tipLeft=r.left-a[0]-10,r.tipTop=r.top,s.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",e.tips[1])}],r.where[f-1](),1===f?r.top-(n.scrollTop()+a[1]+16)<0&&r.where[2]():2===f?n.width()-(r.left+r.width+a[0]+16)>0||r.where[3]():3===f?r.top-n.scrollTop()+r.height+a[1]+16-n.height()>0&&r.where[0]():4===f&&a[0]+16-r.left>0&&r.where[1](),t.find("."+l[5]).css({"background-color":e.tips[1],"padding-right":e.closeBtn?"30px":""}),t.css({left:r.tipLeft-(e.fixed?n.scrollLeft():0),top:r.tipTop-(e.fixed?n.scrollTop():0)})},s.pt.move=function(){var e=this,t=e.config,a=i(document),s=e.layero,l=s.find(t.move),f=s.find(".layui-layer-resize"),c={};return t.move&&l.css("cursor","move"),l.on("mousedown",(function(e){e.preventDefault(),t.move&&(c.moveStart=!0,c.offset=[e.clientX-parseFloat(s.css("left")),e.clientY-parseFloat(s.css("top"))],o.moveElem.css("cursor","move").show())})),f.on("mousedown",(function(e){e.preventDefault(),c.resizeStart=!0,c.offset=[e.clientX,e.clientY],c.area=[s.outerWidth(),s.outerHeight()],o.moveElem.css("cursor","se-resize").show()})),a.on("mousemove",(function(i){if(c.moveStart){var a=i.clientX-c.offset[0],o=i.clientY-c.offset[1],l="fixed"===s.css("position");if(i.preventDefault(),c.stX=l?0:n.scrollLeft(),c.stY=l?0:n.scrollTop(),!t.moveOut){var f=n.width()-s.outerWidth()+c.stX,u=n.height()-s.outerHeight()+c.stY;a<c.stX&&(a=c.stX),a>f&&(a=f),o<c.stY&&(o=c.stY),o>u&&(o=u)}s.css({left:a,top:o})}if(t.resize&&c.resizeStart){a=i.clientX-c.offset[0],o=i.clientY-c.offset[1];i.preventDefault(),r.style(e.index,{width:c.area[0]+a,height:c.area[1]+o}),c.isResize=!0,t.resizing&&t.resizing(s)}})).on("mouseup",(function(e){c.moveStart&&(delete c.moveStart,o.moveElem.hide(),t.moveEnd&&t.moveEnd(s)),c.resizeStart&&(delete c.resizeStart,o.moveElem.hide())})),e},s.pt.callback=function(){var e=this,t=e.layero,n=e.config;e.openLayer(),n.success&&(2==n.type?t.find("iframe").on("load",(function(){n.success(t,e.index)})):n.success(t,e.index)),6==r.ie&&e.IE6(t),t.find("."+l[6]).children("a").on("click",(function(){var a=i(this).index();0===a?n.yes?n.yes(e.index,t):n.btn1?n.btn1(e.index,t):r.close(e.index):!1===(n["btn"+(a+1)]&&n["btn"+(a+1)](e.index,t))||r.close(e.index)})),t.find("."+l[7]).on("click",(function(){!1===(n.cancel&&n.cancel(e.index,t))||r.close(e.index)})),n.shadeClose&&i("#layui-layer-shade"+e.index).on("click",(function(){r.close(e.index)})),t.find(".layui-layer-min").on("click",(function(){!1===(n.min&&n.min(t))||r.min(e.index,n)})),t.find(".layui-layer-max").on("click",(function(){i(this).hasClass("layui-layer-maxmin")?(r.restore(e.index),n.restore&&n.restore(t)):(r.full(e.index,n),setTimeout((function(){n.full&&n.full(t)}),100))})),n.end&&(o.end[e.index]=n.end)},o.reselect=function(){i.each(i("select"),(function(e,t){var n=i(this);n.parents("."+l[0])[0]||1==n.attr("layer")&&i("."+l[0]).length<1&&n.removeAttr("layer").show(),n=null}))},s.pt.IE6=function(e){i("select").each((function(e,t){var n=i(this);n.parents("."+l[0])[0]||"none"===n.css("display")||n.attr({layer:"1"}).hide(),n=null}))},s.pt.openLayer=function(){r.zIndex=this.config.zIndex,r.setTop=function(e){return r.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",(function(){r.zIndex++,e.css("z-index",r.zIndex+1)})),r.zIndex}},o.record=function(e){var t=[e.width(),e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},o.rescollbar=function(e){l.html.attr("layer-full")==e&&(l.html[0].style.removeProperty?l.html[0].style.removeProperty("overflow"):l.html[0].style.removeAttribute("overflow"),l.html.removeAttr("layer-full"))},e.layer=r,r.getChildFrame=function(e,t){return t=t||i("."+l[4]).attr("times"),i("#"+l[0]+t).find("iframe").contents().find(e)},r.getFrameIndex=function(e){return i("#"+e).parents("."+l[4]).attr("times")},r.iframeAuto=function(e){if(e){var t=r.getChildFrame("html",e).outerHeight(),n=i("#"+l[0]+e),a=n.find(l[1]).outerHeight()||0,o=n.find("."+l[6]).outerHeight()||0;n.css({height:t+a+o}),n.find("iframe").css({height:t})}},r.iframeSrc=function(e,t){i("#"+l[0]+e).find("iframe").attr("src",t)},r.style=function(e,t,n){var a=i("#"+l[0]+e),r=a.find(".layui-layer-content"),s=a.attr("type"),f=a.find(l[1]).outerHeight()||0,c=a.find("."+l[6]).outerHeight()||0;a.attr("minLeft"),s!==o.type[3]&&s!==o.type[4]&&(n||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-f-c<=64&&(t.height=64+f+c)),a.css(t),c=a.find("."+l[6]).outerHeight(),s===o.type[2]?a.find("iframe").css({height:parseFloat(t.height)-f-c}):r.css({height:parseFloat(t.height)-f-c-parseFloat(r.css("padding-top"))-parseFloat(r.css("padding-bottom"))}))},r.min=function(e,t){var a=i("#"+l[0]+e),s=a.find(l[1]).outerHeight()||0,f=a.attr("minLeft")||181*o.minIndex+"px",c=a.css("position");o.record(a),o.minLeft[0]&&(f=o.minLeft[0],o.minLeft.shift()),a.attr("position",c),r.style(e,{width:180,height:s,left:f,top:n.height()-s,position:"fixed",overflow:"hidden"},!0),a.find(".layui-layer-min").hide(),"page"===a.attr("type")&&a.find(l[4]).hide(),o.rescollbar(e),a.attr("minLeft")||o.minIndex++,a.attr("minLeft",f)},r.restore=function(e){var t=i("#"+l[0]+e),n=t.attr("area").split(",");t.attr("type"),r.style(e,{width:parseFloat(n[0]),height:parseFloat(n[1]),top:parseFloat(n[2]),left:parseFloat(n[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(l[4]).show(),o.rescollbar(e)},r.full=function(e){var t,a=i("#"+l[0]+e);o.record(a),l.html.attr("layer-full")||l.html.css("overflow","hidden").attr("layer-full",e),clearTimeout(t),t=setTimeout((function(){var t="fixed"===a.css("position");r.style(e,{top:t?0:n.scrollTop(),left:t?0:n.scrollLeft(),width:n.width(),height:n.height()},!0),a.find(".layui-layer-min").hide()}),100)},r.title=function(e,t){i("#"+l[0]+(t||r.index)).find(l[1]).html(e)},r.close=function(e){var t=i("#"+l[0]+e),n=t.attr("type");if(t[0]){var a="layui-layer-wrap",s=function(){if(n===o.type[1]&&"object"===t.attr("conType")){t.children(":not(."+l[5]+")").remove();for(var r=t.find("."+a),s=0;s<2;s++)r.unwrap();r.css("display",r.data("display")).removeClass(a)}else{if(n===o.type[2])try{var f=i("#"+l[4]+e)[0];f.contentWindow.document.write(""),f.contentWindow.close(),t.find("."+l[5])[0].removeChild(f)}catch(e){}t[0].innerHTML="",t.remove()}"function"==typeof o.end[e]&&o.end[e](),delete o.end[e]};t.data("isOutAnim")&&t.addClass("layer-anim layer-anim-close"),i("#layui-layer-moves, #layui-layer-shade"+e).remove(),6==r.ie&&o.reselect(),o.rescollbar(e),t.attr("minLeft")&&(o.minIndex--,o.minLeft.push(t.attr("minLeft"))),r.ie&&r.ie<10||!t.data("isOutAnim")?s():setTimeout((function(){s()}),200)}},r.closeAll=function(e){i.each(i("."+l[0]),(function(){var t=i(this),n=e?t.attr("type")===e:1;n&&r.close(t.attr("times")),n=null}))};var f=r.cache||{},c=function(e){return f.skin?" "+f.skin+" "+f.skin+"-"+e:""};r.prompt=function(e,t){var a="";if("function"==typeof(e=e||{})&&(t=e),e.area){var o=e.area;a='style="width: '+o[0]+"; height: "+o[1]+';"',delete e.area}var s,l=2==e.formType?'<textarea class="layui-layer-input"'+a+">"+(e.value||"")+"</textarea>":'<input type="'+(1==e.formType?"password":"text")+'" class="layui-layer-input" value="'+(e.value||"")+'">',f=e.success;return delete e.success,r.open(i.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:l,skin:"layui-layer-prompt"+c("prompt"),maxWidth:n.width(),success:function(e){(s=e.find(".layui-layer-input")).focus(),"function"==typeof f&&f(e)},resize:!1,yes:function(i){var n=s.val();""===n?s.focus():n.length>(e.maxlength||500)?r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(e.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",s,{tips:1}):t&&t(n,i,s)}},e))},r.tab=function(e){var t=(e=e||{}).tab||{},n="layui-this",a=e.success;return delete e.success,r.open(i.extend({type:1,skin:"layui-layer-tab"+c("tab"),resize:!1,title:function(){var e=t.length,i=1,a="";if(e>0)for(a='<span class="'+n+'">'+t[0].title+"</span>";i<e;i++)a+="<span>"+t[i].title+"</span>";return a}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=t.length,i=1,a="";if(e>0)for(a='<li class="layui-layer-tabli '+n+'">'+(t[0].content||"no content")+"</li>";i<e;i++)a+='<li class="layui-layer-tabli">'+(t[i].content||"no  content")+"</li>";return a}()+"</ul>",success:function(t){var o=t.find(".layui-layer-title").children(),r=t.find(".layui-layer-tabmain").children();o.on("mousedown",(function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0;var a=i(this),o=a.index();a.addClass(n).siblings().removeClass(n),r.eq(o).show().siblings().hide(),"function"==typeof e.change&&e.change(o)})),"function"==typeof a&&a(t)}},e))},r.photos=function(t,n,a){var o={};if((t=t||{}).photos){var s=t.photos.constructor===Object,l=s?t.photos:{},f=l.data||[],u=l.start||0;o.imgIndex=1+(0|u),t.img=t.img||"img";var d=t.success;if(delete t.success,s){if(0===f.length)return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var y=i(t.photos),p=function(){f=[],y.find(t.img).each((function(e){var t=i(this);t.attr("layer-index",e),f.push({alt:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("src"),thumb:t.attr("src")})}))};if(p(),0===f.length)return;if(n||y.on("click",t.img,(function(){var e=i(this).attr("layer-index");r.photos(i.extend(t,{photos:{start:e,data:f,tab:t.tab},full:t.full}),!0),p()})),!n)return}o.imgprev=function(e){o.imgIndex--,o.imgIndex<1&&(o.imgIndex=f.length),o.tabimg(e)},o.imgnext=function(e,t){o.imgIndex++,o.imgIndex>f.length&&(o.imgIndex=1,t)||o.tabimg(e)},o.keyup=function(e){if(!o.end){var t=e.keyCode;e.preventDefault(),37===t?o.imgprev(!0):39===t?o.imgnext(!0):27===t&&r.close(o.index)}},o.tabimg=function(e){if(!(f.length<=1))return l.start=o.imgIndex-1,r.close(o.index),r.photos(t,!0,e)},o.event=function(){o.bigimg.hover((function(){o.imgsee.show()}),(function(){o.imgsee.hide()})),o.bigimg.find(".layui-layer-imgprev").on("click",(function(e){e.preventDefault(),o.imgprev()})),o.bigimg.find(".layui-layer-imgnext").on("click",(function(e){e.preventDefault(),o.imgnext()})),i(document).on("keyup",o.keyup)},o.loadi=r.load(1,{shade:!("shade"in t)&&.9,scrollbar:!1}),function(e,t,i){var n=new Image;n.src=e,n.complete?t(n):(n.onload=function(){n.onload=null,t(n)},n.onerror=function(e){n.onerror=null,i(e)})}(f[u].src,(function(n){r.close(o.loadi),o.index=r.open(i.extend({type:1,id:"layui-layer-photos",area:function(){var a=[n.width,n.height],o=[i(e).width()-100,i(e).height()-100];if(!t.full&&(a[0]>o[0]||a[1]>o[1])){var r=[a[0]/o[0],a[1]/o[1]];r[0]>r[1]?(a[0]=a[0]/r[0],a[1]=a[1]/r[0]):r[0]<r[1]&&(a[0]=a[0]/r[1],a[1]=a[1]/r[1])}return[a[0]+"px",a[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,isOutAnim:!1,skin:"layui-layer-photos"+c("photos"),content:'<div class="layui-layer-phimg"><img src="'+f[u].src+'" alt="'+(f[u].alt||"")+'" layer-pid="'+f[u].pid+'"><div class="layui-layer-imgsee">'+(f.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(a?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(f[u].alt||"")+"</a><em>"+o.imgIndex+"/"+f.length+"</em></span></div></div></div>",success:function(e,i){o.bigimg=e.find(".layui-layer-phimg"),o.imgsee=e.find(".layui-layer-imguide,.layui-layer-imgbar"),o.event(e),t.tab&&t.tab(f[u],e),"function"==typeof d&&d(e)},end:function(){o.end=!0,i(document).off("keyup",o.keyup)}},t))}),(function(){r.close(o.loadi),r.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){f.length>1&&o.imgnext(!0,!0)}})}))}},o.run=function(t){n=(i=t)(e),l.html=i("html"),r.open=function(e){return new s(e).index}},e.layui&&layui.define?(r.ready(),layui.define("jquery",(function(t){r.path=layui.cache.dir,o.run(layui.$),e.layer=r,t("layer",r)}))):"function"==typeof define&&define.amd?define(["jquery"],(function(){return o.run(e.jQuery),r})):(o.run(e.jQuery),r.ready())}(window);