import{s as z,f as B,n as D}from"./scheduler.RmCaX0Zm.js";import{S as F,i as G,g as u,m as J,s as I,h as _,j as y,n as Q,f,c as N,k as d,a as P,y as p,z as O,o as W,x as j}from"./index.6mm3ru-L.js";function q(i){let e,s=i[0].upload_date+"",t;return{c(){e=u("span"),t=J(s),this.h()},l(a){e=_(a,"SPAN",{class:!0});var l=y(e);t=Q(l,s),l.forEach(f),this.h()},h(){d(e,"class","me-2 badge text-bg-secondary")},m(a,l){P(a,e,l),p(e,t)},p(a,l){l&1&&s!==(s=a[0].upload_date+"")&&W(t,s)},d(a){a&&f(e)}}}function R(i){let e,s='<i class="gg-play-stop-o"></i>';return{c(){e=u("span"),e.innerHTML=s},l(t){e=_(t,"SPAN",{"data-svelte-h":!0}),j(e)!=="svelte-1fvxci6"&&(e.innerHTML=s)},m(t,a){P(t,e,a)},d(t){t&&f(e)}}}function U(i){let e,s='<i class="gg-play-button-o"></i>';return{c(){e=u("span"),e.innerHTML=s},l(t){e=_(t,"SPAN",{"data-svelte-h":!0}),j(e)!=="svelte-e1rgxy"&&(e.innerHTML=s)},m(t,a){P(t,e,a)},d(t){t&&f(e)}}}function X(i){let e,s,t,a=i[0].title+"",l,w,m,v,A,b,g,E,h,M,S,o=i[0].upload_date!==void 0&&q(i);function T(n,c){if(n[1]=="stop")return U;if(n[1]=="playing")return R}let k=T(i),r=k&&k(i);return{c(){e=u("div"),s=u("div"),t=u("span"),l=J(a),w=I(),m=u("img"),A=I(),b=u("div"),g=u("p"),o&&o.c(),E=I(),h=u("button"),r&&r.c(),this.h()},l(n){e=_(n,"DIV",{class:!0});var c=y(e);s=_(c,"DIV",{class:!0});var x=y(s);t=_(x,"SPAN",{class:!0});var C=y(t);l=Q(C,a),C.forEach(f),x.forEach(f),w=N(c),m=_(c,"IMG",{id:!0,class:!0,src:!0}),A=N(c),b=_(c,"DIV",{class:!0});var L=y(b);g=_(L,"P",{class:!0});var H=y(g);o&&o.l(H),E=N(H),h=_(H,"BUTTON",{type:!0,class:!0});var V=y(h);r&&r.l(V),V.forEach(f),H.forEach(f),L.forEach(f),c.forEach(f),this.h()},h(){d(t,"class","me-2 badge text-lowercase text-wrap float-end "),d(s,"class","card-header text-bg-warning"),d(m,"id","podcast-poster-img"),d(m,"class","img-fluid"),B(m.src,v="https://ipfs.filebase.io/ipfs/Qmcrww6uA7cWJAenhRwXWFJQkcCNAoMhntMCkue8aitoEV")||d(m,"src",v),d(h,"type","button"),d(h,"class","btn float-end"),d(g,"class","card-text"),d(b,"class","card-body bg-light"),d(e,"class","card me-4 ms-4 mt-4")},m(n,c){P(n,e,c),p(e,s),p(s,t),p(t,l),p(e,w),p(e,m),p(e,A),p(e,b),p(b,g),o&&o.m(g,null),p(g,E),p(g,h),r&&r.m(h,null),M||(S=O(h,"click",i[2]),M=!0)},p(n,[c]){c&1&&a!==(a=n[0].title+"")&&W(l,a),n[0].upload_date!==void 0?o?o.p(n,c):(o=q(n),o.c(),o.m(g,E)):o&&(o.d(1),o=null),k!==(k=T(n))&&(r&&r.d(1),r=k&&k(n),r&&(r.c(),r.m(h,null)))},i:D,o:D,d(n){n&&f(e),o&&o.d(),r&&r.d(),M=!1,S()}}}function K(i,e,s){let{podcast:t}=e,a="stop",l;function w(){l=new Howl({src:[t.src],html5:!0,volume:.9,format:["m4a"],onload(){console.log("loading podcast ...")},onplay(v){console.log("playing podcast ..."),s(1,a="playing")},onstop(v){console.log("stopping podcast ..."),s(1,a="stop")},onend(){console.log("podcast ended"),s(1,a="stop"),Howler.unload()},onplayerror(){console.log("error playing podcast"),s(1,a="stop"),Howler.unload()},onloaderror(){console.log("error loading podcast"),s(1,a="stop"),Howler.unload()}})}function m(){l==null&&w(),a=="playing"?l.stop():l.play()}return i.$$set=v=>{"podcast"in v&&s(0,t=v.podcast)},[t,a,m]}class $ extends F{constructor(e){super(),G(this,e,K,X,z,{podcast:0})}}export{$ as P};
