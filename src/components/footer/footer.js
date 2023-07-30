import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const Footer = () => (
    <Container fluid style={{ height: '58px', display: 'flex', alignItems: 'center', justifyContent:  'center',background: 'black', color: 'white' }}>
        <Row>
            <Col>
                &copy; 2023 nome da loja
            </Col>
        </Row>
    </Container>    
)