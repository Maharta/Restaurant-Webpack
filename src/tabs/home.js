import gordonPortrait from '../assets/gordo.jpg';
import getContentAndHeroDiv from '../utils/getContentAndHeroDiv';

export default function renderHomeTab() {
  const { contentDiv, currentHeroDiv } = getContentAndHeroDiv();
  if (currentHeroDiv) currentHeroDiv.remove();

  const newHero = document.createElement('div');
  newHero.classList.add('hero', 'flex');

  const firstp = document.createElement('p');
  firstp.textContent = 'Best Babi Guling in The World';

  const secondP = document.createElement('p');
  secondP.textContent = 'Made With Passion Since 1908';

  const gordonImage = new Image();
  gordonImage.src = gordonPortrait;
  gordonImage.classList.add('gordon');

  const lastP = document.createElement('p');
  lastP.textContent = 'Come here now or gordo will be mad!';

  newHero.append(firstp, secondP, gordonImage, lastP);
  contentDiv.appendChild(newHero);
}
