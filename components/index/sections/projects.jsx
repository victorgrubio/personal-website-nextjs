const projects = [
  {
    title: "NRG5",
    description: "Intrusion and Risk Detection using Drone Imagery processed using TensorFlow and OpenCV. Deployed using Docker and Docker Swarm",
    link: "http://www.nrg5.eu",
    backgroundImage: "/static/assets/images/projects/nrg5-predictive-maintenance-2.jpg",
    tags: "Deep Learning, Computer Vision, Docker"
  },
  {
    title: "VideoMOS",
    description: "Video Content Quality Monitoring using Artificial Intelligence. Backend development together with deployment using Python, MongoDB and Docker.",
    link: "https://www.video-mos.com/",
    backgroundImage: "/static/assets/images/projects/video-mos-logo-dark.png",
    tags: "APIs, DevOps, AI, Docker"
  },
  {
    title: "Kiwame",
    description: "EU Project focused on providing personalized mobile tools to kidney patients at risk of overhydratation. \
      Devops Engineer for containeraizing the API using Docker and putting it into production with Docker Swarm.",
    link: "http://kiwame.eu/es/por-que-kiwame/",
    backgroundImage: "/static/assets/images/projects/kiwame.jpg",
    tags: "API Development, DevOps, Health, EU"
  },
  {
    title: "AVVPark",
    description: "Automatic Parking occupancy detection system using Tensorflow and Keras for AI. Python backend development and Docker with Gitlab CI/CD for production environment.",
    link: "https://youtu.be/2nBO0CsK6BI",
    backgroundImage: "/static/assets/images/projects/AVVPark2-1024x965.jpg",
    tags: "API Development, DevOps, Health, EU"
  },
  {
    title: "Spring & Angular Ecommerce App",
    description: "EU Project focused on providing personalized mobile tools to kidney patients at risk of overhydratation. \
      Devops Engineer for containeraizing the API using Docker and putting it into production with Docker Swarm.",
    link: "https://ecommerce-app.victorgarciarubio.com/",
    backgroundImage: "/static/assets/images/projects/spring-angular.jpg",
    tags: "API Development, DevOps, Health, EU"
  },
  {
    title: "SCOPIA Media",
    description: "Microservices with different purposes based on Artificial Intelligence algorithms. Oriented to Media Broadcasters.",
    link: "https://visiona-ip.es/servicios/scopia/",
    backgroundImage: "/static/assets/images/projects/SCOPIA.jpg",
    tags: "API Development, Computer Vision, AI"
  },
]

const ProjectElement = props => (
  <div className="col-lg-4 col-md-6">
    <div className="project img ftco-animate d-flex justify-content-center align-items-center"
        style={{backgroundImage: `url(${props.backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="text text-center p-4">
        <h3 style={{color: "#FFFFFF"}}>{props.title}</h3>
        <p className="project-description" style={{color: 'rgb(200,200,200)'}}>{props.description}</p>
        <p className="mb-0">
          <a href={props.link} target="_blank"
          className="btn btn-white py-2 px-3" rel="noopener">Check it out!</a>
        </p>
        <span>{props.tags}</span>
      </div>
    </div>
  </div>
  )

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
        {projects.map(project => 
          <ProjectElement
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
          tags={project.tags}
          backgroundImage={project.backgroundImage}
          />
        )}
      </div>
    </div>
  </section>
)

export default ProjectsSection;