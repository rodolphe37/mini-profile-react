import React from 'react';
import Footer from './Footer';

const Contact =() => {
    return (
        <div id="tmContact" className="parallax-window" data-parallax="scroll" data-image-src="img/mini-profile-bg-02.jpg">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="tm-contact-items-container">
          <div className="tm-contact-item">
            <i className="fas fa-5x fa-briefcase tm-contact-item-icon" />
            <p className="mb-0">
              Quisque venenatis viverra ultrices. Lorem ipsum dolor sit
              amet. Nullam sit amet tempor nisl.
            </p>
          </div>
          <div className="tm-contact-item">
            <i className="fas fa-5x fa-building tm-contact-item-icon" />
            <p className="mb-0">
              You can absolutely feel free to use Mini Profile for your web page or any usage for your website.
            </p>
          </div>
          <div className="tm-contact-item">
            <i className="fas fa-5x fa-balance-scale tm-contact-item-icon" />
            <p className="mb-0">
              You are NOT allowed to re-distribute this template in any download website. Else, it is illegal action.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <form action="index.html" method="POST" id="tmContactForm" className="tm-bg-white-transparent">
          <div className="form-group">
            <input type="text" id="contact_name" name="contact_name" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="contact_email" name="contact_email" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea rows={4} id="contact_message" name="contact_message" className="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Message" required defaultValue={""} />
          </div>
          <div className="text-center">
            <button type="submit" className="btn tm-btn-submit rounded-0 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* row */}
    <div className="row">
     <Footer />
    </div>
  </div>
  {/* container */}
</div>

    )
}

export default Contact;
