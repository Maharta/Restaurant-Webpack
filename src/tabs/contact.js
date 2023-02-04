import getMainAndHeroDiv from '../utils/getMainAndHeroDiv';
import begulMap from '../assets/begul-map.png';

export default function renderContactTab() {
  const { main, currentHeroDiv } = getMainAndHeroDiv();
  currentHeroDiv.remove();

  const newHero = document.createElement('div');
  newHero.classList.add('hero', 'flex');

  const p = document.createElement('p');
  p.textContent = '📞 123 456 789';

  const mapImg = new Image();
  mapImg.src = begulMap;
  mapImg.alt = 'location of the restaurant';
  mapImg.classList.add('map');

  const address = document.createElement('address');
  address.textContent = 'Jalan Nusa Dua, Gang Kambangan No.30, Bali';

  newHero.append(p, mapImg, address);
  main.appendChild(newHero);
}
