import{g as y}from"../chunks/dataloader.bba90a12.js";import{s as S}from"../chunks/scheduler.ef979ab2.js";import{S as j,i as L,e as p,s as q,v as O,p as P,c as d,d as u,f as X,w as k,g as t,k as f,j as z,x as C,q as D,u as Y,y as B}from"../chunks/index.a54da72a.js";import{X as F}from"../chunks/xpost.64ecde14.js";function G({params:a}){return{xpost:y().filter(o=>o.section=="xpost").find(o=>a.slug==o.uid)}}function H(){return y().filter(s=>s.section=="xpost").map(s=>({slug:s.uid.toString()}))}const U=Object.freeze(Object.defineProperty({__proto__:null,entries:H,load:G},Symbol.toStringTag,{value:"Module"}));function I(a){let m,s,o,r,l,b,_,w,g,E,h,M,v,T,x,$,c,i;return document.title=m=a[0].xpost.title,c=new F({props:{xpost:a[0].xpost}}),{c(){s=p("meta"),r=p("meta"),l=p("meta"),_=p("meta"),g=p("meta"),h=p("meta"),v=p("meta"),x=p("meta"),$=q(),O(c.$$.fragment),this.h()},l(e){const n=P("svelte-1wd0dg2",document.head);s=d(n,"META",{name:!0,content:!0}),r=d(n,"META",{name:!0,content:!0}),l=d(n,"META",{property:!0,content:!0}),_=d(n,"META",{property:!0,content:!0}),g=d(n,"META",{name:!0,content:!0}),h=d(n,"META",{name:!0,content:!0}),v=d(n,"META",{name:!0,content:!0}),x=d(n,"META",{name:!0,content:!0}),n.forEach(u),$=X(e),k(c.$$.fragment,e),this.h()},h(){t(s,"name","description"),t(s,"content",o=a[0].xpost.title),t(r,"name","twitter:card"),t(r,"content","summary"),t(l,"property","twitter:domain"),t(l,"content",b=a[1].domain),t(_,"property","twitter:url"),t(_,"content",w=a[1].url),t(g,"name","twitter:title"),t(g,"content",E=a[1].title),t(h,"name","twitter:description"),t(h,"content",M=a[1].description),t(v,"name","twitter:image"),t(v,"content",T=a[1].image),t(x,"name","twitter:creator"),t(x,"content","@YasserLebon")},m(e,n){f(document.head,s),f(document.head,r),f(document.head,l),f(document.head,_),f(document.head,g),f(document.head,h),f(document.head,v),f(document.head,x),z(e,$,n),C(c,e,n),i=!0},p(e,[n]){(!i||n&1)&&m!==(m=e[0].xpost.title)&&(document.title=m),(!i||n&1&&o!==(o=e[0].xpost.title))&&t(s,"content",o),(!i||n&2&&b!==(b=e[1].domain))&&t(l,"content",b),(!i||n&2&&w!==(w=e[1].url))&&t(_,"content",w),(!i||n&2&&E!==(E=e[1].title))&&t(g,"content",E),(!i||n&2&&M!==(M=e[1].description))&&t(h,"content",M),(!i||n&2&&T!==(T=e[1].image))&&t(v,"content",T);const A={};n&1&&(A.xpost=e[0].xpost),c.$set(A)},i(e){i||(D(c.$$.fragment,e),i=!0)},o(e){Y(c.$$.fragment,e),i=!1},d(e){e&&u($),u(s),u(r),u(l),u(_),u(g),u(h),u(v),u(x),B(c,e)}}}function J(a,m,s){let{data:o}=m,r={};return r.title=o.xpost.tags.join(" "),r.description=o.xpost.title,r.domain="yblebon.github.io",r.url="https://yblebon.github.io/logs/xposts/"+o.xpost.uid,r.image=o.xpost.url,o.xpost.poster!==void 0&&(r.image=o.xpost.poster),a.$$set=l=>{"data"in l&&s(0,o=l.data)},[o,r]}class V extends j{constructor(m){super(),L(this,m,J,I,S,{data:0})}}export{V as component,U as universal};
