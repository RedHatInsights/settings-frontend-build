(self.webpackChunksettings_frontend=self.webpackChunksettings_frontend||[]).push([[744],{3850:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>de,getAppId:()=>pe});var r,a=n(96156),o=n(28481),i=n(92950),c=n.n(i),s=n(45697),l=n.n(s),u=n(45237),p=n(56455),f=n(43846),d=n(48716),m=n(39173),g=n(86350),v=n(27839),E=n(30319),h=n(18546),b=n(85061),O=n(24350),Z=n.n(O),y=n(94654),P=n.n(y)()(["GET_SCHEMA","SAVE_VALUES","GET_CONFIG"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),S=Z()([].concat([],(0,b.Z)(P)),(function(e){return e}));function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const L={applicationsStore:(0,h.Gg)((r={},(0,a.Z)(r,S.GET_SCHEMA_FULFILLED,(function(e,t){var n=t.payload;return j(j({},e),{},{schema:n,loaded:!0})})),(0,a.Z)(r,S.GET_SCHEMA_PENDING,(function(e){return j(j({},e),{},{loaded:!1,schema:[]})})),(0,a.Z)(r,S.GET_SCHEMA_REJECTED,(function(e){return j(j({},e),{},{error:!0})})),(0,a.Z)(r,S.SAVE_VALUES_FULFILLED,(function(e){return j({},e)})),(0,a.Z)(r,S.GET_CONFIG_PENDING,(function(e){return j(j({},e),{},{appsConfig:{},configLoaded:!1})})),(0,a.Z)(r,S.GET_CONFIG_FULFILLED,(function(e,t){var n=t.payload;return j(j({},e),{},{appsConfig:n,configLoaded:!0})})),r),{loaded:!1,configLoaded:!1,error:null})};var _=n(83215),w=n(92137),C=n(87757),D=n.n(C),A=n(77460),k=n(47180);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(){var e=(0,w.Z)(D().mark((function e(){var t;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.ZP.get("".concat(insights.chrome.isBeta()?"/beta":"","/config/main.yml"));case 2:return t=e.sent,e.abrupt("return",(0,k.zD)(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=(0,w.Z)(D().mark((function e(t){var n,r=arguments;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"v1",e.abrupt("return",A.ZP.get("/api/".concat(t,"/").concat(n,"/settings")));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=(0,w.Z)(D().mark((function e(t,n){var r,a=arguments;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:"v1",e.abrupt("return",A.ZP.post("/api/".concat(t,"/").concat(r,"/settings/"),I({},n)));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(e,t){return{type:S.GET_SCHEMA,payload:F(e,t)}},U=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Red Hat Insights";return{type:S.SAVE_VALUES,payload:V(e,t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Application settings saved",description:"Settings for ".concat(r," were replaced with new values."),dismissable:!0}}}}},M=n(81253),R=n(22122),H=n(67850),q=n(11645),z=n(81159),X=n(34023),J=n(2095),B=n(85962),K=n(63540),Q=function(e){var t=e.text,n=e.linkProps,r=0,a=t.split(/<link>/).reduce((function(e,t){var a=t.split(/<\/link>/);return 2===a.length&&(a[0]=c().createElement(K.xv,(0,R.Z)({key:"link-".concat(r),rel:"noreferrer noopener",className:"pf-u-ml-md",component:K.qO.a,target:"_blank"},n[r]),a[0]),r++),[].concat((0,b.Z)(e),(0,b.Z)(a))}),[]);return c().createElement(K.xv,{component:K.qO.p},a)};Q.propTypes={text:l().string.isRequired,linkProps:l().arrayOf(l().object).isRequired};var W=n(93344),Y=n(96354),$=n(64124),ee=n(4694),te=n(94517);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=re(re({},q.ZP),{},(0,a.Z)({"switch-field":q.ZP[Y.Z.SWITCH],"textarea-field":q.ZP[Y.Z.TEXTAREA],"select-field":q.ZP[Y.Z.SELECT],"plain-text-with-links":Q},Y.Z.DUAL_LIST_SELECT,{component:q.ZP[Y.Z.DUAL_LIST_SELECT],isFilterable:!0,isSortable:!0,isSearchable:!0,resolveProps:function(e){return re(re({},e.leftTitle&&{availableOptionsTitle:e.leftTitle}),e.rightTitle&&{chosenOptionsTitle:e.rightTitle})},availableOptionsActions:[c().createElement(te.Z,{position:"left",key:"sort"})],chosenOptionsActions:[c().createElement(te.Z,{position:"right",key:"sort"})]})),oe={"required-validator":ee.Z[$.Z.REQUIRED],"pattern-validator":ee.Z[$.Z.PATTERN],"min-length-validator":ee.Z[$.Z.MIN_LENGTH],"url-validator":ee.Z[$.Z.URL],"max-length-validator":ee.Z[$.Z.MAX_LENGTH],"min-items-validator":ee.Z[$.Z.MIN_ITEMS],"exact-length-validator":ee.Z[$.Z.EXACT_LENGTH]},ie=function(e){return c().createElement(H.ZP,(0,R.Z)({},e,{submitLabel:"Save",canReset:!0}))},ce=function(e){var t=e.schemas,n=e.loaded,r=e.saveValues,a=(0,M.Z)(e,["schemas","loaded","saveValues"]);return c().createElement(z.K,(0,R.Z)({},a,{hasGutter:!0}),n?t.map((function(e,t){return c().createElement(X.v,{key:"settings-form-".concat(t)},c().createElement(J.Zb,null,c().createElement(B.e,null,c().createElement(W.Z,{componentMapper:ae,FormTemplate:ie,schema:e,submitLabel:"Save",onSubmit:r,validatorMapper:oe}))))})):c().createElement(X.v,null,c().createElement(J.Zb,null,c().createElement(B.e,null,c().createElement(p.Z,{size:"lg"})))))};ce.propTypes={schemas:l().arrayOf(l().shape({})),loaded:l().bool,appId:l().string,saveValues:l().func},ce.defaultProps={saveValues:function(){}};const se=ce;var le=n(18029),ue=n.n(le),pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.params;return t&&t.id||""},fe=function(e){var t=e.appsConfig,n=e.saveValues,r=e.match,a=e.getSchema,s=e.getConfig,l=e.configLoaded,u=e.loaded,h=e.schema,b=e.hasError,O=t&&t[pe(r)]||pe(r),Z=O.frontend&&O.frontend.title||O.title||O,y=(0,i.useState)(void 0),P=(0,o.Z)(y,2),S=P[0],T=P[1];return(0,i.useEffect)((function(){(0,E.z2)(L),(0,E.z2)({notifications:_.ee}),t||s(),insights.chrome.auth.getUser().then((function(e){return T(e.identity.user.is_org_admin)}))}),[]),(0,i.useEffect)((function(){var e;O&&"string"!=typeof O&&a((null==O||null===(e=O.api)||void 0===e?void 0:e.apiName)||r.params.id,O.api)}),[O]),c().createElement(c().Fragment,null,c().createElement(d.Z,null,c().createElement(c().Fragment,null,c().createElement(m.Z,{title:S?"Applications settings":ue()(Z)}),S&&(l?c().createElement("p",{className:"pf-u-mt-sm"},"Settings for ".concat(ue()(Z))):c().createElement(p.Z,{size:"sm"})))),"boolean"==typeof S&&!b&&c().createElement(g.Z,null,S?c().createElement(se,{loaded:u,schemas:h,saveValues:function(e){var t;return n((null==O||null===(t=O.api)||void 0===t?void 0:t.apiName)||r.params.id,e,O.api,O.title)}}):c().createElement(v.Z,{serviceName:ue()(Z)})),b&&c().createElement(f.Z,null))};fe.propTypes={match:l().shape({params:l().shape({id:l().string})}),appsConfig:l().shape((0,a.Z)({},l().string,l().shape({title:l().string,frontend:l().shape({title:l().string})}))),configLoaded:l().bool,getSchema:l().func,loaded:l().bool,saveValues:l().func,getConfig:l().func,schema:l().arrayOf(l().object),hasError:l().bool};const de=(0,u.connect)((function(e){var t=e.applicationsStore;return{schema:t&&t.schema,loaded:t&&t.loaded,appsConfig:t&&t.appsConfig,configLoaded:t&&t.configLoaded,hasError:t&&t.error}}),(function(e){return{getConfig:function(){return e({type:S.GET_CONFIG,payload:N()})},getSchema:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{versions:[]},r=(0,o.Z)(n.versions,1),a=r[0];return e(x(t,a))},saveValues:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{versions:[]},a=(0,o.Z)(r.versions,1),i=a[0],c=arguments.length>3?arguments[3]:void 0;return e(U(t,n,i,c))}}}))(fe)}}]);
//# sourceMappingURL=../sourcemaps/ApplicationsPage.2b76ca0d6d642d1f7eee.js.map