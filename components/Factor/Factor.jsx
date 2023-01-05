function Factor() {
    return (
    <>
  {/* Start Fun Factor 
    ============================================= */}
  <div
    className="fun-factor-area default-padding text-center bg-fixed shadow dark parallax parralax-shadow"
    data-parallax="scroll"
    style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-3 col-sm-6 item">
            <div className="fun-fact">
              <i className="fa fa-user" />
              <div className="timer" data-to={230} data-speed={5000} />
              <span className="medium">Clients Services</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 item">
            <div className="fun-fact">
              <i className="fa fa-cogs" />
              <div className="timer" data-to={89} data-speed={5000} />
              <span className="medium">Machinery</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 item">
            <div className="fun-fact">
              <i className="fa fa-graduation-cap" />
              <div className="timer" data-to={50} data-speed={5000} />
              <span className="medium">Qualified Staff</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 item">
            <div className="fun-fact">
              <i className="fa fa-clone" />
              <div className="timer" data-to={2348} data-speed={5000} />
              <span className="medium">Project Done</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Fun Factor */}
</>

    );
}

export default Factor;