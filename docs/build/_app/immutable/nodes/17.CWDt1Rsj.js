import{g as s}from"../chunks/dataloader.D6h41bAH.js";import{s as i}from"../chunks/scheduler.DEf5evaE.js";import{S as r,i as l}from"../chunks/index.hqP8tfOH.js";import"../chunks/paths.V4LxI5HK.js";function u({params:a}){let t=s().filter(e=>e.section=="podcast").find(e=>a.slug==e.uid);return console.log(t),{podcast:t}}function d(){return s().filter(t=>t.section=="podcast").map(t=>({slug:t.uid.toString()}))}const _=Object.freeze(Object.defineProperty({__proto__:null,entries:d,load:u},Symbol.toStringTag,{value:"Module"}));function c(a,o,t){let{data:e}=o;return a.$$set=n=>{"data"in n&&t(0,e=n.data)},[e]}class S extends r{constructor(o){super(),l(this,o,c,null,i,{data:0})}}export{S as component,_ as universal};
