if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,c,i)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(c.map(r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}})).then(e=>{const r=i(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-a1d34bd3"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"28c82c73.js",revision:"498177c4022f16c9167a076f6e07234d"},{url:"404.html",revision:"d1f389fba090f440611e7d35f22a42ef"},{url:"css/app.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/bootstrap.min.css",revision:"7cc171a45f4ac9a45c6df6e2da1cc78c"},{url:"css/vendor/bootstrap.min.css",revision:"7cc171a45f4ac9a45c6df6e2da1cc78c"},{url:"index.html",revision:"8913ab4c309a651e766161a84be3d438"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
