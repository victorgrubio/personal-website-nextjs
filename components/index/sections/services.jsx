const ServicesSection = () => (
    <section className="ftco-section" id="services-section">
        <div className="container-fluid px-md-5">
            <div className="row justify-content-center py-5 mt-5">
                <div className="col-md-12 heading-section text-center ftco-animate">
                    <h1 className="big big-2">Services</h1>
                    <h2 className="mb-4">Services</h2>
                    <p>My skills can be applied to create complete applications with multiple purposes.</p>
                    <p>From AI/ML model creation to its productization using APIs and Docker.</p>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-4 col-md-6 text-center d-flex ftco-animate">
                <a className="services-1 shadow">
                    <span className="icon">
                        <i className="flaticon-ai"></i>
                    </span>
                    <div className="desc">
                        <h3 className="mb-5">AI Model development</h3>
                        <p>From dataset creation to model training and production deployment. Specialized in Image processing models using Convolutional Neural Networks. </p>
                    </div>
                </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center d-flex ftco-animate">
                <a className="services-1 shadow">
                    <span className="icon">
                        <i className="flaticon-ship"></i>
                    </span>
                    <div className="desc">
                        <h3 className="mb-5">Deployments: Docker & K8s</h3>
                        <p>Continuous integration and deployment of developments using Docker images and Kubernetes for orchestration.</p>
                    </div>
                </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center d-flex ftco-animate">
                <a className="services-1 shadow">
                    <span className="icon">
                        <i className="flaticon-api"></i>
                    </span>
                    <div className="desc">
                        <h3 className="mb-5">API Development</h3>
                        <p>OpenAPI standarized API Development. Extense use of Flask for backend development. MongoDB preference as a Database technology, able to work with SQL without issue.</p>
                    </div>
                </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center d-flex ftco-animate">
                <a className="services-1 shadow">
                    <span className="icon">
                        <i className="flaticon-visual"></i>
                    </span>
                    <div className="desc">
                        <h3 className="mb-5">Computer Vision</h3>
                        <p>Traditional image processing algorithms knowledge. OpenCV algorithms extense knowledge and application for image processing related services.</p>
                    </div>
                </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center d-flex ftco-animate">
                <a className="services-1 shadow">
                    <span className="icon">
                        <i className="flaticon-analysis"></i>
                    </span>
                    <div className="desc">
                        <h3 className="mb-5">Data Science</h3>
                        <p>Data analysis skills for extracting and visualizing relevant insights from data. Machine Learning knowledge, specialized in supervised learning algorithms.</p>
                    </div>
                </a>
            </div>
            <div className="col-lg-4 col-md-6 text-center d-flex ftco-animate">
                <a className="services-1 shadow">
                    <span className="icon">
                        <i className="flaticon-description"></i>
                    </span>
                    <div className="desc">
                        <h3 className="mb-5">End-to-End Product Development</h3>
                        <p>From the conception of the product to its development and production. Oriented to client perspective to provide the most adequate and easy service despite the complexity.</p>
                    </div>
                </a>
            </div>
            </div>
        </div>
    </section>
)

export default ServicesSection