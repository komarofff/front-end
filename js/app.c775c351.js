(function(t){function e(e){for(var r,n,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,s=1;s<i.length;s++){var c=i[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=n(n.s=i[0]))}return t}var r={},o={app:0},a=[];function n(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=r,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("7a23"),o=(i("9911"),i("a4d3"),i("e01a"),{class:"container"}),a={class:"card"},n={class:"flex"},s=["onClick"],c=Object(r["e"])("p",null,"Anatoliy Komarov - frontend developer (admin@komaroff.biz)",-1),l=Object(r["e"])("hr",null,null,-1),p={class:"scroll"},u={key:0},d=["href"],f=Object(r["f"])(),k={key:0},h={key:1},b=Object(r["f"])(" → "),m=["href"];function g(t,e,i,g,v,S){return Object(r["g"])(),Object(r["d"])("div",o,[Object(r["e"])("div",a,[Object(r["e"])("div",n,[Object(r["e"])("div",null,[(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["h"])(v.tabs,(function(t,e){return Object(r["g"])(),Object(r["d"])("button",{onClick:function(t){return S.changeTabs(e)}},Object(r["i"])(t.title),9,s)})),256))]),c]),l,Object(r["e"])("div",p,[(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["h"])(v.tabs,(function(t){return Object(r["g"])(),Object(r["d"])(r["a"],null,[t.visibility?(Object(r["g"])(),Object(r["d"])("div",u,[Object(r["e"])("h2",null,Object(r["i"])(t.title),1),Object(r["e"])("ol",null,[(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["h"])(t.data,(function(t){return Object(r["g"])(),Object(r["d"])("li",null,[Object(r["e"])("a",{target:"_blank",href:t.link},Object(r["i"])(t.linkText),9,d),f,t.description.length>0?(Object(r["g"])(),Object(r["d"])("span",k,"- "+Object(r["i"])(t.description),1)):Object(r["c"])("",!0),t.source.length>0?(Object(r["g"])(),Object(r["d"])("span",h,[b,Object(r["e"])("a",{class:"source-code",target:"_blank",href:t.source}," source code ",8,m)])):Object(r["c"])("",!0)])})),256))])])):Object(r["c"])("",!0)],64)})),256))])])])}i("159b");var v={name:"App",data:function(){return{tabs:[{title:"Frontend links",visibility:!0,data:[{link:"#",linkText:"Wordpress site for a real estate company (...in progress | link will be later) ",source:"https://github.com/komarofff/paragon-wordpress5",description:"Wordpress (new types of pages, new meta data), Bootstrap, PHP, Ajax, Google map API"},{link:"https://komarofff.github.io/Calendar/Calendar_week-new.html",linkText:"Admin panel (calendar). ",source:"https://github.com/komarofff/Calendar",description:" TailWind + JavaScript + drag&&drop popup (desktop version)"},{link:"https://komarofff.github.io/upwork/index.html",linkText:"Admin panel ",source:"https://github.com/komarofff/upwork",description:"TailWind + JavaScript (desktop version)"},{link:"https://komarofff.github.io/page5/index.html",linkText:"Landing page.",source:"https://github.com/komarofff/page5",description:" TailWind + JavaScript + SlickSlider"},{link:"https://komarofff.github.io/page4/index.html",linkText:"Multi pages  ",source:"https://github.com/komarofff/a1",description:"Laravel + Vue.js + GRID + FLEX + JavaScript + SlickSlider"},{link:"https://1c-web.com",linkText:"https://1c-web.com",source:"https://github.com/komarofff/1c-web",description:"Multi pages (Laravel + Vue.js + GRID + FLEX + JavaScript + SlickSlider)"},{link:"https://komarofff.github.io/page2/index.html",linkText:"Internet shop ",source:"https://github.com/komarofff/page2",description:" HTML5, CSS3, JavaScript + slider"},{link:"https://komarofff.github.io/page1/index.html",linkText:"Landing page (trip to Japan)",source:"https://github.com/komarofff/page1",description:"HTML5, CSS3, JavaScript"},{link:"https://vasterra.com/blog",linkText:"vasterra.com/blog",source:"",description:"Blog.Wordpress"},{link:"https://vasterra.com/",linkText:"vasterra.com",source:"",description:"index page. Laravel + JavaScript + SlickSlider +get data from Wordpress"},{link:"https://vasterra.com/mobile_experiences",linkText:"vasterra.com/mobile_experiences",source:"",description:"Landing. Laravel + JavaScript + SlickSlider +Vue.js"},{link:"https://vasterra.com/software_for_startups",linkText:"vasterra.com/software_for_startups",source:"",description:"Landing. Laravel + JavaScript + SlickSlider +Vue.js"},{link:"https://vasterra.com/prema",linkText:"vasterra.com/prema",source:"",description:"Landing. Laravel + JavaScript + SlickSlider +Vue.js"},{link:"https://vasterra.com/yablochkov",linkText:"vasterra.com/yablochkov",source:"",description:"Landing. Laravel + JavaScript + SlickSlider +Vue.js"},{link:"https://vasterra.com/edu",linkText:"vasterra.com/edu",source:"",description:"Landing. Laravel + JavaScript + SlickSlider +Vue.js"},{link:"https://vasterra.com/docNow",linkText:"vasterra.com/docNow",source:"",description:"Landing. Laravel + JavaScript + SlickSlider +Vue.js"},{link:"https://vasterra.com/finGo",linkText:"vasterra.com/finGo",source:"",description:"Landing. Laravel + JavaScript + SlickSlider +Vue.js"},{link:"https://vasterra.com/lms_development",linkText:"vasterra.com/lms_development",source:"",description:"Landing. Laravel + JavaScript + SlickSlider +Vue.js"},{link:"https://vasterra.com/dfc",linkText:"vasterra.com/dfc",source:"",description:"Landing. Laravel + JavaScript + SlickSlider +Vue.js"},{link:"https://vasterra.com/graam",linkText:"vasterra.com/graam",source:"",description:"Landing. Laravel + JavaScript + SlickSlider +Vue.js"},{link:"https://otdyh-v-italyi.ru/",linkText:"otdyh-v-italyi.ru",source:"",description:"Wordpress"},{link:"https://1c-group.by",linkText:"1c-group.by",source:"",description:"Modx, PHP, HTML, JavaScript, jQuery"},{link:"https://1c-po.by",linkText:"1c-po.by",source:"",description:"Modx, PHP, HTML, JavaScript, jQuery"},{link:"https://1c-buh.by",linkText:"1c-buh.by",source:"",description:"Modx, PHP, HTML, JavaScript, jQuery"},{link:"https://svetelektro.by",linkText:"svetelektro.by",source:"",description:"Internet shop. PHP, HTML5, JavaScript, jQuery+Admin panel"},{link:"https://tdm-electric.by",linkText:"tdm-electric.by",source:"",description:"Internet shop. PHP, HTML5, JavaScript, jQuery + Admin panel + integration with the accounting program  "}]},{title:"Vue.js",visibility:!1,data:[{link:"https://komaroff.biz/vue/babka/",linkText:"Jam to jars ",source:"https://github.com/komarofff/Vue.js/tree/main/babka",description:"Vue.js, vuex, vue-router"},{link:"#",linkText:"Tabs",source:"https://github.com/komarofff/front-end",description:"These tabs were made on Vue.js :)"},{link:"https://komarofff.github.io/todoList/index.html",linkText:"TODO list",source:"https://github.com/komarofff/todoList",description:""},{link:"https://komarofff.github.io/dealList/",linkText:"Deal list",source:"https://github.com/komarofff/dealList",description:""}]},{title:"JavaScript",visibility:!1,data:[{link:"https://komarofff.github.io/karusel/karusel-levo-pravo.html",linkText:"Carousel1 ",source:"https://github.com/komarofff/page1",description:"JS left-right + drag&drop"},{link:"https://komarofff.github.io/karusel/karusel-po-krugu.html",linkText:"Carousel2 ",source:"https://github.com/komarofff/karusel/blob/main/karusel-po-krugu.html",description:"JS left-right + drag&drop in a circle"},{link:"https://komarofff.github.io/karusel/slider-without-stop.html",linkText:"Slider",source:"https://github.com/komarofff/karusel/blob/main/slider-without-stop.html",description:"slider-without-stop( left-to-right)"},{link:"https://komarofff.github.io/karusel/svg-animation.html",linkText:"SVG animation",source:"https://github.com/komarofff/karusel/blob/main/svg-animation.html",description:"svg-animation ( fill circle)"},{link:"https://komarofff.github.io/marafon-JS/slider-cars/index.html",linkText:"Slider-flex",source:"https://github.com/komarofff/marafon-JS/tree/main/slider-cars",description:"Slider based on flex grow and flex shrink +JS"},{link:"https://komarofff.github.io/marafon-JS/slider-up-down/",linkText:"Slider up-to-down",source:"https://github.com/komarofff/marafon-JS/tree/main/slider-up-down",description:"Slider up-down . 1 page, screen size"},{link:"https://komarofff.github.io/marafon-JS/drag-and-drop/index.html",linkText:"drag&drop",source:"https://github.com/komarofff/marafon-JS/tree/main/drag-and-drop",description:"drag&drop"}]}]}},methods:{changeTabs:function(t){this.tabs.forEach((function(t){t.visibility=!1})),this.tabs[t].visibility=!0}}},S=(i("d94d"),i("6b0d")),j=i.n(S);const x=j()(v,[["render",g]]);var O=x;Object(r["b"])(O).mount("#app")},d94d:function(t,e,i){"use strict";i("f619")},f619:function(t,e,i){}});
//# sourceMappingURL=app.c775c351.js.map