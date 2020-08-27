const ExperienceSubsection = props => (
    <div id={props.id} className={props.class}>
        <h2 className="heading">Experience</h2>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-layout"></span>
            </div>
            <div className="text pl-3">
                <span className="date">March 2020 - Now</span>
                <h2>Fullstack Developer</h2>
                <span className="position">Visual Applications Group at Universidad Politecnica de Madrid</span>
                <p>
                    Participating in projects like <a href="https://www.rebuildeurope.eu/en/default.aspx" target="_blank" rel="noopener">Rebuild</a>, <a href="https://fandango-project.eu/" target="_blank" rel="noopener">Fandango</a> and <a href="https://www.video-mos.com" target="_blank" rel="noopener">VideoMOS</a>.
                    <br/>
                    Developing Frontend using <strong>Angular</strong>.
                    <br/>
                    Backend development oriented to APIs using <strong>Flask and OpenAPI.</strong>
                    <br/>
                    Computer Vision and AI Project participation using <strong>Keras, TensorFlow and OpenCV.</strong> 
                </p>
            </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-ai"></span>
            </div>
            <div className="text pl-3">
                <span className="date">March 2018 - February 2020</span>
                <h2>Computer Vision and AI/ML Software Developer</h2>
                <span className="position">Visiona IP</span>
                <p>Software development for Computer Vision and Artificial Intelligence projects. 
                <br/>
                    <a href="http://www.nrg5.eu/aerial-predictive-maintenance-for-utility-infrastructures/" target="_blank" rel="noopener">NRG 5</a> Developed a predictive maintenance state-of-the-art solution using drone imagery and <strong>deep learning algorithms.</strong>
                <br/>
                    <a href="https://visiona-ip.es/servicios/avvpark/" target="_blank" rel="noopener">AVVPark</a> Automatic occupancy detection system for parking using CCTV Cameras processed with <strong> OpenCV and TensorFlow.</strong>
                <br/>
                    <a href="https://visiona-ip.es/servicios/scopia/" target="_blank" rel="noopener">ScopIA Media</a> <strong>Microservices</strong> based on Deep Learning for multiple applications: <strong>Gender Detection, Content Moderation and Object Detection.</strong>
                </p>   
                <p>
                    <i>Note: Publications related to NRG-5 project accessible at the correspondent section.</i>
                </p>
            </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-data"></span>
            </div>
            <div className="text pl-3">
                <span className="date">January 2018 - March 2018</span>
                <h2>Junior Web Developer</h2>
                <span className="position">Tible Technologies</span>
                <p>WordPress and PHP Web development. Customer service and technical support.</p>
            </div>
        </div>
    </div>
)

export default ExperienceSubsection;