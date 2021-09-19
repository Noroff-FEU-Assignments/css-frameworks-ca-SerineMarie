import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function NewsContent() {
    return (
        <Container>
            
            <h1>News</h1>
            
            <Pagination>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
            </Pagination>
            <Row>
                <Col>
                    <Card>
                        <div className="card-content">
                            <Card.Img variant="top" src="../News images/news-1.jpg" alt="image1" />
                            <Card.Body>
                                <Card.Title>Nunc porttitor vel</Card.Title>
                                <Card.Text>
                                Nunc malesuada eget est fringilla dapibus.
                                </Card.Text>
                                <Button class="btn btn-primary">More</Button>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card>
                    <div className="card-content">
                        <Card.Img variant="top" src="../News images/news-2.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button class="btn btn-primary">More</Button>
                        </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <div className="card-content">
                        <Card.Img variant="top" src="../News images/news-3.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button class="btn btn-primary">More</Button>
                        </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card>
                    <div className="card-content">
                        <Card.Img variant="top" src="../News images/news-4.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button class="btn btn-primary">More</Button>
                        </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card>
                    <div className="card-content">
                        <Card.Img variant="top" src="../News images/news-5.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button class="btn btn-primary">More</Button>
                        </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card>
                    <div className="card-content">
                        <Card.Img variant="top" src="../News images/news-6.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button class="btn btn-primary">More</Button>
                        </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card>
                    <div className="card-content">
                        <Card.Img variant="top" src="../News images/news-7.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button class="btn btn-primary">More</Button>
                        </Card.Body>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card>
                    <div className="card-content">
                        <Card.Img variant="top" src="../News images/news-8.jpg" />
                        <Card.Body>
                            <Card.Title>Nunc porttitor vel</Card.Title>
                            <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                            </Card.Text>
                            <Button class="btn btn-primary">More</Button>
                        </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Pagination>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item >{4}</Pagination.Item>
            </Pagination>

            

        </Container>
    )
}

export default NewsContent