import getContentAndHeroDiv from '../utils/getContentAndHeroDiv';

export default function renderContactTab() {
  const { contentDiv, currentHeroDiv } = getContentAndHeroDiv();
  currentHeroDiv.remove();

  const newHero = document.createElement('div');
  newHero.classList.add('hero', 'flex');

  const p = document.createElement('p');
  p.textContent = '📞 123 456 789';

  const address = document.createElement('address');
  address.textContent = 'Jalan Nusa Dua, Gang Kambangan No.30, Bali';

  newHero.append(p, address);
  contentDiv.appendChild(newHero);
}
