import{d as h,D as g}from"../chunks/dots.rkS3c6HG.js";import{s as $}from"../chunks/scheduler.V7bLW0bx.js";import{S as b,i as y,e as _,a as v,d as i,b as k,t as f,f as S,A as x,r as j,u as w,v as D,w as O,p as P}from"../chunks/index.-uYvgwRN.js";import{e as m}from"../chunks/each.-oqiv04n.js";const q=()=>({dots:h}),T=Object.freeze(Object.defineProperty({__proto__:null,load:q},Symbol.toStringTag,{value:"Module"}));function d(l,n,s){const e=l.slice();return e[1]=n[s],e}function p(l){let n,s;return n=new g({props:{dots:l[1]}}),{c(){j(n.$$.fragment)},l(e){w(n.$$.fragment,e)},m(e,t){D(n,e,t),s=!0},p(e,t){const c={};t&1&&(c.dots=e[1]),n.$set(c)},i(e){s||(i(n.$$.fragment,e),s=!0)},o(e){f(n.$$.fragment,e),s=!1},d(e){O(n,e)}}}function z(l){let n,s,e=m(l[0].dots),t=[];for(let o=0;o<e.length;o+=1)t[o]=p(d(l,e,o));const c=o=>f(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();n=_()},l(o){for(let a=0;a<t.length;a+=1)t[a].l(o);n=_()},m(o,a){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(o,a);v(o,n,a),s=!0},p(o,[a]){if(a&1){e=m(o[0].dots);let r;for(r=0;r<e.length;r+=1){const u=d(o,e,r);t[r]?(t[r].p(u,a),i(t[r],1)):(t[r]=p(u),t[r].c(),i(t[r],1),t[r].m(n.parentNode,n))}for(P(),r=e.length;r<t.length;r+=1)c(r);k()}},i(o){if(!s){for(let a=0;a<e.length;a+=1)i(t[a]);s=!0}},o(o){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)f(t[a]);s=!1},d(o){o&&S(n),x(t,o)}}}function A(l,n,s){let{data:e}=n;return l.$$set=t=>{"data"in t&&s(0,e=t.data)},[e]}class E extends b{constructor(n){super(),y(this,n,A,z,$,{data:0})}}export{E as component,T as universal};
