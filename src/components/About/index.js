import { Col, Row } from 'react-bootstrap';
import profile from '../../Assets/images/ashwini.png';

export default function About() {
	return (
		<>
			<div id="about">			
				<div className="container" style={{ padding: '20px' }}>
				<br/>
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

						<div className="col-md-9 col-sm-12" style={{ margin: '0 auto', padding: '0 25px'}}	>
							<p style={{ margin: '20px 10px 0 10px', textAlign: 'justify', fontSize: '1.1em', color:'	#282828' }}>
								Passionate full stack web developer 								
							</p>
							<p
								style={{ margin: '20px 10px 0px 10px', textAlign: 'justify', fontSize: '1.1em', color:'	#282828'}}>
								
							</p>
							<p style={{ margin: '20px 10px 0px 10px', textAlign: 'justify', fontSize: '1.1em', color:'	#282828' }}	>
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
