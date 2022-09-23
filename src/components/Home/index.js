
function Home() {
  return (
    <div className= "text-center home-section justify-content-center text-white">
        <h1 className="home-name">I'm Ashwini Lalitha Huchahanumegowda</h1>
        <p className="home-description">Full Stack Web Developer</p>
        <div className ='container mb-3 mt-4' >
            <a href="https://github.com/ashwinilh" className="btn tooltip-test icon" title="Github" target="_blank" rel="noopener noreferrer"
                style={{fontSize:25, color:'#E8E8E8', marginRight:10}}><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/ashwinilh12/" className="btn tooltip-test icon" title="Linkedin"
                target="_blank" rel="noopener noreferrer" style={{fontSize:25,color:'#E8E8E8',marginRight:10}}><i className="fab fa-linkedin"></i></a>
            <a href="mailto: ashwini.lh12@gmail.com" className="btn tooltip-test icon" title="Email" target="_blank" rel="noopener noreferrer"
                style={{fontSize:25, color:'#E8E8E8', marginRight:10}}><i className="fas fa-envelope"></i></a>
        </div>
        <p className="scrolldown">
          <a href="#about"><i className="fas fa-angle-down"></i></a>
        </p>
      </div>  
  );
}

export default Home;
