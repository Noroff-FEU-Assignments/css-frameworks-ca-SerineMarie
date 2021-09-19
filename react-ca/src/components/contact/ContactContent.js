import React from 'react';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card'


function ContactContent() {
    return (
        
        <Container>
           <Row>
               <div className="col-lg order-lg-2">
                   <Col sm={12}>
                       <ListGroup.Item><i class="fas fa-envelope"></i></ListGroup.Item>
                       <ListGroup.Item><i class="fas fa-phone"></i></ListGroup.Item>
                       <ListGroup.Item><i class="fas fa-map-marker-alt"></i></ListGroup.Item> 
                    </Col>
                </div>
                <div className="col-lg order-lg-3">
                   <Col sm={12}>
                       <ListGroup.Item>hello@yay.com</ListGroup.Item>
                       <ListGroup.Item>123 456 7890</ListGroup.Item>
                       <ListGroup.Item>123 Some Street</ListGroup.Item>
                       <ListGroup.Item className="contact_item">Somewhere</ListGroup.Item>
                       <ListGroup.Item className="contact_item">Some City</ListGroup.Item>
                       <ListGroup.Item className="contact_item">1000</ListGroup.Item>
                    </Col>
                </div>
                <h1 className="contact_heading">Submit your details</h1>
                <div className="col-lg order-lg-1">
                    <Col sm={12}>
                        <div className="form-container">
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                                <Form.Group>
                                    <label htmlFor="basic-url">Website</label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon3">https://</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={6} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button bg="dark" variant="submit-btn" type="submit" size="lg">Submit</Button></div>
                            </Form>
                        </div>
                    </Col>
                </div>
                {/* <Col sm={12} lg={6}>
      
                    
                        <ol><i class="fas fa-envelope"></i> hello@yay.com</ol>
                        <ol><i class="fas fa-phone"></i> 123 456 7890</ol>
                        <ol><i class="fas fa-map-marker-alt"></i> 123 Some Street</ol>
                        <li>Somewhere</li>
                        <li>Some City</li>
                        <li>1000</li>
               
                </Col> */}
            </Row>

            
           
        </Container>
       
    )
}

export default ContactContent