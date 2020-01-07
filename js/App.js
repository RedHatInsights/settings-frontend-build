!function(e){function n(n){for(var r,o,a=n[0],i=n[1],c=n[2],s=0,l=[];s<a.length;s++)o=a[s],k[o]&&l.push(k[o][0]),k[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(C&&C(n);l.length;)l.shift()();return H.push.apply(H,c||[]),t()}function t(){for(var e,n=0;n<H.length;n++){for(var t=H[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==k[a]&&(r=!1)}r&&(H.splice(n--,1),e=A(A.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!E[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(m[t]=n[t]);0==--y&&0===g&&D()}(e,n),r&&r(e,n)};var o,a=!0,i="f68bb361c5bee6652962",c=1e4,s={},l=[],u=[];var d=[],p="idle";function f(e){p=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var h,m,v,y=0,g=0,b={},w={},E={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=A.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;w={},b={},E=e.c,v=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var t in m={},k)j(t);return"prepare"===p&&0===g&&0===y&&D(),n})}function j(e){E[e]?(w[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",n.appendChild(t)}(e)):b[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&n.push(O(t));e.resolve(n)}}function P(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,o,a,c;function u(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=x[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var l=a.parents[s],u=x[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(u.hot._acceptedDependencies[i]?(t[l]||(t[l]=[]),d(t[l],[i])):(delete t[l],n.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},y=[],g={},b=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var w in m)if(Object.prototype.hasOwnProperty.call(m,w)){var _;c=O(w);var j=!1,D=!1,P=!1,H="";switch((_=m[w]?u(c):{type:"disposed",moduleId:w}).chain&&(H="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+_.moduleId+H));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+H));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(j=new Error("Aborted because "+c+" is not accepted"+H));break;case"accepted":n.onAccepted&&n.onAccepted(_),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),P=!0;break;default:throw new Error("Unexception type "+_.type)}if(j)return f("abort"),Promise.reject(j);if(D)for(c in g[c]=m[c],d(y,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,c)&&(h[c]||(h[c]=[]),d(h[c],_.outdatedDependencies[c]));P&&(d(y,[_.moduleId]),g[c]=b)}var I,M=[];for(r=0;r<y.length;r++)c=y[r],x[c]&&x[c].hot._selfAccepted&&M.push({module:c,errorHandler:x[c].hot._selfAccepted});f("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete k[e]}(e)});for(var S,C,T=y.slice();T.length>0;)if(c=T.pop(),a=x[c]){var U={},q=a.hot._disposeHandlers;for(o=0;o<q.length;o++)(t=q[o])(U);for(s[c]=U,a.hot.active=!1,delete x[c],delete h[c],o=0;o<a.children.length;o++){var N=x[a.children[o]];N&&((I=N.parents.indexOf(c))>=0&&N.parents.splice(I,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=x[c]))for(C=h[c],o=0;o<C.length;o++)S=C[o],(I=a.children.indexOf(S))>=0&&a.children.splice(I,1);for(c in f("apply"),i=v,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var B=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=x[c])){C=h[c];var R=[];for(r=0;r<C.length;r++)if(S=C[r],t=a.hot._acceptedDependencies[S]){if(-1!==R.indexOf(t))continue;R.push(t)}for(r=0;r<R.length;r++){t=R[r];try{t(C)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:C[r],error:e}),n.ignoreErrored||B||(B=e)}}}for(r=0;r<M.length;r++){var L=M[r];c=L.module,l=[c];try{A(c)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),n.ignoreErrored||B||(B=t),B||(B=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:e}),n.ignoreErrored||B||(B=e)}}return B?(f("fail"),Promise.reject(B)):(f("idle"),new Promise(function(e){e(y)}))}var x={},k={0:0},H=[];function A(n){if(x[n])return x[n].exports;var t=x[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:_,apply:P,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:s[e]};return o=void 0,n}(n),parents:(u=l,l=[],u),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=x[e];if(!n)return A;var t=function(t){return n.hot.active?(x[t]?-1===x[t].parents.indexOf(e)&&x[t].parents.push(e):(l=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),l=[]),A(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(n){A[e]=n}}};for(var a in A)Object.prototype.hasOwnProperty.call(A,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,r(a));return t.e=function(e){return"ready"===p&&f("prepare"),g++,A.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===p&&(b[e]||j(e),0===g&&0===y&&D())}},t.t=function(e,n){return 1&n&&(e=t(e)),A.t(e,-2&n)},t}(n)),t.l=!0,t.exports}A.e=function(e){var n=[],t=k[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=k[e]=[n,r]});n.push(t[2]=r);var o,a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,A.nc&&i.setAttribute("nonce",A.nc),i.src=function(e){return A.p+"js/"+({1:"General",2:"Applications"}[e]||e)+".js"}(e),o=function(n){i.onerror=i.onload=null,clearTimeout(c);var t=k[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,t[1](a)}k[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,a.appendChild(i)}return Promise.all(n)},A.m=e,A.c=x,A.d=function(e,n,t){A.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,n){if(1&n&&(e=A(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(A.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)A.d(t,r,function(n){return e[n]}.bind(null,r));return t},A.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(n,"a",n),n},A.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},A.p="/beta/apps/settings/",A.oe=function(e){throw console.error(e),e},A.h=function(){return i};var I=window.webpackJsonp=window.webpackJsonp||[],M=I.push.bind(I);I.push=n,I=I.slice();for(var S=0;S<I.length;S++)n(I[S]);var C=M;H.push([292,3]),t()}({173:function(e,n,t){(n=e.exports=t(5)(!1)).i(t(290),""),n.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}\n",""])},183:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return s});var r,o=t(184),a=t.n(o),i=t(205);function c(){if(r)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return r=new a.a({},[Object(i.a)()].concat(n))}function s(){var e;return(e=r).register.apply(e,arguments)}},289:function(e,n,t){var r=t(173);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=t(6)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(173,function(){var n=t(173);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)}),e.hot.dispose(function(){a()})},292:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t.n(r),a=t(25),i=t.n(a),c=t(76),s=t(88),l=t(183),u=t(101),d=t.n(u),p=t(102),f=t.n(p),h=t(103),m=t.n(h),v=t(104),y=t.n(v),g=t(105),b=t.n(g),w=t(1),E=t.n(w),O=t(78),_=t(116),j=t.n(_),D=t(185),P=t.n(D),x=t(186),k=t.n(x),H=t(68),A=t(77),I=t(79),M=t(174),S=t.n(M),C=t(187),T=t.n(C),U=t(181);function q(e){return function(n){function t(e){var n;return d()(this,t),(n=m()(this,y()(t).call(this,e))).state={component:null},n}return b()(t,n),f()(t,[{key:"componentDidMount",value:function(){var n=T()(S.a.mark(function n(){var t,r;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.default,this.setState({component:r});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?o.a.createElement(e,this.props):o.a.createElement(U.Skeleton,null)}}]),t}(r.Component)}var N=q(function(){return t.e(1).then(t.bind(null,434))}),B=q(function(){return t.e(2).then(t.bind(null,435))}),R="/general",L="/applications/:id",J=function(e){var n=e.component,t=e.rootClass,r=k()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(t),"pf-c-page__main"),a.setAttribute("role","main"),o.a.createElement(H.a,P()({},r,{component:n}))};J.propTypes={component:E.a.func,rootClass:E.a.string};var G=function(){var e=o.a.createElement(A.a,null,o.a.createElement(J,{exact:!0,path:L,component:B,rootClass:"applications"}),o.a.createElement(H.a,{render:function(){return o.a.createElement(I.a,{to:"/applications/insights"})}})),n=o.a.createElement(A.a,null,o.a.createElement(J,{path:R,component:N,rootClass:"general"}),o.a.createElement(J,{exact:!0,path:L,component:B,rootClass:"applications"}),o.a.createElement(H.a,{render:function(){return o.a.createElement(I.a,{to:R})}}));return window.insights.chrome.isBeta()?j()({},n):j()({},e)};G.propTypes={childProps:E.a.shape({location:E.a.shape({pathname:E.a.string})})};var X=t(202),z=(t(289),function(e){function n(){return d()(this,n),m()(this,y()(n).apply(this,arguments))}return b()(n,e),f()(n,[{key:"componentDidMount",value:function(){insights.chrome.init(),-1!==location.pathname.indexOf("applications")?insights.chrome.identifyApp("applications"):insights.chrome.identifyApp("")}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(X.NotificationsPortal,null),o.a.createElement(G,{childProps:this.props}))}}]),n}(r.Component));z.propTypes={history:E.a.object};var F=Object(O.a)(Object(s.connect)()(z)),W=t(203);i.a.render(o.a.createElement(s.Provider,{store:Object(l.a)().getStore()},o.a.createElement(c.a,{basename:Object(W.getBaseName)(window.location.pathname,1)},o.a.createElement(F,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map