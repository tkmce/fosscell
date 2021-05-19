const resource = [

  /* --- CSS --- */
  '/fosscell/assets/css/style.css',

  /* --- JavaScripts --- */
  
  '/fosscell/assets/js/dist/home.min.js',
  '/fosscell/assets/js/dist/page.min.js',
  '/fosscell/assets/js/dist/post.min.js',
  '/fosscell/assets/js/dist/categories.min.js',
  '/fosscell/assets/js/data/search.json',
  '/fosscell/app.js',
  '/fosscell/sw.js',

  /* --- HTML --- */
  '/fosscell/index.html',
  '/fosscell/404.html',
  
    '/fosscell/categories/',
  
    '/fosscell/tags/',
  
    '/fosscell/archives/',
  
    '/fosscell/authors/',
  
    '/fosscell/about/',
  

  /* --- Posts --- */
  
    '/fosscell/posts/text-and-typography/',
  
    '/fosscell/posts/how-to/',
  
    '/fosscell/posts/action-plan/',
  

  /* --- Authors --- */
  
    '/fosscell/authors/atomixhawk.html',
  
    '/fosscell/authors/kryptiksage.html',
  
    '/fosscell/authors/vaskian.html',
  

  /* --- Favicons --- */
  

  '/fosscell/assets/img/favicons/android-chrome-192x192.png',
  '/fosscell/assets/img/favicons/android-chrome-512x512.png',
  '/fosscell/assets/img/favicons/apple-touch-icon.png',
  '/fosscell/assets/img/favicons/favicon-16x16.png',
  '/fosscell/assets/img/favicons/favicon-32x32.png',
  '/fosscell/assets/img/favicons/favicon.ico',
  '/fosscell/assets/img/favicons/mstile-150x150.png',
  '/fosscell/assets/img/favicons/site.webmanifest',
  '/fosscell/assets/img/favicons/browserconfig.xml'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  
    'www.googletagmanager.com',
    'www.google-analytics.com',
  

  'tkmce.github.io',

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

