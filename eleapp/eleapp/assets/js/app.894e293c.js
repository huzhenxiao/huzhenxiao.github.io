(function(e){function t(t){for(var r,o,i=t[0],u=t[1],d=t[2],s=0,l=[];s<i.length;s++)o=i[s],a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"assets/js/"+({}[e]||e)+"."+{"chunk-1c79b52d":"1557d578","chunk-2d0ae607":"da608d24","chunk-2d222708":"11b6bd9a","chunk-4ef85de7":"58bdc8a5","chunk-7aa9872b":"f424d1d9","chunk-7e5cdac7":"fcc278d6","chunk-94058ca8":"7be87929"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1c79b52d":1,"chunk-4ef85de7":1,"chunk-7aa9872b":1,"chunk-7e5cdac7":1,"chunk-94058ca8":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-1c79b52d":"54c30881","chunk-2d0ae607":"31d6cfe0","chunk-2d222708":"31d6cfe0","chunk-4ef85de7":"23b9979f","chunk-7aa9872b":"b9a3195c","chunk-7e5cdac7":"934b39ce","chunk-94058ca8":"d0749107"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var d=c[i],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],s=d.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e),d=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var l=setTimeout(function(){d({type:"timeout",target:s})},12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/eleapp/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var p=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=(n("28a5"),{name:"app",created:function(){this.getLocation(),console.log(Object({NODE_ENV:"production",BASE_URL:"/eleapp/"}).VUE_APP_URL)},methods:{getLocation:function(){var e=this;AMap.plugin("AMap.Geolocation",function(){var t=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4});function n(t){console.log(t),e.$store.dispatch("setLocation",t),e.$store.dispatch("setAddress",t.formattedAddress)}function r(t){e.getLngLatLocation()}t.getCurrentPosition(),AMap.event.addListener(t,"complete",n),AMap.event.addListener(t,"error",r)})},getLngLatLocation:function(){var e=this;AMap.plugin("AMap.CitySearch",function(){var t=new AMap.CitySearch;t.getLocalCity(function(t,n){"complete"===t&&"OK"===n.info&&AMap.plugin("AMap.Geocoder",function(){var t=new AMap.Geocoder({city:n.adcode}),r=n.rectangle.split(";")[0].split(",");t.getAddress(r,function(t,r){"complete"===t&&"OK"===r.info&&(e.$store.dispatch("setLocation",{addressComponent:{city:n.city,province:n.province},formattedAddress:r.regeocode.formattedAddress}),e.$store.dispatch("setAddress",r.regeocode.formattedAddress))})})})})}}}),i=c,u=(n("034f"),n("2877")),d=Object(u["a"])(i,o,a,!1,null,null,null),s=d.exports,l=n("8c4f");r["a"].use(l["a"]);var p=new l["a"]({mode:"history",base:"/eleapp/",routes:[{path:"/",component:function(){return n.e("chunk-1c79b52d").then(n.bind(null,"1e4b"))},children:[{path:"",redirect:"home"},{path:"/home",name:"home",component:function(){return n.e("chunk-7e5cdac7").then(n.bind(null,"bb51"))}},{path:"/order",name:"order",component:function(){return n.e("chunk-2d222708").then(n.bind(null,"cf2a"))}},{path:"/me",name:"me",component:function(){return n.e("chunk-2d0ae607").then(n.bind(null,"0a99"))}},{path:"/address",name:"address",component:function(){return n.e("chunk-4ef85de7").then(n.bind(null,"a821"))}},{path:"/city",name:"city",component:function(){return n.e("chunk-94058ca8").then(n.bind(null,"0d5f"))}}]},{path:"/login",name:"login",component:function(){return n.e("chunk-7aa9872b").then(n.bind(null,"dd7b"))}}]});p.beforeEach(function(e,t,n){var r=!!localStorage.ele_login;"/login"==e.path?n():r?n():n("/login")});var f,h=p,m=n("bd86"),b=n("2f62");r["a"].use(b["a"]);var g={SET_LOCATION:"SET_LOCATION",SET_ADDRESS:"SET_ADDRESS"},v={location:{},address:""},y={location:function(e){return e.location},address:function(e){return e.address}},k=(f={},Object(m["a"])(f,g.SET_LOCATION,function(e,t){e.location=t||null}),Object(m["a"])(f,g.SET_ADDRESS,function(e,t){e.address=t||""}),f),A={setLocation:function(e,t){var n=e.commit;n(g.SET_LOCATION,t)},setAddress:function(e,t){var n=e.commit;n(g.SET_ADDRESS,t)}},S=new b["a"].Store({state:v,getters:y,mutations:k,actions:A}),E=n("bc3a"),O=n.n(E);r["a"].config.productionTip=!1,O.a.defaults.baseURL="https://ele-interface.herokuapp.com/api",r["a"].prototype.$axios=O.a,new r["a"]({router:h,store:S,render:function(e){return e(s)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.894e293c.js.map