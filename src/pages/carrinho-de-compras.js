import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from 'react-bootstrap/Table'

//Criar array de objetos dos produtos

export const Carrinho = () => (
    <Container style={{ height: "670px" }}>
        <p>Carrinho de compras</p>
        <Row>
            <Col xs={7} style={{ background: 'green' }}>
    <Table bordered hover>
      <thead>
        <tr>
          <th>Produto</th>
          <th>título</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src=""/>
          </td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>
            <img src=""/>
          </td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>
            <img src=""/>
          </td>
          <td>@twitter</td>
          <td></td>
        </tr>
      </tbody>
    </Table>

    </Col>
    <Col>Shopping Details</Col>
        </Row>
    </Container>
)