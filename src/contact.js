// TODO: Don't forget to export this function, then import into index.js the same way that Home and Menu were done
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

  // Name section of the form
  const formColumn1 = document.createElement('div');
  formColumn1.setAttribute('id', 'form-col-1');
  contactForm.appendChild(formColumn1);

  const formLabel1 = document.createElement('label');
  formLabel1.setAttribute('for', 'contact-name');
  formLabel1.textContent = 'Name';

  const formInput1 = document.createElement('input');
  multiAttributes(formInput1, {"type": "text", "name": "contact-name", "id": "contact-name"});
  formInput1.required = true;

  formColumn1.appendChild(formLabel1, formInput1);

  // Email section of the form
  // TODO: Check to see if there are any different requirements for an e-mail section of the form (like the 'type' attribute, etc)
  const formColumn2 = document.createElement('div');
  formColumn2.setAttribute('id', 'form-col-2');
  contactForm.appendChild(formColumn2);

  const formLabel2 = document.createElement('label');
  formLabel2.setAttribute('for', 'contact-email');
  formLabel2.textContent = 'E-Mail';

  const formInput2 = document.createElement('input');
  multiAttributes(formInput2, {"type": "text", "name": "contact-email", "id": "contact-email"});
  formInput2.required = true;

  formColumn2.appendChild(formLabel2, formInput2);

  // Subject/Title section of the form
  const formColumn3 = document.createElement('div');
  formColumn3.setAttribute('id', 'form-col-3');
  contactForm.appendChild(formColumn3);

  const formLabel3 = document.createElement('label');
  formLabel3.setAttribute('for', 'contact-subject');
  formLabel3.textContent = 'Subject';

  const formInput3 = document.createElement('input');
  multiAttributes(formInput3, {"type": "text", "name": "contact-subject", "id": "contact-subject"});
  formInput3.required = true;

  formColumn3.appendChild(formLabel3, formInput3);

  // Message section of the form goes below this line
  // TODO: Research/read docs on how to set up a Message box properly



  // Submit button for the form
  const submitBtn = document.createElement('button');
  const submitBtnText = document.createTextNode('Submit');
  submitBtn.classList.add('submit-btn');

  submitBtn.appendChild(submitBtnText);
  contactForm.appendChild(submitBtn);


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