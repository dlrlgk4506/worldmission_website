'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "729e9ebfa1f189870e71ea4b4231c930",
".git/config": "a50502abd1e2a70a24dd73af695d0578",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8502e2cd174c72fb8aecb3212d31d9d1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b8cda9582d7273c6b0ef8c4e4fd4da8d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3958d07877d6a2ecdf25e74fe446a4dd",
".git/logs/refs/heads/main": "3958d07877d6a2ecdf25e74fe446a4dd",
".git/logs/refs/remotes/origin/HEAD": "983dedd2d19445ee4e5ecdf5ecfa3f01",
".git/logs/refs/remotes/origin/main": "306ee32eed45219a2c3de9d08455badd",
".git/objects/07/8e12a1f22effcfa7ee0286142b6ad25ff6dc3f": "b204a574c17d150e99daaffe2d9de721",
".git/objects/08/bf4cfc2164a0bff74a4bf844128d3b843bbf87": "8a381c2400a8d3d6a20fb6bd660b5405",
".git/objects/11/bfe7ed8cf48094ad358f2d5af712301b369ddd": "3340c980c8eafaa69232c6633e670fba",
".git/objects/1c/ca550a990bf91765046852e9a1a6689b843277": "bf31e79e5381168bcfb835945d15a507",
".git/objects/64/2806d40ff899a84e20567d928310b941be63f4": "996b5b258779fab5a375d1bb56305b1d",
".git/objects/6b/3f80baa301fff7a4fa88a8f6efc826758c2d90": "a2dca77ed9c9479c97b7fa7225fa475f",
".git/objects/7f/ed90eab28a739a53d5d849a30f4d06d6827b8e": "1ad5c332eb04c8edde0401760d10ca61",
".git/objects/80/09ce5c611fd4cf3d931c4111e5a635e372e462": "12577f9f61e6a4a72c345c676b23820e",
".git/objects/8e/5e30a28b4435359945cf08b261c86d0de8da53": "6906b6f1c1183f6388ddf8a760f85a58",
".git/objects/92/99fb93e916f9931f7ab7f5d9494fd1c092094a": "93e27b581f55b8dcdf67e892c7a4ff28",
".git/objects/a8/3f1eec60458c3091fbc62e49486a735274697f": "259a79b267fa824db5633538d26631ad",
".git/objects/b1/663b907b92284a29ed899f9a3a9921a2b6d532": "cf38ae18ec7ebc0b1e9bc930e6521d68",
".git/objects/ba/8642ecefa0950f4d848043760cd59a41bfe11c": "bf5465bb47dc3de69e28b4a7fe2a0b9d",
".git/objects/e0/4d0472051a31b18d2a3368633d5de0fc912569": "2c52395d8efc033158203ab03db7cfb8",
".git/objects/e9/04685966d39240f876d941244692f747d47a82": "99d843fc6cc979b3582027f9655bc07f",
".git/objects/f7/2c3ab4cd64dfb63007d1d584eef164e0524278": "6d6922b2d24099d12bfd02c738328273",
".git/objects/pack/pack-7a72e832e08bdb93ebc50adee654651d4960432d.idx": "503a1c155e1bae1e7418273be8a28225",
".git/objects/pack/pack-7a72e832e08bdb93ebc50adee654651d4960432d.pack": "9ce54d692199701e815054263111b9de",
".git/objects/pack/pack-7a72e832e08bdb93ebc50adee654651d4960432d.rev": "d68124f631443f0ed7444f21c257701b",
".git/packed-refs": "1811351ed686a7bb88e6640dfee3345b",
".git/refs/heads/main": "65b347e155a1d4782c93ef9dfa1e94d0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "65b347e155a1d4782c93ef9dfa1e94d0",
".git/sourcetreeconfig.json": "afd94dcdf8a207b52a0a52f89360b54b",
"assets/asset/africa.json": "1b8d2f11f25cb624f4e6a5aee9f72f71",
"assets/asset/asia.json": "fb54f12f80cc0353dc25a509ebd13827",
"assets/asset/europe.json": "0a755c8031685a1a17468a549090d34d",
"assets/asset/fonts/Pretendard-Bold.otf": "f8a9b84216af5155ffe0e8661203f36f",
"assets/asset/fonts/Pretendard-Regular.otf": "84c0ea9d65324c758c8bd9686207afea",
"assets/asset/gwangju.json": "d28dd7de182bf9cb92a5d972abf277ab",
"assets/asset/korea.json": "a8e06172799b12e3b048713e904096ee",
"assets/asset/korea_old.json": "2287084f1e409dad28c8aacd0665d4e2",
"assets/asset/korea_old2.json": "efe94180a3e0353e7b80b7ca9334ba65",
"assets/asset/logo.png": "29621b96323362f2ad91d7da117982ff",
"assets/asset/north_america.json": "b6fa043623ff351ff8c45a712b79f2ad",
"assets/asset/oceania.json": "a3e8a14f3e79d0639c2b5d76c74260c3",
"assets/asset/south_america.json": "700f4272d9f3031711c575134d70bfec",
"assets/asset/world_map.json": "efd55d5afcd6b5e60268df06a1ab1b87",
"assets/AssetManifest.bin": "7b52d3c13e6528dc17e4fe8781ae4b3b",
"assets/AssetManifest.bin.json": "7a41dde1dc6451f2bc03e5ab879e867c",
"assets/FontManifest.json": "6fe72889ceeba477e28e8ee5965b6ad3",
"assets/fonts/MaterialIcons-Regular.otf": "0e9a7b1e3e7839020e530e270891ae55",
"assets/NOTICES": "e14872ef273001de7a06f9ac8db2a919",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "562b18a4756424d712cf0a463f674d8b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0caf6052380c79dc4953ca04773459bb",
"/": "0caf6052380c79dc4953ca04773459bb",
"main.dart.js": "84f64a4dfb0fc99e6815c3fcb76d0c40",
"manifest.json": "f1c43e3becff8df3ed79cb7a9cf8adcb",
"version.json": "4d2a661070787e518ec7520f54aedfd1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
