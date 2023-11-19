export function createToast(element) {
  let createDiv = document.createElement("div");
  createDiv.className = "toast";
  createDiv.style.position = "fixed";
  createDiv.style.top = "20px";
  createDiv.style.right = "20px";
  createDiv.appendChild(element);

  return createDiv;
}
