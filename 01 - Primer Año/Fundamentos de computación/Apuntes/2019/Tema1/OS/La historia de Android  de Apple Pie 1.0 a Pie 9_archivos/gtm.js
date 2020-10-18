
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"14",
  
  "macros":[{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],".parentNode.getAttribute(\"class\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],".parentNode.getAttribute(\"title\");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(void 0!==",["escape",["macro",3],8,16],")return ",["escape",["macro",3],8,16],";var a=window.location.pathname,c=\/\\\/es\\\/(articulos|noticias|listas|analisis|guias-trucos|post)\\\/.+\/,d=\/\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl|jp|ru)\\\/([a-z]{1,10})\\\/(s|sc)\\\/(.*)$\/,e=\/\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl|jp|ru)\\\/([a-z]{1,10})\\\/cat\\\/(.*)$\/,f=\/\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl)\\\/(editors|legal|privacy|contact)$\/,g=\/\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl|jp|ru)\\\/soft\\\/(.*)\\\/$\/,h=\/\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl|jp|ru)\\\/soft\\\/(.*)\\\/(descargar|download|acceder|visit)$\/,\nk=\/\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl|jp|ru)\\\/soft\\\/(.*)\\\/q\\\/(.*).html$\/,l=\/\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl|jp|ru)\\\/([a-z]{1,10}\\\/)?$\/,b=\/\\\/es\\\/(articulos|noticias|listas|analisis|guias-trucos)\\\/?$\/,m=\/\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl|jp|ru)\\\/soft\\\/(.*)\\\/q\\\/$\/,n=\/\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl|jp|ru)\\\/soft\\\/(.*)\\\/video\\\/(.*)$\/,p=\/\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl|jp|ru)\\\/users\\\/(.*)$\/;return null!==a.match(c)?\"Articulos\":null!==a.match(d)?\"Busqueda\":null!==a.match(e)?\"Categoria\":null!==\na.match(f)?\"Corporativo\":null!==a.match(g)?\"Ficha\":null!==a.match(h)?\"Ficha Descarga\":null!==a.match(k)?\"Ficha QA\":null!==a.match(l)\u0026\u0026null===a.match(b)?\"Home\":null!==a.match(b)?\"Home Articulos\":null!==a.match(m)?\"Listado QA\":null!==a.match(n)?\"Video\":null!==a.match(p)?\"Zona Usuario\":\"Otros\"}catch(q){console.log(q)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"articleType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(void 0!==",["escape",["macro",5],8,16],")return ",["escape",["macro",5],8,16],";var a=window.location.pathname,b=\/.*\\\/analisis.*\/,c=\/.*\\\/guias-trucos.*\/,d=\/.*\\\/listas.*\/,e=\/.*\\\/noticias.*\/,f=\/.*\\\/entrevistas.*\/,g=\/.*\\\/opinion.*\/,h=\/.*\\\/post.*\/;if(null!==a.match(b))return\"Analisis\";if(null!==a.match(c))return\"Guias y Trucos\";if(null!==a.match(d))return\"Listas\";if(null!==a.match(e))return\"Noticias\";if(null!==a.match(f))return\"Entrevistas\";if(null!==a.match(g))return\"Opinion\";if(null!==a.match(h))return\"Post\"}catch(k){console.log(k)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"platform"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(void 0!==",["escape",["macro",7],8,16],")return ",["escape",["macro",7],8,16],";var a=window.location.pathname,b=\/.*\\\/android\\\/.*\/,c=\/.*\\\/iphone\\\/.*\/,d=\/.*\\\/linux\\\/.*\/,e=\/.*\\\/mac\\\/.*\/,f=\/.*\\\/webapps\\\/.*\/,g=\/^((?!.*\\\/(android\\\/|iphone\\\/|mac\\\/|linux\\\/|webapps\\\/|articulos\\\/|noticias|listas|analisis|guias-trucos|entrevistas|opinion|post).*).)*$\/;if(null!==a.match(b))return\"Android\";if(null!==a.match(c))return\"iPhone\";if(null!==a.match(d))return\"Linux\";if(null!==a.match(e))return\"Mac\";if(null!==a.match(f))return\"Webapps\";\nif(null!==a.match(g))return\"Windows\"}catch(h){console.log(h)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"UserPanel\").getAttribute(\"data-userid\")||void 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timeToSerp"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 18E5\u003E",["escape",["macro",10],8,16],"?",["escape",["macro",10],8,16],"\/1E3:void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003Cdocument.getElementsByClassName(\"jwplayer\").length?!0:void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){for(;!a.matches(b)\u0026\u0026!a.matches(\"body\");)a=a.parentElement;return a.matches(b)?a:void 0}})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"virtualurl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"softwareCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"softwareName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(b,a){for(var d=[],c=-1;-1!=(c=b.indexOf(a,c+1));)d.push(c);return d}try{if(void 0!==",["escape",["macro",17],8,16],")return ",["escape",["macro",17],8,16],";var a=window.location.pathname;if(\"Ficha\"===",["escape",["macro",4],8,16],")return a.substring(a.indexOf(\"\/soft\/\")+6,e(a,\"\/\")[3]).split(\"-\").join(\" \").replace(\/\\b\\w\/g,function(a){return a.toUpperCase()})}catch(b){console.log(\"Error in JS_SoftwareName-2 :::::::::: \"+b)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(void 0!==",["escape",["macro",16],8,16],")return ",["escape",["macro",16],8,16],";if(\"Ficha\"===",["escape",["macro",4],8,16],"){for(var b=document.querySelectorAll(\"nav.breadcrumb ol li a\"),c=\"\",a=1;a\u003Cb.length;a++)b[a].innerHTML!==",["escape",["macro",18],8,16],"\u0026\u0026(c+=\"\/\"+b[a].innerHTML);return c||void 0}}catch(d){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"softwareRating"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(void 0!==",["escape",["macro",20],8,16],")return ",["escape",["macro",20],8,16],";var b=[],a=document.getElementsByTagName(\"li\");if(\"Ficha\"===",["escape",["macro",4],8,16],"){for(i=0;i\u003Ca.length;i++)-1!=a[i].className.indexOf(\"current-rating\")\u0026\u0026b.push(a[i].className);return b[\"1\"].replace(\"current-rating-\",\"\")}}catch(c){console.log(c)}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"softwareLicenceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(void 0!==",["escape",["macro",25],8,16],")return ",["escape",["macro",25],8,16],";var b=document.getElementsByClassName(\"data license\");if(\"Ficha\"===",["escape",["macro",4],8,16],")return b[0].innerHTML.replace(\/\\b\\w\/g,function(a){return a.toUpperCase()})}catch(a){console.log(a)}})();"]
    },{
      "function":"__j",
      "vtp_name":"gaInstalled"
    },{
      "function":"__dbg"
    },{
      "function":"__c",
      "vtp_value":"UA-83946393-1"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-9"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-1"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-6"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-4"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-8"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-10"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-17"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-51"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-26"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-27"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-37"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-52"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-38"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",30],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\\/fr\\\/.*|.*\\.fr\\..*|http(s)?:\\\/\\\/fr\\..*","value",["macro",31]],["map","key",".*\\\/es\\\/.*|.*\\.es\\..*|http(s)?:\\\/\\\/es\\..*","value",["macro",32]],["map","key",".*\\\/de\\\/.*|.*\\.de\\..*|http(s)?:\\\/\\\/de\\..*","value",["macro",33]],["map","key",".*\\\/en\\\/.*|.*\\.en\\..*|http(s)?:\\\/\\\/en\\..*","value",["macro",34]],["map","key",".*\\\/br\\\/.*|.*\\.br\\..*|http(s)?:\\\/\\\/br\\..*","value",["macro",35]],["map","key",".*\\\/it\\\/.*|.*\\.it\\..*|http(s)?:\\\/\\\/it\\..*","value",["macro",36]],["map","key",".*\\\/ro\\\/.*|.*\\.ro\\..*|http(s)?:\\\/\\\/ro\\..*","value",["macro",37]],["map","key",".*\\\/ru\\\/.*|.*\\.ru\\..*|http(s)?:\\\/\\\/ru\\..*","value",["macro",38]],["map","key",".*\\\/pl\\\/.*|.*\\.pl\\..*|http(s)?:\\\/\\\/pl\\..*","value",["macro",39]],["map","key",".*\\\/nl\\\/.*|.*\\.nl\\..*|http(s)?:\\\/\\\/nl\\..*","value",["macro",40]],["map","key",".*\\\/se\\\/.*|.*\\.se\\..*|http(s)?:\\\/\\\/se\\..*","value",["macro",41]],["map","key",".*\\\/jp\\\/.*|.*\\.jp\\..*|http(s)?:\\\/\\\/jp\\..*","value",["macro",42]],["map","key",".*\\\/dk\\\/.*|.*\\.dk\\..*|http(s)?:\\\/\\\/dk\\..*","value",["macro",43]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",28],
      "vtp_map":["list",["map","key","true","value",["macro",29]],["map","key","false","value",["macro",44]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",27],
      "vtp_defaultValue":["macro",45],
      "vtp_map":["list",["map","key","true","value",["macro",29]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialTarget"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNetwork"
    },{
      "function":"__c",
      "vtp_value":"UA-62129-49"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",28],
      "vtp_map":["list",["map","key","true","value","UA-XXXXX-1"],["map","key","false","value",["macro",54]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",27],
      "vtp_defaultValue":["macro",55],
      "vtp_map":["list",["map","key","true","value","UA-XXXXX-1"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventsDataLayer"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){switch(",["escape",["macro",4],8,16],"){case \"Home\":var a=",["escape",["macro",0],8,16],".getAttribute(\"title\");-1\u003Ca.indexOf(\"-\")\u0026\u0026(a=a.substring(0,a.indexOf(\"-\")-1));break;case \"Ficha\":a=document.getElementsByClassName(\"profile-title\")[0].getElementsByTagName(\"a\")[0].innerHTML;-1\u003Ca.indexOf(\"Descargar\")\u0026\u0026(a=a.split(\" \"),a.shift(),a=a.join(\" \"));break;case \"Ficha Descarga\":a=document.getElementsByClassName(\"profile-title\")[0].getElementsByTagName(\"a\")[0].innerHTML,-1\u003Ca.indexOf(\"Descargar\")\u0026\u0026(a=a.split(\" \"),\na.shift(),a=a.join(\" \"))}return a})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.start"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",13],8,16],"(",["escape",["macro",0],8,16],",\"div[id^\\x3d'ScrollBox']\");return\"undefined\"!==typeof a?-1!==",["escape",["macro",1],8,16],".indexOf(\"title\")?!0:!1:!1}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",13],8,16],"(",["escape",["macro",0],8,16],",\"div[id^\\x3d'ScrollBox']\");return\"undefined\"!==typeof a?-1!==",["escape",["macro",1],8,16],".indexOf(\"preview\")?!0:!1:!1}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(!0===",["escape",["macro",69],8,16],")return\"Thumb\";if(!0===",["escape",["macro",68],8,16],")return\"Link\"})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__f",
      "vtp_component":"URL"
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","page","value",["macro",15]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]],["map","index","2","group",["macro",4]],["map","index","3","group",["macro",19]],["map","index","4","group",["macro",21]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",22]],["map","index","2","dimension",["macro",9]],["map","index","3","dimension",["template",["macro",23]," : ",["macro",24]]],["map","index","4","dimension",["macro",4]],["map","index","5","dimension",["macro",8]],["map","index","6","dimension",["macro",6]],["map","index","7","dimension",["macro",19]],["map","index","8","dimension",["macro",26]],["map","index","9","dimension",["macro",18]],["map","index","10","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",46],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",47],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]],["map","index","2","group",["macro",4]],["map","index","3","group",["macro",19]],["map","index","4","group",["macro",21]]],
      "vtp_eventAction":["macro",48],
      "vtp_eventLabel":["macro",49],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","page","value",["macro",15]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",22]],["map","index","2","dimension",["macro",9]],["map","index","3","dimension",["template",["macro",23]," : ",["macro",24]]],["map","index","4","dimension",["macro",4]],["map","index","5","dimension",["macro",8]],["map","index","6","dimension",["macro",6]],["map","index","7","dimension",["macro",19]],["map","index","8","dimension",["macro",26]],["map","index","9","dimension",["macro",18]],["map","index","10","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",46],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Outbound Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]],["map","index","2","group",["macro",4]],["map","index","3","group",["macro",19]],["map","index","4","group",["macro",21]]],
      "vtp_eventAction":["macro",50],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","page","value",["macro",15]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",22]],["map","index","2","dimension",["macro",9]],["map","index","3","dimension",["template",["macro",23]," : ",["macro",24]]],["map","index","4","dimension",["macro",4]],["map","index","5","dimension",["macro",8]],["map","index","6","dimension",["macro",6]],["map","index","7","dimension",["macro",19]],["map","index","8","dimension",["macro",26]],["map","index","9","dimension",["macro",18]],["map","index","10","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",46],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","page","value",["macro",15]]],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",51],
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]],["map","index","2","group",["macro",4]],["map","index","3","group",["macro",19]],["map","index","4","group",["macro",21]]],
      "vtp_enableLinkId":false,
      "vtp_socialActionTarget":["macro",52],
      "vtp_socialNetwork":["macro",53],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",22]],["map","index","2","dimension",["macro",9]],["map","index","3","dimension",["template",["macro",23]," : ",["macro",24]]],["map","index","4","dimension",["macro",4]],["map","index","5","dimension",["macro",8]],["map","index","6","dimension",["macro",6]],["map","index","7","dimension",["macro",19]],["map","index","8","dimension",["macro",26]],["map","index","9","dimension",["macro",18]],["map","index","10","dimension",["macro",21]]],
      "vtp_trackingId":["macro",46],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":30
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Bounce to SERP",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]],["map","index","2","group",["macro",4]],["map","index","3","group",["macro",19]],["map","index","4","group",["macro",21]]],
      "vtp_eventAction":["macro",30],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"],["map","fieldName","cookieDomain","value","auto"],["map","fieldName","page","value",["macro",15]]],
      "vtp_eventValue":["macro",10],
      "vtp_metric":["list",["map","index","1","metric",["macro",11]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",22]],["map","index","2","dimension",["macro",9]],["map","index","3","dimension",["template",["macro",23]," : ",["macro",24]]],["map","index","4","dimension",["macro",4]],["map","index","5","dimension",["macro",8]],["map","index","6","dimension",["macro",6]],["map","index","7","dimension",["macro",19]],["map","index","8","dimension",["macro",26]],["map","index","9","dimension",["macro",18]],["map","index","10","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",46],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","page","value",["macro",15]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]],["map","index","2","group",["macro",4]],["map","index","3","group",["macro",19]],["map","index","4","group",["macro",21]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",22]],["map","index","2","dimension",["macro",9]],["map","index","3","dimension",["template",["macro",23]," : ",["macro",24]]],["map","index","4","dimension",["macro",4]],["map","index","5","dimension",["macro",8]],["map","index","6","dimension",["macro",6]],["map","index","7","dimension",["macro",19]],["map","index","8","dimension",["macro",26]],["map","index","9","dimension",["macro",18]],["map","index","10","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",56],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":52
    },{
      "function":"__cl",
      "tag_id":55
    },{
      "function":"__cl",
      "tag_id":56
    },{
      "function":"__cl",
      "tag_id":57
    },{
      "function":"__cl",
      "tag_id":58
    },{
      "function":"__cl",
      "tag_id":59
    },{
      "function":"__cl",
      "tag_id":60
    },{
      "function":"__cl",
      "tag_id":61
    },{
      "function":"__cl",
      "tag_id":62
    },{
      "function":"__cl",
      "tag_id":63
    },{
      "function":"__cl",
      "tag_id":64
    },{
      "function":"__cl",
      "tag_id":65
    },{
      "function":"__cl",
      "tag_id":66
    },{
      "function":"__cl",
      "tag_id":67
    },{
      "function":"__cl",
      "tag_id":68
    },{
      "function":"__cl",
      "tag_id":69
    },{
      "function":"__cl",
      "tag_id":70
    },{
      "function":"__cl",
      "tag_id":71
    },{
      "function":"__cl",
      "tag_id":72
    },{
      "function":"__hl",
      "tag_id":73
    },{
      "function":"__cl",
      "tag_id":74
    },{
      "function":"__cl",
      "tag_id":75
    },{
      "function":"__cl",
      "tag_id":76
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({category:\"Conversion\",action:\"DownloadSoftware-PrevioFicha\",label:",["escape",["macro",59],8,16],",event:\"eventga\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({category:\"Conversion\",action:\"DownloadSoftware-PrevioListado\",label:",["escape",["macro",18],8,16],",event:\"eventga\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({category:\"Conversion\",action:\"DownloadSoftware\",label:",["escape",["macro",59],8,16],",event:\"eventga\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){var b=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,a=window.innerHeight||(document.documentElement||document.body).clientHeight;b\u003E=a-.5*a\u0026\u0026(c=!0);d()}function f(){a=!0;d()}function d(){c\u0026\u0026a\u0026\u0026!e\u0026\u0026(e=!0,dataLayer.push({event:\"eventga\",category:\"NoBounce\",action:\"NoBounce\",label:void 0}))}var a=!1,c=!1,e=!1;setTimeout(f,2E4);window.addEventListener?window.addEventListener(\"scroll\",b,!1):window.attachEvent(\"onScroll\",b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({category:\"Conversion\",action:\"DownloadSoftware-PrevioHome\",label:",["escape",["macro",59],8,16],",event:\"eventga\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar socialTarget=",["escape",["macro",50],8,16],".split(\"%2F\").join(\"\/\").split(\"%3A\").join(\"::\");dataLayer.push({socialNetwork:\"Facebook\",socialAction:\"Compartir Software\",socialTarget:socialTarget,event:\"socialevent\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar socialTarget=",["escape",["macro",50],8,16],".split(\"%2F\").join(\"\/\").split(\"%3A\").join(\"::\");dataLayer.push({socialNetwork:\"Google+\",socialAction:\"Compartir Software\",socialTarget:socialTarget,event:\"socialevent\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar socialTarget=",["escape",["macro",50],8,16],".split(\"%2F\").join(\"\/\").split(\"%3A\").join(\"::\");dataLayer.push({socialNetwork:\"Twitter\",socialAction:\"Compartir Software\",socialTarget:socialTarget,event:\"socialevent\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({socialNetwork:\"Facebook\",socialAction:\"Siguenos\",socialTarget:",["escape",["macro",50],8,16],",event:\"socialevent\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({socialNetwork:\"Google+\",socialAction:\"Siguenos\",socialTarget:",["escape",["macro",50],8,16],",event:\"socialevent\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({socialNetwork:\"Twitter\",socialAction:\"Siguenos\",socialTarget:",["escape",["macro",50],8,16],",event:\"socialevent\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({socialNetwork:\"Pinterest\",socialAction:\"Siguenos\",socialTarget:",["escape",["macro",50],8,16],",event:\"socialevent\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({socialNetwork:\"Youtube\",socialAction:\"Siguenos\",socialTarget:",["escape",["macro",50],8,16],",event:\"socialevent\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({socialNetwork:\"LinkedIn\",socialAction:\"Siguenos\",socialTarget:",["escape",["macro",50],8,16],",event:\"socialevent\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar voto=",["escape",["macro",62],8,16],".substring(",["escape",["macro",62],8,16],".indexOf(\"-\")+1);dataLayer.push({category:\"Interaccion\",action:\"Voto Software\",label:voto,event:\"eventga\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({category:\"Interaccion\",action:\"Comentario Software\",label:\"Opinar\",event:\"eventga\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(!0!==",["escape",["macro",58],8,16],")var body=document.getElementsByTagName(\"body\")[0],url=",["escape",["macro",60],8,16],".match(\/(.*)\\\/$\/)?",["escape",["macro",60],8,16],"+\"registro-usuario-modal\":",["escape",["macro",60],8,16],"+\"\/registro-usuario-modal\",MutationObserver=window.MutationObserver||window.WebKitMutationObserver,observer=new MutationObserver(function(a){a.forEach(function(a){try{if(\"childList\"===a.type\u0026\u0026\"AuxFormRegister\"===a.addedNodes[0].id){var b=document.getElementById(\"FormRegister\");-1!==b.className.indexOf(\"show\")\u0026\u0026\ndataLayer.push({virtualurl:url,event:\"virtualpageview\"});var c=new MutationObserver(function(a){a.forEach(function(a){\"attributes\"===a.type\u0026\u0026-1!==a.target.className.indexOf(\"show\")\u0026\u0026dataLayer.push({virtualurl:url,event:\"virtualpageview\"})})});c.observe(b,config)}}catch(d){}})});var config={attributes:!0,childList:!0,characterData:!0};observer.observe(body,config)}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var divFormLogin=document.getElementById(\"DivFormLogin\"),urlLogin=",["escape",["macro",60],8,16],".match(\/(.*)\\\/$\/)?",["escape",["macro",60],8,16],"+\"login-usuario-modal\":",["escape",["macro",60],8,16],"+\"\/login-usuario-modal\",MutationObserver=window.MutationObserver||window.WebKitMutationObserver,observer3=new MutationObserver(function(a){a.forEach(function(a){try{if(\"childList\"===a.type){var b=document.getElementById(\"FormLogin\");\"show\"===b.className\u0026\u0026dataLayer.push({virtualurl:urlLogin,event:\"virtualpageview\"});var c=new MutationObserver(function(a){a.forEach(function(a){\"attributes\"===\na.type\u0026\u0026\"show\"===b.className\u0026\u0026dataLayer.push({virtualurl:urlLogin,event:\"virtualpageview\"})})});c.observe(b,config)}}catch(d){}})}),config={attributes:!0,childList:!0,characterData:!0};observer3.observe(divFormLogin,config)}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var url=",["escape",["macro",60],8,16],".match(\/(.*)\\\/$\/)?",["escape",["macro",60],8,16],"+\"registro-usuario-estandar\":",["escape",["macro",60],8,16],"+\"\/registro-usuario-estandar\";dataLayer.push({virtualurl:url,event:\"virtualpageview\"})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var url=",["escape",["macro",60],8,16],".match(\/(.*)\\\/$\/)?",["escape",["macro",60],8,16],"+\"registro-usuario-facebook\":",["escape",["macro",60],8,16],"+\"\/registro-usuario-facebook\";dataLayer.push({virtualurl:url,event:\"virtualpageview\"})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{var formMsg=document.getElementById(\"CommentFormMsg\"),MutationObserver=window.MutationObserver||window.WebKitMutationObserver,observerFormMsg=new MutationObserver(function(a){a.forEach(function(a){try{\"attributes\"===a.type\u0026\u0026-1!==a.target.className.indexOf(\"notification error\")?dataLayer.push({category:\"Interaccion\",action:\"Comentario Software\",label:\"Comantario Error\",event:\"eventga\"}):dataLayer.push({category:\"Interaccion\",action:\"Comentario Software\",label:\"Comentario OK\",event:\"eventga\"}),\nobserverFormMsg.disconnect()}catch(b){}})}),config={attributes:!0,childList:!1,characterData:!1};observerFormMsg.observe(formMsg,config)}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.location.search,c=document.location.hash,b=",["escape",["macro",65],8,16],",d=",["escape",["macro",64],8,16],",e=",["escape",["macro",66],8,16],";window.history\u0026\u0026(\"gtm.js\"===b\u0026\u0026-1\u003Cdocument.referrer.indexOf(\"www.google.\")\u0026\u0026-1===a.indexOf(\"gclid\")\u0026\u0026-1===a.indexOf(\"utm_\")\u0026\u0026\"#gref\"!==c?(window.oldFragment=!1,window.history.pushState(null,null,\"#gref\")):\"gtm.js\"===b\u0026\u0026(window.oldFragment=!0),\"gtm.historyChange\"===b\u0026\u0026\"\"===d\u0026\u0026\"gref\"===e\u0026\u0026(a=(new Date).getTime()-",["escape",["macro",67],8,16],",window.oldFragment?window.history.go(-1):\ndataLayer.push({event:\"returnToSerp\",timeToSerp:a,eventCallback:function(){window.history.go(-1)}})))})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction onPlayGTM(a){jwplayer().OntGAPlay||(jwplayer().OntGAPlay=!0,dataLayer.push({event:\"eventga\",category:\"Video\",action:\"Play\",label:",["escape",["macro",30],8,16],"}))}function onCompleteGTM(a){dataLayer.push({event:\"eventga\",category:\"Video\",action:\"Complete\",label:",["escape",["macro",30],8,16],"})}jwplayer().onBeforePlay(onPlayGTM);jwplayer().onPlay(onPlayGTM);jwplayer().onComplete(onCompleteGTM);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({category:\"ScrollBox\",action:",["escape",["macro",70],8,16],",label:",["escape",["macro",61],8,16],",event:\"eventga\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({category:\"ScrollBox\",action:",["escape",["macro",70],8,16],",label:",["escape",["macro",2],8,16],",event:\"eventga\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"virtualpageview"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"eventga"
    },{
      "function":"_re",
      "arg0":["macro",50],
      "arg1":".*malavida\\.com.*|^\\s*$|.*facebook.*|.*twitter.*|.*plus\\.google.*|.*pinterest.*|.*youtube.*|.*linkedin.*|.*javascript.*"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Ficha Descarga"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"socialevent"
    },{
      "function":"_lt",
      "arg0":["macro",10],
      "arg1":"1800000"
    },{
      "function":"_gt",
      "arg0":["macro",10],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"returnToSerp"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"DownloadButton"
    },{
      "function":"_eq",
      "arg0":["macro",58],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":".*(Descargar|Downloaden|Download|Télécharger|Descarregar|Scarica|Descărca|Ladda ner|ダウンロード|アクセス|Скачать|Войти).*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"mvicon-download"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Categoria"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"mvicon-webapp"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"mv-download"
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl)\\\/([a-z]{1,10})\\\/cat\\\/(.*)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl)\\\/soft\\\/(.*)\\\/$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl)\\\/soft\\\/(.*)\\\/(descargar|download)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl)\\\/soft\\\/(.*)\\\/q\\\/$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"\\\/(es|fr|ro|se|en|br|pl|dk|de|it|nl)\\\/soft\\\/(.*)\\\/q\\\/(.*)\\.html$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",61],
      "arg1":".*(Descargar|Downloaden|Download|Télécharger|Descarregar|Scarica|Descărca|Ladda ner|Acceder|Access|Downloaden|Télécharger|Baixar|Scarica|Öffnen|Accesar|Accéder|Accedi a|ダウンロード|アクセス|Скачать|Войти).*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"app-name"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Ficha"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"button facebook"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"button gooogleplus1"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"button twitter"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"mvicon-facebook"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"mvicon-facebook button"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"button gooogleplus"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"mvicon-googleplus"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"mvicon-twitter"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"mvicon-pinterest"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"mvicon-youtube"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"mvicon-linkedin"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"star"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"submit"
    },{
      "function":"_cn",
      "arg0":["macro",58],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"std-register"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"mvicon-facebook button"
    },{
      "function":"_eq",
      "arg0":["macro",63],
      "arg1":"popstate"
    },{
      "function":"_re",
      "arg0":["macro",64],
      "arg1":"^$"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",68],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"true"
    }],
  "rules":[
    [["if",0],["add",0,5]],
    [["if",1],["add",0,5,49,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]],
    [["if",2],["add",1]],
    [["if",5],["unless",3,4],["add",2]],
    [["if",6],["add",3]],
    [["if",7,8,9],["add",4]],
    [["if",5,10],["unless",11],["add",28]],
    [["if",5,12,13],["unless",11],["add",29]],
    [["if",5,14,15],["unless",11],["add",29]],
    [["if",5,16],["unless",11],["add",30]],
    [["if",1,17],["add",31]],
    [["if",1,18],["unless",19,20,21],["add",31]],
    [["if",5,22,23],["unless",11],["add",32]],
    [["if",5,24,25],["unless",11],["add",33]],
    [["if",5,24,26],["unless",11],["add",34]],
    [["if",5,24,27],["unless",11],["add",35]],
    [["if",5,28],["unless",11,25,29],["add",36]],
    [["if",5,31],["unless",11,30],["add",37]],
    [["if",5,32],["unless",11,27],["add",38]],
    [["if",5,33],["unless",11],["add",39]],
    [["if",5,34],["unless",11],["add",40]],
    [["if",5,35],["unless",11],["add",41]],
    [["if",5,24,36],["unless",11],["add",42]],
    [["if",5,24,37],["unless",38],["add",43,48]],
    [["if",39],["add",44,45]],
    [["if",5,40],["unless",11],["add",46]],
    [["if",5,41],["unless",11],["add",47]],
    [["if",42,43,44],["add",49]],
    [["if",45,46],["add",50]],
    [["if",5,47],["unless",11],["add",51]],
    [["if",5,48],["unless",11],["add",52]]]
},
"runtime":[
[],[]
]



};
var aa,ca=this||self,da=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Da=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ea=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Fa=function(a){if(null==a)return String(a);var b=Ea.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ga=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ha=function(a){if(!a||"object"!=Fa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ga(a,"constructor")&&!Ga(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ga(a,b)},f=function(a,b){var c=b||("array"==Fa(a)?[]:{}),d;for(d in a)if(Ga(a,d)){var e=a[d];"array"==Fa(e)?("array"!=Fa(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ha(e)?(Ha(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};var u=window,C=document,Ia=navigator,Ja=C.currentScript&&C.currentScript.src,Ka=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},La=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ma=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;La(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Na=function(){if(Ja){var a=Ja.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oa=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);La(c,b);void 0!==a&&(c.src=a);return c},Pa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ra=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},D=function(a){u.setTimeout(a,0)},Sa=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xa=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ya=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Za=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var $a=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ab={},bb=function(a,b){ab[a]=ab[a]||[];ab[a][b]=!0},cb=function(a){for(var b=[],c=ab[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var db=/:[0-9]+$/,eb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ib=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=fb(a.protocol)||fb(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(db,"").toLowerCase());var g=b,h,k=fb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=hb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(db,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||bb("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=eb(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},fb=function(a){return a?a.replace(":","").toLowerCase():""},hb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
jb=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||bb("TAGGING",1),c="/"+c);var d=b.hostname.replace(db,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var kb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},nb=function(a,b,c,d){var e=lb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=mb(e,function(g){return g.Ib},b);if(1===e.length)return e[0].id;e=mb(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function ob(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=kb(b,e).indexOf(c)}
var sb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=pb(),w=0;w<v.length;++w){var x="none"!=v[w]?v[w]:void 0;if(!rb(x,t)&&ob(m+(x?"; domain="+x:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!rb(p,t)&&ob(m,a,l)}return k};function mb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function lb(a,b){for(var c=[],d=kb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Ib:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var tb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ub=/(^|\.)doubleclick\.net$/i,rb=function(a,b){return ub.test(document.location.hostname)||"/"===b&&tb.test(a)},pb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var vb=[],wb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},xb=function(a){return wb[a]},yb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Cb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Db={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Eb=function(a){return Db[a]};
vb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Cb,Eb)+"'"}};var Mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Nb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ob=function(a){return Nb[a]};vb[16]=function(a){return a};var Qb=[],Rb=[],Sb=[],Tb=[],Ub=[],Wb={},Xb,Yb,Zb,$b=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ac=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Wb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Wb[c](e):(void 0)(c,e,b)},cc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=bc(a[e],b,c));return d},
dc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Wb[b];return c?c.priorityOverride||0:0},bc=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(bc(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Qb[g];if(!h||b.Cc(h))return;c[g]=!0;try{var k=cc(h,b,c);k.vtp_gtmEventId=b.id;d=ac(k,b);Zb&&(d=Zb.Gf(d,k))}catch(w){b.ae&&b.ae(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[bc(a[l],b,c)]=bc(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=bc(a[n],b,c);Yb&&(m=m||p===Yb.wb);d.push(p)}return Yb&&m?Yb.Jf(d):d.join("");case "escape":d=bc(a[1],b,c);if(Yb&&ka(a[1])&&"macro"===a[1][0]&&Yb.kg(a))return Yb.wg(d);d=String(d);for(var t=2;t<a.length;t++)vb[a[t]]&&(d=vb[a[t]](d));return d;case "tag":var q=a[1];if(!Tb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Nd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=ec(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ec=function(a,b,c){try{return Xb(cc(a,b,c))}catch(d){JSON.stringify(a)}return null};var fc=function(){var a=function(b){return{toString:function(){return b}}};return{ed:a("convert_case_to"),fd:a("convert_false_to"),gd:a("convert_null_to"),hd:a("convert_true_to"),jd:a("convert_undefined_to"),eh:a("debug_mode_metadata"),ka:a("function"),Ue:a("instance_name"),Ve:a("live_only"),We:a("malware_disabled"),Xe:a("metadata"),gh:a("original_vendor_template_id"),Ye:a("once_per_event"),Cd:a("once_per_load"),Dd:a("setup_tags"),Ed:a("tag_id"),Fd:a("teardown_tags")}}();var gc=null,jc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];gc=hc(a);for(var e=0;e<Rb.length;e++){var g=Rb[e],h=ic(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Tb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},ic=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=gc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=gc(e[g]);if(null===h)return null;
if(h)return!1}return!0},hc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ec(Sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
for(var mc="floor ceil round max min abs pow sqrt".split(" "),nc=0;nc<mc.length;nc++)Math.hasOwnProperty(mc[nc]);var G={$b:"event_callback",Na:"event_timeout",U:"gtag.config",N:"allow_ad_personalization_signals",P:"cookie_expires",Ma:"cookie_update",xa:"session_duration"};var Cc=/[A-Z]+/,Dc=/\s/,Ec=function(a){if(ia(a)&&(a=va(a),!Dc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Cc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],M:d}}}}},Gc=function(a){for(var b={},c=0;c<a.length;++c){var d=Ec(a[c]);d&&(b[d.id]=d)}Fc(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Fc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.M[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Hc={},Ic=null,Jc=Math.random();Hc.i="GTM-MQ79NG";Hc.Ab="8e1";var Kc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Lc="www.googletagmanager.com/gtm.js";var Mc=Lc,Nc=null,Oc=null,Pc=null,Qc="//www.googletagmanager.com/a?id="+Hc.i+"&cv=14",Rc={},Sc={},Tc=function(){var a=Ic.sequence||0;Ic.sequence=a+1;return a};
var Uc=function(){return"&tc="+Tb.filter(function(a){return a}).length},cd=function(){Vc&&(u.clearTimeout(Vc),Vc=void 0);void 0===Wc||Xc[Wc]&&!Yc||(Zc[Wc]||$c.mg()||0>=ad--?(bb("GTM",1),Zc[Wc]=!0):($c.Hg(),Pa(bd()),Xc[Wc]=!0,Yc=""))},bd=function(){var a=Wc;if(void 0===a)return"";var b=cb("GTM"),c=cb("TAGGING");return[dd,Xc[a]?"":"&es=1",ed[a],b?"&u="+b:"",c?"&ut="+c:"",Uc(),Yc,"&z=0"].join("")},fd=function(){return[Qc,"&v=3&t=t","&pid="+oa(),"&rv="+Hc.Ab].join("")},gd="0.005000">
Math.random(),dd=fd(),hd=function(){dd=fd()},Xc={},Yc="",Wc=void 0,ed={},Zc={},Vc=void 0,$c=function(a,b){var c=0,d=0;return{mg:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},Hg:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),ad=1E3,id=function(a,b){if(gd&&!Zc[a]&&Wc!==a){cd();Wc=a;Yc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ed[a]="&e="+c+"&eid="+a;Vc||(Vc=u.setTimeout(cd,500))}},jd=function(a,b,c){if(gd&&!Zc[a]&&b){a!==Wc&&(cd(),Wc=a);var d=String(b[fc.ka]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Yc=Yc?Yc+"."+e:"&tr="+e;Vc||(Vc=u.setTimeout(cd,500));2022<=bd().length&&cd()}};var kd={},ld=new pa,md={},nd={},rd={name:"dataLayer",set:function(a,b){f(od(a,b),md);pd()},get:function(a){return qd(a,2)},reset:function(){ld=new pa;md={};pd()}},qd=function(a,b){if(2!=b){var c=ld.get(a);if(gd){var d=sd(a);c!==d&&bb("GTM",5)}return c}return sd(a)},sd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:ud(d)},ud=function(a){for(var b=md,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var xd=function(a,b){nd.hasOwnProperty(a)||(ld.set(a,b),f(od(a,b),md),pd())},od=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},pd=function(a){ra(nd,function(b,c){ld.set(b,c);f(od(b,void 0),md);f(od(b,c),md);a&&delete nd[b]})},yd=function(a,b,c){kd[a]=kd[a]||{};var d=1!==c?sd(b):ld.get(b);"array"===Fa(d)||"object"===Fa(d)?kd[a][b]=f(d):kd[a][b]=d},zd=function(a,b){if(kd[a])return kd[a][b]};var Ad=function(){var a=!1;return a};var H=function(a,b,c,d){return(2===Bd()||d||"http:"!=u.location.protocol?a:b)+c},Bd=function(){var a=Na(),b;if(1===a)a:{var c=Mc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Pd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Qd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Rd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Sd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ud=function(a){var b=qd("gtm.whitelist");b&&bb("GTM",9);var c=b&&Da(ua(b),Qd),d=qd("gtm.blacklist");d||(d=qd("tagTypeBlacklist"))&&bb("GTM",3);
d?bb("GTM",8):d=[];Td()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&bb("GTM",2);var e=d&&Da(ua(d),Rd),g={};return function(h){var k=h&&h[fc.ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Sc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){bb("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&bb("GTM",10);t=r}}var v=!m||t;v||!(0<=la(l,"sandboxedScripts"))||c&&-1!==la(c,"sandboxedScripts")||(v=qa(e,Sd));return g[k]=v}},Td=function(){return Pd.test(u.location&&u.location.hostname)};var Vd={Gf:function(a,b){b[fc.ed]&&"string"===typeof a&&(a=1==b[fc.ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(fc.gd)&&null===a&&(a=b[fc.gd]);b.hasOwnProperty(fc.jd)&&void 0===a&&(a=b[fc.jd]);b.hasOwnProperty(fc.hd)&&!0===a&&(a=b[fc.hd]);b.hasOwnProperty(fc.fd)&&!1===a&&(a=b[fc.fd]);return a}};var Wd={active:!0,isWhitelisted:function(){return!0}},Xd=function(a){var b=Ic.zones;!b&&a&&(b=Ic.zones=a());return b};var Yd=!1,Zd=0,$d=[];function ae(a){if(!Yd){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Yd=!0;for(var e=0;e<$d.length;e++)D($d[e])}$d.push=function(){for(var g=0;g<arguments.length;g++)D(arguments[g]);return 0}}}function be(){if(!Yd&&140>Zd){Zd++;try{C.documentElement.doScroll("left"),ae()}catch(a){u.setTimeout(be,50)}}}var ce=function(a){Yd?a():$d.push(a)};var de={},ee={},fe=function(a,b,c,d){if(!ee[a]||Kc[b]||"__zone"===b)return-1;var e={};Ha(d)&&(e=f(d,e));e.id=c;e.status="timeout";return ee[a].tags.push(e)-1},ge=function(a,b,c,d){if(ee[a]){var e=ee[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function he(a){for(var b=de[a]||[],c=0;c<b.length;c++)b[c]();de[a]={push:function(d){d(Hc.i,ee[a])}}}
var ke=function(a,b,c){ee[a]={tags:[]};ha(b)&&ie(a,b);c&&u.setTimeout(function(){return he(a)},Number(c));return je(a)},ie=function(a,b){de[a]=de[a]||[];de[a].push(ya(function(){return D(function(){b(Hc.i,ee[a])})}))};function je(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&he(a)})},qf:function(){d=!0;b>=c&&he(a)}}};var le=function(){function a(d){return!ja(d)||0>d?0:d}if(!Ic._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=ja(rd.get("gtm.start"))?rd.get("gtm.start"):0;Ic._li={cst:a(c-b),cbt:a(Oc-b)}}};var pe=!1,qe=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},re=!1;
var se=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||bb("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}le();return u[b]},te=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=qe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ve=function(){},ue=function(){return u.GoogleAnalyticsObject||"ga"};var Ce=function(a){};function Be(a,b){a.containerId=Hc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function De(a,b,c,d){var e=Tb[a],g=Ee(a,b,c,d);if(!g)return null;var h=bc(e[fc.Dd],c,[]);if(h&&h.length){var k=h[0];g=De(k.index,{I:g,S:1===k.Nd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function Ee(a,b,c,d){function e(){if(g[fc.We])k();else{var w=cc(g,c,[]),x=fe(c.id,String(g[fc.ka]),Number(g[fc.Ed]),w[fc.Xe]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=wa()-B;jd(c.id,Tb[a],"5");ge(c.id,x,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=wa()-B;jd(c.id,Tb[a],"6");ge(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;jd(c.id,g,"1");var z=function(A){var E=wa()-B;Ce(A);jd(c.id,g,"7");ge(c.id,x,"exception",E);y||(y=!0,k())};var B=wa();try{ac(w,c)}catch(A){z(A)}}}var g=Tb[a],h=b.I,k=b.S,l=b.terminate;if(c.Cc(g))return null;var m=bc(g[fc.Fd],c,[]);if(m&&m.length){var n=m[0],p=De(n.index,{I:h,S:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Nd?l:p}if(g[fc.Cd]||g[fc.Ye]){var t=g[fc.Cd]?Ub:c.Rg,q=h,r=k;if(!t[a]){e=ya(e);var v=Fe(a,t,e);h=v.I;k=v.S}return function(){t[a](q,r)}}return e}
function Fe(a,b,c){var d=[],e=[];b[a]=Ge(d,e,c);return{I:function(){b[a]=He;for(var g=0;g<d.length;g++)d[g]()},S:function(){b[a]=Ie;for(var g=0;g<e.length;g++)e[g]()}}}function Ge(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function He(a){a()}function Ie(a,b){b()};var Le=function(a,b){for(var c=[],d=0;d<Tb.length;d++)if(a.cb[d]){var e=Tb[d];var g=b.add();try{var h=De(d,{I:g,S:g,terminate:g},a,d);h?c.push({te:d,ie:dc(e),Rf:h}):(Je(d,a),g())}catch(l){g()}}b.qf();c.sort(Ke);for(var k=0;k<c.length;k++)c[k].Rf();return 0<c.length};function Ke(a,b){var c,d=b.ie,e=a.ie;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.te,k=b.te;g=h>k?1:h<k?-1:0}return g}
function Je(a,b){if(!gd)return;var c=function(d){var e=b.Cc(Tb[d])?"3":"4",g=bc(Tb[d][fc.Dd],b,[]);g&&g.length&&c(g[0].index);jd(b.id,Tb[d],e);var h=bc(Tb[d][fc.Fd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Me=!1,Ne=function(a,b,c,d,e){if("gtm.js"==b){if(Me)return!1;Me=!0}id(a,b);var g=ke(a,d,e);yd(a,"event",1);yd(a,"ecommerce",1);yd(a,"gtm");var h={id:a,name:b,Cc:Ud(c),cb:[],Rg:[],ae:function(n){bb("GTM",6);Ce(n)}};h.cb=jc(h);var k=Le(h,g);"gtm.js"!==b&&"gtm.sync"!==b||ve();if(!k)return k;for(var l=0;l<h.cb.length;l++)if(h.cb[l]){var m=
Tb[l];if(m&&!Kc[String(m[fc.ka])])return!0}return!1};var Pe=function(a,b,c){var d=this;this.eventModel=a;this.targetConfig=b||{};this.globalConfig=c||{};this.getWithConfig=function(e){if(d.eventModel.hasOwnProperty(e))return d.eventModel[e];if(d.targetConfig.hasOwnProperty(e))return d.targetConfig[e];if(d.globalConfig.hasOwnProperty(e))return d.globalConfig[e]}};function Qe(){var a=Ic;return a.gcq=a.gcq||new Re}
var Te=function(a,b){Qe().register(a,b)},Ue=function(a,b,c,d){Qe().push("event",[b,a],c,d)},Ve=function(){this.status=1;this.uc={};this.je=null;this.Xd=!1},We=function(a,b,c,d,e){this.type=a;this.Wg=b;this.oa=c||"";this.Db=d;this.defer=e},Re=function(){this.ue={};this.Sd={};this.Xa=[]},Xe=function(a,b){return a.ue[b]=a.ue[b]||new Ve},Ye=function(a,b,c,d){var e=Xe(a,d.oa).je;if(e){var g=f(c),h=f(Xe(a,d.oa).uc),k=f(a.Sd),l=new Pe(g,h,k);try{e(b,d.Wg,l)}catch(m){}}};
Re.prototype.register=function(a,b){3!==Xe(this,a).status&&(Xe(this,a).je=b,Xe(this,a).status=3,this.flush())};Re.prototype.push=function(a,b,c,d){var e=Math.floor(wa()/1E3);if(c&&1===Xe(this,c).status&&(Xe(this,c).status=2,this.push("require",[],c),!Ad())){var g=encodeURIComponent(c);Ma(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+g+"&l=dataLayer&cx=c"))}this.Xa.push(new We(a,e,c,b,d));d||this.flush()};
Re.prototype.flush=function(a){for(var b=this;this.Xa.length;){var c=this.Xa[0];if(c.defer)c.defer=!1,this.Xa.push(c);else switch(c.type){case "require":if(3!==Xe(this,c.oa).status&&!a)return;break;case "set":ra(c.Db[0],function(h,k){b.Sd[h]=k});break;case "config":var d=c.Db[0],e=!!d[G.ub];delete d[G.ub];var g=Xe(this,c.oa);e||(g.uc={});g.Xd&&e||Ye(this,G.U,d,c);g.Xd=!0;f(d,g.uc);break;case "event":Ye(this,c.Db[1],c.Db[0],c)}this.Xa.shift()}};var Ze=new function(){this.Nc={}};var $e=null,af={},bf={},cf,df=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[G.$b]&&(c.eventCallback=b[G.$b]),b[G.Na]&&(c.eventTimeout=b[G.Na]));return c};
var kf={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ha(a[2]))return;c=a[2]}var d=df(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];Ze.Nc[b]?Ze.Nc[b].push(c):Ze.Nc[b]=[c]}},set:function(a){var b;2==a.length&&Ha(a[1])?b=f(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}},lf={policy:!0};var nf=function(a){return mf?C.querySelectorAll(a):null},of=function(a,b){if(!mf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},pf=!1;if(C.querySelectorAll)try{var qf=C.querySelectorAll(":root");qf&&1==qf.length&&qf[0]==C.documentElement&&(pf=!0)}catch(a){}var mf=pf;var xf=function(a){if(wf(a))return a;this.Zg=a};xf.prototype.Yf=function(){return this.Zg};var wf=function(a){return!a||"object"!==Fa(a)||Ha(a)?!1:"getUntrustedUpdateValue"in a};xf.prototype.getUntrustedUpdateValue=xf.prototype.Yf;var yf=!1,zf=[];function Af(){if(!yf){yf=!0;for(var a=0;a<zf.length;a++)D(zf[a])}}var Bf=function(a){yf?D(a):zf.push(a)};var Cf=[],Df=!1,Ef=function(a){return u["dataLayer"].push(a)},Ff=function(a){var b=Ic["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Hf=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&xd(g,void 0),xd(g,h))});Nc||(Nc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Tc(),a["gtm.uniqueEventId"]=d,xd("gtm.uniqueEventId",d));Pc=c;var e=Gf(a);
Pc=null;switch(c){case "gtm.init":bb("GTM",19),e&&bb("GTM",20)}return e};function Gf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Ic.zones;d=e?e.checkState(Hc.i,c):Wd;return d.active?Ne(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var If=function(){for(var a=!1;!Df&&0<Cf.length;){Df=!0;delete md.eventModel;pd();var b=Cf.shift();if(null!=b){var c=wf(b);if(c){var d=b;b=wf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=qd(h,1);if(ka(k)||Ha(k))k=f(k);nd[h]=k}}try{if(ha(b))try{b.call(rd)}catch(v){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=qd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=kf[b[0]];if(r&&(!c||!lf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Df=!1;continue}}a=Hf(b)||a}}finally{c&&pd(!0)}}Df=!1}
return!a},Jf=function(){var a=If();try{var b=Hc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Kf=function(){var a=Ka("dataLayer",[]),b=Ka("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ce(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Bf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<Ic.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new xf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Cf.push.apply(Cf,d);if(300<this.length)for(bb("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return If()&&h};Cf.push.apply(Cf,a.slice(0));D(Jf)};var Lf;var gg={};gg.wb=new String("undefined");
var hg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===gg.wb?b:a[d]);return c.join("")}};hg.prototype.toString=function(){return this.resolve("undefined")};hg.prototype.valueOf=hg.prototype.toString;gg.$e=hg;gg.kc={};gg.Jf=function(a){return new hg(a)};var ig={};gg.Ig=function(a,b){var c=Tc();ig[c]=[a,b];return c};gg.Kd=function(a){var b=a?0:1;return function(c){var d=ig[c];if(d&&"function"===typeof d[b])d[b]();ig[c]=void 0}};gg.kg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};gg.wg=function(a){if(a===gg.wb)return a;var b=Tc();gg.kc[b]=a;return'google_tag_manager["'+Hc.i+'"].macro('+b+")"};gg.og=function(a,b,c){a instanceof gg.$e&&(a=a.resolve(gg.Ig(b,c)),b=fa);return{Ac:a,I:b}};var jg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Sa(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},kg=function(a){Ic.hasOwnProperty("autoEventsSettings")||(Ic.autoEventsSettings={});var b=Ic.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},lg=function(a,b,c){kg(a)[b]=c},mg=function(a,b,c,d){var e=kg(a),g=xa(e,b,d);e[b]=c(g)},ng=function(a,b,c){var d=kg(a);return xa(d,b,c)};var og=function(){for(var a=Ia.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},rg=function(a,b,c,d){var e=pg(b);return nb(a,e,qg(c),d)},sg=function(a,b,c,d){var e=""+pg(c),g=qg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},pg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},qg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var tg=["1"],ug={},yg=function(a,b,c,d){var e=vg(a);ug[e]||wg(e,b,c)||(xg(e,og(),b,c,d),wg(e,b,c))};function xg(a,b,c,d,e){var g=sg(b,"1",d,c);sb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function wg(a,b,c){var d=rg(a,b,c,tg);d&&(ug[a]=d);return d}function vg(a){return(a||"_gcl")+"_au"};var zg=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Yc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Yc]||(g[a[h].Yc]=[]),g[a[h].Yc].push({timestamp:k[1],Vf:k[2]}))}return g};function Ag(){for(var a=Bg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Cg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Bg,Dg,Eg=function(a){Bg=Bg||Cg();Dg=Dg||Ag();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Bg[l],Bg[m],Bg[n],Bg[p])}return b.join("")},Fg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Dg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Bg=Bg||Cg();Dg=Dg||
Ag();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Gg;function Hg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Lg=function(){var a=Ig,b=Jg,c=Kg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Qa(C,"mousedown",d);Qa(C,"keyup",d);Qa(C,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Kg=function(){var a=Ka("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Mg=/(.*?)\*(.*?)\*(.*)/,Ng=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Og=/^(?:www\.|m\.|amp\.)+/,Pg=/([^?#]+)(\?[^#]*)?(#.*)?/,Qg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Sg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Eg(String(d))))}var e=b.join("*");return["1",Rg(e),e].join("*")},Rg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Gg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Gg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Gg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Ug=function(){return function(a){var b=jb(u.location.href),c=b.search.replace("?",""),d=eb(c,"_gl",!0)||"";a.query=Tg(d)||{};var e=ib(b,"fragment").match(Qg);a.fragment=Tg(e&&e[3]||
"")||{}}},Vg=function(){var a=Ug(),b=Kg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(za(c,d.query),za(c,d.fragment));return c},Tg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Mg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Rg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Fg(t[q+1]);return p}}}}catch(r){}};
function Wg(a,b,c){function d(m){var n=m,p=Qg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Pg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Xg(a,b,c){for(var d={},e={},g=Kg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Hg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=Sg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Wg(l,a.action);$a.test(v)&&(a.action=v)}}}else Yg(l,a,!1)}if(!c&&Aa(e)){var w=Sg(e);Yg(w,a,!0)}}function Yg(a,b,c){if(b.href){var d=Wg(a,b.href,void 0===c?!1:c);$a.test(d)&&(b.href=d)}}
var Ig=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Xg(e,e.hostname,!1)}}catch(h){}},Jg=function(a){try{if(a.action){var b=ib(jb(a.action),"host");Xg(a,b,!0)}}catch(c){}},Zg=function(a,b,c,d){Lg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Kg().decorators.push(e)},$g=function(){var a=C.location.hostname,b=Ng.exec(C.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Og,"")===e.replace(Og,"")},ah=function(a,b){return!1===a?!1:a||b||$g()};var bh={};var ch=/^\w+$/,dh=/^[\w-]+$/,eh=/^~?[\w-]+$/,fh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function gh(a){return a&&"string"==typeof a&&a.match(ch)?a:"_gcl"}var ih=function(){var a=jb(u.location.href),b=ib(a,"query",!1,void 0,"gclid"),c=ib(a,"query",!1,void 0,"gclsrc"),d=ib(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||eb(e,"gclid",void 0);c=c||eb(e,"gclsrc",void 0)}return hh(b,c,d)};
function hh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(dh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==bh.gtm_3pds?0:bh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function jh(a,b,c){function d(p,t){var q=kh(p,e);q&&sb(q,t,h,g,l,!0)}b=b||{};var e=gh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.be?7776E3:b.be;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Fh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var kh=function(a,b){var c=fh[a];if(void 0!==c)return b+c},lh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function mh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var nh=function(a,b,c,d,e){if(ka(b)){var g=gh(e);Zg(function(){for(var h={},k=0;k<a.length;++k){var l=kh(a[k],g);if(l){var m=kb(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},oh=function(a){return a.filter(function(b){return eh.test(b)})},qh=function(a){for(var b=["aw","dc"],c=gh(a&&a.prefix),d={},e=0;e<b.length;e++)fh[b[e]]&&(d[b[e]]=fh[b[e]]);ra(d,function(g,h){var k=kb(c+h,C.cookie);if(k.length){var l=k[0],m=lh(l),n={};n[g]=[mh(l)];jh(n,a,m)}})};var rh=/^\d+\.fls\.doubleclick\.net$/;function sh(a){var b=jb(u.location.href),c=ib(b,"host",!1);if(c&&c.match(rh)){var d=ib(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function th(a,b){if("aw"==a||"dc"==a){var c=sh("gcl"+a);if(c)return c.split(".")}var d=gh(b);if("_gcl"==d){var e;e=ih()[a]||[];if(0<e.length)return e}var g=kh(a,d),h;if(g){var k=[];if(C.cookie){var l=kb(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=mh(l[m]);n&&-1===la(k,n)&&k.push(n)}h=oh(k)}else h=k}else h=k}else h=[];return h}
var uh=function(){var a=sh("gac");if(a)return decodeURIComponent(a);var b=zg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Vf);g=oh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},vh=function(a,b,c,d,e){yg(b,c,d,e);var g=ug[vg(b)],h=ih().dc||[],k=!1;if(g&&0<h.length){var l=Ic.joined_au=Ic.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Pa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=vg(b),r=ug[q];r&&xg(q,r,c,d,e)}};var wh;if(3===Hc.Ab.length)wh="g";else{var xh="G";wh=xh}
var yh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:wh,OPT:"o"},zh=function(a){var b=Hc.i.split("-"),c=b[0].toUpperCase(),d=yh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Hc.Ab.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+Hc.Ab+e};var Eh=["input","select","textarea"],Fh=["button","hidden","image","reset","submit"],Gh=function(a){var b=a.tagName.toLowerCase();return!ma(Eh,function(c){return c===b})||"input"===b&&ma(Fh,function(c){return c===a.type.toLowerCase()})?!1:!0},Hh=function(a){return a.form?a.form.tagName?a.form:C.getElementById(a.form):Ya(a,["form"],100)},Ih=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Gh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Lh=!!u.MutationObserver,Mh=void 0,Nh=function(a){if(!Mh){var b=function(){var c=C.body;if(c)if(Lh)(new MutationObserver(function(){for(var e=0;e<Mh.length;e++)D(Mh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Qa(c,"DOMNodeInserted",function(){d||(d=!0,D(function(){d=!1;for(var e=0;e<Mh.length;e++)D(Mh[e])}))})}};Mh=[];C.body?b():D(b)}Mh.push(a)};var oi=u.clearTimeout,pi=u.setTimeout,L=function(a,b,c){if(Ad()){b&&D(b)}else return Ma(a,b,c)},qi=function(){return new Date},ri=function(){return u.location.href},si=function(a){return ib(jb(a),"fragment")},ti=function(a){return hb(jb(a))},ui=null;
var vi=function(a,b){return qd(a,b||2)},wi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ef(a)},xi=function(a,b){u[a]=b},M=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},yi=function(a,b,c){return kb(a,b,void 0===c?!0:!!c)},zi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,be:d},g=ih();jh(g,e);qh(e)},Ai=function(a,b,c,d,e){for(var g=Vg(),h=gh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==fh[l]){var m=kh(l,h),
n=g[m];if(n){var p=Math.min(lh(n),wa()),t;b:{for(var q=p,r=kb(m,C.cookie),v=0;v<r.length;++v)if(lh(r[v])>q){t=!0;break b}t=!1}t||sb(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};jh(hh(g.gclid,g.gclsrc),w);},Bi=function(a,b,c,d,e){nh(a,b,c,d,e);},Ci=function(a,b){if(Ad()){
b&&D(b)}else Oa(a,b)},Di=function(a){return!!ng(a,"init",!1)},Ei=function(a){lg(a,"init",!0)},Fi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Mc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});L(H("https://","http://",d))},Gi=function(a,b){var c=a[b];return c};var Ii=gg.og;
var Ji=new pa,Ki=function(a,b){function c(h){var k=jb(h),l=ib(k,"protocol"),m=ib(k,"host",!0),n=ib(k,"port"),p=ib(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Li=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(Li({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ji.get(q);r||(r=new RegExp(c,t),Ji.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ki(b,c)}return!1};var Ni=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Oi={},Pi=encodeURI,W=encodeURIComponent,Qi=Pa;var Ri=function(a,b){if(!a)return!1;var c=ib(jb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Si=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Oi.lg=function(){var a=!1;return a};var rj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var ak=window,bk=document,ck=function(a){var b=ak._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ak["ga-disable-"+a])return!0;try{var c=ak.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=kb("AMP_TOKEN",bk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return bk.getElementById("__gaOptOutExtension")?!0:!1};var hk=function(a,b,c){Ue(b,c,a)},ik=function(a,b,c){Ue(b,c,a,!0)},kk=function(a,b){},jk=function(a,b){},
lk=function(a){return"_"===a.charAt(0)},mk=function(a){ra(a,function(c){lk(c)&&delete a[c]});var b=a[G.vb]||{};ra(b,function(c){lk(c)&&delete b[c]})};var Y={a:{}};
Y.a.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.b="ctv";Y.__ctv.g=!0;Y.__ctv.priorityOverride=0})(function(){return"14"})}();

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=M("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.b="c";Y.__c.g=!0;Y.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0;Y.__e.priorityOverride=0})(function(a){return String(zd(a.vtp_gtmEventId,"event"))})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0;Y.__f.priorityOverride=0})(function(a){var b=vi("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ib(jb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):ti(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=jg(c,"gtm.click");wi(d)}}(function(b){Y.__cl=b;Y.__cl.b="cl";Y.__cl.g=!0;Y.__cl.priorityOverride=0})(function(b){if(!Di("cl")){var c=M("document");Qa(c,"click",a,!0);Ei("cl")}D(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=M(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0;Y.__k.priorityOverride=0})(function(a){return yi(a.vtp_name,vi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();


Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.b="u";Y.__u.g=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:vi("gtm.url",1))||ri();var d=b[a("vtp_component")];if(!d||"URL"==d)return ti(String(c));var e=jb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=ib(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=ib(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=vi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;f(Si(n.vtp_fieldsToSet,"fieldName","value"),g);f(Si(n.vtp_contentGroup,"index","group"),h);f(Si(n.vtp_dimension,"index","dimension"),k);f(Si(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=f(n);d=f(d,p)}f(Si(d.vtp_fieldsToSet,"fieldName","value"),g);f(Si(d.vtp_contentGroup,
"index","group"),h);f(Si(d.vtp_dimension,"index","dimension"),k);f(Si(d.vtp_metric,"index","metric"),l);var t=se(d.vtp_functionName);if(ha(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Tc(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},x=function(R){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},y=function(R,O){return void 0===O?O:R(O)},z=function(R,O){if(O)for(var na in O)O.hasOwnProperty(na)&&x("set",R+na,O[na])},B=function(){},A=function(R,O,na){var Ta=0;if(R)for(var Ba in R)if(R.hasOwnProperty(Ba)&&(na&&v[Ba]||!na&&void 0===v[Ba])){var Ua=w[Ba]?ta(R[Ba]):R[Ba];"anonymizeIp"!=Ba||Ua||(Ua=void 0);O[Ba]=Ua;Ta++}return Ta},E={name:r};A(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);x("set","&gtm",zh(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(R,O){void 0!==d[O]&&x("set",R,d[O])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var F={};A(g,F,!1)&&x("set",F);var I;
d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var R=g&&g.hitCallback;ha(R)&&R();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());var S={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(sa,d.vtp_eventValue||
e.value)};A(I,S,!1);x("send",S);}else if("TRACK_SOCIAL"==d.vtp_trackType){var T={hitType:"social",socialNetwork:String(d.vtp_socialNetwork),socialAction:String(d.vtp_socialAction),socialTarget:String(d.vtp_socialActionTarget)};A(I,T,!1);x("send",T);}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var X=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:X})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var Z="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:Z})}I?x("send","pageview",I):x("send","pageview");}if(!a){var ba=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ba="internal/"+ba);a=!0;var Ca=H("https:","http:","//www.google-analytics.com/"+ba,g&&g.forceSSL);L(Ca,function(){var R=qe();R&&R.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else D(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.b="ua";Y.__ua.g=!0;Y.__ua.priorityOverride=0}();



Y.a.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.b="cid";Y.__cid.g=!0;Y.__cid.priorityOverride=0})(function(){return Hc.i})}();

Y.a.aev=["google"],function(){function a(q,r){var v=zd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var x=q+"."+r,y;if(n.hasOwnProperty(x))y=n[x];else{var z=a(q,w);if(z&&(y=v(z),n[x]=y,p.push(x),35<p.length)){var B=p.shift();delete n[B]}}return y}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(ri());ka(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<r.length;x++)if(r[x]instanceof RegExp){if(r[x].test(q))return!1}else{var y=
r[x];if(0!=y.length){if(0<=e(q).indexOf(y))return!1;w.push(e(y))}}return!Ri(q,w)}function e(q){m.test(q)||(q="http://"+q);return ib(jb(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var x=a(r,"interactedFormFieldPosition");
return void 0===x?v:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(r,"interactSequenceNumber");return void 0===y?v:y;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Sa(q,"value");case "button":return Wa(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Gh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Sa(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Y.__aev=q;Y.__aev.b="aev";Y.__aev.g=!0;Y.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var x=a(r,"element");return x&&x.tagName||
v;case "TEXT":return b(r,w,Wa)||v;case "URL":var y;a:{var z=String(a(r,"elementUrl")||v||""),B=jb(z),A=String(q.vtp_component||"URL");switch(A){case "URL":y=z;break a;case "IS_OUTBOUND":y=d(z,q.vtp_affiliatedDomains);break a;default:y=ib(B,A,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return y;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var F=q.vtp_attribute,I=a(r,"element");E=I&&Sa(I,F)||v||""}return E;case "MD":var S=q.vtp_mdValue,T=b(r,"MD",ai);return S&&T?di(T,S)||
v:T||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();

Y.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:ri()}function b(g,h){Qa(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:ti(l),D:si(l)})})}function c(g,h){Qa(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:ti(l),D:si(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(ha(m))try{l[g]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:ti(ri()),
D:si(ri())})}}catch(n){}}function e(){var g={source:null,state:M("history").state||null,url:ti(ri()),D:si(ri())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.D!=h.D){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.D,"gtm.newUrlFragment":h.D,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;wi(m)}}}(function(g){Y.__hl=g;Y.__hl.b="hl";Y.__hl.g=!0;Y.__hl.priorityOverride=0})(function(g){var h=M("self");if(!Di("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Ei("hl")}D(g.vtp_gtmOnSuccess)})}();
Y.a.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.b="remm";Y.__remm.g=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.b="smm";Y.__smm.g=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Si(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();





Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,La(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){D(h)}}}var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Ii(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Ac,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Xa(h),k,e)()}else pi(function(){c(d)},
200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0;Y.__html.priorityOverride=0}();
Y.a.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.b="dbg";Y.__dbg.g=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();





var nk={};nk.macro=function(a){if(gg.kc.hasOwnProperty(a))return gg.kc[a]},nk.onHtmlSuccess=gg.Kd(!0),nk.onHtmlFailure=gg.Kd(!1);nk.dataLayer=rd;nk.callback=function(a){Rc.hasOwnProperty(a)&&ha(Rc[a])&&Rc[a]();delete Rc[a]};nk.vf=function(){Ic[Hc.i]=nk;za(Sc,Y.a);Yb=Yb||gg;Zb=Vd};
nk.gg=function(){bh.gtm_3pds=!0;Ic=u.google_tag_manager=u.google_tag_manager||{};if(Ic[Hc.i]){var a=Ic.zones;a&&a.unregisterChild(Hc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Qb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Tb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Rb.push(p)}Wb=Y;Xb=Li;nk.vf();Kf();Yd=!1;Zd=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)ae();else{Qa(C,"DOMContentLoaded",ae);Qa(C,"readystatechange",ae);if(C.createEventObject&&C.documentElement.doScroll){var q=!0;try{q=!u.frameElement}catch(x){}q&&be()}Qa(u,"load",ae)}yf=!1;"complete"===C.readyState?Af():
Qa(u,"load",Af);a:{if(!gd)break a;u.setInterval(hd,864E5);}
Oc=(new Date).getTime();}};(0,nk.gg)();

})()
