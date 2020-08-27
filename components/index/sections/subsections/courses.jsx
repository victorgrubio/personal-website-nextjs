const CoursesSubsection = props => (
    <div id={props.id} className={props.class}>
        <h2 className="heading">Courses</h2>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="text pl-3">
                <span className="date">2020</span>
                <h2>Cloud DevOps Nanodegree</h2>
                <span className="position">Udacity</span>
                <p>
                Nanodegree to learn about DevOps using AWS services. Learned about:
                </p>
                <ul>
                    <li>Static websites deployment using <strong>S3</strong></li>
                    <li>Template stack deployment using <strong>CloudFormation</strong></li>
                    <li><strong>Jenkins CI</strong> using EC2 instances</li>
                    <li><strong>Ansible</strong> deployments</li>
                    <li>Final capstone consisiting in an <strong>automated CI/CD pipeline using Jenkins and CloudFormation to deploy a Flask Web App</strong></li>
                </ul>
                <strong><a href="https://graduation-api.udacity.com/api/certificate/PTVDAFAZ/download">Certification</a></strong>
            </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="text pl-3">
                <span className="date">2020</span>
                <h2>FullStack: SpringBoot & Angular</h2>
                <span className="position">Chad Darby, via Udemy</span>
                <p>
                    Created a Ecommerce application using <strong>SpringBoot</strong> to build the REST API and <strong>Angular</strong> to create the frontend. <br/> Deployed using <strong>Heroku and Vercel.</strong>
                    <a href="https://ecommerce-app.victorgarciarubio.com"> Check it here! It works!</a>
                </p>
                <strong><a href="https://www.udemy.com/certificate/UC-efffd6ec-2f28-494b-be8c-6ec65534dee5/">Certification</a></strong>
            </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
            <div className="text pl-3">
                <span className="date">2017</span>
                <h2>Machine Learning</h2>
                <span className="position">Andrew Ng, via Coursera</span>
                <p>
                    Impressive course that provided me a great introduction to the Machine Learning and AI field. Deeply recommended.
                </p>
                <strong><a href="https://www.coursera.org/account/accomplishments/verify/T33RQTGFG9EF">Certification</a></strong>
            </div>
        </div>
    </div>
)
export default CoursesSubsection;