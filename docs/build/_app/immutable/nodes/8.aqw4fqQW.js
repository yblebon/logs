import{g as S}from"../chunks/dataloader.X3vtOqTf.js";import{s as D}from"../chunks/scheduler.RmCaX0Zm.js";import{S as L,i as j,g as c,s as q,r as O,A as P,h as p,f as u,c as k,u as z,k as t,y as f,a as C,v as Y,d as B,t as F,w as G}from"../chunks/index.mSofBvwl.js";import{D as H}from"../chunks/dots.3rGlPP15.js";function I({params:a}){return{dots:S().filter(o=>o.section=="dots").find(o=>a.slug==o.uid)}}function J(){return S().filter(s=>s.section=="dots").map(s=>({slug:s.uid.toString()}))}const W=Object.freeze(Object.defineProperty({__proto__:null,entries:J,load:I},Symbol.toStringTag,{value:"Module"}));function K(a){let m,s,o,i,l,w,_,A,h,E,g,M,v,T,b,$,d,r;return document.title=m=a[0].dots.title,d=new H({props:{dots:a[0].dots}}),{c(){s=c("meta"),i=c("meta"),l=c("meta"),_=c("meta"),h=c("meta"),g=c("meta"),v=c("meta"),b=c("meta"),$=q(),O(d.$$.fragment),this.h()},l(e){const n=P("svelte-1mrt6vq",document.head);s=p(n,"META",{name:!0,content:!0}),i=p(n,"META",{name:!0,content:!0}),l=p(n,"META",{property:!0,content:!0}),_=p(n,"META",{property:!0,content:!0}),h=p(n,"META",{name:!0,content:!0}),g=p(n,"META",{name:!0,content:!0}),v=p(n,"META",{name:!0,content:!0}),b=p(n,"META",{name:!0,content:!0}),n.forEach(u),$=k(e),z(d.$$.fragment,e),this.h()},h(){t(s,"name","description"),t(s,"content",o=a[0].dots.title),t(i,"name","twitter:card"),t(i,"content","summary"),t(l,"property","twitter:domain"),t(l,"content",w=a[1].domain),t(_,"property","twitter:url"),t(_,"content",A=a[1].url),t(h,"name","twitter:title"),t(h,"content",E=a[1].title),t(g,"name","twitter:description"),t(g,"content",M=a[1].description),t(v,"name","twitter:image"),t(v,"content",T=a[1].image),t(b,"name","twitter:creator"),t(b,"content","@YasserLebon")},m(e,n){f(document.head,s),f(document.head,i),f(document.head,l),f(document.head,_),f(document.head,h),f(document.head,g),f(document.head,v),f(document.head,b),C(e,$,n),Y(d,e,n),r=!0},p(e,[n]){(!r||n&1)&&m!==(m=e[0].dots.title)&&(document.title=m),(!r||n&1&&o!==(o=e[0].dots.title))&&t(s,"content",o),(!r||n&2&&w!==(w=e[1].domain))&&t(l,"content",w),(!r||n&2&&A!==(A=e[1].url))&&t(_,"content",A),(!r||n&2&&E!==(E=e[1].title))&&t(h,"content",E),(!r||n&2&&M!==(M=e[1].description))&&t(g,"content",M),(!r||n&2&&T!==(T=e[1].image))&&t(v,"content",T);const y={};n&1&&(y.dots=e[0].dots),d.$set(y)},i(e){r||(B(d.$$.fragment,e),r=!0)},o(e){F(d.$$.fragment,e),r=!1},d(e){e&&u($),u(s),u(i),u(l),u(_),u(h),u(g),u(v),u(b),G(d,e)}}}function N(a,m,s){let{data:o}=m,i={};return i.title=o.dots.title,i.description=o.dots.title,i.domain="yblebon.github.io",i.url="https://yblebon.github.io/logs/dots/"+o.dots.uid,o.dots.poster!=null&&(i.image="https://ipfs.filebase.io/ipfs/"+o.dots.poster),a.$$set=l=>{"data"in l&&s(0,o=l.data)},[o,i]}class X extends L{constructor(m){super(),j(this,m,N,K,D,{data:0})}}export{X as component,W as universal};
