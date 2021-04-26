(self.webpackChunksettings_frontend=self.webpackChunksettings_frontend||[]).push([[252],{24685:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>R});var r=n(22122),i=n(6610),o=n(5991),a=n(63349),s=n(10379),c=n(46070),l=n(77608),u=n(96156),d=n(92950),p=n.n(d),f=n(12181),m=n(45237),A=n(45697),g=n.n(A),h=n(21458),v=n(81253),y=n(43547),b=n(68774),C=n(68340),k=n(56715),E=n(36438);n(98322);var w=function(e){(0,s.Z)(f,e);var t,n,d=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,l.Z)(t);if(n){var i=(0,l.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;return(0,i.Z)(this,f),t=d.call(this,e),(0,u.Z)((0,a.Z)(t),"handleDismiss",(function(){t.props.onDismiss(t.props.id)})),(0,u.Z)((0,a.Z)(t),"setDismissTimeout",(function(){t.props.dismissable||(t.dismissTimeout=setTimeout((function(){return t.handleDismiss()}),t.props.dismissDelay))})),(0,u.Z)((0,a.Z)(t),"clearDismissTimeout",(function(){t.dismissTimeout&&clearTimeout(t.dismissTimeout)})),t.handleDismiss=t.handleDismiss.bind((0,a.Z)(t)),t.setDismissTimeout(),t}return(0,o.Z)(f,[{key:"componentWillUnmount",value:function(){this.clearDismissTimeout()}},{key:"render",value:function(){var e=this.props,t=e.description,n=e.dismissable,i=(e.onDismiss,e.dismissDelay,e.title),o=e.sentryId,a=e.requestId,s=(0,v.Z)(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId"]);return p().createElement(y.b,(0,r.Z)({className:"notification-item",title:i&&i.replace(/<\/?[^>]+(>|$)/g,"")},s,{actionClose:n?p().createElement(k.g,{"aria-label":"close-notification",variant:"plain",onClick:this.handleDismiss},p().createElement(E.ZP,null)):null,onMouseEnter:this.clearDismissTimeout,onMouseLeave:this.setDismissTimeout}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,o&&p().createElement(b.D,null,p().createElement(C.x,{component:C.q.small},"Tracking Id: ",o)),a&&p().createElement(b.D,null,p().createElement(C.x,{component:C.q.small},"Request Id: ",a)))}}]),f}(d.Component);w.propTypes={dismissable:g().bool,onDismiss:g().func.isRequired,id:g().string.isRequired,variant:g().string.isRequired,title:g().string.isRequired,description:g().node,dismissDelay:g().number,requestId:g().string,sentryId:g().string},w.defaultProps={dismissDelay:5e3};const O=w;n(55414);var x=n(32203),D=n(62394),Z=n(67949),P=n(20832),_=n(48140),B=n(86050),j=function(e){var t=e.page,n=e.onSetPage,r=e.onClearAll,i=e.count;return p().createElement(x.Z,{className:"notification-item"},p().createElement(D.e,null,p().createElement(_.a,null,p().createElement(B.Z,null,p().createElement(Z.zx,{variant:Z.Wu.link,className:"ins-c-pagination__clear-all",onClick:r},"Clear all")),p().createElement(B.Z,null,p().createElement(P.t,{itemCount:i,variant:P.a.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:t,onSetPage:n})))))};j.propTypes={count:g().number,page:g().number,onSetPage:g().func,onClearAll:g().func},j.defaultProps={count:0,page:1,onSetPage:Function,onClearAll:Function};const N=j;var T=function(e){(0,s.Z)(m,e);var t,n,d=(t=m,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,l.Z)(t);if(n){var i=(0,l.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function m(){var e;(0,i.Z)(this,m);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=d.call.apply(d,[this].concat(n)),(0,u.Z)((0,a.Z)(e),"state",{page:1}),(0,u.Z)((0,a.Z)(e),"onSetPage",(function(t,n){e.setState({page:n})})),e}return(0,o.Z)(m,[{key:"render",value:function(){var e=this.state.page,t=this.props,n=t.notifications,i=t.removeNotification,o=t.rootId,a=t.onClearAll,s=n&&n.length<=5?n:n&&n.slice(5*(e-1),5*e);return!n||Array.isArray(n)&&0===n.length?null:(0,f.createPortal)(p().createElement("div",{className:"notifications-portal"},n&&n.length>5&&p().createElement(N,{onSetPage:this.onSetPage,count:n.length,page:e,onClearAll:a}),s.map((function(e){return p().createElement(O,(0,r.Z)({onDismiss:i,key:e.id},e))}))),document.getElementById(o)||document.body)}}]),m}(d.Component);T.propTypes={notifications:g().arrayOf(g().shape({id:g().string.isRequired,title:g().string.isRequired,variant:g().string.isRequired,description:g().node,dismissable:g().bool})),removeNotification:g().func.isRequired,onClearAll:g().func};const R=(0,m.connect)((function(e,t){var n=e.notifications;return{notifications:t.notifications||n}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,h.FV)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,h.L1)())}}}))(T)},84885:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f});var r=n(96156),i=n(27361),o=n.n(i),a=n(18721),s=n.n(a),c=n(21458);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e,t,n){if("string"==typeof e)return{title:"Error",description:e};var r=t;Array.isArray(t)&&(r=t.find((function(t){return s()(e,t)})));var i=n;return Array.isArray(n)&&(i=n.find((function(t){return s()(e,t)}))),{title:o()(e,r)||"Error",description:o()(e,i),sentryId:e&&e.sentryId,requestId:e&&e.requestId}},p=function(e){var t=e.isRejected,n=e.hasCustomNotification,r=e.noErrorOverride,i=e.dispatchDefaultFailure;return t&&!n&&!r&&i};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1},n=u({},t,{},e),r=function(e){return e.match(new RegExp("^.*".concat(n.pendingSuffix,"$")))},i=function(e){return e.match(new RegExp("^.*".concat(n.fulfilledSuffix,"$")))},a=function(e){return e.match(new RegExp("^.*".concat(n.rejectedSuffix,"$")))},l={dismissable:!n.autoDismiss,dismissDelay:n.dismissDelay};return function(e){var t=e.dispatch;return function(e){return function(f){var m=f.meta,A=f.type;if(m&&m.notifications){var g=m.notifications;r(A)&&g.pending?t((0,c.wN)(u({},l,{},g.pending))):i(A)&&g.fulfilled?t((0,c.wN)(u({},l,{},g.fulfilled))):a(A)&&g.rejected&&t((0,c.wN)(u({},l,{},g.rejected,{sentryId:f.payload&&f.payload.sentryId,requestId:f.payload&&f.payload.requestId})))}if(p({isRejected:a(A),hasCustomNotification:m&&m.notifications&&m.notifications.rejected,noErrorOverride:m&&m.noError,dispatchDefaultFailure:n.dispatchDefaultFailure}))if(n.useStatusText)t((0,c.wN)(u({variant:"danger",dismissable:!0},d(f.payload,n.errorTitleKey,"statusText"))));else{var h=Array.isArray(n.errorNamespaceKey)&&n.errorNamespaceKey.find((function(e){return s()(f.payload,e)}));h?o()(f.payload,h).map((function(e){t((0,c.wN)(u({variant:"danger",dismissable:!0},d(e,n.errorTitleKey,n.errorDescriptionKey))))})):Array.isArray(f.payload)?f.payload.map((function(e){t((0,c.wN)(u({variant:"danger",dismissable:!0},d(e,n.errorTitleKey,n.errorDescriptionKey))))})):t((0,c.wN)(u({variant:"danger",dismissable:!0},d(f.payload,n.errorTitleKey,n.errorDescriptionKey))))}e(f)}}}}},17558:(e,t,n)=>{"use strict";n.d(t,{Dv:()=>i,Kf:()=>o,wt:()=>a});var r="@@INSIGHTS-CORE/NOTIFICATIONS/",i="".concat(r,"ADD_NOTIFICATION"),o="".concat(r,"REMOVE_NOTIFICATION"),a="".concat(r,"CLEAR_NOTIFICATIONS")},21458:(e,t,n)=>{"use strict";n.d(t,{wN:()=>i,FV:()=>o,L1:()=>a});var r=n(17558),i=function(e){return{type:r.Dv,payload:e}},o=function(e){return{type:r.Kf,payload:e}},a=function(){return{type:r.wt}}},83215:(e,t,n)=>{"use strict";n.d(t,{ee:()=>d});var r=n(17558),i=(n(21458),n(96156)),o=n(85061);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e,t){var n=t.payload;return[].concat((0,o.Z)(e),[s({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},n)])},l=function(e,t){var n=t.payload,r=e.findIndex((function(e){return e.id===n}));return[].concat((0,o.Z)(e.slice(0,r)),(0,o.Z)(e.slice(r+1)))},u=[];const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.Dv:return c(e,t);case r.Kf:return l(e,t);case r.wt:return[];default:return e}}},18546:(e,t,n)=>{"use strict";n.d(t,{Gg:()=>d,ZP:()=>f});var r=n(28481),i=n(85061),o=n(6610),a=n(5991),s=n(96156),c=n(34058);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;return Object.prototype.hasOwnProperty.call(e,r.type)?e[r.type](n,r):n}}var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.compose;(0,o.Z)(this,e);var a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r;this.store=(0,c.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return e}),t,a(c.applyMiddleware.apply(void 0,(0,i.Z)(n)))),this.reducers={}}return(0,a.Z)(e,[{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){var t=this;return this.reducers=u({},this.reducers,{},e),this.store.replaceReducer((0,c.combineReducers)(u({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var n=(0,r.Z)(t,2),i=n[0],o=n[1];return u({},e,(0,s.Z)({},i,o))}),{}),t.store.replaceReducer((0,c.combineReducers)(u({},t.reducers)))}}}]),e}();new p;const f=p},35240:(e,t,n)=>{"use strict";n.d(t,{eb:()=>i});var r=n(85061);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n="/",i=e.replace(/(#|\?).*/,"").split("/");return i.shift(),"beta"===i[0]&&(i.shift(),n="/beta/"),(0,r.Z)(new Array(t)).reduce((function(e,n,r){return"".concat(e).concat(i[r]||"").concat(r<t-1?"/":"")}),n)}n(82492),n(67523)},77460:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>m});var r=n(87757),i=n.n(r),o=n(96156),a=n(92137),s=(n(6610),n(10379),n(46070),n(77608),n(45366),n(78991)),c=n.n(s),l=n(59711);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(){return(p=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Error;var f=c().create();f.interceptors.request.use((function(e){return p.apply(this,arguments)})),f.interceptors.response.use((function(e){return e.data?e.data:e})),f.interceptors.response.use(null,(function(e){if(e.response&&401===e.response.status)return window.insights.chrome.auth.logout(),!1;throw e})),f.interceptors.response.use(null,(function(e){throw e.response&&e.response.status>=500&&e.response.status<600&&(0,l.e)((function(t){t.setTag("request_id",e.response.req_id)})),e})),f.interceptors.response.use(null,(function(e){var t;if(!c().isCancel(e))try{var n,r,i=d({},e);if(t=null===(n=i.response)||void 0===n||null===(r=n.headers)||void 0===r?void 0:r["x-rh-insights-request-id"],i.response&&i.response.data)throw d({},i.response.data,{statusText:i.response.statusText});throw e}catch(e){throw t||(e.sentryId=(0,l.Tb)(e)),e.requestId=t,e}}));const m=f},72466:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(92950);const i=n.n(r)().createContext("light")},43846:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(22122),i=n(81253),o=n(92950),a=n.n(o),s=n(49739),c=n(83826),l=n(43047);const u=function(){return a().createElement(a().Fragment,null,"If the problem persists, contact ",a().createElement("a",{href:"https://access.redhat.com/support"},"Red Hat Support")," or check our ",a().createElement("a",{href:"https://status.redhat.com"}," status page")," for known outages.")};var d=n(45697),p=n.n(d),f=n(60485),m=n(9947),A=n(38424),g=n(75106),h=n(67949),v=(n(93725),function(e){var t=e.errorTitle,n=e.errorDescription,o=(0,i.Z)(e,["errorTitle","errorDescription"]);return a().createElement(m.u,(0,r.Z)({variant:m.I.large},o,{className:"ins-c-error-state"}),a().createElement(A.k,{icon:l.$O}),a().createElement(f.D,{headingLevel:"h4",size:"lg"},t),a().createElement(g.B,null,a().createElement(s.K,null,!n&&a().createElement(c.v,null,"There was a problem processing the request. Please try again."),a().createElement(c.v,null,n||a().createElement(u,null)))),document.referrer?a().createElement(h.zx,{variant:"primary",onClick:function(){return history.back()}},"Return to last page"):a().createElement(h.zx,{variant:"primary",component:"a",href:".",target:"_blank",rel:"noopener noreferrer"},"Go to home page"))});v.propTypes={errorTitle:p().string,errorDescription:p().string},v.defaultProps={errorTitle:"Something went wrong"};const y=v},86350:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(22122),i=n(81253),o=n(85061),a=n(96156),s=n(6610),c=n(5991),l=n(10379),u=n(46070),d=n(77608),p=n(92950),f=n.n(p),m=n(45697),A=n.n(m),g=n(94184),h=n.n(g),v=n(45237),y=n(72466);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n(33011);var C=function(e){(0,l.Z)(m,e);var t,n,p=(t=m,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,d.Z)(t);if(n){var i=(0,d.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)});function m(){return(0,s.Z)(this,m),p.apply(this,arguments)}return(0,c.Z)(m,[{key:"calculateLocation",value:function(){var e=this.props,t=e.path,n=e.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var r=insights.chrome.$internal.store.getState();if(t&&r)return t.split("/").reduce((function(e,t){return 0===t.indexOf(":")?e.dynamic=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.dynamic,(0,a.Z)({},"data-".concat(t.substr(1).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),n[t.substr(1)])):e.staticPart=[].concat((0,o.Z)(e.staticPart),(0,o.Z)(""!==t?[t]:[])),e}),{staticPart:[r.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,o=(e.params,e.path,(0,i.Z)(e,["className","children","params","path"])),s=this.calculateLocation(),c=s.dynamic,l=s.staticPart;return f().createElement(y.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",i=h()((0,a.Z)({},"pf-m-".concat(e),"dark"===e));return{dark:f().createElement("section",(0,r.Z)({},o,c,{"page-type":l.join("-"),className:"".concat(h()(t,"pf-l-page__main-section pf-c-page__main-section")," ").concat(i)}),f().Children.map(n,(function(e){return f().cloneElement(e,{className:"pf-m-dark"})}))),light:f().createElement("section",(0,r.Z)({},o,c,{"page-type":l.join("-"),className:"".concat(h()(t,"pf-l-page__main-section pf-c-page__main-section"))}),n)}[e]}))}}]),m}(p.Component);C.propTypes={className:A().string,children:A().any.isRequired,params:A().any,path:A().string};const k=(0,v.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))(C)},27839:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(22122),i=n(81253),o=n(92950),a=n.n(o),s=n(45697),c=n.n(s),l=n(60485),u=n(67949),d=n(9947),p=n(38424),f=n(75106),m=n(99332),A=(n(24943),function(){return a().createElement(a().Fragment,null,"Contact your organization administrator(s) for more information or visit ",a().createElement("a",{href:"./settings/my-user-access"},"My User Access"),"  to learn more about your permissions.")}),g=function(e){var t=e.prevPageButtonText,n=e.toLandingPageText,o=e.title,s=e.actions,c=e.serviceName,m=e.icon,A=e.description,g=e.showReturnButton,h=e.className,v=(0,i.Z)(e,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),y=o||"You do not have access to ".concat(c);return a().createElement(d.u,(0,r.Z)({variant:d.I.full,className:"ins-c-not-authorized ".concat(h||"")},v),a().createElement(p.k,{icon:m}),a().createElement(l.D,{headingLevel:"h5",size:"lg"},y),a().createElement(f.B,null,A),s,g&&(document.referrer?a().createElement(u.zx,{variant:"primary",onClick:function(){return history.back()}},t):a().createElement(u.zx,{variant:"primary",component:"a",href:"."},n)))};g.propTypes={serviceName:function(e,t,n){if(void 0===e.title){for(var r,i=arguments.length,o=new Array(i>3?i-3:0),a=3;a<i;a++)o[a-3]=arguments[a];return(r=c().node).isRequired.apply(r,[e,t,n].concat(o))}},icon:c().func,description:c().node,showReturnButton:c().bool,className:c().string,title:c().node,actions:c().oneOfType([c().node,c().arrayOf(c().node)]),prevPageButtonText:c().node,toLandingPageText:c().node},g.defaultProps={icon:m.ZP,showReturnButton:!0,description:a().createElement(A,null),actions:null,prevPageButtonText:"Return to previous page",toLandingPageText:"Go to landing page"};const h=g},48716:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(22122),i=n(96156),o=n(81253),a=n(92950),s=n.n(a),c=n(45697),l=n.n(c),u=n(94184),d=n.n(u),p=n(72466),f=(n(76269),function(e){var t=e.className,n=e.children,a=(0,o.Z)(e,["className","children"]),c=d()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return s().createElement(p.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=d()((0,i.Z)({},"pf-m-".concat(e,"-200"),"dark"===e),(0,i.Z)({},"pf-m-light","light"===e));return s().createElement("section",(0,r.Z)({},a,{className:"".concat(c," ").concat(t),"widget-type":"InsightsPageHeader"}),n)}))});const m=f;f.propTypes={children:l().any.isRequired,className:l().string}},39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(92950),i=n.n(r),o=n(45697),a=n.n(o),s=n(94184),c=n.n(s),l=n(60485),u=function(e){var t=e.className,n=e.title,r=c()(t);return i().createElement(l.D,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"}," ",n," ")};const d=u;u.propTypes={title:a().node.isRequired,className:a().string}},56455:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(22122),i=n(96156),o=n(81253),a=n(92950),s=n.n(a),c=n(45697),l=n.n(c),u=n(94184),d=n.n(u),p=(n(63068),{xs:"xs",sm:"sm",md:"md",lg:"lg"}),f=function(e){var t=e.size,n=e.isDark,a=e.className,c=(0,o.Z)(e,["size","isDark","className"]),l=d()("ins-c-skeleton","ins-c-skeleton__".concat(t),(0,i.Z)({},"ins-m-dark",n),a);return s().createElement("div",(0,r.Z)({className:l},c)," ")};const m=f;f.propTypes={className:l().string,size:l().oneOf(Object.values(p)),isDark:l().bool},f.defaultProps={size:p.md,isDark:!1}},42454:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(94015),i=n.n(r),o=n(23645),a=n.n(o)()(i());a.push([e.id,".notification-item {\n  position: relative;\n  margin: 10px;\n  word-break: break-word; }\n\n.notifications-portal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 2000; }\n\n@media only screen and (max-width: 600px) {\n  .notifications-portal {\n    margin: 0;\n    width: initial; } }\n\n@media only screen and (min-width: 768px) {\n  .notifications-portal {\n    margin: 30px;\n    width: 708px; } }\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components-notifications/index.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,sBAAsB,EAAE;;AAE1B;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,aAAa,EAAE;;AAEjB;EACE;IACE,SAAS;IACT,cAAc,EAAE,EAAE;;AAEtB;EACE;IACE,YAAY;IACZ,YAAY,EAAE,EAAE",sourcesContent:[".notification-item {\n  position: relative;\n  margin: 10px;\n  word-break: break-word; }\n\n.notifications-portal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 2000; }\n\n@media only screen and (max-width: 600px) {\n  .notifications-portal {\n    margin: 0;\n    width: initial; } }\n\n@media only screen and (min-width: 768px) {\n  .notifications-portal {\n    margin: 30px;\n    width: 708px; } }\n"],sourceRoot:""}]);const s=a},18053:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(94015),i=n.n(r),o=n(23645),a=n.n(o)()(i());a.push([e.id,".notification-item{position:relative;margin:10px;word-break:break-word}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components-notifications/Notification/notification.css"],names:[],mappings:"AAAA,mBAAmB,iBAAiB,CAAC,WAAW,CAAC,qBAAqB",sourcesContent:[".notification-item{position:relative;margin:10px;word-break:break-word}\n"],sourceRoot:""}]);const s=a},84275:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(94015),i=n.n(r),o=n(23645),a=n.n(o)()(i());a.push([e.id,".notifications-portal{position:fixed;top:0;right:0;z-index:2000}@media only screen and (max-width: 600px){.notifications-portal{margin:0;width:initial}}@media only screen and (min-width: 768px){.notifications-portal{margin:30px;width:708px}}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components-notifications/NotificationPortal/notificationPortal.css"],names:[],mappings:"AAAA,sBAAsB,cAAc,CAAC,KAAK,CAAC,OAAO,CAAC,YAAY,CAAC,0CAA0C,sBAAsB,QAAQ,CAAC,aAAa,CAAE,CAAA,0CAA0C,sBAAsB,WAAW,CAAC,WAAW,CAAE",sourcesContent:[".notifications-portal{position:fixed;top:0;right:0;z-index:2000}@media only screen and (max-width: 600px){.notifications-portal{margin:0;width:initial}}@media only screen and (min-width: 768px){.notifications-portal{margin:30px;width:708px}}\n"],sourceRoot:""}]);const s=a},34099:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(94015),i=n.n(r),o=n(23645),a=n.n(o)()(i());a.push([e.id,".ins-c-error-state.pf-c-empty-state .pf-c-empty-state__icon{fill:var(--pf-global--danger-color--100)}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components/ErrorState/error-state.css"],names:[],mappings:"AAAA,4DAA4D,wCAAwC",sourcesContent:[".ins-c-error-state.pf-c-empty-state .pf-c-empty-state__icon{fill:var(--pf-global--danger-color--100)}\n"],sourceRoot:""}]);const s=a},69815:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(94015),i=n.n(r),o=n(23645),a=n.n(o)()(i());a.push([e.id,".pf-l-page__main .pf-l-page__main-section.pf-m-dark:not(:first-child){background:var(--pf-global--BackgroundColor--dark-transparent-100)}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components/Main/main.css"],names:[],mappings:"AAAA,sEAAsE,kEAAkE",sourcesContent:[".pf-l-page__main .pf-l-page__main-section.pf-m-dark:not(:first-child){background:var(--pf-global--BackgroundColor--dark-transparent-100)}\n"],sourceRoot:""}]);const s=a},48804:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(94015),i=n.n(r),o=n(23645),a=n.n(o)()(i());a.push([e.id,".ins-c-not-authorized .pf-c-title{max-width:540px;margin-left:auto;margin-right:auto}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components/NotAuthorized/NotAuthorized.css"],names:[],mappings:"AAAA,kCAAkC,eAAe,CAAC,gBAAgB,CAAC,iBAAiB",sourcesContent:[".ins-c-not-authorized .pf-c-title{max-width:540px;margin-left:auto;margin-right:auto}\n"],sourceRoot:""}]);const s=a},17756:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(94015),i=n.n(r),o=n(23645),a=n.n(o)()(i());a.push([e.id,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main-section.pf-l-page-header.pf-m-dark-200 h1.pf-c-title.pf-m-2xl,.pf-l-page__main-section.pf-l-page-header.pf-m-dark-200 *{color:#fff}.pf-l-page__main-section.pf-l-page-header .pf-c-breadcrumb{display:block;margin-bottom:15px;margin-bottom:0.9375rem}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components/PageHeader/page-header.css"],names:[],mappings:"AAAA,MAAM,4BAAoB,CAAS,aAAa,YAAY,CAAC,yIAAyI,UAAU,CAAC,2DAA2D,aAAa,CAAC,kBAAkB,CAAC,uBAAuB",sourcesContent:[":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.pf-l-page__main-section.pf-l-page-header.pf-m-dark-200 h1.pf-c-title.pf-m-2xl,.pf-l-page__main-section.pf-l-page-header.pf-m-dark-200 *{color:#fff}.pf-l-page__main-section.pf-l-page-header .pf-c-breadcrumb{display:block;margin-bottom:15px;margin-bottom:0.9375rem}\n"],sourceRoot:""}]);const s=a},31917:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(94015),i=n.n(r),o=n(23645),a=n.n(o)()(i());a.push([e.id,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.ins-c-skeleton{animation-duration:1s;animation-iteration-count:infinite;animation-name:skeletonGradient;animation-timing-function:linear;background:var(--pf-global--disabled-color--200);background:linear-gradient(to right, #f5f5f5 10%, #e8e8e8 18%, #f5f5f5 33%);background-size:1000px 50px;background-size:62.5rem 3.125rem;border-radius:5px;border-radius:0.3125rem}.ins-c-skeleton__xs{width:16%}.ins-c-skeleton__sm{width:33%}.ins-c-skeleton__md{width:66%}.ins-c-skeleton__lg{width:100%}.ins-c-skeleton.ins-m-dark{background:#3c3c3c;background:linear-gradient(to right, #3c3c3c 10%, #484848 18%, #3c3c3c 33%);background-size:1000px 50px;background-size:62.5rem 3.125rem}@keyframes skeletonGradient{0%{background-position:-500px 0px;background-position:-31.25rem 0rem}100%{background-position:500px 0px;background-position:31.25rem 0rem}}\n","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components/Skeleton/skeleton.css"],names:[],mappings:"AAAA,MAAM,4BAAoB,CAAS,aAAa,YAAY,CAAC,gBAAgB,qBAAqB,CAAC,kCAAkC,CAAC,+BAA+B,CAAC,gCAAgC,CAAC,gDAAgD,CAAC,2EAA2E,CAAC,2BAA2B,CAAC,gCAAgC,CAAC,iBAAiB,CAAC,uBAAuB,CAAC,oBAAoB,SAAS,CAAC,oBAAoB,SAAS,CAAC,oBAAoB,SAAS,CAAC,oBAAoB,UAAU,CAAC,2BAA2B,kBAAkB,CAAC,2EAA2E,CAAC,2BAA2B,CAAC,gCAAgC,CAAC,4BAA4B,GAAG,8BAA8B,CAAC,kCAAkC,CAAC,KAAK,6BAA6B,CAAC,iCAAiC,CAAA",sourcesContent:[":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.ins-c-skeleton{animation-duration:1s;animation-iteration-count:infinite;animation-name:skeletonGradient;animation-timing-function:linear;background:var(--pf-global--disabled-color--200);background:linear-gradient(to right, #f5f5f5 10%, #e8e8e8 18%, #f5f5f5 33%);background-size:1000px 50px;background-size:62.5rem 3.125rem;border-radius:5px;border-radius:0.3125rem}.ins-c-skeleton__xs{width:16%}.ins-c-skeleton__sm{width:33%}.ins-c-skeleton__md{width:66%}.ins-c-skeleton__lg{width:100%}.ins-c-skeleton.ins-m-dark{background:#3c3c3c;background:linear-gradient(to right, #3c3c3c 10%, #484848 18%, #3c3c3c 33%);background-size:1000px 50px;background-size:62.5rem 3.125rem}@keyframes skeletonGradient{0%{background-position:-500px 0px;background-position:-31.25rem 0rem}100%{background-position:500px 0px;background-position:31.25rem 0rem}}\n"],sourceRoot:""}]);const s=a},98322:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(18053),a=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var s=o.default.locals;e.hot.accept(18053,(t=>{o=n(18053),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(s,o.default.locals)?(s=o.default.locals,a(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),o.default.locals},55414:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(84275),a=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var s=o.default.locals;e.hot.accept(84275,(t=>{o=n(84275),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(s,o.default.locals)?(s=o.default.locals,a(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),o.default.locals},93725:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(34099),a=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var s=o.default.locals;e.hot.accept(34099,(t=>{o=n(34099),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(s,o.default.locals)?(s=o.default.locals,a(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),o.default.locals},33011:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(69815),a=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var s=o.default.locals;e.hot.accept(69815,(t=>{o=n(69815),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(s,o.default.locals)?(s=o.default.locals,a(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),o.default.locals},24943:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(48804),a=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var s=o.default.locals;e.hot.accept(48804,(t=>{o=n(48804),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(s,o.default.locals)?(s=o.default.locals,a(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),o.default.locals},76269:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(17756),a=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var s=o.default.locals;e.hot.accept(17756,(t=>{o=n(17756),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(s,o.default.locals)?(s=o.default.locals,a(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),o.default.locals},63068:(e,t,n)=>{"use strict";var r=n(93379),i=n.n(r),o=n(31917),a=i()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var s=o.default.locals;e.hot.accept(31917,(t=>{o=n(31917),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(s,o.default.locals)?(s=o.default.locals,a(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),o.default.locals}}]);
//# sourceMappingURL=../sourcemaps/rhcsVendor.8e4e5e9a170e388dafc6.js.map