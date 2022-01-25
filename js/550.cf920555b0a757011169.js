"use strict";(self.webpackChunksettings_frontend=self.webpackChunksettings_frontend||[]).push([[550],{64783:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(15671),c=n(43144),o=n(60136),i=n(82963),s=n(61120),a=n(45697),u=n.n(a),l=n(92950),p=n.n(l),f=n(334),h=n(45237),d=(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(744)]).then(n.bind(n,72720))})),m=function(){return p().createElement(f.Switch,null,p().createElement(f.Route,{exact:!0,path:"/applications/:id",component:d}),p().createElement(f.Route,{render:function(){return p().createElement(f.Redirect,{to:"/applications/insights"})}}))},y=n(51344),E=n(27839),g=n(58061),v={403:E.Z},R={"cost-management":"Cost Management settings"},Z=function(e){var t=e.children,n=(0,h.useSelector)((function(e){return e.errorReducer.errorCode})),r=(0,f.useLocation)().pathname,c=(0,h.useDispatch)();if((0,l.useEffect)((function(){n&&c({type:g.j,payload:void 0})}),[r]),n){var o=v[n],i=R[Object.keys(R).find((function(e){return r.includes(e)}))]||"Settings";return p().createElement(o,{serviceName:i})}return t};Z.propTypes={children:u().node.isRequired};const P=Z;var _=function(e){(0,o.Z)(u,e);var t,n,a=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var c=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return(0,i.Z)(this,e)});function u(){return(0,r.Z)(this,u),a.apply(this,arguments)}return(0,c.Z)(u,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;insights.chrome.init(),insights.chrome.auth.getUser().then((function(t){return e.setState({userReady:!0,isAdmin:t.identity.user.is_org_admin})})),insights.chrome.identifyApp("applications"),this.unregister=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&t.push("/".concat(location.pathname.includes("applications")?"applications/":"").concat(e.navId))}))}},{key:"render",value:function(){return p().createElement(p().Fragment,null,p().createElement(y.ZP,null),p().createElement(P,null,p().createElement(m,{childProps:this.props})))}}]),u}(l.Component);_.propTypes={history:u().object};const A=(0,f.withRouter)((0,h.connect)()(_))},58061:(e,t,n)=>{n.d(t,{a:()=>a,j:()=>u});var r=n(93433),c=n(24350),o=n.n(c),i=n(94654),s=n.n(i)()(["GET_SCHEMA","SAVE_VALUES","GET_CONFIG"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),a=o()([].concat([],(0,r.Z)(s)),(function(e){return e})),u="API_ERROR"},72685:(e,t,n)=>{n.d(t,{ZP:()=>m,z2:()=>d});var r=n(93433),c=n(18546),o=n(57283),i=n.n(o),s=n(84885),a=n(4942),u=n(58061);const l=(0,a.Z)({},u.j,(function(e,t){return{errorCode:t.payload}}));var p=n(94500),f=n.n(p),h=new c.ZP({},[i(),(0,s.ZP)()].concat((0,r.Z)(window.insights.chrome.isProd?[]:[f()])));function d(){return h.register.apply(h,arguments)}h.register({errorReducer:(0,c.Gg)(l)});const m=h}}]);