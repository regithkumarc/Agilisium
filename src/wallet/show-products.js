import React from 'react'
import {Card,CardHeader,CardBody,Col,Row, Button } from 'reactstrap'; 
import { Table } from 'react-bootstrap'; 
import {getAllProductItem,removeproductItem} from './userFuction'
import '../App.css'
import { AiFillDelete } from "react-icons/ai";
import {FaRegEdit} from 'react-icons/fa'
import {MdAddBox} from 'react-icons/md'
import { IconContext } from "react-icons";

class ShowProducts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: getAllProductItem()
    }

    //console.log(getAllProductItem)
  }

  componentDidMount(){
    this.setState({products : getAllProductItem()})
  }

  updateProduct(product){
    console.log("update")
    this.props.history.push('/update-product') 
  }

  removeProduct(product) {
    removeproductItem(product);
    this.setState({products : getAllProductItem()});
    console.log(this.state.products);
  }


  render() {

    //const item = {notes.length ? notes : <p>Default Markup</p>}
    let items;
    if(this.state.products.length > 0){
      items = this.state.products.map(product => {
        return (
          <tr key={product.serial_no}>
            <td>{product.serial_no}</td>
              <td>{product.startDate.toString().split("T")[0]}</td>
              <td>{product.description}</td>
              <td>{product.income}</td>
              <td><center>{product.amount}</center></td>
              <td>{product.summary}</td>
            <td>
            <IconContext.Provider
                      value={{ color: 'gray', size: '25px', }} >
                      <FaRegEdit onClick={() => this.props.buttonClick(product)} />
                    </IconContext.Provider> &nbsp;
            <IconContext.Provider
                      value={{ color: 'gray', size: '25px' }} >
            <AiFillDelete onClick={() => this.removeProduct(product)} />
                    </IconContext.Provider>
                {/* <Button color="btn btn-secondary" onClick={() => this.props.buttonClick(product)}>Edit</Button>&nbsp;
                <Button color="btn btn-secondary" onClick={() => this.removeProduct(product)}>Delete</Button> */}
            </td>
          </tr>
          )
        })
    }else{
      items = <div><h4 >No Products found</h4></div>
    }

    return (
      <div>
        {/* <h4>View products</h4> */}
        {/* <div className="add_button">
              <Button onClick = {() => this.props.addView()}>Add Item</Button>
            </div> */}
<div className="add_button">
            <IconContext.Provider
                      value={{ color: 'gray', size: '25px', }} >
                      <MdAddBox onClick={() => this.props.addView()} />
                    </IconContext.Provider> &nbsp;
                    </div>
                  <Row>
                <Col>
                    {/* <Card>
                        <CardHeader>
                            <i className = "fa fa-align-justify"></i>
                        </CardHeader>
                        <CardBody> */}
<Table>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Date</th>
        <th>Description</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Summary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {items}
    </tbody>
  </Table>
  {/* </CardBody> */}
                    {/* </Card> */}
                </Col>
            </Row>
      </div>
    )
}
}
export default ShowProducts;