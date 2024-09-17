export function homepage() {
  // Container for all home page elements 
  const homeContent = document.createElement('div');
  homeContent.classList.add('home-content');

  // Generates different sections of the home page under 'home-content' div
  const media = document.createElement('div');
  const food = document.createElement('div');
  const about = document.createElement('div');
  const testimonial = document.createElement('div');
  const gallery = document.createElement('div');

  // Classes for each section
  media.classList.add('media');
  food.classList.add('food');
  about.classList.add('about');
  testimonial.classList.add('testimonial');
  gallery.classList.add('gallery');

  // Image for the 'media' section of the homepage
  let mediaImage = document.createElement('img');
  mediaImage.src = 'https://cdn.pixabay.com/photo/2014/11/09/14/42/greek-523731_1280.jpg';
  mediaImage.setAttribute = ('alt', 'restaurant-pic-1');
  media.appendChild(mediaImage);

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
  about.appendChild(aboutText);

  // Text elements for the 'Testimonial' section
  const quote = document.createElement('div');
  const boldQuote = document.createElement('em');
  const author = document.createElement('div');

  quote.classList.add('quote');
  author.classList.add('author');

  boldQuote.textContent = " 'Indulging in the culinary delights at this Aegean gem is an experience like no other. Each dish is a masterpiece, crafted with love and precision, transporting you to the sun-drenched shores of the Aegean Sea with every bite. This restaurant is a must-visit destination for anyone craving a taste of Greece's vibrant flavors and timeless traditions.' ";
  author.textContent = "- Maria K., Satisfied Customer"

  quote.appendChild(boldQuote);
  quote.appendChild(author);
  testimonial.appendChild(quote);

  // Header elements for 'Gallery' section
  const galleryHeader = document.createElement('div');
  galleryHeader.classList.add('gallery-header');

  const galleryHeaderText = document.createElement('h2');
  galleryHeaderText.textContent = 'Gallery';

  // Image elements for the 'Gallery' section
  // May need another wrapper to place the image section (galleryInfo) under to get the image carousel to work correctly
  const galleryInfo = document.createElement('div');
  galleryInfo.classList.add('gallery-info');

  let gallery1 = document.createElement('div');
  let gallery2 = document.createElement('div');
  let gallery3 = document.createElement('div');
  let gallery4 = document.createElement('div');
  let gallery5 = document.createElement('div');

  // BRANCH: Possibly change this section to a forEach method for the gallery divs (add a class to each one and/or add unique images to each)?
  gallery1.classList.add('gallery-1');
  gallery2.classList.add('gallery-2');
  gallery3.classList.add('gallery-3');
  gallery4.classList.add('gallery-4');
  gallery5.classList.add('gallery-5');

  let galleryPic1 = document.createElement('img');
  galleryPic1.src = 'https://cdn.pixabay.com/photo/2021/07/29/13/28/meat-6507228_1280.jpg';
  galleryPic1.setAttribute('alt', 'meat-plate');
  gallery1.appendChild(galleryPic1);

  let galleryPic2 = document.createElement('img');
  galleryPic2.src = 'https://cdn.pixabay.com/photo/2015/03/15/13/40/gyros-674425_1280.jpg';
  galleryPic2.setAttribute('alt', 'gyro');
  gallery2.appendChild(galleryPic2);

  let galleryPic3 = document.createElement('img');
  galleryPic3.src = 'https://cdn.pixabay.com/photo/2018/04/21/03/47/food-3337621_1280.jpg';
  galleryPic3.setAttribute('alt', 'salad');
  gallery3.appendChild(galleryPic3);

  let galleryPic4 = document.createElement('img');
  galleryPic4.src = 'https://cdn.pixabay.com/photo/2017/11/08/19/01/table-2931360_1280.jpg';
  galleryPic4.setAttribute('alt', 'table');
  gallery4.appendChild(galleryPic4);

  let galleryPic5 = document.createElement('img');
  galleryPic5.src = 'https://cdn.pixabay.com/photo/2021/07/29/13/28/meat-6507228_1280.jpg';
  galleryPic5.setAttribute('alt', 'temp-meat-plate');
  gallery5.appendChild(galleryPic5);

  // Subtext divs for the 'Gallery' section
  // TODO: Currently doesn't create empty divs with a class of 'subtext' (with no text currently). Change 'galleryInfo' back to 'document' then replace parenthesis with '.gallery-info > *'?
  galleryInfo.querySelectorAll('div').forEach((el) => {
    let subtext = document.createElement('div');
    subtext.classList.add('subtext');
    el.appendChild(subtext);
  })

  // TODO: Controls for the image carousel in the 'Gallery' section
  // const galleryControls = document.createElement('div');
  // galleryControls.classList.add('gallery-controls');

  // Attaching all gallery elements to the 'Gallery' section
  galleryHeader.appendChild(galleryHeaderText);

  galleryInfo.appendChild(gallery1);
  galleryInfo.appendChild(gallery2);
  galleryInfo.appendChild(gallery3);
  galleryInfo.appendChild(gallery4);
  galleryInfo.appendChild(gallery5);

  gallery.appendChild(galleryHeader);
  gallery.appendChild(galleryInfo);
  // gallery.appendChild(galleryControls);

  // Attaching all main sections (Media, Our Philosophy, About Us, Testimonial, Gallery) to the existing home-content div.
  homeContent.appendChild(media);
  homeContent.appendChild(food);
  homeContent.appendChild(about);
  homeContent.appendChild(testimonial);
  homeContent.appendChild(gallery);

  // Returns the home content container with all home page elements (now leaves a bar behind between each section - fix with CSS?)
  return homeContent;
}

  // Attempt at some JS functionality for a 3D image carousel

  // const galleryContainer = document.querySelector('.gallery-container');
  // const galleryControlsContainer = document.querySelector('.gallery-controls');
  // const galleryControlsArray = ['previous', 'next'];
  // const galleryItems = document.querySelectorAll('img[alt]');

  // class Carousel {
  //   constructor(container, items, controls) {
  //     this.carouselContainer = container;
  //     this.carouselControls = controls;
  //     this.carouselArray = [...items];
  //   }

  //   updateGallery() {
  //     this.carouselArray.forEach(el => {
  //       el.classList.remove('gallery-1');
  //       el.classList.remove('gallery-2');
  //       el.classList.remove('gallery-3');
  //       el.classList.remove('gallery-4');
  //       el.classList.remove('gallery-5');
  //     });

  //     this.carouselArray.slice(0, 5).forEach((el, i) => {
  //       el.classList.add(`gallery-${i+1}`);
  //     });
  //   }

  //   setCurrentState(direction) {
  //     if (direction.className === 'gallery-controls-previous') {
  //       this.carouselArray.unshift(this.carouselArray.pop());
  //     } else {
  //       this.carouselArray.push(this.carouselArray.shift());
  //     }

  //     this.updateGallery();
  //   }

  //   setControls() {
  //     this.carouselControls.forEach(control => {

  //       // Uncaught TypeError: Cannot read properties of null (reading 'appendChild')
  //       galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;

  //       document.querySelector(`.gallery-controls-${control}`).innerText = control;
  //     });
  //   }

  //   useControls() {
  //     const triggers = [...galleryControlsContainer.childNodes];
  //     triggers.forEach(control => {
  //       control.addEventListener('click', (e) => {
  //         e.preventDefault();
  //         this.setCurrentState(control);
  //       });
  //     });
  //   }
  // }

  // const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControlsArray);

  // exampleCarousel.setControls();
  // exampleCarousel.useControls();