export default function getMainAndHeroDiv() {
  const main = document.querySelector('main');
  const currentHeroDiv = document.querySelector('div.hero');
  return { main, currentHeroDiv };
}
