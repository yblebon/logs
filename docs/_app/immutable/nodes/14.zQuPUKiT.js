import{g as y}from"../chunks/dataloader.dwxj5rkD.js";import{s as S}from"../chunks/scheduler.RmCaX0Zm.js";import{S as P,i as L,g as p,s as O,r as k,A as q,h as d,f as l,c as z,u as C,k as t,y as f,a as D,v as Y,d as B,t as F,w as G}from"../chunks/index.mSofBvwl.js";import{P as H}from"../chunks/project.MOhDXcJc.js";function I({params:a}){return{project:y().filter(o=>o.section=="project").find(o=>a.slug==o.uid)}}function J(){return y().filter(r=>r.section=="project").map(r=>({slug:r.uid.toString()}))}const W=Object.freeze(Object.defineProperty({__proto__:null,entries:J,load:I},Symbol.toStringTag,{value:"Module"}));function K(a){let m,r,o,i,s,b,_,w,g,A,h,E,j,M,v,T,u,c;return document.title=m=a[0].project.title,u=new H({props:{project:a[0].project}}),{c(){r=p("meta"),i=p("meta"),s=p("meta"),_=p("meta"),g=p("meta"),h=p("meta"),j=p("meta"),v=p("meta"),T=O(),k(u.$$.fragment),this.h()},l(e){const n=q("svelte-16b31s4",document.head);r=d(n,"META",{name:!0,content:!0}),i=d(n,"META",{name:!0,content:!0}),s=d(n,"META",{property:!0,content:!0}),_=d(n,"META",{property:!0,content:!0}),g=d(n,"META",{name:!0,content:!0}),h=d(n,"META",{name:!0,content:!0}),j=d(n,"META",{name:!0,content:!0}),v=d(n,"META",{name:!0,content:!0}),n.forEach(l),T=z(e),C(u.$$.fragment,e),this.h()},h(){t(r,"name","description"),t(r,"content",o=a[0].project.description),t(i,"name","twitter:card"),t(i,"content","summary"),t(s,"property","twitter:domain"),t(s,"content",b=a[1].domain),t(_,"property","twitter:url"),t(_,"content",w=a[1].url),t(g,"name","twitter:title"),t(g,"content",A=a[1].title),t(h,"name","twitter:description"),t(h,"content",E=a[1].description),t(j,"name","twitter:image"),t(j,"content",M=a[1].image),t(v,"name","twitter:creator"),t(v,"content","@YasserLebon")},m(e,n){f(document.head,r),f(document.head,i),f(document.head,s),f(document.head,_),f(document.head,g),f(document.head,h),f(document.head,j),f(document.head,v),D(e,T,n),Y(u,e,n),c=!0},p(e,[n]){(!c||n&1)&&m!==(m=e[0].project.title)&&(document.title=m),(!c||n&1&&o!==(o=e[0].project.description))&&t(r,"content",o),(!c||n&2&&b!==(b=e[1].domain))&&t(s,"content",b),(!c||n&2&&w!==(w=e[1].url))&&t(_,"content",w),(!c||n&2&&A!==(A=e[1].title))&&t(g,"content",A),(!c||n&2&&E!==(E=e[1].description))&&t(h,"content",E),(!c||n&2&&M!==(M=e[1].image))&&t(j,"content",M);const $={};n&1&&($.project=e[0].project),u.$set($)},i(e){c||(B(u.$$.fragment,e),c=!0)},o(e){F(u.$$.fragment,e),c=!1},d(e){e&&l(T),l(r),l(i),l(s),l(_),l(g),l(h),l(j),l(v),G(u,e)}}}function N(a,m,r){let{data:o}=m,i={};return i.title=o.project.title,i.description=o.project.title,i.domain="yblebon.github.io",i.url="https://yblebon.github.io/logs/projects/"+o.project.uid,o.project.poster!==void 0&&(i.image=o.project.poster),a.$$set=s=>{"data"in s&&r(0,o=s.data)},[o,i]}class X extends P{constructor(m){super(),L(this,m,N,K,S,{data:0})}}export{X as component,W as universal};
