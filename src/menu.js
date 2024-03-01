// TODO: Don't forget to add 'export' at the beginning of this function when this is all done, THEN import it into index.js

function menupage () {
  // Elements for the container of the entire menu page
  const menuPage = document.createElement('div');
  menuPage.classList.add('menu-page');

  // Menu page header
  const menuHeader = document.createElement('h2');
  menuHeader.textContent = 'Menu';
  menuPage.appendChild(menuHeader);

  // Container for all the menu items
  const menuSection = document.createElement('div');
  menuSection.classList.add('menu-section');
  menuPage.appendChild(menuSection);

  // Section that includes the image, pricing, dish description and Order button for the first menu item
  const menuItem1 = document.createElement('div');
  menuItem1.classList.add('item-1');
  menuSection.appendChild(menuItem1);

  let menuImage1 = document.createElement('div');
  menuImage1.classList.add('image-1');
  menuItem1.appendChild(menuImage1);

  let menuPic1 = document.createElement('img');
  menuPic1.src = 'https://cdn.pixabay.com/photo/2021/07/29/13/28/meat-6507228_1280.jpg';
  menuPic1.setAttribute('alt', 'meat-plate');
  menuItem1.appendChild(menuPic1);

  let menuContent1 = document.createElement('div');
  menuContent1.classList.add('item-content-1');
  menuItem1.appendChild(menuContent1);

  let itemName1 = document.createElement('div');
  itemName1.classList.add('item-name-1');
  itemName1.textContent = 'Mixed Grill Platter';
  menuContent1.appendChild(itemName1);

  let description1 = document.createElement('div');
  description1.classList.add('description-1');
  description1.textContent = 'This scrumptious dish includes steak, grilled chicken served with sliced tomatoes, tzatziki sauce and accompanied by vine leaves and pita bread';
  menuContent1.appendChild(description1);

  let price1 = document.createElement('div');
  price1.classList.add('price-1');
  price1.textContent = '$18.00';
  menuContent1.appendChild(price1);

  const orderBtn = document.createElement('button');
  const orderText = document.createTextNode('Add to Order');
  orderBtn.classList.add('order-btn');
  orderBtn.appendChild(orderText);
  menuContent1.appendChild(orderBtn);

  // Section that includes the image, pricing, dish description and Order button for the second menu item
  const menuItem2 = document.createElement('div');
  menuItem2.classList.add('item-2');
  menuSection.appendChild(menuItem2);

  let menuImage2 = document.createElement('div');
  menuImage2.classList.add('image-2');
  menuItem2.appendChild(menuImage2);

  let menuPic2 = document.createElement('img');
  menuPic2.src = 'https://cdn.pixabay.com/photo/2015/03/15/13/40/gyros-674425_1280.jpg';
  menuPic2.setAttribute('alt', 'gyro');
  menuItem2.appendChild(menuPic2);

  let menuContent2 = document.createElement('div');
  menuContent2.classList.add('item-content-2');
  menuItem2.appendChild(menuContent2);

   // TODO: Change textContent to the name of the gyro
  let itemName2 = document.createElement('div');
  itemName2.classList.add('item-name-2');
  itemName2.textContent = 'Mixed Grill Platter';
  menuContent2.appendChild(itemName2);

  // TODO: Change textContent to a description of the gyro on the menu
  let description2 = document.createElement('div');
  description2.classList.add('description-2');
  description2.textContent = 'This scrumptious dish includes steak, grilled chicken served with sliced tomatoes, tzatziki sauce and accompanied by vine leaves and pita bread';
  menuContent2.appendChild(description2);

  let price2 = document.createElement('div');
  price2.classList.add('price-2');
  price2.textContent = '$11.00';
  menuContent2.appendChild(price2);

  const orderBtn = document.createElement('button');
  const orderText = document.createTextNode('Add to Order');
  orderBtn.classList.add('order-btn');
  orderBtn.appendChild(orderText);
  menuContent2.appendChild(orderBtn);

  // Section that includes the image, pricing, dish description and Order button for the third menu item
  const menuItem3 = document.createElement('div');
  menuItem3.classList.add('item-3');
  menuSection.appendChild(menuItem3);

  let menuImage3 = document.createElement('div');
  menuImage3.classList.add('image-3');
  menuItem3.appendChild(menuImage3);

  let menuPic3 = document.createElement('img');
  menuPic3.src = 'https://cdn.pixabay.com/photo/2018/04/21/03/47/food-3337621_1280.jpg';
  menuPic2.setAttribute('alt', 'salad');
  menuItem3.appendChild(menuPic3);

  let menuContent3 = document.createElement('div');
  menuContent3.classList.add('item-content-3');
  menuItem3.appendChild(menuContent3);

  // TODO: Change textContent to the name of the salad
  let itemName3 = document.createElement('div');
  itemName3.classList.add('item-name-3');
  itemName3.textContent = 'Mixed Grill Platter';
  menuContent3.appendChild(itemName3);

  // TODO: Change textContent to a description of the salad on the menu
  let description3 = document.createElement('div');
  description3.classList.add('description-3');
  description3.textContent = 'This scrumptious dish includes steak, grilled chicken served with sliced tomatoes, tzatziki sauce and accompanied by vine leaves and pita bread';
  menuContent3.appendChild(description3);

  let price3 = document.createElement('div');
  price3.classList.add('price-3');
  price3.textContent = '$10.00';
  menuContent3.appendChild(price3);

  const orderBtn = document.createElement('button');
  const orderText = document.createTextNode('Add to Order');
  orderBtn.classList.add('order-btn');
  orderBtn.appendChild(orderText);
  menuContent2.appendChild(orderBtn);
}