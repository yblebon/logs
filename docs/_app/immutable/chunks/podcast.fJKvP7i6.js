import{s as Y,n as W}from"./scheduler.RmCaX0Zm.js";import{S as Z,i as $,g as f,m as O,s as S,h as u,j as h,n as z,f as d,c as q,x as U,k as g,a as C,y as c,z as ee,o as D}from"./index.6mm3ru-L.js";function X(r){let e,a=r[0].upload_date+"",t;return{c(){e=f("span"),t=O(a),this.h()},l(s){e=u(s,"SPAN",{class:!0});var l=h(e);t=z(l,a),l.forEach(d),this.h()},h(){g(e,"class","me-2 badge text-bg-secondary")},m(s,l){C(s,e,l),c(e,t)},p(s,l){l&1&&a!==(a=s[0].upload_date+"")&&D(t,a)},d(s){s&&d(e)}}}function te(r){let e,a='<i class="gg-play-stop-o"></i>';return{c(){e=f("span"),e.innerHTML=a},l(t){e=u(t,"SPAN",{"data-svelte-h":!0}),U(e)!=="svelte-1fvxci6"&&(e.innerHTML=a)},m(t,s){C(t,e,s)},d(t){t&&d(e)}}}function ae(r){let e,a='<i class="gg-play-button-o"></i>';return{c(){e=f("span"),e.innerHTML=a},l(t){e=u(t,"SPAN",{"data-svelte-h":!0}),U(e)!=="svelte-e1rgxy"&&(e.innerHTML=a)},m(t,s){C(t,e,s)},d(t){t&&d(e)}}}function se(r){let e,a,t,s=r[0].title+"",l,T,m,_,H,P=r[0].text+"",w,M,y,V='<cite class="text-capitalize" title="Source Title">icanhazdadjoke.com</cite>',N,k,v,I,b,A,j,o=r[0].upload_date!==void 0&&X(r);function B(n,p){if(n[1]=="stop")return ae;if(n[1]=="playing")return te}let E=B(r),i=E&&E(r);return{c(){e=f("div"),a=f("div"),t=f("span"),l=O(s),T=S(),m=f("figure"),_=f("blockquote"),H=f("p"),w=O(P),M=S(),y=f("figcaption"),y.innerHTML=V,N=S(),k=f("div"),v=f("p"),o&&o.c(),I=S(),b=f("button"),i&&i.c(),this.h()},l(n){e=u(n,"DIV",{class:!0});var p=h(e);a=u(p,"DIV",{class:!0});var F=h(a);t=u(F,"SPAN",{class:!0});var G=h(t);l=z(G,s),G.forEach(d),F.forEach(d),T=q(p),m=u(p,"FIGURE",{});var x=h(m);_=u(x,"BLOCKQUOTE",{class:!0});var K=h(_);H=u(K,"P",{});var Q=h(H);w=z(Q,P),Q.forEach(d),K.forEach(d),M=q(x),y=u(x,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),U(y)!=="svelte-17hh5cv"&&(y.innerHTML=V),x.forEach(d),N=q(p),k=u(p,"DIV",{class:!0});var R=h(k);v=u(R,"P",{class:!0});var L=h(v);o&&o.l(L),I=q(L),b=u(L,"BUTTON",{type:!0,class:!0});var J=h(b);i&&i.l(J),J.forEach(d),L.forEach(d),R.forEach(d),p.forEach(d),this.h()},h(){g(t,"class","me-2 badge text-lowercase text-wrap float-end "),g(a,"class","card-header text-bg-warning"),g(_,"class","blockquote ps-2 pt-2"),g(y,"class","blockquote-footer ps-2"),g(b,"type","button"),g(b,"class","btn float-end"),g(v,"class","card-text"),g(k,"class","card-body bg-light"),g(e,"class","card me-4 ms-4 mt-4")},m(n,p){C(n,e,p),c(e,a),c(a,t),c(t,l),c(e,T),c(e,m),c(m,_),c(_,H),c(H,w),c(m,M),c(m,y),c(e,N),c(e,k),c(k,v),o&&o.m(v,null),c(v,I),c(v,b),i&&i.m(b,null),A||(j=ee(b,"click",r[2]),A=!0)},p(n,[p]){p&1&&s!==(s=n[0].title+"")&&D(l,s),p&1&&P!==(P=n[0].text+"")&&D(w,P),n[0].upload_date!==void 0?o?o.p(n,p):(o=X(n),o.c(),o.m(v,I)):o&&(o.d(1),o=null),E!==(E=B(n))&&(i&&i.d(1),i=E&&E(n),i&&(i.c(),i.m(b,null)))},i:W,o:W,d(n){n&&d(e),o&&o.d(),i&&i.d(),A=!1,j()}}}function le(r,e,a){let{podcast:t}=e,s="stop",l;function T(){l=new Howl({src:[t.src],html5:!0,volume:.9,format:["m4a"],onload(){console.log("loading podcast ...")},onplay(_){console.log("playing podcast ..."),a(1,s="playing")},onstop(_){console.log("stopping podcast ..."),a(1,s="stop")},onend(){console.log("podcast ended"),a(1,s="stop"),Howler.unload()},onplayerror(){console.log("error playing podcast"),a(1,s="stop"),Howler.unload()},onloaderror(){console.log("error loading podcast"),a(1,s="stop"),Howler.unload()}})}function m(){l==null&&T(),s=="playing"?l.stop():l.play()}return r.$$set=_=>{"podcast"in _&&a(0,t=_.podcast)},[t,s,m]}class ce extends Z{constructor(e){super(),$(this,e,le,se,Y,{podcast:0})}}export{ce as P};