(self.webpackChunksettings_frontend=self.webpackChunksettings_frontend||[]).push([[897],{87999:(t,e,n)=>{"use strict";n.d(e,{Z:()=>A});var r=n(6610),o=n(5991),i=n(10379),c=n(46070),s=n(77608),a=n(45697),u=n.n(a),l=n(92950),f=n.n(l),p=n(334),h=n(45237),d=(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(864),n.e(155),n.e(788),n.e(734),n.e(744)]).then(n.bind(n,3850))})),m=function(){return f().createElement(p.Switch,null,f().createElement(p.Route,{exact:!0,path:"/applications/:id",component:d}),f().createElement(p.Route,{render:function(){return f().createElement(p.Redirect,{to:"/applications/insights"})}}))},v=n(24685);n(14154);var y=function(t){(0,i.Z)(u,t);var e,n,a=(e=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,s.Z)(e);if(n){var o=(0,s.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,c.Z)(this,t)});function u(){return(0,r.Z)(this,u),a.apply(this,arguments)}return(0,o.Z)(u,[{key:"componentDidMount",value:function(){var t=this,e=this.props.history;insights.chrome.init(),insights.chrome.auth.getUser().then((function(e){return t.setState({userReady:!0,isAdmin:e.identity.user.is_org_admin})})),insights.chrome.identifyApp("applications"),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&e.push("/".concat(location.pathname.includes("applications")?"applications/":"").concat(t.navId))}))}},{key:"render",value:function(){return f().createElement(f().Fragment,null,f().createElement(v.ZP,null),f().createElement(m,{childProps:this.props}))}}]),u}(l.Component);y.propTypes={history:u().object};const A=(0,p.withRouter)((0,h.connect)()(y))},30319:(t,e,n)=>{"use strict";n.d(e,{S1:()=>u,z2:()=>l});var r,o=n(85061),i=n(18546),c=n(57283),s=n.n(c),a=n(84885);function u(){if(r)throw new Error("store already initialized");for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r=new i.ZP({},[s(),(0,a.ZP)()].concat((0,o.Z)(e.filter((function(t){return void 0!==t})))))}function l(){var t;return(t=r).register.apply(t,arguments)}},67073:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var r=n(94015),o=n.n(r),i=n(23645),c=n.n(i),s=n(42454),a=c()(o());a.i(s.Z),a.push([t.id,".applications{}.applications :root{--ins-color--orange: #ec7a08}\n","",{version:3,sources:["webpack://./src/App.scss"],names:[],mappings:"AAAA,cAAa,CAAb,oBACuF,4BAAoB",sourcesContent:[".applications{\n@import url(~@redhat-cloud-services/frontend-components-notifications/index.css);:root{--ins-color--orange: #ec7a08}\n\n}"],sourceRoot:""}]);const u=a},14154:(t,e,n)=>{"use strict";var r=n(93379),o=n.n(r),i=n(67073),c=o()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||t.hot.invalidate){var s=i.default.locals;t.hot.accept(67073,(e=>{i=n(67073),function(t,e,n){if(!t&&e||t&&!e)return!1;var r;for(r in t)if(t[r]!==e[r])return!1;for(r in e)if(!t[r])return!1;return!0}(s,i.default.locals)?(s=i.default.locals,c(i.default)):t.hot.invalidate()}))}t.hot.dispose((function(){c()})),i.default.locals}}]);
//# sourceMappingURL=../sourcemaps/897.8e4e5e9a170e388dafc6.js.map