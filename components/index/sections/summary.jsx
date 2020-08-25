const SummarySection = () => (
  <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
    <div className="container-fluid px-md-5">
      <div className="row d-md-flex align-items-center">
        <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 shadow">
              <div className="text">
                <strong className="number"> 3 </strong>
                <span>Publications</span>
            </div>
          </div>
        </div>
        <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 shadow">
            <div className="text">
              <strong className="number">7</strong>
              <span>Complete Projects</span>
            </div>
          </div>
        </div>
        <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 shadow">
            <div className="text">
                <strong className="number" style={{display: 'inline-flex'}}>+ 3 </strong>
                <span>Years of Experience</span>
            </div>
          </div>
        </div>
        <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
          <div className="block-18 shadow">
            <div className="text">
              <strong className="number" style={{display: 'inline-flex'}}>+ <strong className="number" data-number="10000"> 0 </strong></strong>
              <span>Lines of Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SummarySection