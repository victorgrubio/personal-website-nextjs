const technologyRows = [
  { rowId: 1,
    content: [
      {id: 0, name: "Python", link: "https://www.python.org/", imageUrl: "/static/assets/images/logos/Python_logo_and_wordmark.png"},
      {id: 1, name: "OpenCV", link: "https://opencv.org/", imageUrl: "/static/assets/images/logos/opencv-1.png"},
      {id: 2, name: "TensorFlow", link: "https://www.tensorflow.org/", imageUrl: "/static/assets/images/logos/tensorflow-logo-edit.png"}
    ]
  },
  { rowId: 2,
    content: [
      {id: 3, name: "Docker", link: "https://www.docker.com/products/kubernetes", imageUrl: "/static/assets/images/logos/docker-kubernetes-edit.png"},
      {id: 4, name: "CI/CD", link: "https://docs.gitlab.com/ee/ci/", imageUrl: "/static/assets/images/logos/gitlab-ci-cd.png"},
      {id: 5, name: "Cloud", link: "https://aws.amazon.com", imageUrl: "/static/assets/images/logos/aws.png"}
    ]
  },
  { rowId: 3,
    content: [
      {id: 6, name: "Angular", link: "https://angular.io/", imageUrl: "/static/assets/images/logos/angular.svg"},
      {id: 7, name: "React", link: "https://reactjs.org/", imageUrl: "/static/assets/images/logos/react-js.png"},
      {id: 8, name: "NodeJS", link: "https://nodejs.org/", imageUrl: "/static/assets/images/logos/Node-js-Logo.png"}
    ]
  }
]

const TechnologiesSection = () => (
  <section className="ftco-section ftco-partner">
    <div className="container">
        {technologyRows.map(item => 
          <div key={item.rowId} className="container row">
            {item.content.map(icon =>
              <TechnologyIcon
              key={icon.id}
              link={icon.link}
              name={icon.name}
              imageUrl={icon.imageUrl}
              />
            )}
          </div>
        )}
    </div>
  </section>
)

const TechnologyIcon = props =>(
  <div className="col-sm ftco-animate">
      <a href={props.link} className="partner">
        <img src={props.imageUrl} className="img-fluid pt-2 pb-2"
              alt={props.name} />
      </a>
  </div>
)

export default TechnologiesSection