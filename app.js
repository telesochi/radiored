if (navigator.serviceWorker.controller) {
console.log('[PWA Builder] active service worker found, no need to register')
} else {
navigator.serviceWorker.register('sw.js', {
scope: 'https://live.glavnoeradio.ru/index.html'
}).then(function(reg) {
console.log('Service worker has been registered for scope:'+ reg.scope);
});
}
