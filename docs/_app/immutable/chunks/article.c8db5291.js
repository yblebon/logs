import{s as ie,n as ae,a as te}from"./scheduler.ef979ab2.js";import{S as ne,i as ce,e as u,t as V,s as S,c as h,a as v,b as w,d as f,f as L,g as l,h as oe,j as X,k as t,l as F,m as de}from"./index.a54da72a.js";import{b as se}from"./paths.ad8f27ce.js";function le(c){let e,a,i;return{c(){e=u("div"),a=u("img"),this.h()},l(s){e=h(s,"DIV",{class:!0});var r=v(e);a=h(r,"IMG",{src:!0,class:!0,alt:!0}),r.forEach(f),this.h()},h(){te(a.src,i=c[0].poster)||l(a,"src",i),l(a,"class","img-fluid"),l(a,"alt","..."),l(e,"class","col-md-4")},m(s,r){X(s,e,r),t(e,a)},p(s,r){r&1&&!te(a.src,i=s[0].poster)&&l(a,"src",i)},d(s){s&&f(e)}}}function re(c){let e,a,i='<i class="gg-readme"></i>',s;return{c(){e=u("a"),a=u("span"),a.innerHTML=i,this.h()},l(r){e=h(r,"A",{href:!0,class:!0});var m=v(e);a=h(m,"SPAN",{["data-svelte-h"]:!0}),de(a)!=="svelte-1n7b9cz"&&(a.innerHTML=i),m.forEach(f),this.h()},h(){l(e,"href",s=c[0].url),l(e,"class","btn btn-outline-secondary float-end")},m(r,m){X(r,e,m),t(e,a)},p(r,m){m&1&&s!==(s=r[0].url)&&l(e,"href",s)},d(r){r&&f(e)}}}function fe(c){let e,a,i,s=c[0].title+"",r,m,b,q,A,p,I,M=c[0].title+"",z,J,E,P=c[0].summary+"",C,K,y,O,H=c[0].source+"",N,Q,k,g,R,T,U,o=c[0].poster!==void 0&&le(c),d=c[0].url!==void 0&&re(c);return{c(){e=u("div"),a=u("div"),i=u("span"),r=V(s),m=S(),b=u("div"),o&&o.c(),q=S(),A=u("div"),p=u("div"),I=u("h5"),z=V(M),J=S(),E=u("p"),C=V(P),K=S(),y=u("small"),O=V("someone @ "),N=V(H),Q=S(),k=u("p"),g=u("a"),R=V("link"),U=S(),d&&d.c(),this.h()},l(n){e=h(n,"DIV",{class:!0,style:!0});var _=v(e);a=h(_,"DIV",{class:!0});var Y=v(a);i=h(Y,"SPAN",{class:!0});var Z=v(i);r=w(Z,s),Z.forEach(f),Y.forEach(f),m=L(_),b=h(_,"DIV",{class:!0});var j=v(b);o&&o.l(j),q=L(j),A=h(j,"DIV",{class:!0});var $=v(A);p=h($,"DIV",{class:!0});var D=v(p);I=h(D,"H5",{class:!0});var x=v(I);z=w(x,M),x.forEach(f),J=L(D),E=h(D,"P",{class:!0});var G=v(E);C=w(G,P),K=L(G),y=h(G,"SMALL",{class:!0});var W=v(y);O=w(W,"someone @ "),N=w(W,H),W.forEach(f),G.forEach(f),Q=L(D),k=h(D,"P",{class:!0});var B=v(k);g=h(B,"A",{href:!0,class:!0});var ee=v(g);R=w(ee,"link"),ee.forEach(f),U=L(B),d&&d.l(B),B.forEach(f),D.forEach(f),$.forEach(f),j.forEach(f),_.forEach(f),this.h()},h(){l(i,"class","me-2 badge text-lowercase text-wrap float-end"),l(a,"class","card-header text-bg-dark"),l(I,"class","card-title"),l(y,"class","text-body-secondary text-capitalize"),l(E,"class","card-text"),l(g,"href",T=se+"/articles/"+c[0].uid),l(g,"class","link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"),l(k,"class","card-text"),l(p,"class","card-body"),l(A,"class","col-md-8"),l(b,"class","row g-0"),l(e,"class","card mx-auto border-dark mt-4"),oe(e,"max-width","540px")},m(n,_){X(n,e,_),t(e,a),t(a,i),t(i,r),t(e,m),t(e,b),o&&o.m(b,null),t(b,q),t(b,A),t(A,p),t(p,I),t(I,z),t(p,J),t(p,E),t(E,C),t(E,K),t(E,y),t(y,O),t(y,N),t(p,Q),t(p,k),t(k,g),t(g,R),t(k,U),d&&d.m(k,null)},p(n,[_]){_&1&&s!==(s=n[0].title+"")&&F(r,s),n[0].poster!==void 0?o?o.p(n,_):(o=le(n),o.c(),o.m(b,q)):o&&(o.d(1),o=null),_&1&&M!==(M=n[0].title+"")&&F(z,M),_&1&&P!==(P=n[0].summary+"")&&F(C,P),_&1&&H!==(H=n[0].source+"")&&F(N,H),_&1&&T!==(T=se+"/articles/"+n[0].uid)&&l(g,"href",T),n[0].url!==void 0?d?d.p(n,_):(d=re(n),d.c(),d.m(k,null)):d&&(d.d(1),d=null)},i:ae,o:ae,d(n){n&&f(e),o&&o.d(),d&&d.d()}}}function ue(c,e,a){let{article:i}=e;return c.$$set=s=>{"article"in s&&a(0,i=s.article)},[i]}class me extends ne{constructor(e){super(),ce(this,e,ue,fe,ie,{article:0})}}export{me as A};