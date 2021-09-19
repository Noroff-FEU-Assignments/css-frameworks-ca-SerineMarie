import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function AccordionContent() {
    return (
        <Container>
            <div className="accordion_container">
        <Accordion defaultActiveKey="0" className="d-md-none d-sm-block">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    First
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis 
                        pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. 
                        Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        <img src="../Tab Images/tab-1.jpg" alt="image1" ></img>
                        <div className="some">SHARE <i class="fab fa-vimeo-v"></i> <i class="fab fa-youtube"></i></div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Second
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis 
                        pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. 
                        Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        <img src="../Tab Images/tab-2.jpg" alt="image1" ></img>
                        <div>SHARE <i class="fab fa-vimeo-v"></i> <i class="fab fa-youtube"></i></div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Third
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis 
                        pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. 
                        Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                        <img src="../Tab Images/tab-3.jpg" alt="image1" ></img>
                        <div>SHARE <i class="fab fa-vimeo-v"></i> <i class="fab fa-youtube"></i></div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </div>
        </Container>

        
    )
}

export default AccordionContent
