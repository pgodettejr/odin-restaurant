export function homepage() {
  // Generates different sections of the home page under 'content' div
  const media = document.createElement('div');
  const food = document.createElement('div');
  const about = document.createElement('div');
  const testimonial = document.createElement('div');
  const galleryHeader = document.createElement('div');
  const galleryInfo = document.createElement('div');

  // Classes for each section
  media.classList.add('media');
  food.classList.add('food');
  about.classList.add('about');
  testimonial.classList.add('testimonial');
  galleryHeader.classList.add('gallery-header');
  galleryInfo.classList.add('gallery-info');

  // Image for the 'media' section of the homepage
  let mediaImage = document.createElement('img');
  mediaImage.src = './img/greek-523731_1920.jpg';
  mediaImage.setAttribute = ('alt', 'restaurant-pic-1');
  media.appendChild(mediaImage);

  // Background image, header, text and Menu section button for the 'Our Philosophy' section of the homepage
  let foodImage = document.createElement('img');
  foodImage.src = './img/table-2931360_1920.jpg';
  foodImage.setAttribute('alt', 'restaurant-pic-2');
  food.appendChild(foodImage);

  const foodHeader = document.createElement('h2');
  foodHeader.textContent = 'Our Philosophy';
  food.appendChild(foodHeader);

  const foodText = document.createElement('p');
  foodText.textContent = "Here at Aegean Grille, experience the vibrant flavors of Greece with our health-conscious, nutritious fare! From fresh salads to succulent grilled meats, each dish is crafted to delight your taste buds and nourish your body. Join us for a delicious journey inspired by the Mediterranean lifestyle!";
  food.appendChild(foodText);

  const bigMenuBtn = document.createElement('button');
  const bigBtnText = document.createTextNode("View Our Menu");
  bigMenuBtn.classList.add('big-menu-button');
  bigMenuBtn.appendChild(bigBtnText);
  food.appendChild(bigMenuBtn);

  // Header and text for the 'About Us' section of the homepage
  const aboutHeader = document.createElement('h2');
  aboutHeader.textContent = 'About Us';
  about.appendChild(aboutHeader);

  const aboutText = document.createElement('p');
  aboutText.textContent = "Nestled by the azure shores of the Aegean Sea, our restaurant is a culinary haven steeped in rich history and seaside charm. Born from a deep-rooted love for the Aegean flavors, our journey began generations ago, where time-honored recipes were passed down with care. Inspired by the sun-kissed landscapes and bountiful waters of our homeland, we embarked on a mission to bring the essence of the Aegean to your plate.";

  // Text elements for the 'Testimonial' section
  const quote = document.createElement('div');
  const boldQuote = document.createElement('em');
  const author = document.createElement('div');

  quote.classList.add('quote');
  author.classList.add('author');

  boldQuote.textContent = " 'Indulging in the culinary delights at this Aegean gem is an experience like no other. Each dish is a masterpiece, crafted with love and precision, transporting you to the sun-drenched shores of the Aegean Sea with every bite. This restaurant is a must-visit destination for anyone craving a taste of Greece's vibrant flavors and timeless traditions.' ";
  author.textContent = "- Maria K., Satisfied Customer"

  quote.appendChild(boldQuote); // May NOT need to be appended to quote div (might need to find a different way of showing bold text through JS)
  quote.appendChild(author); // May need to be appended to testimonial div instead depending on how this text is positioned against the quote on the homepage
  testimonial.appendChild(quote);

  // Header element for 'Gallery' section
  const galleryHeaderText = document.createElement('h2');
  galleryHeaderText.textContent = 'Gallery';
  galleryHeader.appendChild(galleryHeaderText);

  // Images for the 'Gallery' section. Possibly change this section to a forEach method for the gallery divs (add a class to each one and/or add unique images to each)?
  let gallery1 = document.createElement('div');
  let gallery2 = document.createElement('div');
  let gallery3 = document.createElement('div');
  let gallery4 = document.createElement('div');

  gallery1.classList.add('gallery-1');
  gallery2.classList.add('gallery-2');
  gallery3.classList.add('gallery-3');
  gallery4.classList.add('gallery-4');

  let galleryPic1 = document.createElement('img');
  galleryPic1.src = './img/meat-6507228_640.jpg';
  galleryPic1.setAttribute('alt', 'meat-plate');
  gallery1.appendChild(galleryPic1);

  let galleryPic2 = document.createElement('img');
  galleryPic2.src = './img/gyros-674425_640.jpg';
  galleryPic2.setAttribute('alt', 'gyro');
  gallery2.appendChild(galleryPic2);

  let galleryPic3 = document.createElement('img');
  galleryPic3.src = './img/food-3337621_640.jpg';
  galleryPic3.setAttribute('alt', 'salad');
  gallery3.appendChild(galleryPic3);

  let galleryPic4 = document.createElement('img');
  galleryPic4.src = './img/table-2931360_1920.jpg';
  galleryPic4.setAttribute('alt', 'table');
  gallery4.appendChild(galleryPic4);

  // Subtext divs for the 'Gallery' section. Trying to implement a forEach method for these as they will be empty divs with a class of 'subtext'
  document.querySelectorAll('div[class^="gallery-"]').forEach((element) => {
    let subtext = document.createElement('div');
    subtext.classList.add('subtext');
    element.appendChild(subtext);
  })

  // Attaching all gallery elements to the 'Gallery' section
  galleryInfo.appendChild(gallery1);
  galleryInfo.appendChild(gallery2);
  galleryInfo.appendChild(gallery3);
  galleryInfo.appendChild(gallery4);

  // Attaching all main sections (Media, Our Philosophy, About Us, Testimonial, Gallery) to the existing content div
  // TODO: Not sure if these will work as index.js is appending the entire function as a child to the content div already. 
  // OPTION: Could not keep content as separate DOM in this file unless we figure out how to call this JS file correctly in index.js
  content.appendChild(media);
  content.appendChild(food);
  content.appendChild(about);
  content.appendChild(testimonial);
  content.appendChild(galleryHeader);
  content.appendChild(galleryInfo);
}