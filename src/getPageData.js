export function getPageData() {
  let result = {
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,

    documentHeight: Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ),
    documentWidth: Math.max(
      document.body.scrollWidth, document.documentElement.scrollWidth,
      document.body.offsetWidth, document.documentElement.offsetWidth,
      document.body.clientWidth, document.documentElement.clientWidth
    ),
    
    currentScrollFromTop: window.pageYOffset || document.documentElement.scrollTop,
    currentScrollFromLeft: window.pageXOffset || document.documentElement.scrollLeft,
};
return result;
}
