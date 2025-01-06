import{s as F,n as k,a as x}from"./scheduler.ef979ab2.js";import{S as H,i as J,e as m,s as S,c as b,a as y,d,f as A,g as u,h as K,j as v,k as g,t as D,b as N,l as z,n as w,o as L}from"./index.59e30afe.js";import{e as G}from"./each.e59479a4.js";import{b as M}from"./paths.11429a91.js";function X(r,e,l){const t=r.slice();return t[2]=e[l],t}function O(r){return{c:k,l:k,m:k,p:k,d:k}}function Q(r){let e,l=G(r[0].tags),t=[];for(let s=0;s<l.length;s+=1)t[s]=j(X(r,l,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=w()},l(s){for(let a=0;a<t.length;a+=1)t[a].l(s);e=w()},m(s,a){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(s,a);v(s,e,a)},p(s,a){if(a&1){l=G(s[0].tags);let i;for(i=0;i<l.length;i+=1){const p=X(s,l,i);t[i]?t[i].p(p,a):(t[i]=j(p),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}},d(s){s&&d(e),L(t,s)}}}function j(r){let e,l=r[2]+"",t;return{c(){e=m("span"),t=D(l),this.h()},l(s){e=b(s,"SPAN",{class:!0});var a=y(e);t=N(a,l),a.forEach(d),this.h()},h(){u(e,"class","me-2 badge float-end")},m(s,a){v(s,e,a),g(e,t)},p(s,a){a&1&&l!==(l=s[2]+"")&&z(t,l)},d(s){s&&d(e)}}}function R(r){let e,l;return{c(){e=m("img"),this.h()},l(t){e=b(t,"IMG",{src:!0,class:!0}),this.h()},h(){x(e.src,l=r[0].src)||u(e,"src",l),u(e,"class","card-img-top")},m(t,s){v(t,e,s)},p(t,s){s&1&&!x(e.src,l=t[0].src)&&u(e,"src",l)},d(t){t&&d(e)}}}function T(r){let e,l;return{c(){e=m("img"),this.h()},l(t){e=b(t,"IMG",{src:!0,class:!0}),this.h()},h(){x(e.src,l=C+"/"+r[0].id)||u(e,"src",l),u(e,"class","card-img-top rounded-0")},m(t,s){v(t,e,s)},p(t,s){s&1&&!x(e.src,l=C+"/"+t[0].id)&&u(e,"src",l)},d(t){t&&d(e)}}}function B(r){let e,l=r[0].upload_date+"",t,s,a,i,p;return{c(){e=m("span"),t=D(l),s=S(),a=m("a"),i=D("link"),this.h()},l(o){e=b(o,"SPAN",{class:!0});var c=y(e);t=N(c,l),c.forEach(d),s=A(o),a=b(o,"A",{href:!0,class:!0});var E=y(a);i=N(E,"link"),E.forEach(d),this.h()},h(){u(e,"class","me-2 badge text-bg-secondary"),u(a,"href",p=M+"/x-posts/"+r[0].uid),u(a,"class","link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover")},m(o,c){v(o,e,c),g(e,t),v(o,s,c),v(o,a,c),g(a,i)},p(o,c){c&1&&l!==(l=o[0].upload_date+"")&&z(t,l),c&1&&p!==(p=M+"/x-posts/"+o[0].uid)&&u(a,"href",p)},d(o){o&&(d(e),d(s),d(a))}}}function U(r){let e,l,t,s,a,i;function p(n,_){return n[0].tags!==void 0?Q:O}let o=p(r),c=o(r);function E(n,_){return n[0].src=="filebase"?T:R}let I=E(r),h=I(r),f=r[0].upload_date!==void 0&&B(r);return{c(){e=m("div"),l=m("div"),c.c(),t=S(),h.c(),s=S(),a=m("div"),i=m("p"),f&&f.c(),this.h()},l(n){e=b(n,"DIV",{class:!0,style:!0});var _=y(e);l=b(_,"DIV",{class:!0});var P=y(l);c.l(P),P.forEach(d),t=A(_),h.l(_),s=A(_),a=b(_,"DIV",{class:!0});var V=y(a);i=b(V,"P",{class:!0});var q=y(i);f&&f.l(q),q.forEach(d),V.forEach(d),_.forEach(d),this.h()},h(){u(l,"class","card-header text-wrap text-bg-success"),u(i,"class","card-text"),u(a,"class","card-body bg-light"),u(e,"class","card mx-auto border-success mt-4"),K(e,"max-width","540px")},m(n,_){v(n,e,_),g(e,l),c.m(l,null),g(e,t),h.m(e,null),g(e,s),g(e,a),g(a,i),f&&f.m(i,null)},p(n,[_]){o===(o=p(n))&&c?c.p(n,_):(c.d(1),c=o(n),c&&(c.c(),c.m(l,null))),I===(I=E(n))&&h?h.p(n,_):(h.d(1),h=I(n),h&&(h.c(),h.m(e,s))),n[0].upload_date!==void 0?f?f.p(n,_):(f=B(n),f.c(),f.m(i,null)):f&&(f.d(1),f=null)},i:k,o:k,d(n){n&&d(e),c.d(),h.d(),f&&f.d()}}}const C="https://ipfs.filebase.io/ipfs";function W(r,e,l){let{xpost:t}=e;return r.$$set=s=>{"xpost"in s&&l(0,t=s.xpost)},[t]}class te extends H{constructor(e){super(),J(this,e,W,U,F,{xpost:0})}}export{te as X};
