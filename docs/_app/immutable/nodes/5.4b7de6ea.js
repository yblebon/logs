import{g as S}from"../chunks/dataloader.6573a2c5.js";import{s as j}from"../chunks/scheduler.ef979ab2.js";import{S as L,i as q,e as d,s as O,v as P,p as k,c as p,d as s,f as z,w as C,g as t,k as f,j as D,x as Y,q as B,u as F,y as G}from"../chunks/index.a54da72a.js";import{A as H}from"../chunks/article.a1b4cd3c.js";function I({params:o}){return{article:S().filter(a=>a.section=="article").find(a=>o.slug==a.uid)}}function J(){return S().filter(r=>r.section=="article").map(r=>({slug:r.uid.toString()}))}const W=Object.freeze(Object.defineProperty({__proto__:null,entries:J,load:I},Symbol.toStringTag,{value:"Module"}));function K(o){let c,r,a,i,m,A,_,w,g,E,h,M,v,T,b,$,u,l;return document.title=c=o[0].article.title,u=new H({props:{article:o[0].article}}),{c(){r=d("meta"),i=d("meta"),m=d("meta"),_=d("meta"),g=d("meta"),h=d("meta"),v=d("meta"),b=d("meta"),$=O(),P(u.$$.fragment),this.h()},l(e){const n=k("svelte-17di80y",document.head);r=p(n,"META",{name:!0,content:!0}),i=p(n,"META",{name:!0,content:!0}),m=p(n,"META",{property:!0,content:!0}),_=p(n,"META",{property:!0,content:!0}),g=p(n,"META",{name:!0,content:!0}),h=p(n,"META",{name:!0,content:!0}),v=p(n,"META",{name:!0,content:!0}),b=p(n,"META",{name:!0,content:!0}),n.forEach(s),$=z(e),C(u.$$.fragment,e),this.h()},h(){t(r,"name","description"),t(r,"content",a=o[0].article.title),t(i,"name","twitter:card"),t(i,"content","summary"),t(m,"property","twitter:domain"),t(m,"content",A=o[1].domain),t(_,"property","twitter:url"),t(_,"content",w=o[1].url),t(g,"name","twitter:title"),t(g,"content",E=o[1].title),t(h,"name","twitter:description"),t(h,"content",M=o[1].description),t(v,"name","twitter:image"),t(v,"content",T=o[1].image),t(b,"name","twitter:creator"),t(b,"content","@YasserLebon")},m(e,n){f(document.head,r),f(document.head,i),f(document.head,m),f(document.head,_),f(document.head,g),f(document.head,h),f(document.head,v),f(document.head,b),D(e,$,n),Y(u,e,n),l=!0},p(e,[n]){(!l||n&1)&&c!==(c=e[0].article.title)&&(document.title=c),(!l||n&1&&a!==(a=e[0].article.title))&&t(r,"content",a),(!l||n&2&&A!==(A=e[1].domain))&&t(m,"content",A),(!l||n&2&&w!==(w=e[1].url))&&t(_,"content",w),(!l||n&2&&E!==(E=e[1].title))&&t(g,"content",E),(!l||n&2&&M!==(M=e[1].description))&&t(h,"content",M),(!l||n&2&&T!==(T=e[1].image))&&t(v,"content",T);const y={};n&1&&(y.article=e[0].article),u.$set(y)},i(e){l||(B(u.$$.fragment,e),l=!0)},o(e){F(u.$$.fragment,e),l=!1},d(e){e&&s($),s(r),s(i),s(m),s(_),s(g),s(h),s(v),s(b),G(u,e)}}}function N(o,c,r){let{data:a}=c,i={};return i.title=a.article.title,i.description=a.article.title,i.domain="yblebon.github.io",i.url="https://yblebon.github.io/logs/articles/"+a.article.uid,a.article.poster!==void 0&&(i.image=a.article.poster),o.$$set=m=>{"data"in m&&r(0,a=m.data)},[a,i]}class X extends L{constructor(c){super(),q(this,c,N,K,j,{data:0})}}export{X as component,W as universal};
