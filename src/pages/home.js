import gordonPortrait from '../assets/gordo.jpg';

export default function renderHomePage() {
  const contentDiv = document.getElementById('content');
  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero');
  const firstp = document.createElement('p');
  firstp.textContent = 'Best Babi Guling in The World';
  const secondP = document.createElement('p');
  secondP.textContent = 'Made With Passion Since 1908';
  const gordonImage = new Image();
  gordonImage.src = gordonPortrait;
  const lastP = document.createElement('p');
  lastP.textContent = 'Come here now or gordo will be mad!';
  heroDiv.append(firstp, secondP, gordonImage, lastP);
  contentDiv.appendChild(heroDiv);
}
