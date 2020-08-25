const EducationSubsection = props => (
    <div id={props.id} className={props.class}>
        <h2 className="heading">Education</h2>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-brain"></span>
            </div>
            <div className="text pl-3">
                <span className="date">2018 - 2019</span>
                <h2>Master's Degree in Big Data & Machine Learning</h2>
                <span className="position">Universidad Politécnica de Madrid</span>
                <p>
                    Learned core concepts for Machine Learning and Deep Learning development such as Time Series Analysis, Statistical Modelling, Optimization, Image processing and Reinforcement Learning.
                </p>
            </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-diploma"></span>
            </div>
            <div className="text pl-3">
                <span className="date">2014 - 2018</span>
                <h2>Bachelor's Degree in Telecommunications Engineering</h2>
                <span className="position">Universidad Politécnica de Madrid</span>
                <p>
                    Oriented to Signal Processing and specialized in Image & Sound Processing.<br/>
                    Final's degree project about parking occupancy detection, lead to my experience at Visiona IP. Proposed to mention of honor.
                </p>
            </div>
        </div>
    </div>
)
export default EducationSubsection;