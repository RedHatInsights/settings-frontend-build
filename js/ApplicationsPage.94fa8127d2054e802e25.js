(self.webpackChunksettings_frontend=self.webpackChunksettings_frontend||[]).push([[744],{72720:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>pe,getAppId:()=>le});var n,a=r(4942),o=r(29439),i=r(92950),s=r.n(i),c=r(45697),l=r.n(c),u=r(14494),p=r(56455),f=r(84934),d=r(48716),m=r(39173),v=r(86350),g=r(56067),h=r(72685),E=r(9036),b=r(58061);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const Z={applicationsStore:(0,E.Gg)((n={},(0,a.Z)(n,b.a.GET_SCHEMA_FULFILLED,(function(e,t){var r=t.payload;return O(O({},e),{},{schema:r,loaded:!0})})),(0,a.Z)(n,b.a.GET_SCHEMA_PENDING,(function(e){return O(O({},e),{},{loaded:!1,schema:[]})})),(0,a.Z)(n,b.a.GET_SCHEMA_REJECTED,(function(e){return O(O({},e),{},{error:!0})})),(0,a.Z)(n,b.a.SAVE_VALUES_FULFILLED,(function(e){return O({},e)})),(0,a.Z)(n,b.a.GET_CONFIG_PENDING,(function(e){return O(O({},e),{},{appsConfig:{},configLoaded:!1})})),(0,a.Z)(n,b.a.GET_CONFIG_FULFILLED,(function(e,t){var r=t.payload;return O(O({},e),{},{appsConfig:r,configLoaded:!0})})),n),{loaded:!1,configLoaded:!1,error:null})};var P=r(83215),T=r(15861),j=r(87757),S=r.n(j),w=r(9669),L=r.n(w),_=r(89863),D=r(47180);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=L().create();A.interceptors.request.use(_.w5),A.interceptors.response.use(_.xH),A.interceptors.response.use(null,_.Di),A.interceptors.response.use(null,(function(e){var t=h.ZP.getStore();throw e.response&&403===e.response.status&&t.dispatch({type:b.j,payload:403}),e})),A.interceptors.response.use(null,_.ub),A.interceptors.response.use(null,_.ud);var I=function(){var e=(0,T.Z)(S().mark((function e(){var t;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/api/chrome-service/v1/static/".concat(insights.chrome.isBeta()?"/beta":"stable","/").concat(insights.chrome.isProd()?"prod":"stage","/main.yml"));case 2:return t=e.sent,e.abrupt("return",(0,D.zD)(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=(0,T.Z)(S().mark((function e(t){var r,n=arguments;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:"v1",e.abrupt("return",A.get("/api/".concat(t,"/").concat(r,"/settings")));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=(0,T.Z)(S().mark((function e(t,r){var n,a=arguments;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>2&&void 0!==a[2]?a[2]:"v1",e.abrupt("return",A.post("/api/".concat(t,"/").concat(n,"/settings/"),k({},r)));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),x=r(45987),F=r(87462),V=r(67850),H=r(5684),M=r(2095),R=r(85962),U=r(81159),q=r(34023),z=r(93433),X=r(63540),B=function(e){var t=e.text,r=e.linkProps,n=0,a=t.split(/<link>/).reduce((function(e,t){var a=t.split(/<\/link>/);return 2===a.length&&(a[0]=s().createElement(X.xv,(0,F.Z)({key:"link-".concat(n),rel:"noreferrer noopener",className:"pf-u-ml-md",component:X.qO.a,target:"_blank"},r[n]),a[0]),n++),[].concat((0,z.Z)(e),(0,z.Z)(a))}),[]);return s().createElement(X.xv,{component:X.qO.p},a)};B.propTypes={text:l().string.isRequired,linkProps:l().arrayOf(l().object).isRequired};var J=function(e){var t=e.errorTitle,r=e.errorDescription;return s().createElement(f.Z,{errorTitle:t,errorDescription:s().createElement("div",{dangerouslySetInnerHTML:{__html:r}})})};J.propTypes={errorTitle:l().string,errorDescription:l().string};var K=r(83007),Q=r(96354),W=r(64124),$=r(4694),Y=r(63857);function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=te(te({},H.ZP),{},(0,a.Z)({"switch-field":H.ZP[Q.Z.SWITCH],"textarea-field":H.ZP[Q.Z.TEXTAREA],"select-field":H.ZP[Q.Z.SELECT],"plain-text-with-links":B,"error-state":J},Q.Z.DUAL_LIST_SELECT,{component:H.ZP[Q.Z.DUAL_LIST_SELECT],isFilterable:!0,isSortable:!0,isSearchable:!0,resolveProps:function(e){return te(te({},e.leftTitle&&{availableOptionsTitle:e.leftTitle}),e.rightTitle&&{chosenOptionsTitle:e.rightTitle})},availableOptionsActions:[s().createElement(Y.Z,{position:"left",key:"sort"})],chosenOptionsActions:[s().createElement(Y.Z,{position:"right",key:"sort"})]})),ne={"required-validator":$.Z[W.Z.REQUIRED],"pattern-validator":$.Z[W.Z.PATTERN],"min-length-validator":$.Z[W.Z.MIN_LENGTH],"url-validator":$.Z[W.Z.URL],"max-length-validator":$.Z[W.Z.MAX_LENGTH],"min-items-validator":$.Z[W.Z.MIN_ITEMS],"exact-length-validator":$.Z[W.Z.EXACT_LENGTH]},ae=function(e){return s().createElement(V.ZP,(0,F.Z)({},e,{submitLabel:"Save",canReset:!0},e.schema.formProps))},oe=function(e){var t=e.schemas,r=e.loaded,n=e.saveValues,a=(0,x.Z)(e,["schemas","loaded","saveValues"]),c=(0,i.useState)(),l=(0,o.Z)(c,2),u=l[0],f=l[1];return s().createElement(U.K,(0,F.Z)({},a,{hasGutter:!0}),r?t.map((function(e,t){return s().createElement(q.v,{key:"settings-form-".concat(t)},s().createElement(M.Zb,null,s().createElement(R.e,null,s().createElement(K.Z,{componentMapper:re,FormTemplate:ae,schema:e,submitLabel:"Save",onSubmit:function(e,t){return f(e),t.initialize(e),n(e)},initialValues:u,validatorMapper:ne}))))})):s().createElement(q.v,null,s().createElement(M.Zb,null,s().createElement(R.e,null,s().createElement(p.Z,{size:"lg"})))))};oe.propTypes={schemas:l().arrayOf(l().shape({})),loaded:l().bool,appId:l().string,saveValues:l().func},oe.defaultProps={saveValues:function(){}},ae.propTypes={schema:l().object};const ie=oe;var se=r(18029),ce=r.n(se),le=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).params;return e&&e.id||""},ue=function(e){var t=e.appsConfig,r=e.saveValues,n=e.match,a=e.getSchema,c=e.getConfig,l=e.configLoaded,u=e.loaded,E=e.schema,b=e.hasError,y=t&&t[le(n)]||le(n),O=y.frontend&&y.frontend.title||y.title||y,T=(0,i.useState)(void 0),j=(0,o.Z)(T,2),S=j[0],w=j[1];return(0,i.useEffect)((function(){(0,h.z2)(Z),(0,h.z2)({notifications:P.ee}),t||c(),insights.chrome.auth.getUser().then((function(e){return w(e.identity.user.is_org_admin)}))}),[]),(0,i.useEffect)((function(){var e;y&&"string"!=typeof y&&a((null==y||null===(e=y.api)||void 0===e?void 0:e.apiName)||n.params.id,y.api)}),[y]),s().createElement(s().Fragment,null,s().createElement(d.Z,null,s().createElement(s().Fragment,null,s().createElement(m.Z,{title:S?"Applications settings":ce()(O)}),S&&(l?s().createElement("p",{className:"pf-u-mt-sm"},"Settings for ".concat(ce()(O))):s().createElement(p.Z,{size:"sm"})))),"boolean"==typeof S&&!b&&s().createElement(v.Z,null,S?s().createElement(ie,{loaded:u,schemas:E,saveValues:function(e){var t;return r((null==y||null===(t=y.api)||void 0===t?void 0:t.apiName)||n.params.id,e,y.api,y.title)}}):s().createElement(g.Z,{serviceName:ce()(O)})),b&&s().createElement(f.Z,null))};ue.propTypes={match:l().shape({params:l().shape({id:l().string})}),appsConfig:l().shape((0,a.Z)({},l().string,l().shape({title:l().string,frontend:l().shape({title:l().string})}))),configLoaded:l().bool,getSchema:l().func,loaded:l().bool,saveValues:l().func,getConfig:l().func,schema:l().arrayOf(l().object),hasError:l().bool};const pe=(0,u.$j)((function(e){var t=e.applicationsStore;return{schema:t&&t.schema,loaded:t&&t.loaded,appsConfig:t&&t.appsConfig,configLoaded:t&&t.configLoaded,hasError:t&&t.error}}),(function(e){return{getConfig:function(){return e({type:b.a.GET_CONFIG,payload:I()})},getSchema:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{versions:[]},n=(0,o.Z)(r.versions,1)[0];return e(function(e,t){return{type:b.a.GET_SCHEMA,payload:N(e,t)}}(t,n))},saveValues:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{versions:[]},a=(0,o.Z)(n.versions,1)[0];return e(function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Red Hat Insights";return{type:b.a.SAVE_VALUES,payload:G(e,t,r),meta:{notifications:{fulfilled:{variant:"success",title:"Application settings saved",description:"Settings for ".concat(n," were replaced with new values."),dismissable:!0}}}}}(t,r,a,arguments.length>3?arguments[3]:void 0))}}}))(ue)},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{},65088:()=>{},70347:()=>{},10497:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},54476:()=>{},28992:()=>{},80897:()=>{},40837:()=>{},90479:()=>{},78752:()=>{},74282:()=>{},98379:()=>{},25238:()=>{},1508:()=>{},91993:()=>{},99624:()=>{},36974:()=>{},27479:()=>{},93661:()=>{},56024:()=>{},43390:()=>{},22143:()=>{},40209:()=>{},87234:()=>{},72816:()=>{},53519:()=>{}}]);