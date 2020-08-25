const technologyRows = [
  { rowId: 1,
    content: [
      {id: 0, name: "Keras", link: "https://keras.io", imageUrl: "/static/assets/images/logos/keras.png"},
      {id: 1, name: "OpenCV", link: "https://opencv.org/", imageUrl: "/static/assets/images/logos/opencv-1.png"},
      {id: 2, name: "TensorFlow", link: "https://www.tensorflow.org/", imageUrl: "/static/assets/images/logos/tensorflow-logo-edit.png"}
    ]
  },
  { rowId: 2,
    content: [
      {id: 3, name: "Python", link: "https://www.python.org/", imageUrl: "/static/assets/images/logos/Python_logo_and_wordmark.png"},
      {id: 4, name: "Docker + Kubernetes", link: "https://www.docker.com/products/kubernetes", imageUrl: "/static/assets/images/logos/docker-kubernetes-edit.png"},
      {id: 5, name: "OpenAPI Initiative", link: "https://www.openapis.org/", imageUrl: "/static/assets/images/logos/OpenAPI_Logo_Pantone-2.png"}
    ]
  }
]

const TechnologiesSection = () => (
  <section className="ftco-section ftco-partner">
    <div className="container">
        {technologyRows.map(item => 
          <div key={item.rowId} className="row">
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
        <img src={props.imageUrl} className="img-fluid"
              alt={props.name} />
      </a>
  </div>
)

export default TechnologiesSection