export default function getContentAndHeroDiv() {
  const contentDiv = document.getElementById('content');
  const currentHeroDiv = document.querySelector('div.hero');
  return { contentDiv, currentHeroDiv };
}
