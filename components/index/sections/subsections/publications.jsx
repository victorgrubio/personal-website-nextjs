const PublicationsSubsection = props => (
    <div id={props.id} className={props.class}>
        <h2 className="heading">Publications</h2>
        <h3 className="publication-type">Papers</h3>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-drone"></span>
            </div>
            <div className="text pl-3">
                <span className="date">October, 2019</span>
                <h2>Automatic Change Detection System over Unmanned Aerial Vehicle Video Sequences Based
                    on Convolutional Neural Networks</h2>
                <span className="position">Visiona I.P & GATV</span>
                <p>
                    Published on MDPI Sensors Journal. Part of <a href="https://visiona-ip.es/servicios/kissing-the-bride/">AVVDrone</a> and <a href="http://www.nrg5.eu/aerial-predictive-maintenance-for-utility-infrastructures/">predictive mainteinance</a> solutions. Deep Learning and Computer vision project to prevent accidents on critical infraestructures by detecting changes on security flights performed by drones.
                </p>
                <a href="https://www.mdpi.com/1424-8220/19/20/4484" target="_blank"><span
                        className="date">Get the content</span></a>
            </div>
        </div>
        <h3 className="publication-type">Chapters</h3>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-thesis"></span>
            </div>
            <div className="text pl-3">
                <span className="date">March, 2020</span>
                <h2>The Internet of Things: From Data to Insight, Chapter 6</h2>
                <span className="position">Visiona I.P & GATV</span>
                <p>
                    Published by <a href="https://wiley.com" target="_blank">Wiley</a> and edited by John Davies and Carolina Fortuna. <br/>
                    Our contribution to this book is the description of how Deep Learning and IoT can be combined for inspecting critical infraestructures. Moreover, a use case is detailed from the NRG5 project.
                </p>
                <a href="https://www.wiley.com/en-us/The+Internet+of+Things%3A+From+Data+to+Insight-p-9781119545262" target="_blank"><span className="date">Get the content</span></a>
            </div>
        </div>
        <h3 className="publication-type">Education</h3>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-thesis"></span>
            </div>
            <div className="text pl-3">
                <span className="date">July, 2019</span>
                <h2>Master Thesis: Master in Big Data & Machine Learning</h2>
                <span className="position">Universidad Politécnica de Madrid</span>
                <p>
                    Related to the predictive maintenance solution for the <a href="http://www.nrg5.eu">NRG 5 Project</a>. Automatic change detection system using aerial images. 
                    <br/>Combined OpenCV and Deep Learning to detect changes on automatic security routes.
                </p>
                <a href="/static/assets/pdf/TFM.pdf" target="_blank"><span className="date">Get the content</span></a>
            </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-car-parking"></span>
            </div>
            <div className="text pl-3">
                <span className="date">July, 2018</span>
                <h2>Parking Occupation Automatic Detection system with TensorFlow</h2>
                <span className="position">Universidad Politécnica de Madrid</span>
                <p>
                    Base of the future development of <a href="https://visiona-ip.es/servicios/avvpark/">AVVPark</a>. Combining image processing to detect and segment parking lots and Deep Learning to detect the occupancy status of each lot. 
                </p>
                <a href="/static/assets/pdf/parking_occupation_system.pdf" target="_blank"><span className="date">Get the
                        content</span></a>
            </div>
        </div>
    </div>
)

export default PublicationsSubsection;