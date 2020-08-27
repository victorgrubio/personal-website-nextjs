import React from 'react'

function Footer(props) {
    return (
      <>
      <footer className="ftco-footer ftco-section">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">About</h2>
                        <p>Software Developer specialized in deployments, APIs and Artificial Intelligence Projects.
                            End-to-End product development.
                            <br/>
                            Agile worker.
                        </p>
                        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            <li className="ftco-animate"><a href="https://twitter.com/VictorGRubio_DL" target="_blank"><span
                                        className="icon-twitter"></span></a></li>
                            <li className="ftco-animate"><a href="https://www.linkedin.com/in/victor-garcia-rubio/"
                                    target="_blank"><span className="icon-linkedin"></span></a></li>
                            <li className="ftco-animate"><a href="https://github.com/victorgrubio" target="_blank"><span
                                        className="icon-github"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4 ml-md-4">
                        <h2 className="ftco-heading-2">Links</h2>
                        <ul className="list-unstyled">
                            <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Home</a></li>
                            <li><a href="#resume-section"><span className="icon-long-arrow-right mr-2"></span>About</a></li>
                            <li><a href="#services-section"><span className="icon-long-arrow-right mr-2"></span>Services</a>
                            </li>
                            <li><a href="#projects-section"><span className="icon-long-arrow-right mr-2"></span>Projects</a>
                            </li>
                            <li><a href="#contact-section"><span className="icon-long-arrow-right mr-2"></span>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Services</h2>
                        <ul className="list-unstyled">
                            <li><a href="#services-section"><span className="icon-long-arrow-right mr-2"></span>AI Model
                                    Development</a></li>
                            <li><a href="#services-section"><span className="icon-long-arrow-right mr-2"></span>Docker & K8s
                                    Deployments</a></li>
                            <li><a href="#services-section"><span className="icon-long-arrow-right mr-2"></span>API
                                    Development</a></li>
                            <li><a href="#services-section"><span className="icon-long-arrow-right mr-2"></span>Computer
                                    Vision</a></li>
                            <li><a href="#services-section"><span className="icon-long-arrow-right mr-2"></span>Data
                                    Science</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md">
                    <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Contact</h2>
                        <div className="block-23 mb-3">
                            <ul>
                                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+34
                                            664883959</span></a></li>
                                <li><a href="#"><span className="icon icon-envelope"></span><span
                                            className="text">victorgrubiodl@gmail.com</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                <p>
                    Copyright ©2020 All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
                </div>
            </div>
        </div>
      </footer>
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
          <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10"
              stroke="#F96D00" />
        </svg>
      </div>
      <script defer="defer" src="/static/assets/template/ronaldo/js/jquery-3.5.1.min.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/jquery-migrate-3.0.1.min.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/popper.min.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/bootstrap.min.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/jquery.easing.1.3.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/jquery.waypoints.min.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/jquery.stellar.min.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/owl.carousel.min.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/jquery.magnific-popup.min.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/aos.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/jquery.animateNumber.min.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/scrollax.min.js"></script>
      <script defer="defer" src="/static/assets/template/ronaldo/js/main.js"></script>
    </>
    )
}

export default Footer;
