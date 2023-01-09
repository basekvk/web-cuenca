'use client'
function Contacto() {
    return (
      <>
        {/* Start Contact 
    ============================================= */}
        <div className="contact-form-area bg-gray default-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 office-info maps">
                {/* Start Tab Contact Info */}
                <div className="tab-nvas">
                  <ul className="nav nav-pills">
                    <li className="active">
                      <a data-toggle="tab" href="#id1" aria-expanded="true">
                        Oficina Madrid
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#id2" aria-expanded="false">
                        Oficina Cuenca
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div className="tab-content pad-all-20p txt-center-mobile">
                  <div id="id1" className="tab-pane active">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="info">
                          <p>
                            Donde estamos
                            <span>Alexima, NT 456678</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-envelope-open" />
                        </div>
                        <div className="info">
                          <p>
                            Envianos un mail
                            <h6>info@grupalsl.es</h6>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-mobile-alt" />
                        </div>
                        <div className="info">
                          <p>
                            Llámanos
                            <span>91 577 18 49</span>
                          </p>
                        </div>
                      </li>
                      <li className="google-maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981" />
                      </li>
                    </ul>
                  </div>
                  <div id="id2" className="tab-pane">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="info">
                          <p>
                            Localización
                            <span>California, TX 70240</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-envelope-open" />
                        </div>
                        <div className="info">
                          <p>
                            Enviarnos mail
                            <h6>info@grupalsl.es</h6>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-mobile-alt" />
                        </div>
                        <div className="info">
                          <p>
                            Llámanos
                            <span>91 577 18 49 </span>
                          </p>
                        </div>
                      </li>
                      <li className="google-maps">
                        <iframe src="https://maps.google.com/maps?q=calle%20malaga%204%20Nave%2039%2028343%20Valdemoro&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                      </li>
                    </ul>
                  </div>
                  <div id="id3" className="tab-pane">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="info">
                          <p>
                            Nuestra Localización
                            <span>Malina City, MN 567894</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-envelope-open" />
                        </div>
                        <div className="info">
                          <p>
                            Send Us Mail
                            <span>info@grupalsl.es</span>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-mobile-alt" />
                        </div>
                        <div className="info">
                          <p>
                            Call Us
                            <span>+123 456 6677</span>
                          </p>
                        </div>
                      </li>
                      <li className="google-maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981" />
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Tab Contact Info */}
              </div>
              <div className="col-md-6 contact-form text-light">
                <div className="content">
                  <div className="heading">
                    <h3>Contacta</h3>
                  </div>
                  <form
                    action="assets/mail/contact.php"
                    method="POST"
                    className="contact-form"
                  >
                    <div className="col-md-12">
                      <div className="row">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Nombre"
                            type="text"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email*"
                            type="email"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Teléfono"
                            type="text"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="form-group comments">
                          <textarea
                            className="form-control"
                            id="comments"
                            name="comments"
                            placeholder="Envianos tu mensaje"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <button type="submit" name="submit" id="submit">
                          Enviar Mensaje <i className="fa fa-paper-plane" />
                        </button>
                      </div>
                    </div>
                    {/* Alert Message */}
                    <div className="col-md-12 alert-notification">
                      <div id="message" className="alert-msg" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Contact */}
      </>
    );
}

export default Contacto;