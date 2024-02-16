export const content = document.getElementById('content');

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
  mediaImage.src = '.img/greek-523731_1920.jpg';
  media.appendChild(mediaImage);

  // Background image, header and text for the 'Our Philosophy' section of the homepage
  let foodImage = document.createElement('img');
  foodImage.src = '.img/table-2931360_1920.jpg';
  foodImage.classList.add('food-bg');
  food.appendChild(foodImage);

  const foodHeader = document.createElement('h2');
  foodHeader.textContent = 'Our Philosophy';
  food.appendChild(foodHeader);

  const foodText = document.createElement('p');
  foodText.textContent = "Here at Aegean Grille, experience the vibrant flavors of Greece with our health-conscious, nutritious fare! From fresh salads to succulent grilled meats, each dish is crafted to delight your taste buds and nourish your body. Join us for a delicious journey inspired by the Mediterranean lifestyle!";
  food.appendChild(foodText);

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

  // Images for the 'Gallery' section
  


}