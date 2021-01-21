const emailjs = require('emailjs-com');
const submit_btn = document.querySelector('.submit-btn');

submit_btn.addEventListener('click', submitForm);

const submitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm('contact_form', 'template_mhrsp5d', 'contact-form', 'user_rDUF52AeHWNaos6w1xUMn')
    .then(result => alert('Your message has been sent. I will be in contact with you soon.Thank you!'))
    .catch(err => alert('Oops! Please try again.'))
}