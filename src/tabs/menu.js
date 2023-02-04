import createMenuItemElement from '../utils/createMenuItemElement';
import PorkRamenImg from '../assets/pork-ramen.jpg';
import PorkChopsImg from '../assets/pork-chops.jpg';
import PorkEggsImg from '../assets/pork-eggs.jpg';
import PorkBurntImg from '../assets/pork-burnt.jpg';
import getContentAndHeroDiv from '../utils/getContentAndHeroDiv';

const menus = [
  {
    id: 1,
    name: 'Pork Ramen',
    image: PorkRamenImg,
  },
  {
    id: 2,
    name: 'Pork Eggs',
    image: PorkEggsImg,
  },
  {
    id: 3,
    name: 'Burnt Pork',
    image: PorkBurntImg,
  },
  {
    id: 4,
    name: 'Pork Chops',
    image: PorkChopsImg,
  },
];

export default function renderMenuTab() {
  const { contentDiv, currentHeroDiv } = getContentAndHeroDiv();
  currentHeroDiv.remove();

  const newHero = document.createElement('div');
  newHero.classList.add('hero');

  const menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');

  const itemDivs = menus.map((menu) =>
    createMenuItemElement(menu.image, menu.name)
  );
  menuGrid.append(...itemDivs);
  newHero.appendChild(menuGrid);

  contentDiv.appendChild(newHero);
}
