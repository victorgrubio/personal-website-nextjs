const AboutMeSection = () => (
  <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
    <div className="container">
        <div className="row d-flex no-gutters">
            <div className="col-md-6 col-lg-6 d-flex">
                <div className="img-about img d-flex align-items-stretch">
                    <div className="overlay"></div>
                    <div className="img d-flex align-self-stretch align-items-center"
                        style={{backgroundImage: `url('/static/assets/images/yo.jpg')`}}>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 pl-md-5 py-5">
                <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section ftco-animate div-about-me">
                        <h1 className="big">About</h1>
                        <h2 className="mb-4">About Me</h2>
                        <p>Software developer specialized in DevOps and APIs, applied in AI & ML projects. End-to-End product development.</p>
                        <ul className="about-info mt-4 px-md-0 px-2">
                            <li className="d-flex"><span>Name:</span> <span>Víctor García Rubio</span></li>
                            <li className="d-flex"><span>Date of birth:</span> <span>January 1st, 1996</span></li>
                            <li className="d-flex"><span>Location:</span> <span>Madrid, Spain</span></li>
                            <li className="d-flex"><span>Email:</span> <span>victorgrubiodl@gmail.com</span></li>
                            <li className="d-flex"><span>Phone: </span> <span>+34-664883959</span></li>
                        </ul>
                    </div>
                </div>
                <div className="counter-wrap ftco-animate d-flex mt-md-3 container-button-cv">
                    <div className="text div-button-cv">
                        <p><a href="/static/assets/pdf/cv.pdf" target="_blank" rel="noopener" className="btn btn-primary py-3 px-3">Download CV</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
)

export default AboutMeSection;