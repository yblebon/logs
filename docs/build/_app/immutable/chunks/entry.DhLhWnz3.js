var de=Object.defineProperty;var he=(t,n,e)=>n in t?de(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var L=(t,n,e)=>he(t,typeof n!="symbol"?n+"":n,e);import{o as Tt,t as pe}from"./scheduler.DEf5evaE.js";import{w as yt}from"./index.CxXJ4dXy.js";import{a as ge,b as T}from"./paths.V4LxI5HK.js";new URL("sveltekit-internal://");function me(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function ye(t){return t.split("%25").map(decodeURI).join("%25")}function we(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ft({href:t}){return t.split("#")[0]}const _e=["href","pathname","search","toString","toJSON"];function ve(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of _e)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const be="/__data.json",Ae=".html__data.json";function ke(t){return t.endsWith(".html")?t.replace(/\.html$/,Ae):t.replace(/\/$/,"")+be}function Se(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Ee(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Vt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(wt(t)),Vt(t,n));const G=new Map;function Re(t,n){const e=wt(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ee(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Ie(t,n,e){if(G.size>0){const r=wt(t,e),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,e)}function wt(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Se(...a)}"]`}return r}const Ue=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Le(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${xe(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return ut(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ut(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Ue.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ut(c)}).join("")}).join("")}/?$`),params:n}}function Te(t){return!/^\([^)]+\)$/.test(t)}function xe(t){return t.slice(1).split("/").filter(Te)}function Pe(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=a[s-i];if(c.chained&&c.rest&&i&&(f=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](f)){r[c.name]=f;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ut(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ce({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=Le(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return Pe(l,y,r)},errors:[1,...d||[]].map(g=>t[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Bt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function xt(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const Oe="1735341606695",Gt="sveltekit:snapshot",Mt="sveltekit:scroll",qt="sveltekit:states",Ne="sveltekit:pageurl",D="sveltekit:history",q="sveltekit:navigation",z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function Ht(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function _t(){return{x:pageXOffset,y:pageYOffset}}function $(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Pt={...z,"":z.hover};function Kt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Wt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Kt(t)}}function pt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||at(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===Y&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function X(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=$(s,"preload-code")),a===null&&(a=$(s,"preload-data")),n===null&&(n=$(s,"keepfocus")),e===null&&(e=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=Kt(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Pt[r??"off"],preload_data:Pt[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Ct(t){const n=yt(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const Yt={v:()=>{}};function $e(){const{set:t,subscribe:n}=yt(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${ge}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Oe;return i&&(t(!0),Yt.v(),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function at(t,n){return t.origin!==Y||!t.pathname.startsWith(n)}function Ot(t){const n=De(t),e=new ArrayBuffer(n.length),r=new DataView(e);for(let a=0;a<e.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return e}const je="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function De(t){t.length%4===0&&(t=t.replace(/==?$/,""));let n="",e=0,r=0;for(let a=0;a<t.length;a++)e<<=6,e|=je.indexOf(t[a]),r+=6,r===24&&(n+=String.fromCharCode((e&16711680)>>16),n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255),e=r=0);return r===12?(e>>=4,n+=String.fromCharCode(e)):r===18&&(e>>=2,n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255)),n}const Fe=-1,Ve=-2,Be=-3,Ge=-4,Me=-5,qe=-6;function He(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===Fe)return;if(o===Be)return NaN;if(o===Ge)return 1/0;if(o===Me)return-1/0;if(o===qe)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=Ot(g),p=new u(l);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Ot(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==Ve&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in s){const d=s[f];c[f]=a(d)}}return r[o]}return a(0)}const Jt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Jt];const Ke=new Set([...Jt]);[...Ke];function We(t){return t.filter(n=>n!=null)}class ot{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class zt{constructor(n,e){this.status=n,this.location=e}}class vt extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const Ye="x-sveltekit-invalidated",Je="x-sveltekit-trailing-slash";function Z(t){return t instanceof ot||t instanceof vt?t.status:500}function ze(t){return t instanceof vt?t.text:"Internal Error"}let b,H,dt;const Xe=Tt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Tt.toString());Xe?(b={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},H={current:null},dt={current:!1}):(b=new class{constructor(){L(this,"data",$state.raw({}));L(this,"form",$state.raw(null));L(this,"error",$state.raw(null));L(this,"params",$state.raw({}));L(this,"route",$state.raw({id:null}));L(this,"state",$state.raw({}));L(this,"status",$state.raw(-1));L(this,"url",$state.raw(new URL("https://example.com")))}},H=new class{constructor(){L(this,"current",$state.raw(null))}},dt=new class{constructor(){L(this,"current",$state.raw(!1))}},Yt.v=()=>dt.current=!0);function Ze(t){Object.assign(b,t)}const Qe=new Set(["icon","shortcut icon","apple-touch-icon"]),O=Bt(Mt)??{},K=Bt(Gt)??{},P={url:Ct({}),page:Ct({}),navigating:yt(null),updated:$e()};function bt(t){O[t]=_t()}function tn(t,n){let e=t+1;for(;O[e];)delete O[e],e+=1;for(e=n+1;K[e];)delete K[e],e+=1}function V(t){return location.href=t.href,new Promise(()=>{})}async function Xt(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(T||"/");t&&await t.update()}}function Nt(){}let st,gt,Q,x,mt,N;const Zt=[],tt=[];let I=null;const Qt=[],en=[];let j=[],w={branch:[],error:null,url:null},At=!1,et=!1,$t=!0,W=!1,B=!1,te=!1,kt=!1,St,R,U,nt;const M=new Set;async function _n(t,n,e){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),N=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),st=Ce(t),x=document.documentElement,mt=n,gt=t.nodes[0],Q=t.nodes[1],gt(),Q(),R=(i=history.state)==null?void 0:i[D],U=(s=history.state)==null?void 0:s[q],R||(R=U=Date.now(),history.replaceState({...history.state,[D]:R,[q]:U},""));const r=O[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await fn(mt,e):cn(location.href,{replaceState:!0}),ln()}function nn(){Zt.length=0,kt=!1}function ee(t){tt.some(n=>n==null?void 0:n.snapshot)&&(K[t]=tt.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function ne(t){var n;(n=K[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=tt[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function jt(){bt(R),xt(Mt,O),ee(U),xt(Gt,K)}async function re(t,n,e,r){return J({type:"goto",url:Ht(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(kt=!0)}})}async function rn(t){if(t.id!==(I==null?void 0:I.id)){const n={};M.add(n),I={id:t.id,token:n,promise:oe({...t,preload:n}).then(e=>(M.delete(n),e.type==="loaded"&&e.state.error&&(I=null),e))}}return I.promise}async function ht(t){const n=st.find(e=>e.exec(se(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function ae(t,n,e){var o;w=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(b,t.props.page),St=new N.root({target:n,props:{...t.props,stores:P,components:tt},hydrate:e,sync:!1}),ne(U);const a={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(i=>i(a)),et=!0}function rt({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(T&&(t.pathname===T||t.pathname===T+"/"))s="always";else for(const u of e)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=me(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:We(e).map(u=>u.node.component),page:b}};i!==void 0&&(c.props.form=i);let f={},d=!b,h=0;for(let u=0;u<Math.max(e.length,w.branch.length);u+=1){const g=e[u],l=w.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==b.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?f:b.data}),c}async function Et({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:A}=new URL(p,e);c.dependencies.add(A)}};const g={route:new Proxy(a,{get:(l,p)=>(s&&(c.route=!0),l[p])}),params:new Proxy(r,{get:(l,p)=>(s&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:ve(e,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)}),async fetch(l,p){let A;l instanceof Request?(A=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):A=l;const S=new URL(A,e);return s&&u(S.href),S.origin===e.origin&&(A=S.href.slice(e.origin.length)),et?Ie(A,S.href,p):Re(A,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:t,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Dt(t,n,e,r,a,o){if(kt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(Zt.some(s=>s(new URL(i))))return!0;return!1}function Rt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function an(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}function Ft({error:t,url:n,route:e,params:r}){return{type:"loaded",state:{error:t,url:n,route:e,params:r,branch:[]},props:{page:b,constructors:[]}}}async function oe({id:t,invalidating:n,url:e,params:r,route:a,preload:o}){if((I==null?void 0:I.id)===t)return M.delete(I.token),I.promise;const{errors:i,layouts:s,leaf:c}=a,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?t!==w.url.pathname+w.url.search:!1,y=w.route?a.id!==w.route.id:!1,u=an(w.url,e);let g=!1;const l=f.map((m,v)=>{var C;const k=w.branch[v],E=!!(m!=null&&m[0])&&((k==null?void 0:k.loader)!==m[1]||Dt(g,y,h,u,(C=k.server)==null?void 0:C.uses,r));return E&&(g=!0),E});if(l.some(Boolean)){try{d=await le(e,l)}catch(m){const v=await F(m,{url:e,params:r,route:{id:t}});return M.has(o)?Ft({error:v,url:e,params:r,route:a}):it({status:Z(m),error:v,url:e,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let A=!1;const S=f.map(async(m,v)=>{var ct;if(!m)return;const k=w.branch[v],E=p==null?void 0:p[v];if((!E||E.type==="skip")&&m[1]===(k==null?void 0:k.loader)&&!Dt(A,y,h,u,(ct=k.universal)==null?void 0:ct.uses,r))return k;if(A=!0,(E==null?void 0:E.type)==="error")throw E;return Et({loader:m[1],url:e,params:r,route:a,parent:async()=>{var Lt;const Ut={};for(let lt=0;lt<v;lt+=1)Object.assign(Ut,(Lt=await S[lt])==null?void 0:Lt.data);return Ut},server_data_node:Rt(E===void 0&&m[0]?{type:"skip"}:E??null,m[0]?k==null?void 0:k.server:void 0)})});for(const m of S)m.catch(()=>{});const _=[];for(let m=0;m<f.length;m+=1)if(f[m])try{_.push(await S[m])}catch(v){if(v instanceof zt)return{type:"redirect",location:v.location};if(M.has(o))return Ft({error:await F(v,{params:r,url:e,route:{id:a.id}}),url:e,params:r,route:a});let k=Z(v),E;if(p!=null&&p.includes(v))k=v.status??k,E=v.error;else if(v instanceof ot)E=v.body;else{if(await P.updated.check())return await Xt(),await V(e);E=await F(v,{params:r,url:e,route:{id:a.id}})}const C=await on(m,_,i);return C?rt({url:e,params:r,branch:_.slice(0,C.idx).concat(C.node),status:k,error:E,route:a}):await ce(e,{id:a.id},E,k)}else _.push(void 0);return rt({url:e,params:r,branch:_,status:200,error:null,route:a,form:n?void 0:null})}async function on(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function it({status:t,error:n,url:e,route:r}){const a={};let o=null;if(N.server_loads[0]===0)try{const f=await le(e,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(e.origin!==Y||e.pathname!==location.pathname||At)&&await V(e)}const s=await Et({loader:gt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Rt(o)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return rt({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function It(t,n){if(!t||at(t,T))return;let e;try{e=N.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=se(e);for(const a of st){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:we(o),url:t}}}function se(t){return ye(t.slice(T.length)||"/")}function ie({url:t,type:n,intent:e,delta:r}){let a=!1;const o=ue(w,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return W||Qt.forEach(s=>s(i)),a?null:o}async function J({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=Nt,block:d=Nt}){const h=It(n,!1),y=ie({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!y){d();return}const u=R,g=U;f(),W=!0,et&&P.navigating.set(H.current=y.navigation),nt=c;let l=h&&await oe(h);if(!l){if(at(n,T))return await V(n);l=await ce(n,{id:null},await F(new vt(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,nt!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await it({status:500,error:await F(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return re(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await P.updated.check()&&(await Xt(),await V(n));if(nn(),bt(u),ee(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=e?e.state:i,!e){const _=o?0:1,m={[D]:R+=_,[q]:U+=_,[qt]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||tn(R,U)}if(I=null,l.props.page.state=i,et){w=l.state,l.props.page&&(l.props.page.url=n);const _=(await Promise.all(en.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(_.length>0){let m=function(){j=j.filter(v=>!_.includes(v))};_.push(m),j.push(..._)}St.$set(l.props),Ze(l.props.page),te=!0}else ae(l,mt,!1);const{activeElement:p}=document;await pe();const A=e?e.scroll:a?_t():null;if($t){const _=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));A?scrollTo(A.x,A.y):_?_.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==p&&document.activeElement!==document.body;!r&&!S&&un(),$t=!0,l.props.page&&Object.assign(b,l.props.page),W=!1,t==="popstate"&&ne(U),y.fulfil(void 0),j.forEach(_=>_(y.navigation)),P.navigating.set(H.current=null)}async function ce(t,n,e,r){return t.origin===Y&&t.pathname===location.pathname&&!At?await it({status:r,error:e,url:t,route:n}):await V(t)}function sn(){let t;x.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){o.defaultPrevented||r(o.composedPath()[0],1)}x.addEventListener("mousedown",n),x.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ht(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=Wt(o,x);if(!s)return;const{url:c,external:f,download:d}=pt(s,T);if(f||d)return;const h=X(s),y=c&&w.url.pathname+w.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=It(c,!1);u&&rn(u)}else i<=h.preload_code&&ht(c.pathname)}function a(){e.disconnect();for(const o of x.querySelectorAll("a")){const{url:i,external:s,download:c}=pt(o,T);if(s||c)continue;const f=X(o);f.reload||(f.preload_code===z.viewport&&e.observe(o),f.preload_code===z.eager&&ht(i.pathname))}}j.push(a),a()}function F(t,n){if(t instanceof ot)return t.body;const e=Z(t),r=ze(t);return N.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function cn(t,n={}){return t=Ht(t),t.origin!==Y?Promise.reject(new Error("goto: invalid URL")):re(t,n,0)}function ln(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(jt(),!W){const a=ue(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Qt.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&jt()}),(n=navigator.connection)!=null&&n.saveData||sn(),x.addEventListener("click",async e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Wt(e.composedPath()[0],x);if(!r)return;const{url:a,external:o,target:i,download:s}=pt(r,T);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=X(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),y=d===ft(location);if(o||c.reload&&(!y||!h)){ie({url:a,type:"link"})?W=!0:e.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(B=!0,bt(R),t(a),!c.replace_state)return;B=!1}e.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),J({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),x.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(at(s,T))return;const c=e.target,f=X(c);if(f.reload)return;e.preventDefault(),e.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),J({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[D]){const a=e.state[D];if(nt={},a===R)return;const o=O[a],i=e.state[qt]??{},s=new URL(e.state[Ne]??location.href),c=e.state[q],f=ft(location)===ft(w.url);if(c===U&&(te||f)){t(s),O[R]=_t(),o&&scrollTo(o.x,o.y),i!==b.state&&(b.state=i,St.$set({page:b})),R=a;return}const h=a-R;await J({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{R=a,U=c},block:()=>{history.go(-h)},nav_token:nt})}else if(!B){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[D]:++R,[q]:U},"",location.href))});for(const e of document.querySelectorAll("link"))Qe.has(e.rel)&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&P.navigating.set(H.current=null)});function t(e){w.url=b.url=e,P.page.set({data:b.data,error:b.error,form:b.form,params:b.params,route:b.route,state:b.state,status:b.status,url:e}),P.page.notify()}}async function fn(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){At=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=It(c,!1)||{});let f,d=!0;try{const h=r.map(async(g,l)=>{const p=i[l];return p!=null&&p.uses&&(p.uses=fe(p.uses)),Et({loader:N.nodes[g],url:c,params:a,route:o,parent:async()=>{const A={};for(let S=0;S<l;S+=1)Object.assign(A,(await h[S]).data);return A},server_data_node:Rt(p)})}),y=await Promise.all(h),u=st.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=rt({url:c,params:a,branch:y,status:n,error:e,form:s,route:u??null})}catch(h){if(h instanceof zt){await V(new URL(h.location,location.href));return}f=await it({status:Z(h),error:await F(h,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",d=!1}f.props.page&&(f.props.page.state={}),ae(f,t,d)}async function le(t,n){var a;const e=new URL(t);e.pathname=ke(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Je,"1"),e.searchParams.append(Ye,n.map(o=>o?"1":"0").join(""));const r=await Vt(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ot(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function f(y){return He(y,{...N.decoders,Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=fe(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:A,error:S}=l,_=i.get(p);i.delete(p),S?_.reject(f(S)):_.fulfil(f(A))}}}})}function fe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function un(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ue(t,n,e,r){var c,f;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{_n as a,P as s};
