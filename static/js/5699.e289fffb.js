(self["webpackChunkpage_creator"]=self["webpackChunkpage_creator"]||[]).push([[5699],{81995:function(e,t,r){var a=r(14826),s=r(31244),n=r(58295),i=r(85261),o=r(35144);function u(e,t,r,u){if(!i(e))return e;t=s(t,e);var c=-1,l=t.length,h=l-1,f=e;while(null!=f&&++c<l){var m=o(t[c]),p=r;if("__proto__"===m||"constructor"===m||"prototype"===m)return e;if(c!=h){var d=f[m];p=u?u(d,m,f):void 0,void 0===p&&(p=i(d)?d:n(t[c+1])?[]:{})}a(f,m,p),f=f[m]}return e}e.exports=u},84854:function(e,t,r){var a=r(81995);function s(e,t,r){return null==e?e:a(e,t,r)}e.exports=s},45699:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("iframe",{key:e.iframeUrl,ref:"iframe",attrs:{src:e.iframeUrl,frameborder:"0"}})},s=[],n=r(84854),i=r.n(n),o=(r(62590),r(7249)),u={name:"TheIframe",components:{},data(){return{routeData:this.$config.params||{},messageHandler:e=>{const t=this.$refs.iframe?.contentWindow;if(t){const{data:r,origin:a,source:s}=e;if(s===t&&this.$config.allowOrigins.includes(a))if("emitRouteParams"===r.type){const{data:e,path:t}=r;Object.keys(e).forEach((r=>{i()(this.routeData,(t?t+".":"")+r,e[r])}))}else if("emitRouteChange"===r.type||"emitOpenNewWindow"===r.type){const{origin:e,base:a,route:s,params:n,fullPath:i}=r.data,o=a+s,u=e+o;let c="";this.matchUrl(u)?c=u:this.matchUrl(o)&&(c=o);const l=this.$router.resolve({params:{url:c},query:{routeParams:n?JSON.stringify(n):void 0}});"emitRouteChange"===r.type&&c!==this.$route.params.url?this.$router.push(l.location):"emitOpenNewWindow"===r.type&&c&&(window.name.startsWith(this.$config.windowPreviewName)?window.open(l.href,this.$config.windowPreviewName+"/"+(new Date).getTime()):window.open(l.href),t.postMessage({type:"openNewWindowSuccess",data:{fullPath:i}},e))}}}}},computed:{iframeUrl(){let e=this.$route.params.url;const t=this.$config.updateUrl;let r=this.$route.query.routeParams;r=r?JSON.parse(r):{};const a=o.parse(e,!0),s=a.pathname,n=s.substring(1).split("/")[0],i=Object.assign({},a.query);if(s.includes("/:")||Object.keys(i).length){const o=s.split("/").map((e=>{if(e.startsWith(":")){const a=e.substring(1),i=this.$config.menusDefaultValue[s]?.params,o=r?.params?.[a]??(t?this.routeData[n]?.[a]??this.routeData[a]??i?.[a]:void 0);return void 0===o?e:o}return e})).join("/");Object.keys(i).forEach((e=>{const r=this.$config.menusDefaultValue[s]?.query,a=t?this.routeData[n]?.[e]??this.routeData[e]??r?.[e]:void 0;i[e]=""!==i[e]?i[e]:void 0===a?"":a}));const u=this.$router.resolve({path:o,query:Object.assign(i,r?.query||{})}).route.fullPath;e=a.protocol&&a.host?a.protocol+"//"+a.host+u:u}return e}},beforeDestroy(){window.removeEventListener("message",this.messageHandler)},created(){window.addEventListener("message",this.messageHandler)},methods:{matchUrl(e){const t=r=>{let a=!1;return r.forEach((r=>{const s=r.config.route;if(s){let t=s.href;t||"iframe"!==s.name||(t=s.params.find((e=>"url"===e.key))?.value),t===e&&(a=!0)}r.children?.length&&t(r.children)&&(a=!0)})),a};return t(this.$config.menus)}}},c=u,l=r(45770),h=(0,l.Z)(c,a,s,!1,null,"56e7edde",null),f=h.exports}}]);