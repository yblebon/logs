import{g as S}from"../chunks/dataloader.BF_bTmS6.js";import{s as j}from"../chunks/scheduler.C3f_taFb.js";import{S as L,i as q,e as d,s as z,v as I,p as O,c as g,d as s,f as P,w as k,g as e,k as p,j as C,x as D,q as Y,u as B,y as F}from"../chunks/index.DIYF-BH4.js";import{I as G}from"../chunks/image.BDupV8Yi.js";function H({params:o}){return{image:S().filter(a=>a.section=="image").find(a=>o.slug==a.uid)}}function J(){return S().filter(i=>i.section=="image").map(i=>({slug:i.uid.toString()}))}const W=Object.freeze(Object.defineProperty({__proto__:null,entries:J,load:H},Symbol.toStringTag,{value:"Module"}));function K(o){let l,i,a,m,u,w,_,E,f,M,h,T,v,$,b,A,c,r;return document.title=l=o[0].image.title,c=new G({props:{image:o[0].image}}),{c(){i=d("meta"),m=d("meta"),u=d("meta"),_=d("meta"),f=d("meta"),h=d("meta"),v=d("meta"),b=d("meta"),A=z(),I(c.$$.fragment),this.h()},l(t){const n=O("svelte-15jzu7s",document.head);i=g(n,"META",{name:!0,content:!0}),m=g(n,"META",{name:!0,content:!0}),u=g(n,"META",{property:!0,content:!0}),_=g(n,"META",{property:!0,content:!0}),f=g(n,"META",{name:!0,content:!0}),h=g(n,"META",{name:!0,content:!0}),v=g(n,"META",{name:!0,content:!0}),b=g(n,"META",{name:!0,content:!0}),n.forEach(s),A=P(t),k(c.$$.fragment,t),this.h()},h(){e(i,"name","description"),e(i,"content",a=o[0].image.title),e(m,"name","twitter:card"),e(m,"content","summary"),e(u,"property","twitter:domain"),e(u,"content",w=o[1].domain),e(_,"property","twitter:url"),e(_,"content",E=o[1].url),e(f,"name","twitter:title"),e(f,"content",M=o[1].title),e(h,"name","twitter:description"),e(h,"content",T=o[1].description),e(v,"name","twitter:image"),e(v,"content",$=o[1].image),e(b,"name","twitter:creator"),e(b,"content","@YasserLebon")},m(t,n){p(document.head,i),p(document.head,m),p(document.head,u),p(document.head,_),p(document.head,f),p(document.head,h),p(document.head,v),p(document.head,b),C(t,A,n),D(c,t,n),r=!0},p(t,[n]){(!r||n&1)&&l!==(l=t[0].image.title)&&(document.title=l),(!r||n&1&&a!==(a=t[0].image.title))&&e(i,"content",a),(!r||n&2&&w!==(w=t[1].domain))&&e(u,"content",w),(!r||n&2&&E!==(E=t[1].url))&&e(_,"content",E),(!r||n&2&&M!==(M=t[1].title))&&e(f,"content",M),(!r||n&2&&T!==(T=t[1].description))&&e(h,"content",T),(!r||n&2&&$!==($=t[1].image))&&e(v,"content",$);const y={};n&1&&(y.image=t[0].image),c.$set(y)},i(t){r||(Y(c.$$.fragment,t),r=!0)},o(t){B(c.$$.fragment,t),r=!1},d(t){t&&s(A),s(i),s(m),s(u),s(_),s(f),s(h),s(v),s(b),F(c,t)}}}function N(o,l,i){let{data:a}=l,m={};return m.title=a.image.title,m.description=a.image.title,m.domain="yblebon.github.io",m.url="https://yblebon.github.io/logs/images/"+a.image.uid,m.image=a.image.url,o.$$set=u=>{"data"in u&&i(0,a=u.data)},[a,m]}class X extends L{constructor(l){super(),q(this,l,N,K,j,{data:0})}}export{X as component,W as universal};
