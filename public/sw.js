if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,n,c)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const t={uri:location.origin+e.slice(1)};return Promise.all(n.map((e=>{switch(e){case"exports":return a;case"module":return t;default:return s(e)}}))).then((s=>{const e=c(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(s){"use strict";importScripts("fallback-u7BcoOHsujGPDYzkmlJOt.js"),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/Michael-Pina-LUIS.png",revision:"90e506b3ec86fdd31ffa7fb52ac6114d"},{url:"/_next/static/chunks/0a301732-ec026acfb1bfccc3a678.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/1745-ff2b05d509b2adefc632.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/3045.4754fc32fe2fa619e8b8.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/3294-ed97af61dcc20c9e8a2b.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/3443-9ecc6778177605a2979e.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/3568-4e0b673377b32ece5cd2.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/3618-7e54a2f4cd41eb8267f9.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/372-d475aeb24d1196b2a069.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/4164-6b452be4008fa8ef475e.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/5274-1c14a6914bc746e4f699.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/5756-44c2e92839b5ec8fae96.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/5909-5eed1a0405dcf548a324.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/6753-611a01a1d517c2a40ae9.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/72a30a16.9e9831686d992bdca55d.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/7816-84e28428f8efcfb2049a.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/7856.0507e09864bd957db5fa.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/8038-45ab913507f3028d7a87.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/8180-11104663c2fe1bad8442.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/9249-17bf87e70aecb8182da6.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/9521-a7bfe3df19e7e595a448.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/995-6c65f06ccf5407fabd26.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/ad7f724d.5b5cbc3779c25463554b.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/commons-f1f0a3c6a813498d95b9.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/e78312c5-52c1e1a03298542d87da.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/framework-2a13bbc68834ef100291.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/main-68ed76bdcf6620048744.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/404-6d261de889d38ecd26ae.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/_app-54f4a9ac6acbb7ee3431.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/_error-30e6f84091ab526a527a.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/_offline-e81788fec247a32ea72c.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/about-c3a7fdc924b8ef040ee3.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/dashboard-5b622b2fc76a4a3ff02d.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/installments-855668e8ea665aa1a1c5.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/installments/%5Binstallment%5D-a10ee21e5aeb80a3c396.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/loans-813ffa9a22846068ae8b.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/loans/%5Bloan%5D-bad9c9810be22ae161ba.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/loans/%5Bloan%5D/loan-installments-5eaac31c93dc772f32f0.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/settings-f92fa856f8f88841de2b.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/settings/change-interest-rate-72e82b8bcff2ed245ebb.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/settings/change-penalty-data-52fd5a353fcbe51549f5.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/transactions-4d8f3510cd4886c0f7dc.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/transactions/%5Brequest%5D-bf1e0d3e8a9496f6466b.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/users-f9fee940021b1924b95e.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/users/%5Buser%5D-2338a20c9650caef6e53.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/users/%5Buser%5D/loans-b25d52ee13d28575f4fc.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/users/%5Buser%5D/transactions-202409b4f8eb95cbe343.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/admin/users/%5Buser%5D/user-installments-caf44ef6728977a317e5.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/contact-7a4dee49cc4757dad039.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/dashboard-8b54d7d64edf9bf38bf3.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/deposits-61b44a9077ff492f945b.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/deposits/%5Bdeposit%5D-050fb550fc57385ab652.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/deposits/deposit-now-7496be83b1518243c39b.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/faq-0e00ed02c2ce84f888e8.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/index-2acf16f84eb6a1610517.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/installments-cf5b4f6e23d2fb61d241.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/installments/%5Binstallment%5D-aa91b2f04b92f18860e1.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/loans-7d6c88f3be802b059ffd.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/loans/%5Bloan%5D-3c33f12e8cb2da0bd389.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/loans/%5Bloan%5D/loan-installments-b95856e07edb6deb2692.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/loans/new-loan-19fa5e2db0775554257b.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/login-9f1336ed6f3caf7a06ab.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/register-a9f9cc99aa1d0ccd02ae.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/settings-11732da98d48545f41fb.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/settings/notifications-aa685e0d707b0591ab0f.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/verify-92ca4cf903efcb518ea5.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/verify-mobile-no-0cabd8beac25943e6b20.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/withdrawals-1a9480a958ec4b29112b.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/withdrawals/%5Bwithdraw%5D-33a4d066ac8d100273ba.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/pages/withdrawals/withdraw-now-544e4a7196d99169daf3.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/polyfills-ec4e5916daa21dfc2df4.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/chunks/webpack-bd72a0ea353cc97832ac.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/css/1717aaee3b422676c40d.css",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/css/402bd052c4c6a8615f28.css",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/css/f894142a6345d09118c2.css",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/u7BcoOHsujGPDYzkmlJOt/_buildManifest.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_next/static/u7BcoOHsujGPDYzkmlJOt/_ssgManifest.js",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/_offline",revision:"u7BcoOHsujGPDYzkmlJOt"},{url:"/android-screen.png",revision:"0d20e7a159d75574eb85d8cc5e679592"},{url:"/app-store-badge.png",revision:"1f1f4065422f352ed97f5064e3fb12c0"},{url:"/background-1.jpg",revision:"78e950d0293bba540f13a518bb7aea19"},{url:"/background-2.jpg",revision:"b31482c01356f5dd668cfb19bb4e0c4a"},{url:"/bkash.png",revision:"cf20d88b39bd9ebde5c5958d7c158477"},{url:"/dashboard_phonexs-1024x774-mobile.png",revision:"356f59c94c74b365b817d86d448c25ec"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/google-play-badge.png",revision:"6405891c27abb33814be594e9fa0153e"},{url:"/hero-image-again.jpg",revision:"079b240e36c7d598ff6ac95dcf7faa66"},{url:"/hero-image.jpg",revision:"76cb6f669a967182faa8c69111492e34"},{url:"/hero.png",revision:"5c2970d05a094bcb36beef08bde3bc5c"},{url:"/icon.png",revision:"7cee335afc936da1c90294ea654de808"},{url:"/icons/icon-192x192.png",revision:"43e219ce5e27abf24a8edb9a5db80959"},{url:"/icons/icon-256x256.png",revision:"8e5f61a86d5ec0f4ea55a9bfb416ce0a"},{url:"/icons/icon-384x384.png",revision:"a25b72ce691dc22335a63c412aa33b62"},{url:"/icons/icon-512x512.png",revision:"2d7403d60e0dd053b3326e6ad8782518"},{url:"/main-logo.png",revision:"3d6a4023ced3a0fff3db3d2accfa3cb8"},{url:"/manifest.json",revision:"50a10f016155aff2e3677f6a2d286ab5"},{url:"/modern-background.jpg",revision:"88836e0268f94bc9b70713952c748ab6"},{url:"/new-bg.png",revision:"59bcfb7c38786f31d0b4d34a7bb25d50"},{url:"/new-logo.png",revision:"62cf5503ff0678ab84db4b2ee7467225"},{url:"/nogod.png",revision:"b3a70d1474ae26442f4283c516e2f0ab"},{url:"/rocket.png",revision:"63d1c38579474ccaf71e49add4932e2e"},{url:"/sure_cash_logo.png",revision:"60f6705b9a64e035fc2938514d9c9b7e"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:a,state:n})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts",plugins:[{handlerDidError:async({request:s})=>self.fallback(s)},new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[{handlerDidError:async({request:s})=>self.fallback(s)},new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:s})=>self.fallback(s)},new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/^\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[{handlerDidError:async({request:s})=>self.fallback(s)},new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:mp3|mp4)$/i,new s.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[{handlerDidError:async({request:s})=>self.fallback(s)},new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[{handlerDidError:async({request:s})=>self.fallback(s)},new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[{handlerDidError:async({request:s})=>self.fallback(s)},new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[{handlerDidError:async({request:s})=>self.fallback(s)},new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:s})=>self.fallback(s)},new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute(/^\/(?!api\/).*$/i,new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:s})=>self.fallback(s)},new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
