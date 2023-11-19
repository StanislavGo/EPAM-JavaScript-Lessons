export function isElementScrolled(element) {
  if(element === null || element === undefined) {
    return {
      scrollTop: null,
      scrollLeft: null,
      isScrolled: null,
    };
  }

  const results = {
    scrollTop: element.scrollTop,
    scrollLeft: element.scrollLeft,
    isScrolled: element.scrollTop > 0 || element.scrollLeft > 0,
  }

  return results;
}
