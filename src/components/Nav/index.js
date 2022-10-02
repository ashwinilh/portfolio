function Nav() {
  return (
    <>
      <div id="home">
        <div className="container-fluid nav-color">
          <nav>
            <ul className="navbar nav justify-content-center fixed-top navbar-dark nav-color">
              <li className="nav-item">
                <a className="nav-link" style={{ color: 'white' }} href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#about" style={{ color: 'white' }}>
                  About Me
                </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#portfolio" style={{ color: 'white' }}>
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
export default Nav;