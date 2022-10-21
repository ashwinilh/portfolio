import { Col, Row } from 'react-bootstrap';
import profile from '../../Assets/images/ashwini.png';

export default function About() {
	return (
		<>
			<div id="about">
				<div className="container" style={{ padding: '20px' }}>
					<br />
					<br />
					<Row>
						<Col className="text-center">
							<h2 className="heading"><strong>About Me</strong></h2>
						</Col>
					</Row>
					<hr className="line" />
					<div className="row">
						<div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
							<div>
								<img src={profile} className="d-flex profile-img" alt="Ashwini Lalitha Huchahanumegowda" />
							</div>
						</div>

						<div className="col-md-9 col-sm-12" style={{ margin: '0 auto', padding: '0 25px' }}	>
							<p style={{ margin: '20px 10px 0 10px', textAlign: 'justify', fontSize: '1.1em', color: '	#282828' }}>
								Passionate and solutions-driven full stack web developer with a web development certificate from University of Texas Austin
								and Master's degree in Electrical Engineering from VTU, Belagavi, India.

							</p>
							<p style={{ margin: '20px 10px 0px 10px', textAlign: 'justify', fontSize: '1.1em', color: '	#282828' }}>
								Proactive in learning new technologies with core competency in full-stack development and gaining experience and knowledge
								in the field of software engineering.
							</p>
							<p style={{ margin: '20px 10px 0px 10px', textAlign: 'justify', fontSize: '1.1em', color: '	#282828' }}	>
								<strong>Contact Email: ashwini.lh12@gmail.com </strong>
							</p>
						</div>
					</div>
				</div>
			</div>
			<br />
		</>
	);
}
