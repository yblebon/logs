import{g as S}from"../chunks/dataloader.UQJRZJRX.js";import{s as L}from"../chunks/scheduler.RmCaX0Zm.js";import{S as j,i as O,g as d,s as P,r as k,A as q,h as p,f as s,c as z,u as C,k as t,y as f,a as D,v as Y,d as B,t as F,w as G}from"../chunks/index.mSofBvwl.js";import{A as H}from"../chunks/article.rYuA6cVW.js";function I({params:o}){return{article:S().filter(a=>a.section=="article").find(a=>o.slug==a.uid)}}function J(){return S().filter(r=>r.section=="article").map(r=>({slug:r.uid.toString()}))}const W=Object.freeze(Object.defineProperty({__proto__:null,entries:J,load:I},Symbol.toStringTag,{value:"Module"}));function K(o){let c,r,a,i,m,b,_,w,g,E,h,M,v,T,A,$,u,l;return document.title=c=o[0].article.title,u=new H({props:{article:o[0].article}}),{c(){r=d("meta"),i=d("meta"),m=d("meta"),_=d("meta"),g=d("meta"),h=d("meta"),v=d("meta"),A=d("meta"),$=P(),k(u.$$.fragment),this.h()},l(e){const n=q("svelte-17di80y",document.head);r=p(n,"META",{name:!0,content:!0}),i=p(n,"META",{name:!0,content:!0}),m=p(n,"META",{property:!0,content:!0}),_=p(n,"META",{property:!0,content:!0}),g=p(n,"META",{name:!0,content:!0}),h=p(n,"META",{name:!0,content:!0}),v=p(n,"META",{name:!0,content:!0}),A=p(n,"META",{name:!0,content:!0}),n.forEach(s),$=z(e),C(u.$$.fragment,e),this.h()},h(){t(r,"name","description"),t(r,"content",a=o[0].article.title),t(i,"name","twitter:card"),t(i,"content","summary"),t(m,"property","twitter:domain"),t(m,"content",b=o[1].domain),t(_,"property","twitter:url"),t(_,"content",w=o[1].url),t(g,"name","twitter:title"),t(g,"content",E=o[1].title),t(h,"name","twitter:description"),t(h,"content",M=o[1].description),t(v,"name","twitter:image"),t(v,"content",T=o[1].image),t(A,"name","twitter:creator"),t(A,"content","@YasserLebon")},m(e,n){f(document.head,r),f(document.head,i),f(document.head,m),f(document.head,_),f(document.head,g),f(document.head,h),f(document.head,v),f(document.head,A),D(e,$,n),Y(u,e,n),l=!0},p(e,[n]){(!l||n&1)&&c!==(c=e[0].article.title)&&(document.title=c),(!l||n&1&&a!==(a=e[0].article.title))&&t(r,"content",a),(!l||n&2&&b!==(b=e[1].domain))&&t(m,"content",b),(!l||n&2&&w!==(w=e[1].url))&&t(_,"content",w),(!l||n&2&&E!==(E=e[1].title))&&t(g,"content",E),(!l||n&2&&M!==(M=e[1].description))&&t(h,"content",M),(!l||n&2&&T!==(T=e[1].image))&&t(v,"content",T);const y={};n&1&&(y.article=e[0].article),u.$set(y)},i(e){l||(B(u.$$.fragment,e),l=!0)},o(e){F(u.$$.fragment,e),l=!1},d(e){e&&s($),s(r),s(i),s(m),s(_),s(g),s(h),s(v),s(A),G(u,e)}}}function N(o,c,r){let{data:a}=c,i={};return i.title=a.article.title,i.description=a.article.title,i.domain="yblebon.github.io",i.url="https://yblebon.github.io/logs/articles/"+a.article.uid,a.article.poster!==void 0&&(i.image=a.article.poster),o.$$set=m=>{"data"in m&&r(0,a=m.data)},[a,i]}class X extends j{constructor(c){super(),O(this,c,N,K,L,{data:0})}}export{X as component,W as universal};
