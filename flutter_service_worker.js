'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7aed4b767a91d384de68737a1413083f",
"version.json": "009c9e65172e010890f7f65fde438006",
"launcher.png": "77af18465331108fdcd64cefd082537d",
"index.html": "2202273a21c636137f9035b3306cbcee",
"/": "2202273a21c636137f9035b3306cbcee",
"main.dart.js": "5f6553c4be1a7ea47b5f5e6b938e52c0",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/ORIG_HEAD": "7000737e656796e7be7762301f4aada0",
".git/config": "60c851096369ef5b196c2e3da4143b1e",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/50/cac823e25b842c980f5ca3c6433d736076efbc": "f5f0fe00c77c3d886b2e6eaeeb36aafa",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/a6edaef38630fe5b019f80e539d771debc586d": "34f3e22363edbe51d9ea6ba4ef33bd03",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/51/b6b6df0780eda0894e177fc216e850329098ae": "36d8631f825b51c1c0d7f65c1f1d0916",
".git/objects/3d/0568c6192caded8976486446a1bfc6691c616e": "99cc41deee833b6a89dfa2b2dc47f29f",
".git/objects/58/3651671f55bdf74b569a39f528ad922496e48f": "5fc969d189b90f4d4a0921c5a4de229a",
".git/objects/5a/782fe7fdbde57cd9a7cfcd34d2b3ad30b57291": "4227a4e33a3907c49a471a02995bdc27",
".git/objects/5f/0111fff22b6c927b2e6cc6beab590009426bde": "108469d7fc3cd2eff61051676e8ebea6",
".git/objects/a3/d0df38ac9f91ed3aa1376d8a1e3627cb8a8925": "90914caf997e9d41145458d98178d77c",
".git/objects/a3/e03bbe98b94e6cfdeab9d2a42082797e062adb": "997852f4701b66f5ba51e508e4486360",
".git/objects/d9/01a2dbbbcbc9b6a34d8a8e8ebbc2140f9e247d": "0c9488daf3a881827c2d98d24acf7651",
".git/objects/bb/c73b8459b2c3b53508af74bab135a3ff1dbb3a": "8378dc41c8494754a74234a58d1f0392",
".git/objects/d7/7e88330ccfb3c9032766e81185e3e9df1d22c3": "5a08af6b4135383159c94334f9221f57",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/55a6e970e760846d19f1194c5c4ea3970534c2": "0b734cabe8dd9f6a56ecdbf48bfbda70",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/e1bd89653472f1c25d55e94a73e660d9a863d8": "fa97bf23ab50fe47c33ba8a622452301",
".git/objects/ab/9d9664ee12a2d48cfdb13232702f52bdf21722": "fa0c7c1a05905cd890d5a1625925b2f6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/7d6451cc866e133861e60524b165c555207641": "a7bc16761512e626c944f7d38a45ec43",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/e7689e5551fbed07f4099b2a27ed5f5d10ce50": "7bb8528f6e2fce3665253b1846d49ff4",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/425cdae9a31c641a2d470ddf504719767839ce": "2bbb7a912c17fd4c36c1bc6da202a3e9",
".git/objects/fe/915b60ca96cfc858f60825ba7ef2ca8ec94772": "546923963777333a0cd77bf427e4d533",
".git/objects/ed/8ebda0bf53bd08e8edad35f64196ffbd645709": "34111deb3858272b0de065c81d9d4301",
".git/objects/42/058f079af0dde8df6f805dbc233738ee17c45a": "fb786cc2924b1717cfd5498e9667c144",
".git/objects/45/4f9739de285f45a06b22a1bfa9e4f6e3e26783": "31822f22d086dde397b16e37bab0aff7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/28/4c199b36ae0e1a028e1a52e4ad708ad240efb2": "ca3255446a9a377abe30d75bb8c26f9f",
".git/objects/28/742b7e925d637528ea71e713482e51a1e1cb06": "daa6bdb320f6e370b0b561aaae7b0833",
".git/objects/7b/4385dc2b929795f35f96a0ed0027c4f419fbe6": "e3ed023d26f2820edc97ea802966acc9",
".git/objects/7b/8526753dd1efb2d9dbf86dbcebecc5933688fc": "99c05f63ad28b30fedd082c8a11c0646",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/b86292aed20c1d1d46ffd12ef7d4278175854f": "1df433ef2015d6119333104006b2a873",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/1678a80851cc1979fc1730d7b7809fa31a5a2b": "d237f86d52455e3289a9640b314bcfe2",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/69b7dc06520a44ae298b7acde263e66d7230b4": "2c90b7474adea6f508e100098ec1c926",
".git/objects/00/14ac14c9bd545a92e87893af738bae434c0a64": "d47c534e1c292d2d7d8920fcc9a2b2fe",
".git/objects/6e/c90134b07f96752857b43349a510a22e8f08a1": "b33cdd56229272570257be213755b555",
".git/objects/5c/eb0942b40166f29b16202a6814d5fa7bc1616b": "0fade9808d0b6f72b7b5e01f6328eea9",
".git/objects/09/855e375d8186b04650ddce4c2c208e83e0b81b": "4a98fd5e00cfdbe2aaf6d5d71f9cd26b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/b57452070dc03cda6badf17eeeac4b0e0bea51": "012e8d573e6417afcdd011e9ee28cf5b",
".git/objects/98/2e3308fbfa407003a8aaa2e70c1c28115e71fc": "f5966511269c5df6fec22605e3b19aaf",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/895b5d5980f5bb25a668174d345e0dcd02cc1f": "a8e950915e5164d7fdc63e2f446e8320",
".git/objects/30/2ebfce298a3a17fe0c7eed9d942fc143ed5b6d": "78bbb9d5cb4d4865e3e343895735b2c9",
".git/objects/5e/3effa879822b900de769a63b18844b79a5cd82": "24c684da7cc277e6d4a57f22ceed5797",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/37/6c641340a825e0945dc275315b1dcea48916df": "07ee335b57787dba05385a4e85ab7c9c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/8907a6fb694f4487252c3fe1fc1ae4dc3ebf3d": "2e9201f67dcb8bff184b91752cb5558a",
".git/objects/01/10fbe94fa4f8371db4824677231404ff13cdbc": "b75acd65fb659fd1dbcb04ac28f4190d",
".git/objects/6c/1c4c3d7f964b21e8aa68a4fb3c00a4d6a0fab9": "a19a023f615d78e3bac3db9e0c754ed9",
".git/objects/6c/8074ef5417a1d1a516dc5e147808b05af935cd": "b38ca4652fa5470d82a2a9f969689e86",
".git/objects/6c/b3b705d018006a2bd4200ea94c9d5fb98b6f76": "3f0f65921839b32e52dee427e6222ebf",
".git/objects/55/9aaf8ca2caa2158ac7fb812a0b7a1de999ef4e": "096d9e9a4c5f6386d8a34f9464d41a1c",
".git/objects/97/7e2420570403e48118531592157816a75f1cee": "6f737b1151bcc36e1ece4a98db659792",
".git/objects/97/28e5cba6cfa0c186d3605c1dcc65d764c89dd6": "ebdda33e1d8495018d0beb244e906e5a",
".git/objects/0f/0878ee39f3eef527bd4dfd52babd869eee9df7": "7a78d13aae5548f830df3a2c412d8ffd",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/65101f3e81cb82de6f93f43b5770ae0fdd7104": "7d4cfd6b9402767c29001e87284ae158",
".git/objects/b6/1017d3a45d648143269dc8123956c521c461ec": "fda3e8f1635658eb17d789200fe3b487",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/1d41828ab8793231e9c3fbd51e28f471d8038d": "6a010f0acc78c20ac7d6a4d04d401d98",
".git/objects/db/75d8dcf8aaa3009e1fde55f8c6440e2c24e461": "2aa828913628957b456d94ce53328d3f",
".git/objects/a6/8954cb26b9aba7088d7eb9ecdee2e8eae5ec4e": "7470b157373782306f338473e3836e61",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/7c8d914aa65fc76c15eda66c57e318540c8094": "b29321ba167c747cf1cb95e87c4969c3",
".git/objects/ef/b92bb8959a26d3f036c30430be4838a4d92e2e": "6730110bd52acd97c30d35f408b67277",
".git/objects/ff/b451a18850c557382faa1da2b51a084008721d": "f572c6de4d5a610f322167dd9d301cf7",
".git/objects/c5/73cc7098230f437ba6f766bdd09e20aaaa432e": "a6cfbc0249f15ef79a23f7aefa3f14c7",
".git/objects/ce/25da2a63b2f198c5978dd7ad84abd487d1c79a": "2ccd0de8a2069c83101c129e419ba86e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/cff3c5a9c1ebe4cb1c920e0a3c0842e7f7d68e": "ab860be31c3673dc12381d8947de834f",
".git/objects/2d/c6ae93809c0cd45654f5f15ecf04c8eade4bd1": "cc105e14cc30213083dfea7e5a5b642e",
".git/objects/83/5c538fd8730be18e1cf9a189c59c9df1b0198d": "58607e169e09edab6c48b9b01e838913",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/290fd83939b98c005d026d8bffeff92b46e390": "7d6d2969307cb710283577ea18c47197",
".git/objects/4f/3a63de81d3c55a41bc9b10c2a483d6cd22af2b": "90895d38b0d7f23b9c1e254997b7c877",
".git/objects/12/22463aa760cd4aa00fd910af706cd5401349e5": "5d7ab04f1bb4a28cb5c303f8fe23b18b",
".git/objects/12/678ca1b5b55c8c24b6d812301765faac1e3906": "aad840d65e001fcf5cb2a45f96f06e90",
".git/objects/8c/587e3a71d32d579b4acedd651bcbd4eb9eeae7": "43d4ef197beb79bad5a45b3483afd9fe",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/e0b1623b414e8d8ce682b2c2b7d503e998ffad": "241832aa50bc0d2a4e5a520dd93a7095",
".git/objects/71/114a9414e12bad6b74d77d82a8b8e3750ef8b3": "f294a515227bbd25a43eb516a96fb738",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2e/c305f9431b5d537e35371058717ca98816ddab": "8448dab9c95f84a1fb609e60f1bde0b8",
".git/objects/2b/12b7d592641729a36933de7d74c329fd677b84": "5c334eb82150f1337d130927f2587592",
".git/objects/47/f3966ed653deb5c914cfcc18218098d6fad58d": "3c05df147e41cd11527b058b7bb223eb",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "159a45d642c249bd40bfd5f97653719a",
".git/logs/refs/heads/main": "5122d3a333d97c8a93d5e28305a5141f",
".git/logs/refs/remotes/origin/main": "bf735e81333788b481079543f04de2b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7000737e656796e7be7762301f4aada0",
".git/refs/remotes/origin/main": "7000737e656796e7be7762301f4aada0",
".git/index": "4d15a56013c1777fb50e2433c8f2ba26",
".git/COMMIT_EDITMSG": "c9b05c64690a58881d1bb9ea781a9350",
".git/FETCH_HEAD": "a6e2ad6c8e953b2b5b78774c320232c3",
"assets/AssetManifest.json": "fd6e680529e08fd44351bfda61720679",
"assets/NOTICES": "56125272bed61259360461350ba9cbc3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ba31290ed637999adf2b1d2c7e30fb64",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "78fef418244984821497d32e6f446156",
"assets/fonts/MaterialIcons-Regular.otf": "b9ff7f198eec763c4d24c38b7cf423d5",
"assets/assets/images/jira.png": "9b30a9d999f901d406ab1d0cedfaaf62",
"assets/assets/images/git.png": "42f2cb3c804c535583c156cf20f2beb1",
"assets/assets/images/news-search.png": "e28f716c9cb9714b8c9c378b9f29dbc0",
"assets/assets/images/news-register.png": "5b2300228022ae2438b5794818d3dada",
"assets/assets/images/news-content.png": "7250730392664d5f7cded16cdcb1e782",
"assets/assets/images/whisper-icon.png": "cd90dadd465bfa186b032aedf446f399",
"assets/assets/images/metropia-logo.png": "8a24049cfa3833ad022443c96c1fa575",
"assets/assets/images/flutter.png": "026afa02d18994e67ec00de6a66e4e7b",
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
"assets/assets/images/postman.png": "5b435cf1abff992744bda329d6f2c36b",
"assets/assets/images/recipe-portfolio-1.png": "a1c24a3e7ed606e38af524ee049e2a72",
"assets/assets/images/news-login.png": "d93ae662e1c96810fc9659ca1571eb7b",
"assets/assets/images/recipe-icon.png": "6529c2924b07aeb10864a181600bcf5e",
"assets/assets/images/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/images/whisper-portfolio-1.png": "cf561a5241fcedabf5aad54884dc115c",
"assets/assets/images/whisper-portfolio-2.png": "271b131b44a7b9b0b9657dffaaa42522",
"assets/assets/images/news-saved.png": "9f96af239ddd28272b657086f41d3db7",
"assets/assets/images/pacerfect-portfolio-2.png": "a2e8ce4cda67962ae023f9d42e77a8b1",
"assets/assets/images/dart.png": "fa159c09e72cb38d6c840c90b8371604",
"assets/assets/images/dungeons.png": "03e43cbf8087917cd6693c8114906071",
"assets/assets/images/news-feed.png": "bc950126cda37c4514bf25235a769f53",
"assets/assets/images/pacerfect-portfolio-1.png": "f3eed9080fc47d2f623195a178c107a2",
"assets/assets/images/kotlin.png": "748170ff1ac02219c361dfdf9f84bd8b",
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
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
