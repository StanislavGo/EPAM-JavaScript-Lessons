export function isElementVisible(element) {
  if (element === null || element === undefined) {
    return false;
  }

  return element.offsetWidth > 0 || element.offsetHeight > 0;
}
