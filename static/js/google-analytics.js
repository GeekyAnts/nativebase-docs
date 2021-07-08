let timesRun = 0;
let intervalInstance = setInterval(() => {
  timesRun = timesRun + 1;
  if (document && document.title !== '' && document.title !== 'NativeBase') {
    function gtag() {
      dataLayer.push(arguments);
    }
    window.dataLayer = window.dataLayer || [];

    if (timesRun > 3) {
      let pageTitle =
        location.pathname === '/' ? 'NativeBase | NativeBase' : location.href;
      gtag('config', 'G-ZTSFCSJK8X', {
        page_title: pageTitle,
      });
      clearInterval(intervalInstance);
    }

    gtag('js', new Date());
    gtag('config', 'G-ZTSFCSJK8X');
    clearInterval(intervalInstance);
  }
}, 500);
