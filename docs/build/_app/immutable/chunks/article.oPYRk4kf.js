import{s as y,d as C,n as x}from"./scheduler.Smq_RA6i.js";import{S as I,i as M,g as u,s as S,m as V,h as f,j as v,c as q,n as D,f as h,k as t,a as J,y as l,o as N}from"./index.lFCf6gFo.js";function P(m){let e,a,p,c,n,o,d,i,_=m[0].title+"",g,A;return{c(){e=u("div"),a=u("img"),c=S(),n=u("div"),o=u("p"),d=u("span"),i=u("a"),g=V(_),this.h()},l(r){e=f(r,"DIV",{class:!0});var s=v(e);a=f(s,"IMG",{id:!0,class:!0,src:!0}),c=q(s),n=f(s,"DIV",{class:!0});var E=v(n);o=f(E,"P",{class:!0});var b=v(o);d=f(b,"SPAN",{class:!0});var k=v(d);i=f(k,"A",{href:!0});var w=v(i);g=D(w,_),w.forEach(h),k.forEach(h),b.forEach(h),E.forEach(h),s.forEach(h),this.h()},h(){t(a,"id","podcast-poster-img"),t(a,"class","img-fluid"),C(a.src,p="https://ipfs.filebase.io/ipfs/Qmcrww6uA7cWJAenhRwXWFJQkcCNAoMhntMCkue8aitoEV")||t(a,"src",p),t(i,"href",A=m[0].url),t(d,"class","me-2 rounded-pill badge bg-dark"),t(o,"class","card-text"),t(n,"class","card-body bg-light"),t(e,"class","card me-2 ms-2 mt-2")},m(r,s){J(r,e,s),l(e,a),l(e,c),l(e,n),l(n,o),l(o,d),l(d,i),l(i,g)},p(r,[s]){s&1&&_!==(_=r[0].title+"")&&N(g,_),s&1&&A!==(A=r[0].url)&&t(i,"href",A)},i:x,o:x,d(r){r&&h(e)}}}function Q(m,e,a){let{article:p}=e;return m.$$set=c=>{"article"in c&&a(0,p=c.article)},[p]}class F extends I{constructor(e){super(),M(this,e,Q,P,y,{article:0})}}export{F as A};
