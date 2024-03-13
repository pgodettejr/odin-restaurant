function contactPage() {
  // Container for all Contact page elements
  const contactSection = document.createElement('div');
  contactSection.classList.add('contact-page');

  // Contact page header
  const contactHeader = document.createElement('h2');
  contactHeader.textContent = 'Contact Us';
  contactSection.appendChild(contactHeader);

  // Contact form containing all form elements
  const contactForm = document.createElement('form');

  // TODO: Double check this function to make sure the attributes on the 'form' element are set correctly. If not, we have to do it the 'long way'.
  function multiAttributes(elem, elemAttributes) {
    for (let i in elemAttributes) {
      elem.setAttribute(i, elemAttributes[i]);
    }
  };

  multiAttributes(contactForm, {"action": "", "method": "get", "id": "contact-form"});

  contactSection.appendChild(contactForm);

  // Form column divs within the form section that act as containers for each section of the form
  

  // // My attempt to make multiple containers at once to house each form section in, but couldn't figure out how to add the sections themselves under each div created
  // function formColumns() {
  //   for (let i = 0; i < 4; i++) {
  //     const formColumn = document.createElement('div');
  //     formColumn.classList.add('form-col');

  //     contactForm.appendChild(formColumn);
  //   }
  // };

  // formColumns();
  

  // Returns the Contact page container with all Contact page elements
  return contactSection;
}