/* Registering Service Worker */
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/fosscell/sw.js')
  .then(() => { console.log('Service Worker Registered'); });
};

