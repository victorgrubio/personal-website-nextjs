const SkillsSubsection = props => (
    <div id={props.id} className={props.class}>
        <h2 className="heading">Skills</h2>
        <div className="row progress-circle mb-5">
            <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">Python</h2>
                    <p>3+ years using <a href="https://www.python.org/" target="_blank">Python</a> in most of my projects.</p>
                    <p>Extensive knowledge of third-party libraries and testing with Pytest.</p>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">
                        Deep Learning<br/>
                        TF & Keras
                    </h2>
                    <p>2+ years of experience using <a href="https://www.tensorflow.org/" target="_blank">TF</a> and <a href="http://keras.io/" target="_blank">Keras</a> to create multiple Deep Learning models.</p>
                    <p>Dataset generation, training and testing extense knowledge.</p>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">
                        Computer Vision<br/>
                        OpenCV
                    </h2>
                    <p>2+ years using <a href="https://opencv.org/" target="_blank">OpenCV</a> for multiple projects.</p>
                    <p>Video/streaming processing and serving along with complex image-level algorithms.</p>
                </div>
            </div>
        </div>
        <div className="row progress-circle mb-5">
            <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">Docker</h2>
                    <p>2+ years using <a href="https://www.docker.com/" target="_blank">Docker</a> for virtualization and productization of algorithms.</p>
                    <p>Optimization of images as a main objective. <a href="https://kubernetes.io/es/" target="_blank">Kubernetes</a> beginner level.</p>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">Git</h2>
                    <p>3+ years developing in collaborative projects.</p>
                    <p><a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow" target="_blank">Git Flow</a> branch workflow used in daily basis</p>
                    <p>Managed projects with several submodules and significant git complexity</p>
                </div>
            </div>
            
            <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">API Development</h2>
                    <p>2+ years developing backends for APIs using <a href="https://palletsprojects.com/p/flask/" target="_blank">Flask</a>.</p>
                    <p><a href="https://www.openapis.org/" target="_blank">OpenAPI</a> v2 and v3 API generation. Documentation using Swagger</p>
                </div>
            </div>
        </div>
        <div className="row progress-circle mb-5">
            <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">CI/CD</h2>
                    <p>1+ year using <a href="https://docs.gitlab.com/ee/ci/" target="_blank">Gitlab CI/CD</a> pipeline alongside <a href="https://www.docker.com/" target="_blank">Docker</a> images to automate testing code process.</p>
                    <p>Beginner level in <a href="https://jenkins.io/" target="_blank">Jenkins</a>.</p>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">Agile Methodologies</h2>
                    <p>1+ year using <a href="https://scrum.org/" target="_blank">Scrum Methodology.</a></p>
                    <p>Versatily in terms of tools: Trello, Jira, Asana, Slack and more</p>
                </div>
            </div>
            <div className="col-lg-4 mb-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">Databases</h2>
                    <p>1+ year using <a href="https://www.mongodb.com/" target="_blank"> MongoDB</a> in most of my projects.</p>
                    <p>SQL databases used with frequency in Website Development.</p>
                </div>
            </div>
        </div>
    </div>
)

export default SkillsSubsection;