import Image from 'next/image'

function Header() {
    return (
      <>
        {/* Header 
    ============================================= */}
        <header>
          {/* Start Navigation */}
          <nav className="navbar navbar-default navbar-sticky bootsnav">
            <div className="container">
              {/* Start Header Navigation */}
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fa fa-bars" />
                </button>
                <a className="navbar-brand" href="index.html">
                  <Image
                  width={250}
                  height={150}
                    src="/assets/img/crater-logo.png"
                    className="logo logo-display"
                    alt="Logo"
                  />
                </a>
              </div>
              {/* End Header Navigation */}
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="navbar-menu">
                <ul
                  className="nav navbar-nav navbar-right"
                  data-in="#"
                  data-out="#"
                >
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Home
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="index.html">Home Version One</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Version Two</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Version Three</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Version Four</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">Quienes Somos</a>
                  </li>
                  <li>
                    <a href="services.html">Servicios</a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Projects
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="projects.html">Proyectos</a>
                      </li>
                      <li>
                        <a href="projects-details.html">Projects Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-single-left-sidebar.html">
                          Single Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-single-right-sidebar.html">
                          Single Right Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="404.html">Eror 404</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="contact.html">Contacto</a>
                      </li>
                      <li>
                        <a href="projects.html">Projects</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">contact</a>
                  </li>
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </div>
          </nav>
          {/* End Navigation */}
        </header>
        {/* End Header */}
      </>
    );
}

export default Header;