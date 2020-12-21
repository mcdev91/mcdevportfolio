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
    <div
      style={{
        textAlign: 'center',
        marginTop: 50,
        align: 'center'
      }}>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>NAME</label>
        <br />
        <input style={{ width: 150 }} type="text" name="from_name" />
        <br />
        <label>EMAIL</label>
        <br />
        <input style={{ width: 150 }} type="email" name="reply_to" />
        <br />
        <label>YOUR MESSAGE</label>
        <br />
        <textarea style={{ width: 150, height: 150 }} name="message" />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div >
  );
}

export default Contact;