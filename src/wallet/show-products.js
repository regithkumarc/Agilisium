import React from 'react'
import {Card,CardHeader,CardBody,Col,Row, Button } from 'reactstrap'; 
import { Table } from 'react-bootstrap'; 
import {getAllProductItem,removeproductItem} from './userFuction'

class ShowProducts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: getAllProductItem()
    }

    //console.log(getAllProductItem)
  }

  removeproduct(product) {
    removeproductItem(product);
    this.setState({products : getAllProductItem()});
    console.log(this.state.products);
  }

  render() {

    const items = this.state.products.map(product => {
      return (
        <tr key={product.serial_no}>
          <th scope="row">{product.serial_no}</th>
          <td>{product.serial_no}</td>
            <td>{product.startDate}</td>
            <td>{product.description}</td>
            <td>{product.income}</td>
            <td>{product.amount}</td>
            <td>{product.summary}</td>
          <td>
            <div style={{width:"110px"}}>
              <Button color="danger" onClick={() => this.removeproduct(product)}>Delete</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <div>
                  <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className = "fa fa-align-justify"></i>
                        </CardHeader>
                        <CardBody>
<Table>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Date</th>
        <th>Description</th>
        <th>Income/Expense</th>
        <th>Amount</th>
        <th>Summary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {items}
    </tbody>
  </Table>
  </CardBody>
                    </Card>
                </Col>
            </Row>
      </div>
    )
}
}
export default ShowProducts;