var NSMv=NSMv||{};NSMv.util=NSMv.util||{},function(o){o.showscroll=o.showscroll||{},oShowScroll=o.showscroll,oShowScroll.IdBox="",oShowScroll.BOX=!1,oShowScroll.offset_porcentaje=100,oShowScroll.offset_porcentajeMax=0,oShowScroll.offset_px=100,oShowScroll.offset_pxMax=0,oShowScroll.offset_callBack=null,oShowScroll.cerrado=!1,oShowScroll.oculto=!0,oShowScroll.loaded=!1,oShowScroll.ShowClassName="scroll-social show",oShowScroll.HideClassName="scroll-social hide",oShowScroll.onShow=null,oShowScroll.onHide=null,oShowScroll.getScrollY=function(){return scrOfY=0,"number"==typeof window.pageYOffset?scrOfY=window.pageYOffset:document.body&&(document.body.scrollLeft||document.body.scrollTop)?scrOfY=document.body.scrollTop:document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)&&(scrOfY=document.documentElement.scrollTop),scrOfY},oShowScroll.showScroll=function(){var o=!1;if(this.offset_callBack)o=this.offset_callBack();else if(this.offset_porcentaje){var l=0,c=0,e=document;c=Math.max(Math.max(e.body.scrollHeight,e.documentElement.scrollHeight),Math.max(e.body.offsetHeight,e.documentElement.offsetHeight),Math.max(e.body.clientHeight,e.documentElement.clientHeight)),window.innerHeight?l=window.innerHeight:document.documentElement&&document.documentElement.clientHeight?l=document.documentElement.clientHeight:document.body&&(l=document.body.clientHeight),o=oShowScroll.getScrollY()+l>=c*oShowScroll.offset_porcentaje/100,o&&this.offset_porcentajeMax&&(o=oShowScroll.getScrollY()+l<=c*oShowScroll.offset_porcentajeMax/100)}else this.offset_px&&(o=oShowScroll.getScrollY()>=this.offset_px,o&&this.offset_pxMax&&(o=oShowScroll.getScrollY()<=this.offset_pxMax));return o},oShowScroll.scroll=function(){if(!oShowScroll.cerrado){var o=!1;o=oShowScroll.showScroll(),o?oShowScroll.BOX&&(-1==oShowScroll.BOX.className.indexOf(oShowScroll.ShowClassName)&&(oShowScroll.BOX.className=oShowScroll.ShowClassName,"function"==typeof oShowScroll.onShow&&oShowScroll.onShow()),oShowScroll.oculto=!1):oShowScroll.oculto||oShowScroll.BOX&&(-1==oShowScroll.BOX.className.indexOf(oShowScroll.HideClassName)&&(oShowScroll.BOX.className=oShowScroll.HideClassName,"function"==typeof oShowScroll.onHide&&oShowScroll.onHide()),oShowScroll.oculto=!0)}},oShowScroll.close=function(){oShowScroll.cerrado||(oShowScroll.BOX.className=oShowScroll.HideClassName,oShowScroll.cerrado=!0)},oShowScroll.addConfig=function(o){oShowScroll.offset_porcentaje=o.offset_porcentaje,oShowScroll.offset_porcentajeMax=o.offset_porcentajeMax,oShowScroll.offset_px=o.offset_px,oShowScroll.offset_pxMax=o.offset_pxMax,oShowScroll.offset_callBack=o.offset_callBack,oShowScroll.cerrado=o.cerrado,oShowScroll.oculto=o.oculto,oShowScroll.IdBox=o.IdBox,oShowScroll.HideById=o.HideById,oShowScroll.onShow=o.onShow,oShowScroll.onHide=o.onHide;var l=document.getElementById(oShowScroll.IdBox);l&&(oShowScroll.BOX=l,oShowScroll.loaded||(window.addEventListener?(window.addEventListener("touchmove",oShowScroll.scroll,!1),window.addEventListener("scroll",oShowScroll.scroll,!1)):window.attachEvent?window.attachEvent("onscroll",oShowScroll.scroll):window.onscroll=oShowScroll.scroll,oShowScroll.loaded=!0))}}(NSMv.util);var NSMv=NSMv||{};NSMv.site=NSMv.site||{};
(function(e){e.MediaZoom=function(e,g,h,f){this.Id="ShowImg";this.Css="showimg-fullscreen";this.HeaderBtnCss="comment mvicon-comment";this.HeaderH4Css="title";this.HeaderBtnText="Comentar";this.ContentId="VisorImagenes";this.CntParentCss="showimg-controls";this.CntCloseCss="close mvicon-close";this.CntCloseId="VisorImagenes_Cerrar";this.CntPrevCss="prev mvicon-arrowdown";this.CntNextCss="next mvicon-arrowup";this.CntInfoCss="pos";this.MContentId="VisorImagenes_body";this.MediadCss="imagen";this.MediadId=
"ShowImg_Image";this.AsideCss="enabled";this.AsideClase="close mvicon-close";this.AsideContetnCss="elements";this.CreditsCss="credits";this.DataCode="zoom";this.ImgContainer=e;this.Find=g;this.Replace=h;this.addSocial=this.addToAside="";this.ForceTitle=f?f:"";this.pAddSocial=this.pCredits=this.pAside=this.pMedia=this.pCntInfo=this.pContent=this.pTitle=this.pBase=null;this.pMax=0;this.pArrImg=null;this.pCurrent=0;this.__construct=function(){var a=document.getElementById(this.ImgContainer);if(a){var b=
this;this.pMax=a.children.length;this.pArrImg=[];for(var c=0;c<this.pMax;c++){var d=a.children[c],e="";"IMG"!==d.tagName?(d.onclick=function(a){return!1},e=d.title,d=d.children[0]):e=d.alt;d.dataset.ImgId=c;d.onclick=function(a){b.show(this.dataset.ImgId);b.keyboardEvents()};d={url:d.src.replace(this.Find,this.Replace),title:this.ForceTitle?this.ForceTitle:e,rights:d.dataset.rights};this.pArrImg.push(d)}}};this.keyboardEvents=function(){var a=this;document.onkeydown=function(b){switch(b.key){case "Left":case "ArrowLeft":a._prev();
break;case "Right":case "ArrowRight":a._next();break;case "Esc":case "Escape":a&&(a.pBase.style.display="none"),document.body.className="",a.keyboardEventsCancel()}}};this.keyboardEventsCancel=function(){document.onkeydown=function(a){var b=!0;switch(a.key){case "Left":case "ArrowLeft":b=!1;break;case "Right":case "ArrowRight":b=!1;break;case "Esc":case "Escape":b=!1}if(!0!==b)return b}};this.appendImage=function(a,b,c){this.pArrImg.push({url:a,title:b,rights:c});this.pMax++};this.show=function(a){a=
parseInt(a);if(this.pArrImg.length>a){this._render();this.pMedia.src=this.pArrImg[a].url;this.pMedia.alt=this.pArrImg[a].title;this.pArrImg[a].rights?(this.pCredits.innerHTML=this.pArrImg[a].rights,this.pCredits.style.display=""):(this.pCredits.innerHTML="",this.pCredits.style.display="none");var b=parseInt(a)+1;this.pCntInfo.innerHTML=b+"/"+this.pMax;this.pCurrent=a;"none"===this.pBase.style.display&&(this.pBase.style.display="");document.body.className=this.Css}};this._next=function(){this.pCurrent+
1<this.pMax?this.show(this.pCurrent+1):1<this.pMax&&this.show(0)};this._prev=function(){0<=this.pCurrent-1?this.show(this.pCurrent-1):1<this.pMax&&this.show(this.pMax-1)};this._render=function(){if(!this.pBase){var a=null,b=this;this.pBase=document.createElement("div");this.pBase.id=this.Id;this.pBase.className=this.Css;this.pContent=document.createElement("div");this.pContent.id=this.ContentId;this.pBase.appendChild(this.pContent);var c=document.createElement("div");c.className=this.CntParentCss;
this.pContent.appendChild(c);a=document.createElement("button");a.className=this.CntCloseCss;a.onclick=function(a){b&&(b.pBase.style.display="none");document.body.className="";b.keyboardEventsCancel()};a.id=this.CntCloseId;c.appendChild(a);a=document.createElement("button");a.className=this.CntPrevCss;a.onclick=function(a){b&&b._prev()};c.appendChild(a);this.pCntInfo=document.createElement("span");this.pCntInfo.className=this.CntInfoCss;c.appendChild(this.pCntInfo);a=document.createElement("button");
a.className=this.CntNextCss;a.onclick=function(a){b&&b._next()};c.appendChild(a);a=document.createElement("div");a.id=this.MContentId;this.pContent.appendChild(a);this.pMedia=document.createElement("img");this.pMedia.className=this.MediadCss;this.pMedia.id=this.MediadId;a.appendChild(this.pMedia);this.pCredits=document.createElement("p");this.pCredits.className=this.CreditsCss;a.appendChild(this.pCredits);this.addToAside&&(this.pAside=document.createElement("aside"),this.pContent.appendChild(this.pAside),
a=document.createElement("button"),a.className=this.CntCloseCss,a.onclick=function(a){b&&b.pAside&&(b.pAside.className=b.pAside.className===b.AsideCss?"":b.AsideCss)},this.pAside.appendChild(a),a=document.createElement("div"),a.className=this.AsideContetnCss,a.innerHTML=this.addToAside,this.pAside.appendChild(a),a=document.createElement("button"),a.className=this.HeaderBtnCss,a.onclick=function(a){b&&b.pAside&&(b.pAside.className=b.pAside.className===b.AsideCss?"":b.AsideCss)},this.HeaderBtnText&&
(a.innerHTML=this.HeaderBtnText),c.appendChild(a));this.addSocial&&(this.pAddSocial=document.createElement("div"),this.pContent.appendChild(this.pAddSocial),this.pAddSocial.innerHTML=this.addSocial);document.body.appendChild(this.pBase)}};this.__construct()}})(NSMv.site);
function setCookie(d,a,b){var c=new Date;c.setTime(c.getTime()+864E5*b);b="expires="+c.toUTCString();document.cookie=d+"="+a+";"+b+";domain=.malavida.com;path=/;SameSite=Lax"}function getCookie(d){d+="=";for(var a=document.cookie.split(";"),b=0;b<a.length;b++){for(var c=a[b];" "===c.charAt(0);)c=c.substring(1);if(0===c.indexOf(d))return c.substring(d.length,c.length)}return""}
function OnButtonAction(d,a,b){d=document.getElementById(b);a=document.getElementById(a);var c=document.getElementById(this.IdTabs);if(d&&a&&c)for(d=c.UseArray?c.UseArray:c.children,c=0;c<d.length&&c<a.children.length;c++)a.children[c].id&&a.children[c].id!==b?(a.children[c].style.display="none",d[c].className=""):a.children[c].id===b?(a.children[c].style.display="",d[c].className="active"):d[c].className=""}
function LinkMediaKit(d,a,b,c,g,f,h){var e=this;e.lLinkControl=a;e.lComponent=d;e.lIdBanner=b;e.lWidth=c;e.lHeight=g;e.lSizeKB=f;e.lFormat=h;e.seleccionar=function(a){e.lLinkControl.seleccionar(e.lIdBanner);a||(a=window.event);a.returnValue=!1;a.stopPropagation&&a.stopPropagation();a.preventDefault&&a.preventDefault()}}
function LinkControl(d,a,b,c,g,f,h){var e=this;e.lTextArea=document.getElementById(d);e.lSpanDim=document.getElementById(a);e.lSpanSize=document.getElementById(b);e.lSpanFormat=document.getElementById(c);e.lRuta=f;e.lTitulo=h;e.lArrLinks=[];e.lCopyButton=document.getElementById(g);e.addBanner=function(a,b,c,d,g){var f=document.getElementById(a);e.lTextArea&&f&&e.lSpanDim&&e.lSpanSize&&e.lSpanFormat&&(f.lLinkMediaKit=new LinkMediaKit(f,e,a,b,c,d,g),e.lArrLinks.push(f),f.addEventListener?f.addEventListener("click",
f.lLinkMediaKit.seleccionar,!1):f.attachEvent&&f.attachEvent("onclick",f.lLinkMediaKit.seleccionar))};e.seleccionar=function(a){for(var b=0;b<e.lArrLinks.length;b++){var c=e.lArrLinks[b];c.className=c.className.replace(" selected","");if(c.id===a){for(c.className+=" selected";e.lTextArea.firstChild;)e.lTextArea.removeChild(e.lTextArea.firstChild);for(e.lTextArea.appendChild(document.createTextNode('<a href="'+e.lRuta+'" title="'+e.lTitulo+'"><img src="'+c.src+'" alt="'+e.lTitulo+'"/></a>'));e.lSpanDim.firstChild;)e.lSpanDim.removeChild(e.lSpanDim.firstChild);
for(e.lSpanDim.appendChild(document.createTextNode(""+c.lLinkMediaKit.lWidth+"x"+c.lLinkMediaKit.lHeight));e.lSpanSize.firstChild;)e.lSpanSize.removeChild(e.lSpanSize.firstChild);for(e.lSpanSize.appendChild(document.createTextNode(""+c.lLinkMediaKit.lSizeKB+" KB"));e.lSpanFormat.firstChild;)e.lSpanFormat.removeChild(e.lSpanFormat.firstChild);e.lSpanFormat.appendChild(document.createTextNode(""+c.lLinkMediaKit.lFormat))}}}}
function TabControl(d,a,b,c){this.IdTabs=d;this.IdContent=a;var g=document.getElementById(this.IdTabs);d=document.getElementById(this.IdContent);if(c){a=[];for(var f=0;f<g.children.length;f++)a.push(g.children[f]);c=c.split(",");for(f=0;f<c.length;f++){var h=document.getElementById(c[f]);h&&a.push(h)}g.UseArray=a}else a=g.children;for(f=0;f<a.length&&f<d.children.length;f++)c=a[f],g=d.children[f],f===b?(c.className="active",g.style.display=""):(c.style.display="",g.style.display="none"),c.IdContent=
this.IdContent,c.IdTabContent=g.id,c.IdTabs=this.IdTabs,c.addEventListener?c.addEventListener("click",ButtonOnClik,!1):c.attachEvent&&c.attachEvent("onclick",ButtonOnClik)}
function ButtonOnClik(){var d=null,a=null,b=null;void 0===this.IdTabs||void 0===this.IdContent||void 0===this.IdTabContent?this.event&&this.event.srcElement&&(d=this.event.srcElement.IdTabs,a=this.event.srcElement.IdContent,b=this.event.srcElement.IdTabContent,void 0===d||void 0===a||void 0===b)&&(d=this.event.srcElement.parentElement.IdTabs,a=this.event.srcElement.parentElement.IdContent,b=this.event.srcElement.parentElement.IdTabContent):(d=this.IdTabs,a=this.IdContent,b=this.IdTabContent);null!==
d&&null!==a&&null!==b&&OnButtonAction(d,a,b)}
function mediakit_doubleclick_select(d){var a=document.getElementById(d);a&&(a.util_deselect=function(){document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges()},a.util_select=function(){a.util_deselect();if(document.selection){var b=document.body.createTextRange();b.moveToElementText(a);b.select()}else window.getSelection&&(b=document.createRange(),b.selectNode(a),window.getSelection().addRange(b))},a.addEventListener?a.addEventListener("dblclick",
a.util_select,!1):a.attachEvent&&a.attachEvent("ondblclick",a.util_select))}
function createXMLHTTPObject(d){try{for(var a=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Msxml4.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],b=!1,c=0;c<a.length;c++){try{b=a[c]()}catch(g){continue}break}b.overrideMimeType&&(d?b.overrideMimeType(d):b.overrideMimeType("text/xml"));return b}catch(g){console.log(g.message)}}
function makeRequestSinc(d,a,b,c){if(http_request=this.createXMLHTTPObject(c))return http_request.withCredentials=!0,null==a&&(a="POST"),http_request.open(a,d,!1),"POST"===a&&http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded"),b?http_request.send(b):http_request.send(null),http_request}
function pageTracker(d){var a="";if("object"==typeof d)for(var b in d)""!==a&&(a+="&"),a+=b+"="+encodeURIComponent(d[b]);else a=d.toString();makeRequestSinc("https://actions.malavida.com/adpub","POST",a)}function OntDescCountry(){this.pIdCondSend=this.pIdTextSend=this.pIdSelect="";this.pCountries=[]}OntDescCountry.prototype.addCountry=function(d){this.pCountries.push(d)};
OntDescCountry.prototype.actualizar=function(){lThis=this;lThis.ODC&&(lThis=lThis.ODC);if(lPCombo=document.getElementById(lThis.pIdSelect)){lIdioma=lPCombo.value;lLen=lThis.pCountries.length;for(var d=0;d<lLen;d++){lCode=lThis.pCountries[d];if(lSend=document.getElementById("send"+lCode))lSend.className=lSend.className.replace(" hidden",""),lCode!=lIdioma&&(lSend.className+=" hidden");if(lCond=document.getElementById("cond"+lCode))lCond.className=lCond.className.replace("hidden",""),lCode!=lIdioma&&
(lCond.className+="hidden");if(lCond=document.getElementById("cond"+lCode+"2"))lCond.className=lCond.className.replace("hidden",""),lCode!=lIdioma&&(lCond.className+="hidden")}}};
OntDescCountry.prototype.init=function(d,a,b){lThis=this;lThis.pIdSelect=d;lThis.pIdTextSend=a;lThis.pIdCondSend=b;if(lPCombo=document.getElementById(d))lPCombo.ODC=lThis,lIdioma=lPCombo.value,lPCombo.addEventListener?lPCombo.addEventListener("click",lThis.actualizar,!1):lPCombo.attachEvent&&lPCombo.attachEvent("onclick",lThis.actualizar),lThis.actualizar()};
function hideShow(d,a){try{var b=!1,c=document.getElementById(d);c&&(-1!==c.className.indexOf("hide")?c.className=c.className.replace("hide","show"):(-1!==c.className.indexOf("show")?c.className=c.className.replace("show","hide"):c.className=c.className?c.className+" hide":"hide",b=!0));if(!a)return b}catch(g){console.log(g.message)}}function hasClass(d,a){return-1<(" "+d.className+" ").indexOf(" "+a+" ")}
function hide(d){try{var a=document.getElementById(d);a&&(hasClass(a,"hide")||(a.classList&&a.classList.toggle?a.classList.toggle("hide"):a.className+=" hide"),hasClass(a,"show")&&a.classList.toggle("show"))}catch(b){console.log(b.message)}}
function hide2(d,a){try{var b=document.getElementById(d);if(b)if(-1!==b.className.indexOf(" hide")){if(b.className=b.className.replace(" hide",""),a){var c=isArray(a)?a:Array(a);for(d=0;d<c.length;d++){var g=document.getElementById(c[d]);g&&-1===g.className.indexOf(" hide")&&(g.className+=" hide")}}}else b.className+=" hide"}catch(f){console.log(f.message)}}function isArray(d){return d.constructor===Array}
function show(d){try{var a=document.getElementById(d);a&&(hasClass(a,"show")||(a.classList&&a.classList.toggle?a.classList.toggle("show"):a.className+=" show"),hasClass(a,"hide")&&a.classList.toggle("hide"))}catch(b){console.log(b.message)}}function expand(d,a){try{a||(a="expanded");var b=document.querySelector(d);b&&b.classList.toggle(a)}catch(c){console.log(c.message)}}
function colapse(d,a){try{a=a?a+" ":"";var b=document.getElementById(d);b&&(b.className=b.className===a+"collapsed"?a+"expanded":a+"collapsed")}catch(c){console.log(c.message)}}function collapse(d,a,b,c,g){try{var f=!1,h=!1;g&&(h=document.getElementById(g));b&&c&&h&&(f=!0);a=a?a+" ":"";var e=document.getElementById(d);e&&(e.className===a+"collapsed"?(e.className=a+"expanded",f&&(h.innerHTML=c)):(e.className=a+"collapsed",f&&(h.innerHTML=b)))}catch(k){console.log(k.message)}}
function showIdHideGroup(d,a){try{var b=document.getElementById(d);if(b){a=a?a+" ":"";var c=b.parentNode;for(b=0;b<c.children.length;b++){var g=c.children[b];g.className=g.id===d?a+"show":a+"hide"}}}catch(f){console.log(f.message)}}
function initDateSelects(d,a,b){var c=document.getElementById(d),g=document.getElementById(a),f=document.getElementById(b);f.onchange=g.onchange=function(){var a=c.options[c.selectedIndex];var b=g.options[g.selectedIndex];var d=f.options[f.selectedIndex];var l=[null,31,29,31,30,31,30,31,31,30,31,30,31];2===b.value?(b=new Date(d.value,1,29),d=1===b.getMonth()?30:29):d=l[b.value]+1;for(b=29;b<d;b++)c.options[b].disabled=!1;for(b=d;31>=b;b++)c.options[b].disabled=!0;a.value>=d&&(c.selectedIndex=d-1)}}
function launchEvent(d,a,b){document.createEvent?(b=b?document.createEvent("MouseEvents"):document.createEvent("HTMLEvents"),b.initEvent(a,!0,!0),b.eventName=a,d.dispatchEvent(b)):(b=document.createEventObject(),b.eventType=a,b.eventName=a,d.fireEvent("on"+b.eventType,event))}var NSMv=NSMv||{};NSMv.site=NSMv.site||{};
(function(d){d.onScroll=function(){var a=document.getElementsByClassName("ads-footer-mobi");if(a.length&&75<(window.pageYOffset||document.documentElement.scrollTop)){a=document.getElementsByClassName("cookie");for(var c=0;c<a.length;c++)"notification cookie"==a[c].className&&(a[c].style.display="none");if(a=document.getElementById("Web"))a.className=a.className.replace("cookie-warning","")}};var a=0;document.body&&document.body.offsetWidth?a=document.body.offsetWidth:window.innerWidth&&(a=window.innerWidth);
600>=a&&(window.addEventListener?window.addEventListener("scroll",d.onScroll,!1):window.attachEvent?window.attachEvent("onscroll",d.onScroll):window.onscroll=d.onScroll)})(NSMv.site);
function getLang(){if("www.malavida.com"===window.location.hostname)var a=1<window.location.pathname.split("/").length?window.location.pathname.split("/")[1]:"es";else{a=[];for(var b=/^([a-z]+)\.malavida\.com/gm,c;null!==(c=b.exec("fr.malavida.com"));){c.index===b.lastIndex&&b.lastIndex++;for(var e=0;e<c.length;e++)a[e]=c[e]}a=2===a.length?a[1]:"es"}return a}
var gLang=getLang(),userManager={Lang:gLang,UrlAction:("https://"+document.domain+"/usr-action").replace("//www.","//actions."),ObjCode:"",LoginRedir:location.hash?location.protocol+"//"+location.host+location.pathname:location.href,StatusFB:0,StatusRegFB:0,StatusLoginFB:0,StatusAlertFB:0,DIVLoading:"ScreenLoader",TxtOk:"Aceptar",TxtErrOff:"Error al realizar la desconexi&oacute;n.",TxtErr:"Error.",TxtErrAction:"Error al realizar acci\u00f3n.",TxtErrFB:"Error al conectar con Facebook.",facebookScopeDefault:"email",
alert:function(a,b,c){var e=document.getElementById("Alert");if(!e){e=document.createElement("div");e.id="Alert";e.className="bg-popup";document.body.appendChild(e);var g=document.createElement("div");g.id="Alert-Box";g.className="modal-box";e.appendChild(g);var d=document.createElement("div");d.className="text";d.id="Alert-text";g.appendChild(d);document.createElement("p");d.appendChild(document.createElement("p"));d=document.createElement("input");d.type="submit";d.value=this.TxtOk;d.className=
"button blue";d.onclick=c?function(){var a=document.getElementById("Alert");a&&a.parentNode.removeChild(a);location.replace(userManager.LoginRedir)}:function(){var a=document.getElementById("Alert");a&&a.parentNode.removeChild(a);document.body.classList.contains("fullbg")&&document.body.classList.remove("fullbg")};g.appendChild(d)}e&&(e=document.getElementById("Alert-text"))&&(e.className=b?"wrong":"ok",e.firstChild.innerHTML=a)},setRate:function(a,b,c){if(this.ObjCode){var e=makeRequestSinc(this.UrlAction,
"POST","lang="+userManager.Lang+"&"+("act=rate&ObjCode="+this.ObjCode+"&val="+b));if(e&&e.responseText&&(e=eval("("+e.responseText+")")))if(e.state){if(e.code)try{eval(e.code)}catch(g){console.log(g.message)}if(a=document.getElementById(a))a.className="current-rating-"+b,(a=a.parentNode.nextSibling)&&"rating-text"===a.className&&(a.innerHTML="("+b+"/10)");c&&(a=document.getElementById(c))&&(a.className="current-rating-"+b,(a=a.parentNode.nextSibling)&&"rating-text"===a.className&&(a.innerHTML="("+
b+"/10)"));c=document.querySelectorAll(".star-rating-mobile");for(a=0;a<c.length;a++)c[a].value!==b&&(c[a].value=b);e.addhtml&&this.resultaddhtml(e,!0,"RateNoUsr")}else{c=document.querySelectorAll(".star-rating-mobile");for(a=0;a<c.length;a++)c[a].value!==b&&(c[a].value=b);e.errormsg?this.alert(e.errormsg,!0):e.addhtml&&(lappendAux=!0,this.resultaddhtml(e,lappendAux,"AuxFormLoginAct"))}}},setCommentKarma:function(a,b,c){if(this.ObjCode){var e=null,g=0,d="Karma-";c&&(d+=c);if(c=document.getElementById(d+
a)){for(d=0;d<c.attributes.length;d++)if("data-karmaold"===c.attributes[d].name){e=c.attributes[d];g=parseInt(c.attributes[d].value);break}if(g!==b&&(d=makeRequestSinc(this.UrlAction,"POST","lang="+userManager.Lang+"&"+("act=comment-karma&ObjCode="+this.ObjCode+"&comment="+a+"&val="+b)))&&d.responseText&&(d=eval("("+d.responseText+")")))if(d.state){for(d=0;d<c.children.length;d++)if(a=c.children[d])switch(a.className){case "tooltip":for(var k=0;k<a.children.length;k++){var f=a.children[k];if(f)switch(f.className){case "kp":0<
b&&0>=g?f.innerHTML="+"+(parseInt(f.innerHTML)+1):0>=b&&0<g&&(f.innerHTML="+"+(parseInt(f.innerHTML)-1));break;case "kn":0>b&&0<=g?f.innerHTML="-"+(Math.abs(parseInt(f.innerHTML))+1):0<=b&&0>g&&(f.innerHTML="-"+(Math.abs(parseInt(f.innerHTML))-1))}}break;case "karma positive":case "karma negative":case "karma zero":0<b&&0===g?a.innerHTML=parseInt(a.innerHTML)+1:0<b&&0>g?a.innerHTML=parseInt(a.innerHTML)+2:0>b&&0===g?a.innerHTML=parseInt(a.innerHTML)-1:0>b&&0<g&&(a.innerHTML=parseInt(a.innerHTML)-
2),k=parseInt(a.innerHTML),0===k?a.className="karma zero":0>k?a.className="karma negative":(a.className="karma positive",0<k&&(a.innerHTML="+"+k))}e.value=b}else if(d.errormsg)this.alert(d.errormsg,!0);else{if(d.code)try{eval(d.code)}catch(l){console.log(l.message)}d.addhtml&&(lappendAux=!0,this.resultaddhtml(d,lappendAux,"AuxFormLoginAct"))}}}},logOut:function(){this.basicAction("logout",this.TxtErrOff)},bodyFullbg:function(a){a=["FormRegisterFB","FormLoginAct","FormRemember","FormLogin","FormRegister"];
for(var b,c=!1,e=0;e<a.length;e++)if(b=a[e],(b=document.getElementById(b))&&b.classList.contains("show")){c=!0;break}c?document.body.classList.contains("fullbg")||document.body.classList.toggle("fullbg"):document.body.classList.contains("fullbg")&&document.body.classList.toggle("fullbg")},getForm:function(a){var b="",c=!1,e=!1;switch(a){case 5:e=!0;case 4:this.StatusLoginFB=this.StatusRegFB=0;a="FormRegisterFB";var g="Aux"+a;var d=!0;var k="register-window-FB";c=!0;b="FormRegister";break;case 3:this.StatusLoginFB=
0;a="FormLoginAct";g="Aux"+a;d=!0;k="";c=!0;break;case 2:a="FormRemember";g="Aux"+a;d=!0;k="rec-window";b="FormLogin";break;case 1:this.StatusLoginFB=0;a="FormLogin";g="DivFormLogin";d=!0;k="login-window";b="FormRemember";var f="text/json";break;default:a="FormRegister",g="Aux"+a,d=!0,k="register-window",b="FormRegisterFB",f="text/json"}var l=document.getElementById(g);e&&l&&(l.parentNode.removeChild(l),l=!1);if(l)this.setLoading(!1),g=hideShow(a),b&&hide(b),c&&g&&l.parentNode.removeChild(l),this.bodyFullbg(a);
else if(c="act="+k,this.setLoading(!0),c=makeRequestSinc(this.UrlAction,"POST","lang="+userManager.Lang+"&"+c,f),this.setLoading(!1),c&&c.responseText&&(c=eval("("+c.responseText+")")))if(c.state){if(c.code)try{eval(c.code)}catch(h){console.log(h.message)}b&&hide(b);!c.window&&c.addhtml&&(this.resultaddhtml(c,d,g),this.bodyFullbg(a))}else c.errormsg&&this.alert(c.errormsg,!0)},resultaddhtml:function(a,b,c){(lParent=a.addhtml.parentid?document.getElementById(a.addhtml.parentid):document.body)&&a.addhtml.html&&
this.docAddFromHtml(lParent,a.addhtml.html,b,c)},sendRegForm:function(a,b,c){var e="",g="",d=document.getElementById(a);if(d){var k="",f="",l=!0;switch(c){case 6:var h="act=loginFB";f="Alert";var n="text/json";break;case 4:h="act=registerFB";break;case 3:h="act=comment&ObjCode="+this.ObjCode+"&FormId="+a;l=!1;k="AuxFormLoginAct";break;case 2:h="act=rec";e="FormRemember";g="FormLogin";break;case 1:h="act=login";f="Alert";break;default:h="act=register","FormUserRegister"===a&&(l=!1),e="FormRegister",
g="reg_face"}for(var m=0;m<d.length;m++)d[m].name&&(h+="&"+d[m].name+"="+encodeURIComponent("checkbox"===d[m].type?d[m].checked?d[m].value:"":d[m].value));this.setLoading(!0);h=makeRequestSinc(this.UrlAction,"POST","lang="+userManager.Lang+"&"+h,n);this.setLoading(!1);if(h&&h.responseText&&(h=eval("("+h.responseText+")")))if(h.state){if(h.code)try{eval(h.code)}catch(p){console.log(p.message)}if(b=document.getElementById(b))b.innerHTML="",b.className="";b=!0;h.nextaction&&(b=this.nextAction(h.nextaction,
h.reload));if(b)if(l&&(e?(hideShow(g),hideShow(e)):(hideShow(a),4===c&&(a=document.getElementById(a).parentElement.parentNode.parentNode,a.classList.contains("show")&&(a.classList.remove("show"),a.classList.add("hide"))))),h.msg&&this.alert(h.msg,!1),h.reload){d=document.forms.length;for(f=0;f<d;f++)document.forms[f].reset();location.replace(this.LoginRedir)}else for(h.addhtml&&(a=!1,f&&(a=!0),this.resultaddhtml(h,a,f)),f=0;f<d.length;f++)d[f].name&&"submit"!==d[f].type&&"hidden"!==d[f].type&&("checkbox"===
d[f].type?d[f].checked=!1:d[f].value="")}else h.addhtml?(k&&(f=k),d=!1,f&&(d=!0),this.resultaddhtml(h,d,f)):(d=this.TxtErr,h.errormsg&&(d=h.errormsg),(f=document.getElementById(b))?(f.innerHTML=d,f.className="notification error"):d&&h.errormsg&&this.alert(d,!0,!1))}return!1},nextAction:function(a,b){var c=!1;this.setLoading(!0);a=makeRequestSinc(this.UrlAction,"POST","lang="+userManager.Lang+"&"+a);this.setLoading(!1);if(a&&a.responseText&&(a=eval("("+a.responseText+")")))if(a.state)c=!0;else{var e=
this.TxtErrAction;a.errormsg&&(e=a.errormsg);this.alert(e,!0,b)}return c},addFacebook:function(){this.basicAction("addfacebook",this.TxtErrFB)},FBNoRemember:function(){this.basicAction("fbnotremember",this.TxtErrAction)},docAddFromHtml:function(a,b,c,e){c&&(c=document.createElement("div"),a.appendChild(c),a=c,e&&(a.id=e));a.innerHTML=b;a=a.getElementsByTagName("script");for(b=0;b<a.length;b++)eval(a[b].text)},basicAction:function(a,b){if((a=makeRequestSinc(this.UrlAction,"POST","lang="+userManager.Lang+
"&"+("act="+a)))&&a.responseText){if(a=eval("("+a.responseText+")"))if(a.state){if(a.code)try{eval(a.code)}catch(c){console.log(c.message)}a.msg&&this.alert(a.msg,!1);a.reload&&location.replace(this.LoginRedir)}else a.errormsg&&(b=a.errormsg),this.alert(b,!0)}else this.alert(b,!0)},callbackFBChangeStatus:function(a){this.StatusFB=0;a&&"connected"===a.status&&(this.StatusFB=1);if(this.StatusFB&&this.StatusRegFB)return this.getForm(5),!0;if(this.StatusFB&&this.StatusLoginFB)return this.StatusLoginFB=
0,this.sendRegForm("FormLogin","FormLoginMsg",6),!0;this.StatusFB&&this.StatusAlertFB&&this.addFacebook();this.setLoading(!1)},checkFbCookies:function(a){var b=sessionStorage.getItem("FB_TOKEN");""!==b?sessionStorage.setItem("FB_TOKEN",a.authResponse.accessToken):b!==a.authResponse.accessToken&&sessionStorage.setItem("FB_TOKEN",a.authResponse.accessToken);b=getCookie("FB_TOKEN");""===b?setCookie("FB_TOKEN",a.authResponse.accessToken,a.authResponse.expiresIn):b!==a.authResponse.accessToken&&setCookie("FB_TOKEN",
a.authResponse.accessToken,a.authResponse.expiresIn)},doLoginFB:function(a,b,c){a=a||"FormLoginActMsg";c=c||"FormLoginAct";b&&(a="");this.setLoading(!0);FB.login(function(b){b.authResponse?(userManager.checkFbCookies(b),userManager.sendRegForm(c,a,6)):console.log("User cancelled login or did not fully authorize.");userManager.setLoading(!1)},{scope:this.facebookScopeDefault});return!0},doRegisterFB:function(a,b){this.setLoading(!0);userManager.StatusRegFB=1;b?FB.login(function(a){userManager.checkFbCookies(a);
b(a)},{scope:a}):FB.login(function(a){userManager.checkFbCookies(a);userManager.callbackFBChangeStatus(a)},{scope:a});this.setLoading(!1)},doConnectFB:function(a){this.setLoading(!0);userManager.StatusAlertFB=1;FB.login(function(a){userManager.checkFbCookies(a);userManager.callbackFBChangeStatus(a)},{scope:a});this.setLoading(!1)},setLoading:function(a){var b=document.getElementById(this.DIVLoading);a?(b||(b=document.createElement("div"),b.id=this.DIVLoading,b.className="hide",document.body.appendChild(b)),
b.className="show"):b&&(b.className="hide")}};
/***********************************
 Clase
 ***********************************/
function MvZoomImgs() {
    //Declaracion de Variables
    //Ids
    this.IdDiv = 'ShowImg';
    this.IdDivFondo = 'ShowImg_OverLay';
    this.IdDivMarco = 'VisorImagenes';
    this.IdDivCerrar = "VisorImagenes_Cerrar";
    this.IdImg = 'ShowImg_Image';
    this.IdVideo = 'ShowVideo_Video';
    this.IdDivPublicidad = 'VisorImagenes_Publi';
    this.IdDivBotones = 'VisorImagenes_Controles';
    //Class
    this.CssDiv = 'showimg';
    this.CssCerrar = 'close mvicon-close';
    this.CssImagen = 'imagen';
    this.CssPubli = 'publicidad';
    this.CssControles = 'showimg-controls';
    this.CssMarco = '';//full-width

    //
    this.ShowDiv = null;
    this.OverLay = null;
    this.aside = null;
    this.MCerrar = null;
    this.Marco = null;
    this.Publi = null;
    this.Cnt = null;
    this.Img = null;
    this.ContadorSpan = null;
    this.Contador = null;
    this.ArrImgs = [];
    this.ArrVideo = [];
    this.ArrVideoThumb = [];

    this.ImgActu = 0;

    this.Margen = 20;
    this.PubWidth = 728;//x90
    this.PubHeight = 90;//x90

    this.PubliVideo = '';
    this.OnCloseDelete = false;

    this.ActiveVideo = false;
    this.Video = null;
    //"constructor"

    document.MvZoom = this;

    this.Mosca = '';
    this.VideoLink = 'https://www.malavida.com/';
    this.VideoHeight = 380;
    this.Videowidth = 640;

    this.AppendToAside = '';

    ///Metodos
    /**************************************************************/
    this.AddEvents = function (vIdDiv, vVideo) {
        var lDiv = document.getElementById(vIdDiv);
        var lEvent = null;
        var lArr = null;
        if (vVideo) {
            lEvent = MvVideoOnClick;
            lArr = this.ArrVideo;
        } else {
            lEvent = MvImgOnClick;
            lArr = this.ArrImgs;
        }

        if (lDiv) {
            for ($i = 0; $i < lDiv.children.length && $i < lArr.length; $i++) {
                if (vVideo)
                    lDiv.children[$i].IdVideo = $i;
                else
                    lDiv.children[$i].IdImg = $i;

                if (lDiv.children[$i].addEventListener)
                    lDiv.children[$i].addEventListener('click', lEvent, false);
                else if (lDiv.children[$i].attachEvent) {
                    lDiv.children[$i].attachEvent('onclick', lEvent)
                }
            }

        }
    };
    /**************************************************************/
    this.AddImg = function (vId, vImg) {
        this.ArrImgs.push(vImg);
    };
    /**************************************************************/
    this.AddVideo = function (vId, vVideo, vTbnail) {
        this.ArrVideo.push(vVideo);
        this.ArrVideoThumb.push(vTbnail);
    };
    /**************************************************************/
    this.ShowImg = function (vIdImg) {
        this.Show(vIdImg, false);
    };
    /**************************************************************/
    this.ShowVideo = function (vIdVideo) {
        this.Show(vIdVideo, true);
    };
    /**************************************************************/
    this.Show = function (vId, vVideo) {
        var lUrl;
        var lImg;
        var lBtn;
        var lArr;
        if (vVideo) {
            this.ActiveVideo = true;
            lArr = this.ArrVideo;
        } else {
            this.ActiveVideo = false;
            lArr = this.ArrImgs;
        }
        //vId--;
        if (vId >= lArr.length)
            vId = 0;
        else if (vId < 0) vId = lArr.length - 1;


        if (vId < lArr.length && vId >= 0) {
            this.ImgActu = vId;
            lUrl = lArr[vId];
            if (!this.ShowDiv) {
                this.ShowDiv = document.createElement('div');
                this.ShowDiv.id = this.IdDiv;
                if (this.CssDiv) this.ShowDiv.className = this.CssDiv;

                this.ShowDiv.style.display = '';

                this.OverLay = document.createElement('div');
                this.OverLay.id = this.IdDivFondo;
                this.OverLay.onclick = function () {
                    document.MvZoom.CloseImg();
                };
                MV_DivMaximize(this.OverLay);
                this.ShowDiv.appendChild(this.OverLay);

                //Creamos el Marco
                this.Marco = document.createElement('div');
                this.Marco.id = this.IdDivMarco;
                if (this.AppendToAside) {
                    if (this.CssMarco) this.Marco.className = this.CssMarco;
                } else
                    this.Marco.className = 'lite';
                this.ShowDiv.appendChild(this.Marco);
                //"article"
                this.Body = document.createElement('div');
                this.Body.id = this.IdDivMarco + '_body';
                this.Marco.appendChild(this.Body);

                //Controles
                this.Cnt = document.createElement('div');
                this.Cnt.className = this.CssControles;
                this.Body.appendChild(this.Cnt);
                //Boton Previo
                lBtn = document.createElement('BUTTON');
                lBtn.className = 'prev mvicon-arrowdown';
                lBtn.onclick = function () {
                    document.MvZoom.Previous();
                };
                this.Cnt.appendChild(lBtn);
                //Contador
                this.Contador = document.createTextNode((vId + 1) + '/' + lArr.length);
                this.ContadorSpan = document.createElement('span');
                this.ContadorSpan.className = 'pos';
                this.ContadorSpan.appendChild(this.Contador);

                this.Cnt.appendChild(this.ContadorSpan);
                //Boton Siguiente
                lBtn = document.createElement('BUTTON');
                lBtn.className = 'next mvicon-arrowup';
                lBtn.onclick = function () {
                    document.MvZoom.Next();
                };
                this.Cnt.appendChild(lBtn);


                //aside
                this.aside = document.createElement('aside');

                this.Marco.appendChild(this.aside);
                //Boton cerrar
                this.MCerrar = document.createElement('div');
                this.MCerrar.id = this.IdDivCerrar;
                this.MCerrar.className = this.CssCerrar;
                this.MCerrar.onclick = function () {
                    document.MvZoom.CloseImg();
                };
                this.aside.appendChild(this.MCerrar);

                if (this.AppendToAside) {
                    this.DivAppend = document.createElement('div');
                    this.DivAppend.innerHTML = this.AppendToAside;
                    this.aside.appendChild(this.DivAppend);
                }

                //A�adimos contenedor de video
                this.Video = document.createElement('div');
                this.Video.id = this.IdVideo;
                this.Video.className = this.CssImagen;
                this.Body.appendChild(this.Video);
                //A�adimos contenedor de imagen
                this.Img = document.createElement('img');
                this.Img.id = this.IdImg;
                this.Img.className = this.CssImagen;
                this.Body.appendChild(this.Img);

                //Imagen
                if (vVideo)
                    this.LoadVideo(lUrl);
                else
                    this.LoadImg(lUrl);
                //Publicidad

                if (this.PubliVideo) {
                    this.PubliVideo = this.PubliVideo.replace('jsscript', 'script');
                    this.PubliVideo = this.PubliVideo.replace('/jsscript', '/script');
                    var lTxtAux = "<script type='text/javajsscript'>";
                    var lPos = this.PubliVideo.indexOf(lTxtAux);

                    this.Publi = document.createElement('div');
                    this.Publi.id = this.IdDivPublicidad;
                    this.Publi.className = this.CssPubli;


                    if (lPos >= 0) {//Si usa script metemos iframe
                        var lIframe = document.createElement('IFRAME');
                        lIframe.id = "testFrame";
                        lIframe.src = "https://www.malavida.com/pubalt/000x000";
                        lIframe.frameBorder = 0;
                        /*
                        lIframe.style.overflow ='hidden';
                        lIframe.style.width = '750px';
                        lIframe.style.marginTop = '-8px';
                        lIframe.style.marginLeft = '-10px';
                        lIframe.style.border = 'none';
                        */

                        this.Publi.appendChild(lIframe);
                    } else {
                        this.Publi.innerHTML = this.PubliVideo;
                    }

                    this.Marco.appendChild(this.Publi);
                }

                document.body.appendChild(this.ShowDiv);
                window.onresize = this.Resize;
                document.mv_backup = document.onkeydown;
                document.onkeydown = this.KeyPress;

            } else {
                if (vVideo)
                    this.LoadVideo(lUrl);
                else
                    this.LoadImg(lUrl);
                this.ShowDiv.style.display = '';
                if (this.Contador.textContent)
                    this.Contador.textContent = (vId + 1) + '/' + lArr.length;
                else
                    this.Contador.nodeValue = (vId + 1) + '/' + lArr.length;

                var lAux = (vId + 1);
                lAux = lAux + '/' + lArr.length;
                document.mv_backup = document.onkeydown;
                document.onkeydown = this.KeyPress;
            }
            if (vVideo) ShowFlvPlayer(this.IdVideo, vId);
        }

    };
    /**************************************************************/
    this.LoadImg = function (vUrl) {
        var lImgObj;
        var lImg;
        var lImgH;
        var lImgW;
        var lTopScroll;
        var lHeight;
        var lWidth;


        //lImg=document.getElementById(this.IdImg);
        //if(lImg){
        // lImg.src='';
        if (this.Img) {
            this.Img.src = '';
        } else {
            this.Img = document.createElement('img');
            this.Img.id = this.IdImg;
            this.Img.className = this.CssImagen;
            this.Marco.appendChild(this.Img);
        }
        /*var lDiv=document.getElementById(this.IdVideo );
        if(lDiv){
         lDiv.innerHTML='';
         lDiv.style.display='none';
        }
        */
        if (this.Video) {
            this.Video.innerHTML = '';
            this.Video.style.display = 'none';
        }
        this.Img.style.display = '';


        lImgObj = new Image();
        lImgObj.src = vUrl;
        lImgH = lImgObj.height;
        lImgW = lImgObj.width;
        //Si no se ha cargado la imagen, le metemos el "default"
        if (lImgH == 0) lImgH = 400;
        if (lImgW == 0) lImgW = 550;
        this.Img.src = vUrl;

        //Posiciones.

        lTopScroll = document.documentElement.scrollTop;
        if (lTopScroll == 0)
            lTopScroll = document.body.scrollTop;

        lHeight = document.documentElement.clientHeight;// document.body.offsetHeight;
        lWidth = document.body.offsetWidth;
        lHeight = parseInt(lHeight / 2) - (parseInt((lImgH + this.PubHeight) / 2) + this.Margen);

        lWidth = parseInt(lWidth / 2) - (parseInt(this.PubWidth / 2) + this.Margen);
        if (lHeight > 0)
            this.Marco.style.top = (lTopScroll + lHeight) + 'px';
        else
            this.Marco.style.top = (lTopScroll + 40) + 'px';
        /*        
      if(lWidth>0) this.Marco.style.left = lWidth +'px';
      this.Marco.style.width =    this.PubWidth +(this.Margen*2)+'px';      
      */
        return this.Img;
    };
    /**************************************************************/
    this.LoadVideo = function (vUrl) {
        var lVideo = vUrl;


        //var lDiv=document.getElementById(this.IdVideo );
        //if(lDiv){

        if (this.Video) {
            lDiv = this.Video;
            lDiv.innerHTML = '';
        } else {
            this.Video = document.createElement('div');
            this.Video.id = this.IdVideo;
            this.Video.className = this.CssImagen;
            this.Marco.appendChild(this.Video);
            lDiv = this.Video;
        }
        //lImg=document.getElementById(this.IdImg);
        //if(lImg)this.Img.style.display='none';
        if (this.Img) this.Img.style.display = 'none';
        lDiv.style.display = '';


        //        var lTxtAux = "<script type='text/javajsscript'>";
//          var lPos = this.PubliVideo.indexOf(lTxtAux);

        lDiv.innerHTML = '';
        //ShowFlvPlayer(this.IdVideo);


        var lHeight;
        var lWidth;
        var lVideoH = this.VideoHeight;
        //Posiciones.

        var lTopScroll = document.documentElement.scrollTop;
        if (lTopScroll == 0)
            lTopScroll = document.body.scrollTop;
        lHeight = document.documentElement.clientHeight;// document.body.offsetHeight;
        lWidth = document.body.offsetWidth;
        lHeight = parseInt(lHeight / 2) - (parseInt((lVideoH + this.PubHeight) / 2) + this.Margen);
        lWidth = parseInt(lWidth / 2) - (parseInt(this.PubWidth / 2) + this.Margen);
        if (lHeight > 0)
            this.Marco.style.top = (lTopScroll + lHeight) + 'px';
        else
            this.Marco.style.top = (lTopScroll + 40) + 'px';
        /*
          if(lWidth>0) this.Marco.style.left = lWidth +'px';
          this.Marco.style.width =    this.PubWidth +(this.Margen*2)+'px';
        */
    };
    /**************************************************************/
    this.CloseImg = function () {
        if (this.ShowDiv) {
            if (this.OnCloseDelete) {
                //Borramos los componentes.
                this.Marco.removeChild(this.Cnt);
                this.Cnt = null;
                this.Marco.removeChild(this.Publi);
                this.Publi = null;
                this.Marco.removeChild(this.Img);
                this.Img = null;
                this.Marco.removeChild(this.MCerrar);
                this.MCerrar = null;

                this.ShowDiv.removeChild(this.Marco);
                this.Marco = null;
                this.ShowDiv.removeChild(this.OverLay);
                this.OverLay = null;
                document.body.removeChild(this.ShowDiv);
                this.ShowDiv = null;
            } else {
                this.ShowDiv.style.display = 'none';

            }
            document.onkeydown = document.mv_backup;
        }


    };
    /**************************************************************/
    this.Next = function () {
        if (this.ActiveVideo)
            this.ShowVideo(this.ImgActu + 1);
        else
            this.ShowImg(this.ImgActu + 1);
    };
    /**************************************************************/
    this.Previous = function () {
        if (this.ActiveVideo)
            this.ShowVideo(this.ImgActu - 1);
        else
            this.ShowImg(this.ImgActu - 1);
    };

    /**************************************************************/
    this.KeyPress = function (e) {
        if (window.event) { // IE
            keynum = window.event.keyVideo
        } else if (e.which) { // Netscape/Firefox/Opera
            keynum = e.which
        }
        if (keynum == 27) {//Esc
            if (document.MvZoom) document.MvZoom.CloseImg();
        }
    };
    /**************************************************************/
    this.Resize = function () {
        var lDiv;
        if (document.MvZoom.ShowDiv) {//Si no existe el obtejo base ignoramos
            if (document.MvZoom.ShowDiv.style.display != 'none') {// Si no s emuestra ignoramos
                lDiv = document.getElementById(document.MvZoom.IdDivFondo);
                if (lDiv) MV_DivMaximize(lDiv);
            }
        }
    };
    this.AddPubli = function (vString) {


        this.PubliVideo = vString;
    };
}

/***********************************
 Funciones sueltas
 ***********************************/
function MV_DivMaximize(vDiv) {
    vDiv.style.width = document.body.offsetWidth + 'px';//'100%';//document.body.offsetWidth+'px';
    vDiv.style.height = (document.body.offsetHeight) + 'px';
}

function MvImgOnClick() {
    var lImg = null;
    if (this.IdImg == undefined) {
        if (this.event) {
            if (this.event.srcElement) {
                lImg = this.event.srcElement.IdImg;
            }
        }
    } else
        lImg = this.IdImg;
    if (lImg !== null)
        document.MvZoom.ShowImg(lImg);
}

function MvVideoOnClick() {
    var lIdVideo = null;
    if (this.IdVideo == undefined) {
        if (this.event) {
            if (this.event.srcElement) {
                lIdVideo = this.event.srcElement.IdVideo;
            }
        }
    } else
        lIdVideo = this.IdVideo;
    if (lIdVideo !== null)
        document.MvZoom.ShowVideo(lIdVideo);
}

function ShowFlvPlayer(vIdDiv, vIdVideo) {
    var lTmp = document.MvZoom;
    var so = new SWFObject('https://www.malavida.com/jwflvplayer/player-licensed.swf', 'ply', lTmp.Videowidth, lTmp.VideoHeight, '9', '#000000');
    so.addParam('allowfullscreen', 'true');
    so.addParam('allowscriptaccess', 'always');
    so.addParam('wmode', 'opaque');
    so.addVariable('file', lTmp.ArrVideo[vIdVideo]);
    so.addVariable('image', lTmp.ArrVideoThumb[vIdVideo]);
    if (lTmp.Mosca) so.addVariable('logo.file', lTmp.Mosca);
    if (lTmp.VideoLink) so.addVariable('logo.link', lTmp.VideoLink);
    so.addVariable('logo.linktarget', '_blank');
    so.addVariable('logo.hide', 'false');
    so.addVariable('logo.position', 'top-right');
    so.addVariable('bufferlength', '15');
    so.addVariable('duration', '204');
    so.write(vIdDiv);
}/*
 loadCSS: load a CSS file asynchronously. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT */
(function(h){var c=function(c,e,n){function k(a){if(b.body)return a();setTimeout(function(){k(a)})}function f(){a.addEventListener&&a.removeEventListener("load",f);a.media=n||"all"}var b=h.document,a=b.createElement("link");if(e)var d=e;else{var l=(b.body||b.getElementsByTagName("head")[0]).childNodes;d=l[l.length-1]}var m=b.styleSheets;a.rel="stylesheet";a.href=c;a.media="only x";k(function(){d.parentNode.insertBefore(a,e?d:d.nextSibling)});var g=function(b){for(var d=a.href,c=m.length;c--;)if(m[c].href===
d)return b();setTimeout(function(){g(b)})};a.addEventListener&&a.addEventListener("load",f);a.onloadcssdefined=g;g(f);return a};"undefined"!==typeof exports?exports.loadCSS=c:h.loadCSS=c})("undefined"!==typeof global?global:this);
