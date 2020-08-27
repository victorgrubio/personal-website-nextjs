const ContactSection = () => (
  <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <h1 className="big big-2">Contact</h1>
          <h2 className="mb-4">Contact Me</h2>
          <p>Please do not hesitate to contact me if you have any proposal or interest!</p>
        </div>
      </div>
      <div className="row d-flex contact-info mb-5">
        <div className="col-md-12 col-lg-4 d-flex ftco-animate">
          <div className="align-self-stretch box text-center p-4 shadow">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="icon-linkedin"></span>
            </div>
            <div>
              <h3 className="mb-4">LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/victor-garcia-rubio/"
                    target="_blank" rel="noopener">Linkedin.com/victor-garcia-rubio</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4 d-flex ftco-animate">
          <div className="align-self-stretch box text-center p-4 shadow">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="icon-github"></span>
            </div>
            <div>
              <h3 className="mb-4">Github</h3>
            <p><a href="https://github.com/victorgrubio" target="_blank" rel="noopener">Github.com/victorgrubio</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4 d-flex ftco-animate">
          <div className="align-self-stretch box text-center p-4 shadow">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="icon-envelope"></span>
            </div>
            <div>
              <h3 className="mb-4">Email</h3>
              <a href="mailto:victorgrubiodl@gmail.com">
                <p>victorgrubiodl@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row no-gutters block-12">
        <div className="col-md-12 order-md-last d-flex">
          <form action="https://formspree.io/mnqzpoqg" method="POST" className="bg-light p-8 p-md-12 contact-form">
            <div className="form-group">
              <label htmlFor="formName">Name</label>
              <input id="formName" type="text" className="form-control" name="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="formEmail">Email</label>
              <input id="formEmail" type="text" className="form-control" name="_replyto" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="formSubject">Subject</label>
              <input id="formSubject" type="text" className="form-control" name="subject" placeholder="A subject" />
            </div>
            <div className="form-group">
              <label htmlFor="formMessage">Message</label>
              <textarea id="formMessage" id="" cols="30" rows="7" name="message" className="form-control"
                placeholder="A great message!"></textarea>
            </div>
            <div className="form-group" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
              <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default ContactSection