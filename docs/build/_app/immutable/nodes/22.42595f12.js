import{g as O,a as S,b as P,c as B}from"../chunks/dataloader.fe03fb89.js";import{s as N}from"../chunks/scheduler.ef979ab2.js";import{S as q,i as E,e as W,s as $,v as b,n as T,p as Y,c as A,d as u,f as v,w as y,g as k,k as D,j as d,x as z,q as p,r as F,u as h,y as C,o as G,z as H}from"../chunks/index.59e30afe.js";import{e as w}from"../chunks/each.e59479a4.js";import"../chunks/paths.11429a91.js";import{C as I}from"../chunks/card.c0f16e0e.js";import{C as J}from"../chunks/card_nav.88dccece.js";import{T as K}from"../chunks/tags.5cdb8955.js";function Q({params:c}){let a=O(),i=S(),t=[];if(c.slug.startsWith("page_")){const l=c.slug.split("_")[1];t=a.filter(f=>f.section=="card").slice((l-1)*i,l*i)}else if(c.slug.startsWith("tag_")){const l=c.slug.split("_")[1];t=a.filter(f=>f.hasOwnProperty("tags")&&f.tags.indexOf(l)!==-1)}let n=a.filter(l=>l.highlight==!0);return{cards:t,highlights:n}}function R(){let c=O(),a=S(),i=c.filter(f=>f.section=="card").length,t=[];for(var n=1;n<=Math.ceil(i/a);n++)t.push({slug:"page_"+n});let l=P();for(var n=0;n<=l.length;n++)t.push({slug:"tag_"+l[n]});return t}const oe=Object.freeze(Object.defineProperty({__proto__:null,entries:R,load:Q},Symbol.toStringTag,{value:"Module"}));function L(c,a,i){const t=c.slice();return t[1]=a[i],t}function M(c){let a,i;return a=new I({props:{card:c[1]}}),{c(){b(a.$$.fragment)},l(t){y(a.$$.fragment,t)},m(t,n){z(a,t,n),i=!0},p(t,n){const l={};n&1&&(l.card=t[1]),a.$set(l)},i(t){i||(p(a.$$.fragment,t),i=!0)},o(t){h(a.$$.fragment,t),i=!1},d(t){C(a,t)}}}function U(c){let a,i,t,n,l,f,m,_;t=new K({props:{tags:P()}}),l=new J({props:{size:Math.ceil(B()/S())}});let g=w(c[0].cards),r=[];for(let e=0;e<g.length;e+=1)r[e]=M(L(c,g,e));const j=e=>h(r[e],1,1,()=>{r[e]=null});return{c(){a=W("meta"),i=$(),b(t.$$.fragment),n=$(),b(l.$$.fragment),f=$();for(let e=0;e<r.length;e+=1)r[e].c();m=T(),this.h()},l(e){const o=Y("svelte-xsszfp",document.head);a=A(o,"META",{name:!0,content:!0}),o.forEach(u),i=v(e),y(t.$$.fragment,e),n=v(e),y(l.$$.fragment,e),f=v(e);for(let s=0;s<r.length;s+=1)r[s].l(e);m=T(),this.h()},h(){document.title="Yasser B. Lebon Cards",k(a,"name","description"),k(a,"content","Yasser B. Lebon card records")},m(e,o){D(document.head,a),d(e,i,o),z(t,e,o),d(e,n,o),z(l,e,o),d(e,f,o);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,o);d(e,m,o),_=!0},p(e,[o]){if(o&1){g=w(e[0].cards);let s;for(s=0;s<g.length;s+=1){const x=L(e,g,s);r[s]?(r[s].p(x,o),p(r[s],1)):(r[s]=M(x),r[s].c(),p(r[s],1),r[s].m(m.parentNode,m))}for(H(),s=g.length;s<r.length;s+=1)j(s);F()}},i(e){if(!_){p(t.$$.fragment,e),p(l.$$.fragment,e);for(let o=0;o<g.length;o+=1)p(r[o]);_=!0}},o(e){h(t.$$.fragment,e),h(l.$$.fragment,e),r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)h(r[o]);_=!1},d(e){e&&(u(i),u(n),u(f),u(m)),u(a),C(t,e),C(l,e),G(r,e)}}}function V(c,a,i){let{data:t}=a;return c.$$set=n=>{"data"in n&&i(0,t=n.data)},[t]}class le extends q{constructor(a){super(),E(this,a,V,U,N,{data:0})}}export{le as component,oe as universal};
