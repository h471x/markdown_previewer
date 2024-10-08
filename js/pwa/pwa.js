if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/markdown_previewer/js/pwa/service-worker.js')
      .then((registration) => {
        // console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}
