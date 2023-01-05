function Slides() {
    return (
      <>
      
        {/* Start Banner 
    ============================================= */}
        <div className="banner-area">
          <div
            id="sofolbanner"
            className="carousel slide animate_text carousel-fade"
            data-ride="carousel"
          >
            {/* Wrapper for slides */}
            <div className="carousel-inner text-center text-light carousel-zoom">
              <div className="item active">
                <div
                  className="slider-thumb bg-fixed"
                  style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
                />
                <div className="box-table shadow dark">
                  <div className="box-cell">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                          <div className="content">
                            <h3 data-animation="animated slideInDown">
                              We are the
                            </h3>
                            <h1 data-animation="animated slideInLeft">
                              Best Choice for you
                            </h1>
                            <p data-animation="animated slideInUp">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Distinctio nobis aliquid sed id
                              saepe. Quasi totam, dolorem repellendus
                              cupiditate! Quos eaque, voluptas doloribus
                            </p>
                            <a
                              data-animation="animated slideInUp"
                              className="btn btn-light border effect btn-sm"
                              href="#"
                            >
                              Learn more
                            </a>
                            <a
                              data-animation="animated slideInUp"
                              className="btn btn-theme effect btn-sm"
                              href="#"
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="slider-thumb bg-fixed"
                  style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
                />
                <div className="box-table shadow dark">
                  <div className="box-cell">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                          <div className="content">
                            <h3 data-animation="animated slideInDown">
                              We are the
                            </h3>
                            <h1 data-animation="animated slideInLeft">
                              Best Choice for you
                            </h1>
                            <p data-animation="animated slideInUp">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Distinctio nobis aliquid sed id
                              saepe. Quasi totam, dolorem repellendus
                              cupiditate! Quos eaque, voluptas doloribus
                            </p>
                            <a
                              data-animation="animated slideInUp"
                              className="btn btn-light border effect btn-sm"
                              href="#"
                            >
                              Learn more
                            </a>
                            <a
                              data-animation="animated slideInUp"
                              className="btn btn-theme effect btn-sm"
                              href="#"
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="slider-thumb bg-fixed"
                  style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
                />
                <div className="box-table shadow dark">
                  <div className="box-cell">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                          <div className="content">
                            <h3 data-animation="animated slideInDown">
                              We are the
                            </h3>
                            <h1 data-animation="animated slideInLeft">
                              Best Choice for you
                            </h1>
                            <p data-animation="animated slideInUp">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Distinctio nobis aliquid sed id
                              saepe. Quasi totam, dolorem repellendus
                              cupiditate! Quos eaque, voluptas doloribus
                            </p>
                            <a
                              data-animation="animated slideInUp"
                              className="btn btn-light border effect btn-sm"
                              href="#"
                            >
                              Learn more
                            </a>
                            <a
                              data-animation="animated slideInUp"
                              className="btn btn-theme effect btn-sm"
                              href="#"
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Wrapper for slides */}
            {/* Left and right controls */}
            <a
              className="left carousel-control"
              href="#sofolbanner"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#sofolbanner"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/* End Banner */}
      </>
    );
}

export default Slides;