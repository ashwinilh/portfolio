import Type from "./Type";
import resume from '../../Assets/Ashwini.pdf';

function Home() {
  return (
    <div className="text-center home-section justify-content-center text-white">
      <h1 style={{ paddingBottom: 15 }} className="heading">
        Hi There!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h1>
      <h1 className="heading-name">
        I'm
        <strong className="main-name"> Ashwini Lalitha Huchahanumegowda</strong>
      </h1>
      <p className="home-description"><Type /></p>
      <div className='container mb-3 mt-4' >
        <a href="https://github.com/ashwinilh" className="btn tooltip-test icon" title="Github" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 25, color: '#E8E8E8', marginRight: 10 }}><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/ashwinilh12/" className="btn tooltip-test icon" title="Linkedin"
          target="_blank" rel="noopener noreferrer" style={{ fontSize: 25, color: '#E8E8E8', marginRight: 10 }}><i className="fab fa-linkedin"></i></a>
        <a href="mailto: ashwini.lh12@gmail.com" className="btn tooltip-test icon" title="Email" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 25, color: '#E8E8E8', marginRight: 10 }}><i className="fas fa-envelope"></i></a>
        <a href={resume} className="btn tooltip-test icon" title="Resume" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 25, color: '#E8E8E8' }}><i className="fas fa-file-pdf"></i></a>
      </div>
      <p className="scrolldown">
        <a href="#about"><i className="fas fa-angle-down"></i></a>
      </p>
    </div>
  );
}

export default Home;
