"use strict";var precacheConfig=[["/auth0-hpg/index.html","b35cc53f88b72860306826789ec79297"],["/auth0-hpg/static/css/main.e5ae7815.css","aa8138b5dea86f2d377312689950a3c0"],["/auth0-hpg/static/js/main.c4ffeeca.js","64a5fbd3fa8a1c63818437c39f30e608"],["/auth0-hpg/static/media/FaktPro-Blond.2b1372db.ttf","2b1372dbd65796d41fe05791161b0a3c"],["/auth0-hpg/static/media/FaktPro-Normal.5888c6c2.ttf","5888c6c2d8e3e73a914fb5d8a8a2f437"],["/auth0-hpg/static/media/FaktProUI-Blond.d184da08.ttf","d184da086e15dff1294bd5d0f1260c0e"],["/auth0-hpg/static/media/FaktProUI-Medium.144b419e.ttf","144b419e0a535c93af5bdc8e5a324f3a"],["/auth0-hpg/static/media/FaktProUI-SemiBold.1f5c59e9.ttf","1f5c59e9b588559b7953122aa731e6b5"],["/auth0-hpg/static/media/aeromexico.8fafadbb.svg","8fafadbb79037f467daac799e8d84c84"],["/auth0-hpg/static/media/amd.1d531318.svg","1d53131816e52676863cfea914954321"],["/auth0-hpg/static/media/atalssian.e8680148.svg","e8680148bab29f096378f2ca0452d1ff"],["/auth0-hpg/static/media/bluetooth.632a4ebc.svg","632a4ebcf44a87ab926bd315273ba0bf"],["/auth0-hpg/static/media/harpercollins.485f8339.svg","485f83393263536f24f38c2f33be9f3c"],["/auth0-hpg/static/media/jet airways.26aa6f78.svg","26aa6f780eb2cd1946302114c9973dec"],["/auth0-hpg/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/auth0-hpg/static/media/m&s.44f43ead.svg","44f43eadfb242276df311dd802044936"],["/auth0-hpg/static/media/mazda.499abd11.svg","499abd110e2337b86ca2f33af053d1cc"],["/auth0-hpg/static/media/mozilla.2538e7d3.svg","2538e7d3d8797fe9d5fe44ba6e1394ab"],["/auth0-hpg/static/media/news corp.0dab593d.svg","0dab593d7bc01466062c4c9fac71f816"],["/auth0-hpg/static/media/nvidia.6b3d90df.svg","6b3d90dfc2ec0952ac83e5da76773fc0"],["/auth0-hpg/static/media/pbs.f8e4a8a4.svg","f8e4a8a436a431f08136deb6ad380640"],["/auth0-hpg/static/media/polaris.5ee70ef1.svg","5ee70ef168db44d8f1c7a92dea716478"],["/auth0-hpg/static/media/vmware.a8e96de0.jpg","a8e96de0b1ab7a451c5a3ee6ad6e0150"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/auth0-hpg/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});