'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "79211ff0a7d8490eb938d0600d922270",
"assets/FontManifest.json": "0ba61cdc48b8d29dca849ed72e8c944a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/SourceSansPro-Bold.ttf": "09ad953751e1109778ece9318df70540",
"assets/fonts/SourceSansPro-Italic.ttf": "b556f79ff1e9821d6e27ba9b4a985842",
"assets/fonts/SourceSansPro-Light.ttf": "e7208e0bdca1887f658b9ac66c988a95",
"assets/fonts/SourceSansPro-Regular.ttf": "47dbe5824a2d82b794ef1f52809699a5",
"assets/fonts/SourceSansPro-SemiBold.ttf": "c1b4f417cf21451e85a0baccbfd8edc8",
"assets/images/call.png": "eca57e76e74de329da249e2fd45a44ef",
"assets/images/ic_launcher_android.png": "89aa090abc5b522dce0b4eaa723024eb",
"assets/images/ic_launcher_ios.png": "cb4cac8eaa8d6f972f394798a66b97e7",
"assets/images/internet.png": "24f0c83c49f521c90216e93e24556b06",
"assets/images/layout/about_us.png": "7efff9ca24c32fd714605ccd22c08a25",
"assets/images/layout/change-password.png": "ec29f27a837be61f5c071ceeb9b351bb",
"assets/images/layout/enter-otp.png": "f82449b2abbfcb57cab2cc4baac15a99",
"assets/images/layout/forgot-password.png": "d2eb06bd21246750cc363df4d13d7a03",
"assets/images/layout/free-account.png": "23b1e1f52ea449180ca8aae9d6f284d5",
"assets/images/layout/inprogress.png": "e268cc23f2cb6289f43b2f7a5af45804",
"assets/images/layout/notifications.png": "9c2667596bf3cf163889f645827855a3",
"assets/images/layout/payment.png": "2b8a35d36a822ddb56d5d016fe9844b8",
"assets/images/layout/promo-code-success.png": "14f7b8410f00cfa95e7380c5d79bd0cd",
"assets/images/layout/quiz-success.png": "9c6084dd86c288161de851e2ae039cb2",
"assets/images/layout/quiz.png": "326c0990b9266288c2840fbe999633d5",
"assets/images/layout/redeem-code.png": "376761ba7989abb1567554b77bd97744",
"assets/images/layout/referral.png": "d1d6f4a8666730055d2658e69bd5ad8e",
"assets/images/layout/sign-in.png": "3441a9805db659d9d034cde57ff4e0bc",
"assets/images/layout/sign-up.png": "74eda3b5c858ee3cd93436d6296621a6",
"assets/images/layout/social/messenger.png": "52e01271b3da88d1f8762f11c9913ce1",
"assets/images/layout/social/zalo.png": "38eae5769ba3b75e76ec5fb177b04f1e",
"assets/images/layout/sorry-16x9.jpg": "34229d5be143ba1767ecbeccbe1be254",
"assets/images/layout/sorry.png": "d99e5c51c2c81aaabd148149e85ac71c",
"assets/images/layout/vip-account.png": "aad06a7c493d5fc0d9367723ff4031ee",
"assets/images/location.png": "16cc655f40692453e97a3642868e9e43",
"assets/images/logo-black-white.png": "2a58b6287afb945b0efbf41d5a8e4697",
"assets/images/logo-transparent.png": "c9e273acbb1707e9c383641ecd140ac4",
"assets/images/logo-white.jpg": "8a235cab5f914d0cf51ed2545dcb05df",
"assets/images/message.png": "cb791f6fc2a03f2ba65b030d94907b51",
"assets/images/placeholders/account.png": "f1598ae56d21caf6b5318cafd2f03133",
"assets/images/placeholders/image-loading-16x9.jpg": "7e4af08aea2f712ab4e8e0bbbbfaf7cd",
"assets/images/placeholders/image-loading.png": "2a58b6287afb945b0efbf41d5a8e4697",
"assets/images/placeholders/image.png": "97301d6b679e01c37c5ff53f97315def",
"assets/images/placeholders/quiz.png": "3503944b2a46afc0f21ece5d4cc54bf1",
"assets/images/quiz/correct.png": "c2d5247175b6f4bc3598695de3f41585",
"assets/images/quiz/done-quiz.png": "b2fcd0e8b1a541a006817b4319a7466f",
"assets/images/quiz/done-survey.png": "38cc699d121fb842bfb845ddd0f8afdd",
"assets/images/quiz/incorrect.png": "817b9674302bae6f26f263e7f2284e82",
"assets/images/quiz/quiz-fail-1.png": "833988a97c3bc9a5b4d13afde7ae1fcd",
"assets/images/quiz/quiz-fail-2.png": "ab12c0ffb38fbb79ef7f0d6ab191a314",
"assets/images/quiz/quiz-fail-3.png": "dcd825014e28c579ce7d7f0bcaabf0b0",
"assets/images/quiz/quiz-fail-4.png": "032c19c9b214eb8b25e53a971362b703",
"assets/images/quiz/quiz-fail-5.png": "37caf57eca86730c22e515d876b91f77",
"assets/images/quiz/quiz-success-1.png": "9d92c924ba9c18b9d4504f954b3aef4e",
"assets/images/quiz/quiz-success-2.png": "16c64fa509bc7cd779e9505fae435103",
"assets/images/quiz/quiz-success-3.png": "d0e7d722c8c6c49a0da107390a2ae3f6",
"assets/images/quiz/quiz-success-4.png": "7f52ca682c13fecbe8c708724f846d5b",
"assets/images/quiz/quiz-success-5.png": "bb68ea3b4ee7746f8c113986a0940212",
"assets/images/quiz/quiz-timeout.png": "24e37cea1faa9d15332cb41157276820",
"assets/images/quiz/start-quiz.png": "b82fea40207a308e8863bbea8ddc1831",
"assets/images/quiz/start-survey.png": "d34d160232528ed4f85f9a7315a461b4",
"assets/images/sorry_16x9.png": "5c1cfb72056699d08992cc2697c7462e",
"assets/images/utility/dictionary.jpg": "5437f9621f025cf2000dae70794ef54e",
"assets/NOTICES": "0db9b677b60da028a8e116f2c5cd69dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/loading_more_list/assets/empty.jpeg": "52a69bab9f87bcf0052d8e55ea314977",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cde34b76a94c44295b89ffd50e3c26bb",
"/": "cde34b76a94c44295b89ffd50e3c26bb",
"main.dart.js": "84130b2fe60e35d22cfba2d0d1ea8fdb",
"manifest.json": "4137147246a11ba2148318bc696c4202",
"splash/img/dark-1x.png": "77a4897e9f9b94c81793b698b80fbb19",
"splash/img/dark-2x.png": "e5a0e666457d02d79a0bbca534e00a32",
"splash/img/dark-3x.png": "cbd5be02b50b1e734706ca01ca2ddc65",
"splash/img/dark-4x.png": "822aff40701ef96ea2be728d59e0cb85",
"splash/img/light-1x.png": "77a4897e9f9b94c81793b698b80fbb19",
"splash/img/light-2x.png": "e5a0e666457d02d79a0bbca534e00a32",
"splash/img/light-3x.png": "cbd5be02b50b1e734706ca01ca2ddc65",
"splash/img/light-4x.png": "822aff40701ef96ea2be728d59e0cb85",
"splash/style.css": "67098f11140ffdef6bf584ae960d548c",
"version.json": "abf487d5dc5c109cdaf3b36814560bb4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
