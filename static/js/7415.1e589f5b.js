(self["webpackChunkpage_creator"]=self["webpackChunkpage_creator"]||[]).push([[7415],{81995:function(e,t,r){var a=r(14826),s=r(31244),n=r(58295),o=r(85261),i=r(35144);function u(e,t,r,u){if(!o(e))return e;t=s(t,e);var c=-1,l=t.length,h=l-1,f=e;while(null!=f&&++c<l){var m=i(t[c]),p=r;if("__proto__"===m||"constructor"===m||"prototype"===m)return e;if(c!=h){var d=f[m];p=u?u(d,m,f):void 0,void 0===p&&(p=o(d)?d:n(t[c+1])?[]:{})}a(f,m,p),f=f[m]}return e}e.exports=u},84854:function(e,t,r){var a=r(81995);function s(e,t,r){return null==e?e:a(e,t,r)}e.exports=s},37415:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("iframe",{key:e.iframeUrl,ref:"iframe",attrs:{src:e.iframeUrl,frameborder:"0"}})},s=[],n=r(84854),o=r.n(n),i=(r(62590),r(7249)),u=r(74082),c=r(53123),l={name:"TheIframe",components:{},data(){return{routeData:{},messageHandler:e=>{const t=this.$refs.iframe?.contentWindow;if(t){const{data:r,origin:a,source:s}=e,n=this.config;if(s===t&&n.allowOrigins.includes(a))if("emitRouteParams"===r.type){const{data:e,path:t}=r;Object.keys(e).forEach((r=>{o()(this.routeData,(t?t+".":"")+r,e[r])}))}else if("emitRouteChange"===r.type||"emitOpenNewWindow"===r.type){const{origin:e,base:a,route:s,params:o,fullPath:i}=r.data,u=a+s,c=e+u;let l="";this.matchUrl(c)?l=c:this.matchUrl(u)&&(l=u);const h=this.$router.resolve({params:{url:l},query:{routeParams:o?JSON.stringify(o):void 0}});"emitRouteChange"===r.type&&l!==this.$route.params.url?this.$router.push(h.location):"emitOpenNewWindow"===r.type&&l&&(window.name.startsWith(n.windowPreviewName)?window.open(h.href,n.windowPreviewName+"/"+(new Date).getTime()):window.open(h.href),t.postMessage({type:"openNewWindowSuccess",data:{fullPath:i}},e))}}}}},computed:{...(0,c.rn)(u.kh,{config:e=>e.data}),iframeUrl(){const e=this.config;let t=this.$route.params.url;const r=e.updateUrl;let a=this.$route.query.routeParams;a=a?JSON.parse(a):{};const s=i.parse(t,!0),n=s.pathname,o=n.substring(1).split("/")[0],u=Object.assign({},s.query);if(n.includes("/:")||Object.keys(u).length){const i=n.split("/").map((t=>{if(t.startsWith(":")){const s=t.substring(1),i=e.menusDefaultValue[n]?.params,u=a?.params?.[s]??(r?this.routeData[o]?.[s]??this.routeData[s]??i?.[s]:void 0);return void 0===u?t:u}return t})).join("/");Object.keys(u).forEach((t=>{const a=e.menusDefaultValue[n]?.query,s=r?this.routeData[o]?.[t]??this.routeData[t]??a?.[t]:void 0;u[t]=""!==u[t]?u[t]:void 0===s?"":s}));const c=this.$router.resolve({path:i,query:Object.assign(u,a?.query||{})}).route.fullPath;t=s.protocol&&s.host?s.protocol+"//"+s.host+c:c}return t}},beforeDestroy(){window.removeEventListener("message",this.messageHandler)},created(){this.routeData=this.config.params||{},window.addEventListener("message",this.messageHandler)},methods:{matchUrl(e){const t=r=>{let a=!1;return r.forEach((r=>{const s=r.config.route;if(s){let t=s.href;t||"iframe"!==s.name||(t=s.params.find((e=>"url"===e.key))?.value),t===e&&(a=!0)}r.children?.length&&t(r.children)&&(a=!0)})),a};return t(this.config.menus)}}},h=l,f=r(41237),m=(0,f.Z)(h,a,s,!1,null,"4f3033e4",null),p=m.exports}}]);