function HeaderTop() {
  const mail = "info@grupalsl.es"
    return (
      <>
        {/* Start Header Top 
    ============================================= */}
        <div className="top-bar-area bg-dark text-light">
          <div className="container">
            <div className="row">
              <div className="topbar-info">
                <div className="top-address col-md-8 col-sm-9">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-mobile-alt" />
                        680 394 539
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-envelope-open" />
                        {mail.toLowerCase()}
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Calle Málaga 4, Nave 29, 28343 Valdemoro
                    </li>
                  </ul>
                </div>
                <div className="topbar-social col-md-4 col-sm-3">
                  <ul className="text-right">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default HeaderTop;