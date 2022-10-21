import { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';

function ProjectCards(props) {

    // Set show for modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Col lg={4} style={{ padding: '20px', backgroundColor: 'transparent' }}>
            <Card className="shadow card-style" style={{
                borderRadius: '10px',
                backgroundColor: '#A4D2ED',
                textAlign: 'center',
                border: '2.7px solid #f4a8a4'
            }} >
                <Card.Img variant="top" src={props.project.imageUrl} />
                <Card.Body style={{
                    paddingTop: '0'
                }}>
                    <Card.Title style={{
                        fontSize: '1.3em',
                        color: '#444444'
                    }}>
                        <strong>{props.project.title}</strong>
                    </Card.Title>
                    <Card.Text style={{
                        fontSize: '1.2em',
                        textAlign: 'left',
                        color: '#505050',
                        padding: '15px'
                    }}>
                        {props.project.description}
                    </Card.Text>
                    <div style={{
                        padding: '15px'
                    }} >
                        <div style={{
                            float: 'left'
                        }}>
                            <Button className="btnColor" variant='success' onClick={handleShow}	>
                                View Details
                            </Button>
                            <Modal show={show} onHide={handleClose} size="lg">
                                <Modal.Header closeButton>
                                    <Modal.Title className="modelHeading">
                                        <h3>
                                            <strong>{props.project.title}</strong>
                                        </h3>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{ fontSize: '18px' }}>
                                    <h3>
                                        <strong>Description: </strong>
                                    </h3>
                                    <p>
                                        {props.project.details}
                                    </p>
                                    <h3>
                                        <strong>Technology Used: </strong>
                                    </h3>
                                    <p>
                                        {props.project.technology}
                                    </p>
                                </Modal.Body>
                            </Modal>
                        </div>
                        <div style={{
                            float: 'right'
                        }}>
                            <a style={{
                                minWidth: '60px',
                                margin: '15px 10px 5px',
                            }} href={props.project.appUrl} className="tooltip-test" title="Deployed Website" target="_blank" rel="noopener noreferrer" >
                                <i className='fab fa-chrome social-link' style={{
                                    fontSize: '30px'
                                }}></i>
                            </a>
                            <a style={{
                                minWidth: '60px',
                                margin: '15px 10px 5px',
                            }} href={'https://github.com/' + props.project.id} className="tooltip-test" title="GitHub Repo" target="_blank" rel="noopener noreferrer">
                                <i className='fab fa-github social-link' style={{
                                    fontSize: '30px'
                                }}></i>
                            </a>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProjectCards