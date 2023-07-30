import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Main = () => (
    <Container>
      <Row className="text-center" style={{ paddingTop: '40px' }}>
        <Col style={{ paddingBottom: '20px' }}>
            <h2>Teste</h2>
        </Col>
      </Row>
      <Row style={{ marginBottom: '34px' }}>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.lojadetemas.com.br/img/clean-store-responsive-fashion-1.jpg" />
                <Card.Body>
                    <Card.Title className="text-center">Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="success" style={{ display: 'block', margin: '0 auto' }}>Comprar</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.lojadetemas.com.br/img/clean-store-responsive-fashion-1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" style={{ display: 'block', margin: '0 auto' }}>Comprar</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.lojadetemas.com.br/img/clean-store-responsive-fashion-1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" style={{ display: 'block', margin: '0 auto' }}>Comprar</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.lojadetemas.com.br/img/clean-store-responsive-fashion-1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" style={{ display: 'block', margin: '0 auto' }}>Comprar</Button>
                </Card.Body>
            </Card>
        </Col>
       
    </Row>
    <Row>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.lojadetemas.com.br/img/clean-store-responsive-fashion-1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.lojadetemas.com.br/img/clean-store-responsive-fashion-1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.lojadetemas.com.br/img/clean-store-responsive-fashion-1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.lojadetemas.com.br/img/clean-store-responsive-fashion-1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
)