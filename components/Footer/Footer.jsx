function Footer() {
    return (
      <>
        {/* Start Footer 
    ============================================= */}
        <footer className="default-padding text-light">
          <div className="container">
            <div className="row">
              <div className="f-items fv1">
                <div className="col-md-4 item">
                  <div className="f-item">
                    <h4>Sobre Nosotros</h4>
                    <p>
                      Empresa de poceros con más de 25 años de experiencia.Ofrecemos los mejores precios con las mejores calidades en todos nuestros servicios.Llámanos sin compromiso y compruébalo.
                    </p>
                    <div className="address">
                      <ul>
                        <li>
                          <i className="fas fa-home" />{" "}
                          <span>www.grupalsl.es</span>
                        </li>
                        <li>
                          <i className="fas fa-envelope-open" />{" "}
                          <span>info@grupalsl.es</span>
                        </li>
                        <li>
                          <i className="fas fa-map-marked-alt" />{" "}
                          <span>Calle Málaga 4, Nave 39, 28343 Valdemoro</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="f-item link full">
                    <h4>Servicios</h4>
                    <ul>
                      <li>
                        <a href="#">Obras de Pocería</a>
                      </li>
                      <li>
                        <a href="#">Construction Zanjas</a>
                      </li>
                      <li>
                        <a href="#">Inspecciones con Cámara</a>
                      </li>
                      <li>
                        <a href="#">Poceros en Cuenca</a>
                      </li>
                      <li>
                        <a href="#">Inspecciones en Cuenca</a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="f-item business-hours">
                    <h4>Horario</h4>
                    <p>
                     Atendemos 24 horas tus urgencias.<br/>
                     Llámanos sin compromiso.
                    </p>
                    <ul>
                      <li>
                        Oficina: Lunes-Viernes <span>9h. a 17h.</span>
                      </li>
                      <li>
                        Urgencias: <span>24 horas</span>
                      </li>
                    
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Footer Bottom */}
            <div className="footer-bottom">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-6">
                    <p>
                      © Copyright 2023 By <a href="https://www.grupalsl.es">Grupal SL</a>
                    </p>
                  </div>
                  <div className="col-md-6 footer-bottom-menu text-right">
                    <ul>
                      <li>
                        <a href="terms-conditions.html">Términos de Uso</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Politica de Privacidad</a>
                      </li>
                      <li>
                        <a href="contact-1.html">Contacto</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End Footer Bottom */}
          </div>
        </footer>
        {/* End Footer */}
      </>
    );
}

export default Footer;