import{x as d,X as g}from"../chunks/xpost.nfSwZgDn.js";import{v as x}from"../chunks/videos.lsusPy0R.js";import{a as $}from"../chunks/articles.E3X3LuVl.js";import{p as v}from"../chunks/podcasts.u6OYOrQG.js";import{s as b}from"../chunks/scheduler.V7bLW0bx.js";import{S as y,i as P,e as m,a as k,d as i,b as S,t as f,f as j,A as w,r as O,u as X,v as q,w as z,p as A}from"../chunks/index.-uYvgwRN.js";import{e as u}from"../chunks/each.-oqiv04n.js";const B=()=>({xPosts:d,videos:x,articles:$,podcasts:v}),I=Object.freeze(Object.defineProperty({__proto__:null,load:B},Symbol.toStringTag,{value:"Module"}));function _(l,n,a){const e=l.slice();return e[1]=n[a],e}function h(l){let n,a;return n=new g({props:{xpost:l[1]}}),{c(){O(n.$$.fragment)},l(e){X(n.$$.fragment,e)},m(e,t){q(n,e,t),a=!0},p(e,t){const c={};t&1&&(c.xpost=e[1]),n.$set(c)},i(e){a||(i(n.$$.fragment,e),a=!0)},o(e){f(n.$$.fragment,e),a=!1},d(e){z(n,e)}}}function C(l){let n,a,e=u(l[0].xPosts),t=[];for(let o=0;o<e.length;o+=1)t[o]=h(_(l,e,o));const c=o=>f(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();n=m()},l(o){for(let s=0;s<t.length;s+=1)t[s].l(o);n=m()},m(o,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(o,s);k(o,n,s),a=!0},p(o,[s]){if(s&1){e=u(o[0].xPosts);let r;for(r=0;r<e.length;r+=1){const p=_(o,e,r);t[r]?(t[r].p(p,s),i(t[r],1)):(t[r]=h(p),t[r].c(),i(t[r],1),t[r].m(n.parentNode,n))}for(A(),r=e.length;r<t.length;r+=1)c(r);S()}},i(o){if(!a){for(let s=0;s<e.length;s+=1)i(t[s]);a=!0}},o(o){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)f(t[s]);a=!1},d(o){o&&j(n),w(t,o)}}}function M(l,n,a){let{data:e}=n;return l.$$set=t=>{"data"in t&&a(0,e=t.data)},[e]}class J extends y{constructor(n){super(),P(this,n,M,C,b,{data:0})}}export{J as component,I as universal};
