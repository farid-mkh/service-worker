define(["exports"],(function(t){"use strict";try{self["workbox:core:6.5.3"]&&_()}catch(t){}const e=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.5.3"]&&_()}catch(t){}const n=t=>t&&"object"==typeof t?t:{handle:t};class r{constructor(t,e,s="GET"){this.handler=n(e),this.match=t,this.method=s}setCatchHandler(t){this.catchHandler=n(t)}}class i extends r{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class a{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:r,route:i}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=i&&i.handler;const o=t.method;if(!a&&this.i.has(o)&&(a=this.i.get(o)),!a)return;let c;try{c=a.handle({url:s,request:t,event:e,params:r})}catch(t){c=Promise.reject(t)}const h=i&&i.catchHandler;return c instanceof Promise&&(this.o||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:r})}catch(t){t instanceof Error&&(n=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),c}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const r=this.t.get(s.method)||[];for(const i of r){let r;const a=i.match({url:t,sameOrigin:e,request:s,event:n});if(a)return r=a,(Array.isArray(r)&&0===r.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(r=void 0),{route:i,params:r}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,n(t))}setCatchHandler(t){this.o=n(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e>-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let o;const c=()=>(o||(o=new a,o.addFetchListener(),o.addCacheListener()),o);const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=t=>[h.prefix,t,h.suffix].filter((t=>t&&t.length>0)).join("-"),f=t=>{(t=>{for(const e of Object.keys(h))t(e)})((e=>{"string"==typeof t[e]&&(h[e]=t[e])}))},l=t=>t||u(h.runtime);function w(t){t.then((()=>{}))}const d=new Set;function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},p.apply(this,arguments)}let y,m;const g=new WeakMap,v=new WeakMap,b=new WeakMap,D=new WeakMap,q=new WeakMap;let R={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return v.get(t);if("objectStoreNames"===e)return t.objectStoreNames||b.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return O(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function x(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(m||(m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(I(this),e),O(g.get(this))}:function(...e){return O(t.apply(I(this),e))}:function(e,...s){const n=t.call(I(this),e,...s);return b.set(n,e.sort?e.sort():[e]),O(n)}}function E(t){return"function"==typeof t?x(t):(t instanceof IDBTransaction&&function(t){if(v.has(t))return;const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),n()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));v.set(t,e)}(t),e=t,(y||(y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,R):t);var e}function O(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(O(t.result)),n()},i=()=>{s(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&g.set(e,t)})).catch((()=>{})),q.set(e,t),e}(t);if(D.has(t))return D.get(t);const e=E(t);return e!==t&&(D.set(t,e),q.set(e,t)),e}const I=t=>q.get(t);const B=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function N(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(k.get(e))return k.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,r=C.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!B.includes(s))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let a=i.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[s](...e),r&&i.done]))[0]};return k.set(e,i),i}R=(t=>p({},t,{get:(e,s,n)=>N(e,s)||t.get(e,s,n),has:(e,s)=>!!N(e,s)||t.has(e,s)}))(R);try{self["workbox:expiration:6.5.3"]&&_()}catch(t){}const j="cache-entries",M=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class U{constructor(t){this.h=null,this.u=t}l(t){const e=t.createObjectStore(j,{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1})}p(t){this.l(t),this.u&&function(t,{blocked:e}={}){const s=indexedDB.deleteDatabase(t);e&&s.addEventListener("blocked",(t=>e(t.oldVersion,t))),O(s).then((()=>{}))}(this.u)}async setTimestamp(t,e){const s={url:t=M(t),timestamp:e,cacheName:this.u,id:this.m(t)},n=(await this.getDb()).transaction(j,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(t){const e=await this.getDb(),s=await e.get(j,this.m(t));return null==s?void 0:s.timestamp}async expireEntries(t,e){const s=await this.getDb();let n=await s.transaction(j).store.index("timestamp").openCursor(null,"prev");const r=[];let i=0;for(;n;){const s=n.value;s.cacheName===this.u&&(t&&s.timestamp<t||e&&i>=e?r.push(n.value):i++),n=await n.continue()}const a=[];for(const t of r)await s.delete(j,t.id),a.push(t.url);return a}m(t){return this.u+"|"+M(t)}async getDb(){return this.h||(this.h=await function(t,e,{blocked:s,upgrade:n,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),o=O(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(O(a.result),t.oldVersion,t.newVersion,O(a.transaction),t)})),s&&a.addEventListener("blocked",(t=>s(t.oldVersion,t.newVersion,t))),o.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this.p.bind(this)})),this.h}}class W{constructor(t,e={}){this.g=!1,this.v=!1,this.D=e.maxEntries,this.q=e.maxAgeSeconds,this.R=e.matchOptions,this.u=t,this.O=new U(t)}async expireEntries(){if(this.g)return void(this.v=!0);this.g=!0;const t=this.q?Date.now()-1e3*this.q:0,e=await this.O.expireEntries(t,this.D),s=await self.caches.open(this.u);for(const t of e)await s.delete(t,this.R);this.g=!1,this.v&&(this.v=!1,w(this.expireEntries()))}async updateTimestamp(t){await this.O.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.q){const e=await this.O.getTimestamp(t),s=Date.now()-1e3*this.q;return void 0===e||e<s}return!1}async delete(){this.v=!1,await this.O.expireEntries(1/0)}}try{self["workbox:strategies:6.5.3"]&&_()}catch(t){}const S={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};function T(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class A{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}function P(t){return"string"==typeof t?new Request(t):t}class L{constructor(t,e){this.I={},Object.assign(this,e),this.event=e.event,this.B=t,this.C=new A,this._=[],this.k=[...t.plugins],this.N=new Map;for(const t of this.k)this.N.set(t,{});this.event.waitUntil(this.C.promise)}async fetch(t){const{event:e}=this;let n=P(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(t){if(t instanceof Error)throw new s("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const i=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.B.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))t=await s({event:e,request:i,response:t});return t}catch(t){throw r&&await this.runCallbacks("fetchDidFail",{error:t,event:e,originalRequest:r.clone(),request:i.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=P(t);let s;const{cacheName:n,matchOptions:r}=this.B,i=await this.getCacheKey(e,"read"),a=Object.assign(Object.assign({},r),{cacheName:n});s=await caches.match(i,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:r,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(t,e){const n=P(t);var r;await(r=0,new Promise((t=>setTimeout(t,r))));const i=await this.getCacheKey(n,"write");if(!e)throw new s("cache-put-with-no-response",{url:(a=i.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const o=await this.j(e);if(!o)return!1;const{cacheName:c,matchOptions:h}=this.B,u=await self.caches.open(c),f=this.hasCallback("cacheDidUpdate"),l=f?await async function(t,e,s,n){const r=T(e.url,s);if(e.url===r)return t.match(e,n);const i=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await t.keys(e,i);for(const e of a)if(r===T(e.url,s))return t.match(e,n)}(u,i.clone(),["__WB_REVISION__"],h):null;try{await u.put(i,f?o.clone():o)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of d)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:c,oldResponse:l,newResponse:o.clone(),request:i,event:this.event});return!0}async getCacheKey(t,e){const s=`${t.url} | ${e}`;if(!this.I[s]){let n=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))n=P(await t({mode:e,request:n,event:this.event,params:this.params}));this.I[s]=n}return this.I[s]}hasCallback(t){for(const e of this.B.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.B.plugins)if("function"==typeof e[t]){const s=this.N.get(e),n=n=>{const r=Object.assign(Object.assign({},n),{state:s});return e[t](r)};yield n}}waitUntil(t){return this._.push(t),t}async doneWaiting(){let t;for(;t=this._.shift();)await t}destroy(){this.C.resolve(null)}async j(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class F{constructor(t={}){this.cacheName=l(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,r=new L(this,{event:e,request:s,params:n}),i=this.M(r,s,e);return[i,this.U(i,r,s,e)]}async M(t,e,n){let r;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(r=await this.W(e,t),!r||"error"===r.type)throw new s("no-response",{url:e.url})}catch(s){if(s instanceof Error)for(const i of t.iterateCallbacks("handlerDidError"))if(r=await i({error:s,event:n,request:e}),r)break;if(!r)throw s}for(const s of t.iterateCallbacks("handlerWillRespond"))r=await s({event:n,request:e,response:r});return r}async U(t,e,s,n){let r,i;try{r=await t}catch(i){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:r}),await e.doneWaiting()}catch(t){t instanceof Error&&(i=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:r,error:i}),e.destroy(),i)throw i}}t.ExpirationPlugin=class{constructor(t={}){this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const r=this.S(n),i=this.T(s);w(i.expireEntries());const a=i.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return r?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.T(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.A=t,this.q=t.maxAgeSeconds,this.P=new Map,t.purgeOnQuotaError&&function(t){d.add(t)}((()=>this.deleteCacheAndMetadata()))}T(t){if(t===l())throw new s("expire-custom-caches-only");let e=this.P.get(t);return e||(e=new W(t,this.A),this.P.set(t,e)),e}S(t){if(!this.q)return!0;const e=this.L(t);if(null===e)return!0;return e>=Date.now()-1e3*this.q}L(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.P)await self.caches.delete(t),await e.delete();this.P=new Map}},t.StaleWhileRevalidate=class extends F{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(S)}async W(t,e){const n=e.fetchAndCachePut(t).catch((()=>{}));e.waitUntil(n);let r,i=await e.cacheMatch(t);if(i);else try{i=await n}catch(t){t instanceof Error&&(r=t)}if(!i)throw new s("no-response",{url:t.url,error:r});return i}},t.registerRoute=function(t,e,n){let a;if("string"==typeof t){const s=new URL(t,location.href);a=new r((({url:t})=>t.href===s.href),e,n)}else if(t instanceof RegExp)a=new i(t,e,n);else if("function"==typeof t)a=new r(t,e,n);else{if(!(t instanceof r))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}return c().registerRoute(a),a},t.setCacheNameDetails=function(t){f(t)}}));
//# sourceMappingURL=workbox-b7ee86ae.js.map
