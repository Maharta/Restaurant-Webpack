import renderHomeTab from './tabs/home';
import './style.css';
import renderContactTab from './tabs/contact';
import renderMenuTab from './tabs/menu';

renderHomeTab();

const homeLink = document.querySelector('nav li[data-text="Home"]');
homeLink.addEventListener('click', renderHomeTab);

const contactLink = document.querySelector('nav li[data-text="Contact"]');
contactLink.addEventListener('click', renderContactTab);

const menuLink = document.querySelector('nav li[data-text="Menu"]');
menuLink.addEventListener('click', renderMenuTab);
