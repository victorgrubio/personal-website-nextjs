const ProjectsSection = () => (
  <section className="ftco-section ftco-project" id="projects-section">
    <div className="container-fluid px-md-0">
      <div className="row no-gutters justify-content-center pb-5">
        <div className="col-md-12 heading-section text-center ftco-animate">
          <h1 className="big big-2">Projects</h1>
          <h2 className="mb-4">My Projects</h2>
          <p>Projects I have been part of since the begginng of my professional career</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-4 col-md-6">
          <div className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{backgroundImage: "url('/static/assets/images/projects/avvdrone-1024x965.jpg')"}}>
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3 style={{color: "#FFFFFF"}}>AVVDrone</h3>
              <p className="project-description" style={{color: 'rgb(200,200,200)'}}>Pedestrian and Vehicle detection using Object Detection DL Models. Thermical image analysis using traditional image processing</p>
              <p className="mb-0">
                <a href="https://visiona-ip.es/servicios/kissing-the-bride/" target="_blank"
                className="btn btn-white py-2 px-3" rel="noopener">Check it out!</a>
              </p>
              <span>Deep Learning, Computer Vision</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{backgroundImage: "url('/static/assets/images/projects/AVVPark2-1024x965.jpg')"}}>
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3 style={{color: "#FFFFFF"}}>AVVPark</h3>
              <p className="project-description" style={{color: 'rgb(200,200,200)'}}>Automatic Parking Occupancy Detection System using TensorFlow, Keras and OpenCV</p>
              <p className="mb-0">
                <a href="https://visiona-ip.es/servicios/avvpark/" target="_blank"
                  className="btn btn-white py-2 px-3" rel="noopener">Check it out!</a>
              </p>
              <span>Deep Learning, Computer Vision</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{backgroundImage: "url('/static/assets/images/projects/video-mos-logo-dark.png')"}}>
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3 style={{color: "#FFFFFF"}}>VideoMOS</h3>
              <p className="project-description" style={{color: 'rgb(200,200,200)'}}>Video Content Quality Monitoring using Artificial Intelligence</p>
              <p className="mb-0">
                <a href="https://www.video-mos.com/" target="_blank"
                  className="btn btn-white py-2 px-3" rel="noopener">Check it out!</a>
              </p>
              <span>Video Quality, Artificial Intelligence, APIs</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{backgroundImage: "url('/static/assets/images/projects/SCOPIA.jpg')"}}>
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3 style={{color: "#FFFFFF"}}>ScopIA</h3>
              <p className="project-description" style={{color: 'rgb(200,200,200)'}}>Microservices with different purposes based on Artificial Intelligence algorithms</p>
              <p className="mb-0">
                <a href="https://visiona-ip.es/servicios/scopia/" target="_blank"
                  className="btn btn-white py-2 px-3" rel="noopener">Check it out!</a>
              </p>
              <span>Deep Learning, Microservices</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{backgroundImage: "url('/static/assets/images/projects/nrg5-predictive-maintenance-2.jpg')"}}>
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3 style={{color: "#FFFFFF"}}>NRG 5 - Predictive Maintenance</h3>
              <p className="project-description" style={{color: 'rgb(200,200,200)'}}>Intrusion and Risk Detection using Drone Imagery processed using TensorFlow and OpenCV</p>
              <p className="mb-0">
                <a href="http://www.nrg5.eu" target="_blank"
                  className="btn btn-white py-2 px-3" rel="noopener">Check it out!</a>
              </p>
              <span>Deep Learning, Computer Vision</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{backgroundImage: "url('/static/assets/images/projects/spring-angular.jpg')"}}>
            <div className="overlay"></div>
            <div className="text text-center p-4">
              <h3 style={{color: "#FFFFFF"}}>Spring & Angular Ecommerce App </h3>
              <p className="project-description" style={{color: 'rgb(200,200,200)'}}>Ready to use Ecommerce site using SpringBoot and Angular. Deployed using Heroku and Vercel</p>
              <p className="mb-0"><a href="https://ecommerce-app.victorgarciarubio.com/" target="_blank"
                  className="btn btn-white py-2 px-3" rel="noopener">Check it out!</a>
              </p>
              <span>Spring, Angular, Fullstack</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ProjectsSection;