import{s as le,n as ee}from"./scheduler.RmCaX0Zm.js";import{S as se,i as oe,g as f,m as M,s as L,h as u,j as m,n as N,f as c,c as S,x as F,k as _,a as O,y as s,z as ne,o as B}from"./index.6mm3ru-L.js";import{b as te}from"./paths.cW99b4hg.js";function ae(i){let e,a=i[0].upload_date+"",t;return{c(){e=f("span"),t=M(a),this.h()},l(l){e=u(l,"SPAN",{class:!0});var n=m(e);t=N(n,a),n.forEach(c),this.h()},h(){_(e,"class","me-2 badge text-bg-secondary")},m(l,n){O(l,e,n),s(e,t)},p(l,n){n&1&&a!==(a=l[0].upload_date+"")&&B(t,a)},d(l){l&&c(e)}}}function re(i){let e,a='<i class="gg-play-stop-o"></i>';return{c(){e=f("span"),e.innerHTML=a},l(t){e=u(t,"SPAN",{"data-svelte-h":!0}),F(e)!=="svelte-1fvxci6"&&(e.innerHTML=a)},m(t,l){O(t,e,l)},d(t){t&&c(e)}}}function ie(i){let e,a='<i class="gg-play-button-o"></i>';return{c(){e=f("span"),e.innerHTML=a},l(t){e=u(t,"SPAN",{"data-svelte-h":!0}),F(e)!=="svelte-e1rgxy"&&(e.innerHTML=a)},m(t,l){O(t,e,l)},d(t){t&&c(e)}}}function ce(i){let e,a,t,l=i[0].title+"",n,P,v,h,w,I=i[0].text+"",q,j,k,G='<cite class="text-capitalize" title="Source Title">icanhazdadjoke.com</cite>',z,E,g,x,y,D,A,U,b,V,K,r=i[0].upload_date!==void 0&&ae(i);function Q(o,p){if(o[1]=="stop")return ie;if(o[1]=="playing")return re}let T=Q(i),d=T&&T(i);return{c(){e=f("div"),a=f("div"),t=f("span"),n=M(l),P=L(),v=f("figure"),h=f("blockquote"),w=f("p"),q=M(I),j=L(),k=f("figcaption"),k.innerHTML=G,z=L(),E=f("div"),g=f("p"),r&&r.c(),x=L(),y=f("a"),D=M("link"),U=L(),b=f("button"),d&&d.c(),this.h()},l(o){e=u(o,"DIV",{class:!0});var p=m(e);a=u(p,"DIV",{class:!0});var R=m(a);t=u(R,"SPAN",{class:!0});var J=m(t);n=N(J,l),J.forEach(c),R.forEach(c),P=S(p),v=u(p,"FIGURE",{});var C=m(v);h=u(C,"BLOCKQUOTE",{class:!0});var W=m(h);w=u(W,"P",{});var X=m(w);q=N(X,I),X.forEach(c),W.forEach(c),j=S(C),k=u(C,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),F(k)!=="svelte-91ejrx"&&(k.innerHTML=G),C.forEach(c),z=S(p),E=u(p,"DIV",{class:!0});var Y=m(E);g=u(Y,"P",{class:!0});var H=m(g);r&&r.l(H),x=S(H),y=u(H,"A",{href:!0,class:!0});var Z=m(y);D=N(Z,"link"),Z.forEach(c),U=S(H),b=u(H,"BUTTON",{type:!0,class:!0});var $=m(b);d&&d.l($),$.forEach(c),H.forEach(c),Y.forEach(c),p.forEach(c),this.h()},h(){_(t,"class","me-2 badge text-lowercase text-wrap float-end "),_(a,"class","card-header text-bg-warning"),_(h,"class","blockquote ps-2 pt-2"),_(k,"class","blockquote-footer ps-2"),_(y,"href",A=te+"/podcasts/"+i[0].uid),_(y,"class","link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"),_(b,"type","button"),_(b,"class","btn float-end"),_(g,"class","card-text"),_(E,"class","card-body bg-light"),_(e,"class","card me-4 ms-4 mt-4")},m(o,p){O(o,e,p),s(e,a),s(a,t),s(t,n),s(e,P),s(e,v),s(v,h),s(h,w),s(w,q),s(v,j),s(v,k),s(e,z),s(e,E),s(E,g),r&&r.m(g,null),s(g,x),s(g,y),s(y,D),s(g,U),s(g,b),d&&d.m(b,null),V||(K=ne(b,"click",i[2]),V=!0)},p(o,[p]){p&1&&l!==(l=o[0].title+"")&&B(n,l),p&1&&I!==(I=o[0].text+"")&&B(q,I),o[0].upload_date!==void 0?r?r.p(o,p):(r=ae(o),r.c(),r.m(g,x)):r&&(r.d(1),r=null),p&1&&A!==(A=te+"/podcasts/"+o[0].uid)&&_(y,"href",A),T!==(T=Q(o))&&(d&&d.d(1),d=T&&T(o),d&&(d.c(),d.m(b,null)))},i:ee,o:ee,d(o){o&&c(e),r&&r.d(),d&&d.d(),V=!1,K()}}}function de(i,e,a){let{podcast:t}=e;console.log(t);let l="stop",n;function P(){n=new Howl({src:[t.src],html5:!0,volume:.9,format:["m4a"],onload(){console.log("loading podcast ...")},onplay(h){console.log("playing podcast ..."),a(1,l="playing")},onstop(h){console.log("stopping podcast ..."),a(1,l="stop")},onend(){console.log("podcast ended"),a(1,l="stop"),Howler.unload()},onplayerror(){console.log("error playing podcast"),a(1,l="stop"),Howler.unload()},onloaderror(){console.log("error loading podcast"),a(1,l="stop"),Howler.unload()}})}function v(){n==null&&P(),l=="playing"?n.stop():n.play()}return i.$$set=h=>{"podcast"in h&&a(0,t=h.podcast)},[t,l,v]}class _e extends se{constructor(e){super(),oe(this,e,de,ce,le,{podcast:0})}}export{_e as P};
