import React from 'react';
import emailjs from 'emailjs-com';
import { string } from 'check-types';
const Contact = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio', e.target, 'user_qMwolF8UJuWamahN6xNbf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  
  return (
    <>
      <section className="contact">
        <div className="form-container">
        <h2>Contac me</h2>
          <div className="container-fluid">
            <div className="row">
              <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <h1>Give feedback</h1>
                <p> What is your opinion about portfolio ? Rate it from one to five.
                Write extra suggestions.
                </p>
              </div>
              <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div>
                  <form onSubmit={sendEmail}>
                  <div>
                      <label for="name">Name</label>
                      <input id="name" type="text" required className="form-control text" placeholder="Name" name="from_name"/>
                    </div>
                    <div>
                      <label for="surname">SurName</label>
                      <input id="surname" type="text" required className="form-control text" placeholder="Surname" name="to_name"/>
                    </div>
                    <div>
                      <label for="email">Email</label>
                      <input id="email" type="email" required className="form-control text" placeholder="Email" name="email"/>
                    </div>
                    <div>
                      <label for="mes">Message</label>
                      <textarea id="mes" cols="10" rows="5" required className="form-control" name="message"></textarea>
                    </div>
                    <div>
                    <input type="submit" required className="form-control btn btn-info" value="Send message" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;