export default function createMenuItemElement(image, foodName) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('menu-item');
  const figure = document.createElement('figure');
  const foodImg = new Image();
  foodImg.src = image;
  foodImg.alt = foodName;
  const figcaption = document.createElement('figcaption');
  figcaption.textContent = foodName;
  figure.append(foodImg, figcaption);
  itemDiv.appendChild(figure);
  return itemDiv;
}
