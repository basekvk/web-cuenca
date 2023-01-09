import HeaderTop from "./../components/HeaderTop/HeaderTop";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";

function Error404() {
  return (
    <>
      <HeaderTop />
      <Header />
      {/* Start 404 
    ============================================= */}
      <div className="error-page-area text-center default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h1>404</h1>
              <h2>Lo sentimos, página no encontrada</h2>
              <p>
                La página que buscas no existe o ha sido borrada. Por favor
                pulsa el botón de abajo para volver al inicio.
              </p>
              <a className="btn btn-dark border btn-md" href="/">
                Volver a Inicio
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End 404 */}
      <Footer />
    </>
  );
}

export default Error404;
