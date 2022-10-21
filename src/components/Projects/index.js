import { Col, Container, Row } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import { projects } from './ProjectList';

function Projects() {

    return (
        <>
            <section id="projects">
                <br />
                <br />
                <br />
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h2 className="heading"><strong>Projects</strong></h2>
                        </Col>
                    </Row>
                    <hr className="line" />
                    <br />
                    <Row>
                        {projects.map((project) => (
                            <ProjectCards key={project.id} project={project}></ProjectCards>
                        ))}
                    </Row>
                </Container>
                <br />
                <br />
            </section>
        </>
    );
}

export default Projects;