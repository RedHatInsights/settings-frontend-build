(()=>{var e,r,t,n,o,a,i,s,l,d,u,f,p,c,h,m,g,v,y,b={31288:(e,r,t)=>{document.getElementById("root").classList.add("applications"),window.insights&&window.insights.chrome&&window.insights.chrome.isChrome2||Promise.all([t.e(939),t.e(133),t.e(950),t.e(937),t.e(340),t.e(156)]).then(t.bind(t,19221))}},w={};function S(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,S),t.loaded=!0,t.exports}S.m=b,S.c=w,S.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return S.d(r,{a:r}),r},S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>"js/"+(744===e?"ApplicationsPage":e)+"."+S.h()+".js",S.miniCssF=e=>"css/"+(744===e?"ApplicationsPage":e)+"."+{156:"0761bae4aa0b7af32924",744:"996e90aadf568467d330"}[e]+".css",S.h=()=>"c3d572e0e2d3a3849643",S.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),S.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="settings-frontend:",S.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+o){i=u;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,S.nc&&i.setAttribute("nonce",S.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),s&&document.head.appendChild(i)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{S.S={};var e={},r={};S.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var a=S.S[t],i="settings-frontend",s=(e,r,t,n)=>{var o=a[e]=a[e]||{},s=o[r];(!s||!s.loaded&&(!n!=!s.eager?n:i>s.from))&&(o[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(s("@scalprum/react-core","0.1.1",(()=>Promise.all([S.e(939),S.e(977),S.e(950),S.e(937)]).then((()=>()=>S(25977))))),s("react-dom","17.0.2",(()=>Promise.all([S.e(935),S.e(950)]).then((()=>()=>S(73935))))),s("react-router-dom","5.2.0",(()=>Promise.all([S.e(338),S.e(950)]).then((()=>()=>S(23338))))),s("react","17.0.2",(()=>S.e(294).then((()=>()=>S(67294))))),s("redux-promise-middleware","6.1.2",(()=>S.e(68).then((()=>()=>S(5068)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),S.p="/apps/applications/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(s=e[a]))[0]?"-":(n>0?".":"")+(n=2,s);return t}var i=[];for(a=1;a<e.length;a++){var s=e[a];i.push(0===s?"not("+l()+")":1===s?"("+l()+" || "+l()+")":2===s?i.pop()+" "+i.pop():o(s))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,s=1,l=!0;;s++,i++){var d,u,f=s<e.length?(typeof e[s])[0]:"";if(i>=r.length||"o"==(u=(typeof(d=r[i]))[0]))return!l||("u"==f?s>n&&!o:""==f!=o);if("u"==u){if(!l||"u"!=f)return!1}else if(l)if(f==u)if(s<=n){if(d!=e[s])return!1}else{if(o?d>e[s]:d<e[s])return!1;d!=e[s]&&(l=!1)}else if("s"!=f&&"n"!=f){if(o||s<=n)return!1;l=!1,s--}else{if(s<=n||u<f!=o)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,s--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",l=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(s(e,t,o,n)),u(e[t][o])},d=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},u=e=>(e.loaded=1,e.get()),p=(f=e=>function(r,t,n,o){var a=S.I(r);return a&&a.then?a.then(e.bind(e,r,S.S[r],t,n,o)):e(r,S.S[r],t,n,o)})(((e,r,t,n,o)=>r&&S.o(r,t)?l(r,0,t,n):o())),c=f(((e,r,t,n,o)=>{var a=r&&S.o(r,t)&&d(r,t,n);return a?u(a):o()})),h={},m={92950:()=>p("default","react",[1,17,0,2],(()=>S.e(294).then((()=>()=>S(67294))))),12181:()=>p("default","react-dom",[1,17,0,2],(()=>S.e(935).then((()=>()=>S(73935))))),334:()=>c("default","react-router-dom",[1,5,2,0],(()=>S.e(338).then((()=>()=>S(23338))))),54025:()=>p("default","@scalprum/react-core",[0],(()=>S.e(977).then((()=>()=>S(25977))))),57283:()=>c("default","redux-promise-middleware",[1,6,1,2],(()=>S.e(68).then((()=>()=>S(5068)))))},g={340:[54025,57283],937:[12181,334],950:[92950]},S.f.consumes=(e,r)=>{S.o(g,e)&&g[e].forEach((e=>{if(S.o(h,e))return r.push(h[e]);var t=r=>{h[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}},n=r=>{delete h[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var o=m[e]();o.then?r.push(h[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},v=e=>new Promise(((r,t)=>{var n=S.miniCssF(e),o=S.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),n(l)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),y={768:0},S.f.miniCss=(e,r)=>{y[e]?r.push(y[e]):0!==y[e]&&{156:1,744:1}[e]&&r.push(y[e]=v(e).then((()=>{y[e]=0}),(r=>{throw delete y[e],r})))},(()=>{var e={768:0};S.f.j=(r,t)=>{var n=S.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(340|937|950)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=S.p+S.u(r),i=new Error;S.l(a,(t=>{if(S.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,s]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in i)S.o(i,n)&&(S.m[n]=i[n]);s&&s(S)}for(r&&r(t);l<a.length;l++)o=a[l],S.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunksettings_frontend=self.webpackChunksettings_frontend||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),S(31288)})();