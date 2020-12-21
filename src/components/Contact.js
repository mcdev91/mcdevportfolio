import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('mcdev1991', 'template_adfputRQ', e.target, 'user_sNwf4tlumvbRai41iSuEV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>NAME</label>
      <br />
      <input type="text" name="from_name" />
      <br />
      <label>EMAIL</label>
      <br />
      <input type="email" name="reply_to" />
      <br />
      <label>YOUR MESSAGE</label>
      <br />
      <textarea name="message" />
      <br />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contact;