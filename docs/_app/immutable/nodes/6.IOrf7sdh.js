import{g as A}from"../chunks/dataloader.OhnhNoln.js";import{s as S}from"../chunks/scheduler.RmCaX0Zm.js";import{S as D,i as L,g as d,s as j,r as k,B as q,h as c,f as l,c as z,u as O,k as t,y as p,a as P,v as B,d as C,t as Y,w as F}from"../chunks/index.6mm3ru-L.js";import{D as G}from"../chunks/dots.lbA-Kf48.js";function H({params:r}){return{dots:A().filter(a=>a.type=="dots").find(a=>r.slug==a.uid)}}function I(){return A().filter(s=>s.type=="dots").map(s=>({slug:s.uid.toString()}))}const V=Object.freeze(Object.defineProperty({__proto__:null,entries:I,load:H},Symbol.toStringTag,{value:"Module"}));function J(r){let i,s,a,o,f,_,y,g,w,h,E,b,M,v,T,u,m;return document.title=i=r[0].dots.title,u=new G({props:{dots:r[0].dots}}),{c(){s=d("meta"),a=d("meta"),o=d("meta"),_=d("meta"),g=d("meta"),h=d("meta"),b=d("meta"),v=d("meta"),T=j(),k(u.$$.fragment),this.h()},l(e){const n=q("svelte-1kyeqzg",document.head);s=c(n,"META",{name:!0,content:!0}),a=c(n,"META",{name:!0,content:!0}),o=c(n,"META",{property:!0,content:!0}),_=c(n,"META",{property:!0,content:!0}),g=c(n,"META",{name:!0,content:!0}),h=c(n,"META",{name:!0,content:!0}),b=c(n,"META",{name:!0,content:!0}),v=c(n,"META",{name:!0,content:!0}),n.forEach(l),T=z(e),O(u.$$.fragment,e),this.h()},h(){t(s,"name","description"),t(s,"content",""),t(a,"name","twitter:card"),t(a,"content","summary"),t(o,"property","twitter:domain"),t(o,"content",f=r[1].domain),t(_,"property","twitter:url"),t(_,"content",y=r[1].url),t(g,"name","twitter:title"),t(g,"content",w=r[1].title),t(h,"name","twitter:description"),t(h,"content",E=r[1].description),t(b,"name","twitter:image"),t(b,"content",M=r[1].image),t(v,"name","twitter:creator"),t(v,"content","@YasserLebon")},m(e,n){p(document.head,s),p(document.head,a),p(document.head,o),p(document.head,_),p(document.head,g),p(document.head,h),p(document.head,b),p(document.head,v),P(e,T,n),B(u,e,n),m=!0},p(e,[n]){(!m||n&1)&&i!==(i=e[0].dots.title)&&(document.title=i),(!m||n&2&&f!==(f=e[1].domain))&&t(o,"content",f),(!m||n&2&&y!==(y=e[1].url))&&t(_,"content",y),(!m||n&2&&w!==(w=e[1].title))&&t(g,"content",w),(!m||n&2&&E!==(E=e[1].description))&&t(h,"content",E),(!m||n&2&&M!==(M=e[1].image))&&t(b,"content",M);const $={};n&1&&($.dots=e[0].dots),u.$set($)},i(e){m||(C(u.$$.fragment,e),m=!0)},o(e){Y(u.$$.fragment,e),m=!1},d(e){e&&l(T),l(s),l(a),l(o),l(_),l(g),l(h),l(b),l(v),F(u,e)}}}function K(r,i,s){let{data:a}=i,o={};return o.title=a.dots.title,o.description=a.dots.title,o.domain="yblebon.github.io",o.url="https://yblebon.github.io/logs/dots/"+a.dots.uid,a.dots.poster!=null&&(o.image="https://ipfs.filebase.io/ipfs/"+a.dots.poster),r.$$set=f=>{"data"in f&&s(0,a=f.data)},[a,o]}class W extends D{constructor(i){super(),L(this,i,K,J,S,{data:0})}}export{W as component,V as universal};
