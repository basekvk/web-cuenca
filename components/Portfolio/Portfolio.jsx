function Portfolio() {
    return (
      <>
        {/* Start Portfolio
    ============================================= */}
        <div className="portfolio-area default-padding-top">
          <div className="container">
            <div className="row">
              <div className="site-heading text-center">
                <div className="col-md-8 col-md-offset-2">
                  <h2>Nuestros Trabajos</h2>
                  <p>
                    Aquí puedes acceder a algunos de los trabajos de pocería que hemos realizado. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-items-area">
            <div className="row">
              <div className="col-md-12 portfolio-content">
                {/* <div className="mix-item-menu active-theme text-center">
                  <button className="active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".development">Development</button>
                  <button data-filter=".design">Design</button>
                  <button data-filter=".photography">Photography</button>
                  <button data-filter=".branding">branding</button>
                  <button data-filter=".video">video</button>
                </div> */}
                {/* End Mixitup Nav*/}
                <div className="row less-margin magnific-mix-gallery">
                  <div
                    id="portfolio-grid"
                    className="portfolio-items hover-effect"
                  >
                    <div className="pf-item branding photography">
                      <div className="portfolio-effet">
                        <div className="thumb">
                          <img src="assets/img/800x800.png" alt="Thumb" />
                          <div className="overlay">
                            <h4>Business</h4>
                            <a
                              href="assets/img/800x800.png"
                              className="item popup-link"
                            >
                              <i className="fa fa-eye" />
                            </a>
                            <a href="#">
                              <i className="fa fa-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pf-item video development">
                      <div className="portfolio-effet">
                        <div className="thumb">
                          <img src="assets/img/800x800-dark.png" alt="Thumb" />
                          <div className="overlay">
                            <h4>Business</h4>
                            <a
                              href="https://www.youtube.com/watch?v=KVzCfWWzGyA"
                              className="popup-youtube"
                            >
                              <i className="fa fa-play" />
                            </a>
                            <a href="#">
                              <i className="fa fa-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pf-item design photography">
                      <div className="portfolio-effet">
                        <div className="thumb">
                          <img src="assets/img/800x800.png" alt="Thumb" />
                          <div className="overlay">
                            <h4>Business</h4>
                            <a
                              href="assets/img/800x800.png"
                              className="item popup-link"
                            >
                              <i className="fa fa-eye" />
                            </a>
                            <a href="#">
                              <i className="fa fa-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pf-item branding video">
                      <div className="portfolio-effet">
                        <div className="thumb">
                          <img src="assets/img/800x800-dark.png" alt="Thumb" />
                          <div className="overlay">
                            <h4>Business</h4>
                            <a
                              href="https://www.youtube.com/watch?v=KVzCfWWzGyA"
                              className="popup-youtube"
                            >
                              <i className="fa fa-play" />
                            </a>
                            <a href="#">
                              <i className="fa fa-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pf-item design photography">
                      <div className="portfolio-effet">
                        <div className="thumb">
                          <img src="assets/img/800x800-dark.png" alt="Thumb" />
                          <div className="overlay">
                            <h4>Business</h4>
                            <a
                              href="assets/img/800x800-dark.png"
                              className="item popup-link"
                            >
                              <i className="fa fa-eye" />
                            </a>
                            <a href="#">
                              <i className="fa fa-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pf-item branding design development">
                      <div className="portfolio-effet">
                        <div className="thumb">
                          <img src="assets/img/800x800.png" alt="Thumb" />
                          <div className="overlay">
                            <h4>Business</h4>
                            <a
                              href="assets/img/800x800.png"
                              className="item popup-link"
                            >
                              <i className="fa fa-eye" />
                            </a>
                            <a href="#">
                              <i className="fa fa-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pf-item branding photography">
                      <div className="portfolio-effet">
                        <div className="thumb">
                          <img src="assets/img/800x800-dark.png" alt="Thumb" />
                          <div className="overlay">
                            <h4>Business</h4>
                            <a
                              href="assets/img/800x800-dark.png"
                              className="item popup-link"
                            >
                              <i className="fa fa-eye" />
                            </a>
                            <a href="#">
                              <i className="fa fa-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pf-item video development">
                      <div className="portfolio-effet">
                        <div className="thumb">
                          <img src="assets/img/800x800.png" alt="Thumb" />
                          <div className="overlay">
                            <h4>Business</h4>
                            <a
                              href="https://www.youtube.com/watch?v=KVzCfWWzGyA"
                              className="popup-youtube"
                            >
                              <i className="fa fa-play" />
                            </a>
                            <a href="#">
                              <i className="fa fa-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio */}
      </>
    );
}

export default Portfolio;