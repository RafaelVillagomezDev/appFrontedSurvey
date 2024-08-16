(()=>{var e,t,r,a,n,o={12:(e,t,r)=>{"use strict";var a=r(294),n=r(745),o=r(335),s=r(655),l=r(633),i=r(854),c=r(980);const d=(0,l.xC)({reducer:{login:i.ZP,survey:c.ZP}});var u=r(998),p=r(953),f=(r(302),r(510));const h=(0,a.lazy)((()=>Promise.all([r.e(679),r.e(282)]).then(r.bind(r,282)))),m=(0,a.lazy)((()=>r.e(497).then(r.bind(r,497)))),y=(0,a.lazy)((()=>r.e(88).then(r.bind(r,88)))),g=(0,a.lazy)((()=>r.e(78).then(r.bind(r,78)))),v=(0,a.lazy)((()=>Promise.all([r.e(679),r.e(340)]).then(r.bind(r,340)))),b=(0,o.i7)(a.createElement(a.Fragment,null,a.createElement(o.AW,{path:"/",element:a.createElement(h,null)}),a.createElement(o.AW,{path:"login",element:a.createElement(h,null)}),a.createElement(o.AW,{path:"*",element:a.createElement(v,null)}),a.createElement(o.AW,{path:"/",element:a.createElement(f.Z4,null)},a.createElement(o.AW,{path:"app",element:a.createElement(m,null)}),a.createElement(o.AW,{path:"create",element:a.createElement(y,null)}),a.createElement(o.AW,{path:"update",element:a.createElement(g,null)})))),E=(0,s.aj)(b);n.createRoot(document.getElementById("root")).render(a.createElement(u.zt,{store:d},a.createElement(p.Ix,{autoClose:2e3}),a.createElement(a.StrictMode,null,a.createElement(a.Suspense,{fallback:a.createElement("h1",null,"Loading...")},a.createElement(s.pG,{router:E})))))},866:e=>{e.exports={getAuthUser:async e=>{const{email:t,password:r}=e,a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:r})};try{const e=await fetch("http://localhost:3445/api/v1/auth/login",a);return await e.json()}catch(e){console.error(e)}}}},854:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>c,uL:()=>s});var a=r(633),n=r(866),o=r(744);const s=(0,a.hg)("loginSlice/fetchLogin",(async e=>{const t=await(0,n.getAuthUser)(e);return(0,o.n)("token",t.token),t})),l=(0,a.oM)({name:"login",initialState:{user:[],isAuthenticated:!1},reducers:{},extraReducers:e=>{e.addCase(s.pending,(e=>{e.status="loading"})).addCase(s.fulfilled,((e,t)=>{e.status="success",e.user=t.payload.data,e.isAuthenticated=!0,(0,o.n)("user",t.payload.data)})).addCase(s.rejected,(e=>{e.status="failed"}))}}),{login:i}=l.actions,c=l.reducer},980:(e,t,r)=>{"use strict";r.d(t,{Vb:()=>s,ZP:()=>c,Gn:()=>l,LA:()=>o});var a=r(633),n=r(744);const o=(0,a.hg)("surveySlice/fetchSurvey",(async e=>await(async e=>{const t={method:"GET",headers:{"Content-Type":"application/json",Authorization:"BEARER "+e}};try{const e=await fetch("http://localhost:3445/api/v1/survey",t);return await e.json()}catch(e){console.error(e)}})(e))),s=(0,a.hg)("surveySlice/createSurvey",(async e=>await(async e=>{const{dni:t,producto:r,mantenimiento:a,tipo_mantenimiento:o,estado:s}=e,l={method:"POST",headers:{"Content-Type":"application/json",Authorization:"BEARER "+(0,n.$)("token")},body:JSON.stringify({dni:t,mantenimiento:a,tipo_mantenimiento:o,producto:r,estado:s,id_subproducto:""})};try{const e=await fetch("http://localhost:3445/api/v1/survey/create",l),t=await e.json();return console.log(t),t}catch(e){console.error(e)}})(e))),l=(0,a.hg)("surveySlice/deleteSurvey",(async e=>{const t=await(async e=>{const{id_encuesta:t,token:r}=e,a={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"BEARER "+r}};try{const e=await fetch(`http://localhost:3445/api/v1/survey/delete/${t}`,a);return await e.json()}catch(e){console.error(e)}})(e);return t})),i=(0,a.oM)({name:"survey",initialState:{survey:[],status:"idle"},reducers:{},extraReducers:e=>{e.addCase(o.pending,(e=>{e.status="loading"})),e.addCase(o.fulfilled,((e,t)=>{e.status="success",e.survey=t.payload.data})),e.addCase(o.rejected,(e=>{e.status="failed"})),e.addCase(l.pending,(e=>{e.status="loading"})),e.addCase(l.fulfilled,((e,t)=>{e.status="success";const r=e.survey.findIndex((e=>e.id_encuesta===t.payload.id));e.survey.splice(r,1)})),e.addCase(l.rejected,(e=>{e.status="failed"})),e.addCase(s.pending,(e=>{e.status="loading"})),e.addCase(s.fulfilled,((e,t)=>{e.status="success"})),e.addCase(s.rejected,(e=>{e.status="failed"}))}}),{}=i.actions,c=i.reducer},510:(e,t,r)=>{"use strict";r.d(t,{Z4:()=>s});var a=r(335),n=r(294),o=(r(245),r(744));const s=e=>{let{element:t,...r}=e;return(0,o.$)("token")?n.createElement(a.j3,null):n.createElement(a.Fg,{to:"/",replace:!0,state:{from:r.location}})}},744:(e,t,r)=>{"use strict";r.d(t,{$:()=>n,n:()=>a});const a=(e,t)=>{try{window.localStorage.setItem(e,JSON.stringify(t))}catch(e){console.log(e)}},n=e=>{try{const t=window.localStorage.getItem(e);if("undefined"!=t)return JSON.parse(t)}catch(e){console.log(e)}}}},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return o[e](r,r.exports,l),r.exports}l.m=o,e=[],l.O=(t,r,a,n)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,a,n]=e[d],s=!0,i=0;i<r.length;i++)(!1&n||o>=n)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(s=!1,n<o&&(o=n));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,a,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var n=Object.create(null);l.r(n);var o={};t=t||[null,r({}),r([]),r(r)];for(var s=2&a&&e;"object"==typeof s&&!~t.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,l.d(n,o),n},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>e+"."+{78:"5a03d92dc8370500641f",88:"71952d331d682ec9363a",268:"bbabde90a2d40f522d2e",282:"7ed223c96ab9c93eb873",316:"b6c4866ee371a5172a20",340:"975ba43f5943dcd060d6",497:"8834cf0fd039c629ffe8",679:"f89202a64d847bc0e62f",820:"3e19f6cdec5b6e53f062",950:"7c68ce50bb062a1e1f54",987:"860acf9c770e37e0b66c"}[e]+".chunk.js",l.miniCssF=e=>e+".css",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},n="appfronted:",l.l=(e,t,r,o)=>{if(a[e])a[e].push(t);else{var s,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+r){s=u;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.setAttribute("data-webpack",n+r),s.src=e),a[e]=[t];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(delete a[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),i&&document.head.appendChild(s)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{if("undefined"!=typeof document){var e={179:0};l.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{268:1,820:1,950:1}[t]&&r.push(e[t]=(e=>new Promise(((t,r)=>{var a=l.miniCssF(e),n=l.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(s=r[a]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var s;if((n=(s=o[a]).getAttribute("data-href"))===e||n===t)return s}})(a,n))return t();((e,t,r,a,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",l.nc&&(o.nonce=l.nc),o.onerror=o.onload=r=>{if(o.onerror=o.onload=null,"load"===r.type)a();else{var s=r&&r.type,l=r&&r.target&&r.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+": "+l+")");i.name="ChunkLoadError",i.code="CSS_CHUNK_LOAD_FAILED",i.type=s,i.request=l,o.parentNode&&o.parentNode.removeChild(o),n(i)}},o.href=t,document.head.appendChild(o)})(e,n,0,t,r)})))(t).then((()=>{e[t]=0}),(r=>{throw delete e[t],r})))}}})(),(()=>{var e={179:0};l.f.j=(t,r)=>{var a=l.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=l.p+l.u(t),s=new Error;l.l(o,(r=>{if(l.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,a[1](s)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,r)=>{var a,n,[o,s,i]=r,c=0;if(o.some((t=>0!==e[t]))){for(a in s)l.o(s,a)&&(l.m[a]=s[a]);if(i)var d=i(l)}for(t&&t(r);c<o.length;c++)n=o[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(d)},r=self.webpackChunkappfronted=self.webpackChunkappfronted||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=l.O(void 0,[736,716],(()=>l(12)));i=l.O(i)})();
//# sourceMappingURL=main.dc6a2bd210c062797cff.js.map