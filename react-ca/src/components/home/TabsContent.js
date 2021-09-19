import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function TabsContent() {
    return (
        <Container>
            <div className="d-md-block d-sm-none">
                <Tabs defaultActiveKey="First" id="uncontrolled-tab-example">
                    <Tab eventKey="First" title="First">
                        <Row>
                            <Col>
                                <img src="../Tab Images/tab-1.jpg" alt="image1" ></img>
                            </Col>
                            <Col>
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                    venenatis pharetra leo laoreet a. Nullam non eleifend justo, a 
                                    ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
                                    Sed condimentum mattis rhoncus. 
                                </p>
                                <div>SHARE <i class="fab fa-vimeo-v"></i> <i class="fab fa-youtube"></i></div>
                            </Col>
                        </Row>                        
                    </Tab>
                    <Tab eventKey="Second" title="Second">
                        <Row>
                            <Col>
                                <img src="../Tab Images/tab-2.jpg" alt="image1" ></img>
                            </Col>
                            <Col>
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                    venenatis pharetra leo laoreet a. Nullam non eleifend justo, a 
                                    ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
                                    Sed condimentum mattis rhoncus. 
                                </p>
                                <div>SHARE <i class="fab fa-vimeo-v"></i> <i class="fab fa-youtube"></i></div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Third" title="Third">
                        <Row>
                            <Col>                        
                                <img src="../Tab Images/tab-3.jpg" alt="image1" ></img>
                            </Col>
                            <Col>
                                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
                                    venenatis pharetra leo laoreet a. Nullam non eleifend justo, a 
                                    ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
                                    Sed condimentum mattis rhoncus. 
                                </p>
                                <div>SHARE <i class="fab fa-vimeo-v"></i> <i class="fab fa-youtube"></i></div></Col>
                        </Row>
                    </Tab>
                </Tabs>
            </div>
        </Container>
    )
}

export default TabsContent
