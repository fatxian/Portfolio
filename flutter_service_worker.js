'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f04d3c965ae14fa053a44d0aa3d640bb",
"version.json": "009c9e65172e010890f7f65fde438006",
"launcher.png": "77af18465331108fdcd64cefd082537d",
"index.html": "2202273a21c636137f9035b3306cbcee",
"/": "2202273a21c636137f9035b3306cbcee",
"main.dart.js": "4f2fb1a33682c70655b75d331e406dcd",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "0c341b570df7c0bc1018c1932e43a87e",
"assets/NOTICES": "dbbc74279648e183f977672965405416",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4edd6eae2e81d6c7fb1e6c3d2c8cd5b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f8380ad39a853b1f7004d2deea1e443f",
"assets/fonts/MaterialIcons-Regular.otf": "5022d04befd547e9e1cde2077a04f4c4",
"assets/assets/images/jira.png": "9b30a9d999f901d406ab1d0cedfaaf62",
"assets/assets/images/Undead%2520Shooter.png": "ab88a89381db2f8ba85845bd04e4fbe2",
"assets/assets/images/calories-date.png": "6533515084c6fc19e101202fdf1dfd7c",
"assets/assets/images/git.png": "42f2cb3c804c535583c156cf20f2beb1",
"assets/assets/images/Forest%2520Light.png": "e005018d106aab3d0ccf90f76c08b688",
"assets/assets/images/news-search.png": "e28f716c9cb9714b8c9c378b9f29dbc0",
"assets/assets/images/news-register.png": "5b2300228022ae2438b5794818d3dada",
"assets/assets/images/news-content.png": "7250730392664d5f7cded16cdcb1e782",
"assets/assets/images/whisper-icon.png": "cd90dadd465bfa186b032aedf446f399",
"assets/assets/images/metropia-logo.png": "8a24049cfa3833ad022443c96c1fa575",
"assets/assets/images/calories-result.png": "2efa7b2f4eeede368d1ab022c9ff92eb",
"assets/assets/images/flutter.png": "026afa02d18994e67ec00de6a66e4e7b",
"assets/assets/images/calories-added.png": "19c0eccd7560203ff0a35d7f01420045",
"assets/assets/images/freelancer-logo.png": "eec3a3fbd79eb84f529d6096e67fdcc1",
"assets/assets/images/portfolio-logo.png": "68a46d0e4dd63bb1152fb667421af465",
"assets/assets/images/firebase.png": "c956738c985dceb39da977105ae2fa4b",
"assets/assets/images/java.png": "521b4d733ab8528c755c667cc6033403",
"assets/assets/images/uic-logo.png": "be2e802580fde76cbda44eab3b7c122c",
"assets/assets/images/news-preview.png": "6904d9c8195fa799f9082f727f3695cf",
"assets/assets/images/android.png": "c7c5f364f00c25e250676ed9223bd518",
"assets/assets/images/pacerfect-icon.png": "4aabab66bd868e83847246d80347bc00",
"assets/assets/images/diary-icon.png": "46e68085826f63f7c58556068a24ab1a",
"assets/assets/images/diary-portfolio-2.png": "77f9e635e8df5278dbde734cef3e0ddf",
"assets/assets/images/avatar.png": "5225bb606086de3b4bf13979d023cede",
"assets/assets/images/diary-portfolio-1.png": "90069a74b8ce70688ac53ba9cc15faae",
"assets/assets/images/recipe-portfolio-2.png": "3528b1ecc8aa2deac75dc69092fab09f",
"assets/assets/images/calories-mainpage.png": "53ce3687c3e5af0a0f386f1ac16d6ff7",
"assets/assets/images/postman.png": "5b435cf1abff992744bda329d6f2c36b",
"assets/assets/images/recipe-portfolio-1.png": "a1c24a3e7ed606e38af524ee049e2a72",
"assets/assets/images/news-login.png": "d93ae662e1c96810fc9659ca1571eb7b",
"assets/assets/images/recipe-icon.png": "6529c2924b07aeb10864a181600bcf5e",
"assets/assets/images/calories-camera.png": "e60fb78c90941e80be1a13bc9b8bc96b",
"assets/assets/images/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/images/calories-preview3.png": "43ea964793b19fae0e49adf495e5b30a",
"assets/assets/images/calories-history.png": "6abdb766ce752634fe82fe6f76c55d16",
"assets/assets/images/whisper-portfolio-1.png": "cf561a5241fcedabf5aad54884dc115c",
"assets/assets/images/Shadow%2520Passage.png": "c73687f20599c5626d7baea238894735",
"assets/assets/images/whisper-portfolio-2.png": "271b131b44a7b9b0b9657dffaaa42522",
"assets/assets/images/news-saved.png": "9f96af239ddd28272b657086f41d3db7",
"assets/assets/images/pacerfect-portfolio-2.png": "a2e8ce4cda67962ae023f9d42e77a8b1",
"assets/assets/images/dart.png": "fa159c09e72cb38d6c840c90b8371604",
"assets/assets/images/dungeons.png": "03e43cbf8087917cd6693c8114906071",
"assets/assets/images/calories-delete.png": "8fcb5ec4b529a20841e76df963ff284e",
"assets/assets/images/news-feed.png": "bc950126cda37c4514bf25235a769f53",
"assets/assets/images/pacerfect-portfolio-1.png": "f3eed9080fc47d2f623195a178c107a2",
"assets/assets/images/kotlin.png": "748170ff1ac02219c361dfdf9f84bd8b",
"assets/assets/gifs/forest-light-3.gif": "24cbe4efcc835599144b0d9197162472",
"assets/assets/gifs/shadow-passage-3.gif": "8d48c2c4acf96a8df96acede0cbddf25",
"assets/assets/gifs/shadow-passage-2.gif": "a35e7590fa856bb1c7a5bd8b6d02b94d",
"assets/assets/gifs/forest-light-2.gif": "1146e39b06751f6c7f6646f7e79c80ba",
"assets/assets/gifs/shadow-passage-1.gif": "0a23b1ad9fc8d8c4d40d2326f0a0b5d3",
"assets/assets/gifs/forest-light-1.gif": "36765a93982651feab0e43d3ff12853f",
"assets/assets/gifs/forest-light-5.gif": "445918cab499cfd3dab3d8560b20a9a2",
"assets/assets/gifs/shadow-passage-5.gif": "3ce01d5fab1e043523e616fbf4c7f67a",
"assets/assets/gifs/shadow-passage-4.gif": "3ee9d2e9f18551f014ba568bcabf52e3",
"assets/assets/gifs/forest-light-4.gif": "ebbd2a263e69f7d15138dc4ad952bd06",
"assets/assets/gifs/forest-light-6.gif": "217d085af562609a536834354be5f154",
"assets/assets/gifs/dungeon-7.gif": "c4821757ae7667001a4dee984a022d67",
"assets/assets/gifs/dungeon-6.gif": "0e102fa45d59a3df3749af8613528222",
"assets/assets/gifs/dungeon-4.gif": "e9b6fce1c634b3ca011ffadbf6dd4d64",
"assets/assets/gifs/dungeon-5.gif": "9eec2d4f6054f473916b8e0b3e5b04c1",
"assets/assets/gifs/dungeon-1.gif": "873c9421c498601d0f21882fb7a2b7f5",
"assets/assets/gifs/dungeon-2.gif": "d75bf7c9f416b321b36385358a8d1306",
"assets/assets/gifs/dungeon-3.gif": "54e358e5d6fe1b96f19bc984cf74a694",
"assets/assets/gifs/undead-shooter-6.gif": "3d81765d96efba469ac3afd8eeac3a1b",
"assets/assets/gifs/undead-shooter-4.gif": "10fdfa1a3869cf188cd9863b7908a748",
"assets/assets/gifs/undead-shooter-5.gif": "fb064fc4cf62227c2add9426c3b2ae99",
"assets/assets/gifs/undead-shooter-1.gif": "64928e3ebdcce048c02ce015a8767e19",
"assets/assets/gifs/undead-shooter-2.gif": "b5a217d76985edff72abade780a77629",
"assets/assets/gifs/undead-shooter-3.gif": "8c1e7a3ec05a211029a71bacd5fe317b",
"assets/assets/icons/github-mark.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
