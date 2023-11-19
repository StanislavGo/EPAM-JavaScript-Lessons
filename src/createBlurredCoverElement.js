export function createBlurredCoverElement(elementToCover) {
  const coverElement = document.createElement('div');
  coverElement.classList.add('cover');

  const elementRect = elementToCover.getBoundingClientRect();

  coverElement.style.position = 'absolute';
  coverElement.style.top = `${elementRect.top + window.scrollY}px`;
  coverElement.style.left = `${elementRect.left + window.scrollX}px`;
  coverElement.style.width = `${elementRect.width}px`;
  coverElement.style.height = `${elementRect.height}px`;

  return coverElement;
}