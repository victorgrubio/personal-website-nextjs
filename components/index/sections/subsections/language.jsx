const LanguageSubsection = props => (
    <div id={props.id} className={props.class}>
        <h2 className="heading">Languages</h2>
        <div className="row">
            <div className="col-md-10 animate-box">
                <div className="progress-wrap ftco-animate">
                    <h3>Spanish</h3>
                    <div className="progress">
                        <div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
                            aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                            <span>Native</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate"></div>
        <div className="row">
            <div className="col-md-10 animate-box">
                <div className="progress-wrap ftco-animate">
                    <h3>English</h3>
                    <div className="progress">
                        <div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
                            aria-valuemin="0" aria-valuemax="100" style={{width:90+'%'}}>
                            <span>C1 - Professional</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default LanguageSubsection;