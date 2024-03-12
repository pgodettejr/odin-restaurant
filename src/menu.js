// OPTION: Is there a way to refactor this code to have elements dynamically created with more loops (e.g: forEach), reducing the amount of code?

export function menupage() {
  // Elements for the container of all the elements within the menu page
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
  menuImage1.appendChild(menuPic1);

  let menuContent1 = document.createElement('div');
  menuContent1.classList.add('content-1');
  menuItem1.appendChild(menuContent1);

  let itemName1 = document.createElement('div');
  itemName1.classList.add('name-1');
  itemName1.textContent = 'Mixed Grill Platter';
  menuContent1.appendChild(itemName1);

  let description1 = document.createElement('div');
  description1.classList.add('description-1');
  description1.textContent = 'Savory slices of succulent steak, tender grilled chicken, and flavorful lamb dance tantalizingly on the palate, each infused with the essence of Greek spices and herbs. Accompanied by vibrant slices of ripe tomatoes, crisp lettuce, and zesty onions, this culinary masterpiece is a symphony of flavors and textures. Delight your senses as you savor the harmony of grilled meats, perfectly complemented by our house-made tzatziki sauce, served alongside our (not pictured) warm, fluffy pita bread.';
  menuContent1.appendChild(description1);

  let price1 = document.createElement('div');
  price1.classList.add('price-1');
  price1.textContent = '$18.00';
  menuContent1.appendChild(price1);

  const orderBtn1 = document.createElement('button');
  const orderText1 = document.createTextNode('Add to Order');
  orderBtn1.classList.add('order-btn-1');

  orderBtn1.appendChild(orderText1);
  menuContent1.appendChild(orderBtn1);

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
  menuImage2.appendChild(menuPic2);

  let menuContent2 = document.createElement('div');
  menuContent2.classList.add('content-2');
  menuItem2.appendChild(menuContent2);

  let itemName2 = document.createElement('div');
  itemName2.classList.add('name-2');
  itemName2.textContent = 'Grilled Chicken Gyro';
  menuContent2.appendChild(itemName2);

  let description2 = document.createElement('div');
  description2.classList.add('description-2');
  description2.textContent = 'Tender, succulent strips of marinated chicken, grilled to perfection, are nestled within warm, pillowy pita bread. Each bite bursts with vibrant flavors as the chicken harmonizes with crisp lettuce, juicy tomatoes, and tangy onions, all drizzled with our signature tzatziki sauce, crafted from creamy yogurt and fresh cucumbers.';
  menuContent2.appendChild(description2);

  let price2 = document.createElement('div');
  price2.classList.add('price-2');
  price2.textContent = '$11.00';
  menuContent2.appendChild(price2);

  const orderBtn2 = document.createElement('button');
  const orderText2 = document.createTextNode('Add to Order');
  orderBtn2.classList.add('order-btn-2');

  orderBtn2.appendChild(orderText2);
  menuContent2.appendChild(orderBtn2);

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
  menuImage3.appendChild(menuPic3);

  let menuContent3 = document.createElement('div');
  menuContent3.classList.add('content-3');
  menuItem3.appendChild(menuContent3);

  let itemName3 = document.createElement('div');
  itemName3.classList.add('name-3');
  itemName3.textContent = 'Village Salata';
  menuContent3.appendChild(itemName3);

  let description3 = document.createElement('div');
  description3.classList.add('description-3');
  description3.textContent = 'This refreshing dish celebrates the freshest ingredients of the Aegean, combining plump tomatoes, crisp cucumbers, and piquant red onions in a harmonious medley of colors and textures. Enhanced with briny Kalamata olives and creamy cubes of tangy feta cheese, each bite is a symphony of flavors that evoke the sun-drenched shores of Greece. Dressed in a luscious vinaigrette crafted from extra virgin olive oil, fragrant oregano, and zesty lemon juice, this salad is a culinary ode to the Mediterranean lifestyle.';
  menuContent3.appendChild(description3);

  let price3 = document.createElement('div');
  price3.classList.add('price-3');
  price3.textContent = '$10.00';
  menuContent3.appendChild(price3);

  const orderBtn3 = document.createElement('button');
  const orderText3 = document.createTextNode('Add to Order');
  orderBtn3.classList.add('order-btn-3');

  orderBtn3.appendChild(orderText3);
  menuContent3.appendChild(orderBtn3);

  // OPTION: My attempt to refactor button generation to a forEach method that will add the buttons to all menu items.
  // const menuItems = document.querySelectorAll("div[class^=item-]");

  // const orderButtons = ['Add To Order'];

  // orderButtons.forEach(orderButton => {
  //   const orderBtn = document.createElement('button');
  //   orderBtn.textContent = orderButton;
  //   orderBtn.classList.add('order-btn');
  //   menuItems.appendChild(orderBtn);
  // });

  // Returns the menu page container with all menu page elements
  return menuPage;
}