import{a as q}from"../chunks/articles.zbXplYMt.js";import{s as C,d as B,n as x}from"../chunks/scheduler.Smq_RA6i.js";import{S as I,i as N,g as h,s as D,m as J,h as p,j as g,c as O,n as Q,f as d,k as u,a as V,y as m,o as W,e as S,d as $,b as z,t as k,B as F,r as G,u as R,v as T,w as X,p as H}from"../chunks/index.lFCf6gFo.js";import{e as M}from"../chunks/each.-oqiv04n.js";function K(c){let t,n,a,e,o,r,l,s,f=c[0].title+"",v,b;return{c(){t=h("div"),n=h("img"),e=D(),o=h("div"),r=h("p"),l=h("span"),s=h("a"),v=J(f),this.h()},l(_){t=p(_,"DIV",{class:!0});var i=g(t);n=p(i,"IMG",{id:!0,class:!0,src:!0}),e=O(i),o=p(i,"DIV",{class:!0});var y=g(o);r=p(y,"P",{class:!0});var A=g(r);l=p(A,"SPAN",{class:!0});var E=g(l);s=p(E,"A",{href:!0});var w=g(s);v=Q(w,f),w.forEach(d),E.forEach(d),A.forEach(d),y.forEach(d),i.forEach(d),this.h()},h(){u(n,"id","podcast-poster-img"),u(n,"class","img-fluid"),B(n.src,a="https://ipfs.filebase.io/ipfs/Qmcrww6uA7cWJAenhRwXWFJQkcCNAoMhntMCkue8aitoEV")||u(n,"src",a),u(s,"href",b=c[0].url),u(l,"class","me-2 rounded-pill badge bg-dark"),u(r,"class","card-text"),u(o,"class","card-body bg-light"),u(t,"class","card me-2 ms-2 mt-2")},m(_,i){V(_,t,i),m(t,n),m(t,e),m(t,o),m(o,r),m(r,l),m(l,s),m(s,v)},p(_,[i]){i&1&&f!==(f=_[0].title+"")&&W(v,f),i&1&&b!==(b=_[0].url)&&u(s,"href",b)},i:x,o:x,d(_){_&&d(t)}}}function L(c,t,n){let{article:a}=t;return c.$$set=e=>{"article"in e&&n(0,a=e.article)},[a]}class U extends I{constructor(t){super(),N(this,t,L,K,C,{article:0})}}const Y=()=>({articles:q}),le=Object.freeze(Object.defineProperty({__proto__:null,load:Y},Symbol.toStringTag,{value:"Module"}));function P(c,t,n){const a=c.slice();return a[1]=t[n],a}function j(c){let t,n;return t=new U({props:{article:c[1]}}),{c(){G(t.$$.fragment)},l(a){R(t.$$.fragment,a)},m(a,e){T(t,a,e),n=!0},p(a,e){const o={};e&1&&(o.article=a[1]),t.$set(o)},i(a){n||($(t.$$.fragment,a),n=!0)},o(a){k(t.$$.fragment,a),n=!1},d(a){X(t,a)}}}function Z(c){let t,n,a=M(c[0].articles),e=[];for(let r=0;r<a.length;r+=1)e[r]=j(P(c,a,r));const o=r=>k(e[r],1,1,()=>{e[r]=null});return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=S()},l(r){for(let l=0;l<e.length;l+=1)e[l].l(r);t=S()},m(r,l){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(r,l);V(r,t,l),n=!0},p(r,[l]){if(l&1){a=M(r[0].articles);let s;for(s=0;s<a.length;s+=1){const f=P(r,a,s);e[s]?(e[s].p(f,l),$(e[s],1)):(e[s]=j(f),e[s].c(),$(e[s],1),e[s].m(t.parentNode,t))}for(H(),s=a.length;s<e.length;s+=1)o(s);z()}},i(r){if(!n){for(let l=0;l<a.length;l+=1)$(e[l]);n=!0}},o(r){e=e.filter(Boolean);for(let l=0;l<e.length;l+=1)k(e[l]);n=!1},d(r){r&&d(t),F(e,r)}}}function ee(c,t,n){let{data:a}=t;return c.$$set=e=>{"data"in e&&n(0,a=e.data)},[a]}class ne extends I{constructor(t){super(),N(this,t,ee,Z,C,{data:0})}}export{ne as component,le as universal};
