import{g as S}from"../chunks/dataloader.OnVwq43k.js";import{s as L}from"../chunks/scheduler.RmCaX0Zm.js";import{S as j,i as k,g as d,s as O,r as P,A as R,h as p,f as u,c as q,u as z,k as e,y as f,a as C,v as D,d as Y,t as B,w as F}from"../chunks/index.mSofBvwl.js";import{R as G}from"../chunks/review.ovVjD44x.js";function H({params:o}){return{review:S().filter(a=>a.section=="review").find(a=>o.slug==a.uid)}}function I(){return S().filter(r=>r.section=="review").map(r=>({slug:r.uid.toString()}))}const W=Object.freeze(Object.defineProperty({__proto__:null,entries:I,load:H},Symbol.toStringTag,{value:"Module"}));function J(o){let l,r,a,i,s,b,v,A,_,E,w,M,g,T,h,$,c,m;return document.title=l=o[0].review.title,c=new G({props:{review:o[0].review}}),{c(){r=d("meta"),i=d("meta"),s=d("meta"),v=d("meta"),_=d("meta"),w=d("meta"),g=d("meta"),h=d("meta"),$=O(),P(c.$$.fragment),this.h()},l(t){const n=R("svelte-109k1ry",document.head);r=p(n,"META",{name:!0,content:!0}),i=p(n,"META",{name:!0,content:!0}),s=p(n,"META",{property:!0,content:!0}),v=p(n,"META",{property:!0,content:!0}),_=p(n,"META",{name:!0,content:!0}),w=p(n,"META",{name:!0,content:!0}),g=p(n,"META",{name:!0,content:!0}),h=p(n,"META",{name:!0,content:!0}),n.forEach(u),$=q(t),z(c.$$.fragment,t),this.h()},h(){e(r,"name","description"),e(r,"content",a=o[0].review.title),e(i,"name","twitter:card"),e(i,"content","summary"),e(s,"property","twitter:domain"),e(s,"content",b=o[1].domain),e(v,"property","twitter:url"),e(v,"content",A=o[1].url),e(_,"name","twitter:title"),e(_,"content",E=o[1].title),e(w,"name","twitter:description"),e(w,"content",M=o[1].description),e(g,"name","twitter:image"),e(g,"content",T=o[1].image),e(h,"name","twitter:creator"),e(h,"content","@YasserLebon")},m(t,n){f(document.head,r),f(document.head,i),f(document.head,s),f(document.head,v),f(document.head,_),f(document.head,w),f(document.head,g),f(document.head,h),C(t,$,n),D(c,t,n),m=!0},p(t,[n]){(!m||n&1)&&l!==(l=t[0].review.title)&&(document.title=l),(!m||n&1&&a!==(a=t[0].review.title))&&e(r,"content",a),(!m||n&2&&b!==(b=t[1].domain))&&e(s,"content",b),(!m||n&2&&A!==(A=t[1].url))&&e(v,"content",A),(!m||n&2&&E!==(E=t[1].title))&&e(_,"content",E),(!m||n&2&&M!==(M=t[1].description))&&e(w,"content",M),(!m||n&2&&T!==(T=t[1].image))&&e(g,"content",T);const y={};n&1&&(y.review=t[0].review),c.$set(y)},i(t){m||(Y(c.$$.fragment,t),m=!0)},o(t){B(c.$$.fragment,t),m=!1},d(t){t&&u($),u(r),u(i),u(s),u(v),u(_),u(w),u(g),u(h),F(c,t)}}}function K(o,l,r){let{data:a}=l,i={};return i.title=a.review.title,i.description=a.review.title,i.domain="yblebon.github.io",i.url="https://yblebon.github.io/logs/reviews/"+a.review.uid,a.review.poster!==void 0&&(i.image=a.review.poster),o.$$set=s=>{"data"in s&&r(0,a=s.data)},[a,i]}class X extends j{constructor(l){super(),k(this,l,K,J,L,{data:0})}}export{X as component,W as universal};
