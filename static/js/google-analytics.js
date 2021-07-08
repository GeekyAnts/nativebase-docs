let timesRun = 0;
let intervalInstance = setInterval(() => {
  timesRun = timesRun + 1;
  if (timesRun > 3) clearInterval(intervalInstance);
  if (document && document.title !== '' && document.title !== 'NativeBase') {
    function gtag() {
      dataLayer.push(arguments);
    }
    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'G-ZTSFCSJK8X');
    clearInterval(intervalInstance);
  }
}, 500);
