import menuItemTpl from '../templates/menu-item.hbs';
import menu from './menu.json';

const menuList = document.querySelector('.js-menu');
const menuItems = createMenuItemsMarkup(menu);

menuList.insertAdjacentHTML('beforeend', menuItems);

function createMenuItemsMarkup(menu) {
  return menuItemTpl(menu);
}
