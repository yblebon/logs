import{x as m,X as j}from"../chunks/x-posts.rJw7rvEk.js";import{v as _}from"../chunks/videos.lsusPy0R.js";import{a as d}from"../chunks/articles.E3X3LuVl.js";import{p as g}from"../chunks/podcasts.u6OYOrQG.js";import{s as D,n as u}from"../chunks/scheduler.Smq_RA6i.js";import{S as N,i as O,e as $,a as P,d as f,b as S,t as p,f as A,B as V,p as B,r as h,u as b,v as k,w as v}from"../chunks/index.lFCf6gFo.js";import{e as w}from"../chunks/each.-oqiv04n.js";import{V as X}from"../chunks/video.nYXN_Zz2.js";import{A as q}from"../chunks/article.oPYRk4kf.js";import{P as z}from"../chunks/podcast.4xXnUqVH.js";function C(l,e){let r=new Date(l.upload_date),t=new Date(e.upload_date);return r>t?1:-1}function F(){let l=[];for(let e=0;e<m.length;e++)m[e].upload_date!=null&&(m[e].type="xpost",l.push(m[e]));for(let e=0;e<_.length;e++)_[e].upload_date!=null&&(_[e].type="video",l.push(_[e]));for(let e=0;e<g.length;e++)g[e].upload_date!=null&&(g[e].type="podcast",l.push(g[e]));for(let e=0;e<d.length;e++)d[e].upload_date!=null&&(d[e].type="article",l.push(d[e]));return l=l.sort(C),{dataList:l}}const re=Object.freeze(Object.defineProperty({__proto__:null,load:F},Symbol.toStringTag,{value:"Module"}));function x(l,e,r){const t=l.slice();return t[1]=e[r],t}function M(l){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function T(l){let e,r;return e=new q({props:{article:l[1]}}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){k(e,t,o),r=!0},p(t,o){const s={};o&1&&(s.article=t[1]),e.$set(s)},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function E(l){let e,r;return e=new z({props:{podcast:l[1]}}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){k(e,t,o),r=!0},p(t,o){const s={};o&1&&(s.podcast=t[1]),e.$set(s)},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function G(l){let e,r;return e=new X({props:{video:l[1]}}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){k(e,t,o),r=!0},p(t,o){const s={};o&1&&(s.video=t[1]),e.$set(s)},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function H(l){let e,r;return e=new j({props:{xpost:l[1]}}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){k(e,t,o),r=!0},p(t,o){const s={};o&1&&(s.xpost=t[1]),e.$set(s)},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){v(e,t)}}}function L(l){let e,r,t,o;const s=[H,G,E,T,M],a=[];function i(n,c){return n[1].type=="xpost"?0:n[1].type=="video"?1:n[1].type=="podcast"?2:n[1].type=="article"?3:4}return e=i(l),r=a[e]=s[e](l),{c(){r.c(),t=$()},l(n){r.l(n),t=$()},m(n,c){a[e].m(n,c),P(n,t,c),o=!0},p(n,c){let y=e;e=i(n),e===y?a[e].p(n,c):(B(),p(a[y],1,1,()=>{a[y]=null}),S(),r=a[e],r?r.p(n,c):(r=a[e]=s[e](n),r.c()),f(r,1),r.m(t.parentNode,t))},i(n){o||(f(r),o=!0)},o(n){p(r),o=!1},d(n){n&&A(t),a[e].d(n)}}}function I(l){let e,r,t=w(l[0].dataList.reverse()),o=[];for(let a=0;a<t.length;a+=1)o[a]=L(x(l,t,a));const s=a=>p(o[a],1,1,()=>{o[a]=null});return{c(){for(let a=0;a<o.length;a+=1)o[a].c();e=$()},l(a){for(let i=0;i<o.length;i+=1)o[i].l(a);e=$()},m(a,i){for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(a,i);P(a,e,i),r=!0},p(a,[i]){if(i&1){t=w(a[0].dataList.reverse());let n;for(n=0;n<t.length;n+=1){const c=x(a,t,n);o[n]?(o[n].p(c,i),f(o[n],1)):(o[n]=L(c),o[n].c(),f(o[n],1),o[n].m(e.parentNode,e))}for(B(),n=t.length;n<o.length;n+=1)s(n);S()}},i(a){if(!r){for(let i=0;i<t.length;i+=1)f(o[i]);r=!0}},o(a){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)p(o[i]);r=!1},d(a){a&&A(e),V(o,a)}}}function J(l,e,r){let{data:t}=e;return console.log(t),l.$$set=o=>{"data"in o&&r(0,t=o.data)},[t]}class ne extends N{constructor(e){super(),O(this,e,J,I,D,{data:0})}}export{ne as component,re as universal};
