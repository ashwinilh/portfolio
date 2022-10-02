import resume from '../../Assets/Ashwini.pdf';

function Footer() {
    return (
        <>
            <footer className='footer mt-0 text-center' style={{ padding: '25px 0px', backgroundColor: '#1a1a1a' }}>

                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home" style={{ fontSize: 30 }}><i className="fas fa-angle-up"></i></a></div>

                <div className='container mb-3 mt-4' >
                    <a href="https://github.com/ashwinilh" className="btn tooltip-test icon" title="Github" target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: 25, color: '#E8E8E8', marginRight: 10 }}><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ashwinilh12/" className="btn tooltip-test icon" title="Linkedin"
                        target="_blank" rel="noopener noreferrer" style={{ fontSize: 25, color: '#E8E8E8', marginRight: 10 }}><i className="fab fa-linkedin"></i></a>
                    <a href="mailto: ashwini.lh12@gmail.com" className="btn tooltip-test icon" title="Email" target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: 25, color: '#E8E8E8', marginRight: 10 }}><i className="fas fa-envelope"></i></a>
                    <a href={resume} className="btn tooltip-test icon" title="Resume" target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: 25, color: '#E8E8E8' }}><i className="fas fa-file-pdf"></i></a>
                    <p className="copyright mt-2 text-center" style={{ color: '#a6a6a6', marginRight: '30px', marginTop: '15px' }}>
                        © Ashwini Lalitha Huchahanumegowda 2022
                    </p>
                </div>
            </footer>
        </>
    )
}
export default Footer;