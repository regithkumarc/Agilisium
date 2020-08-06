import React from 'react'
import { Col, Row, Label } from 'reactstrap';
import { Table } from 'react-bootstrap';
import { getAllProductItem, removeproductItem } from './userFuction'
import '../App.css'
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from 'react-icons/fa'
import { MdAddBox } from 'react-icons/md'
import { IconContext } from "react-icons";

class ShowProducts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: getAllProductItem(),
      totalIncome: 0,
      totalExpense: 0,
      totalBalance: 0
    }

    //console.log(getAllProductItem)
    this.numberFormat = this.numberFormat.bind(this);
    this.getAllCounts = this.getAllCounts.bind(this);
    this.removeConfirm = this.removeConfirm.bind(this);
  }

  componentDidMount() {
    this.getAllCounts();
  }

  getAllCounts(){
    let totalBalance = 0;
    let totalIncome = 0;
    let totalExpense = 0;
    for (let i = 0; i < getAllProductItem().length; i++) {
      if (getAllProductItem()[i].income === "Income") {
        totalBalance = Number(totalBalance) + Number(getAllProductItem()[i].amount);
        totalIncome = Number(totalIncome) + Number(getAllProductItem()[i].amount);
      } else {
        totalBalance = Number(totalBalance) - Number(getAllProductItem()[i].amount);
        totalExpense = Number(totalExpense) + Number(getAllProductItem()[i].amount);
      }
    }
    console.log("total balance", totalBalance);
    console.log("total income", totalIncome);
    console.log("total expense", totalExpense);
    this.setState({
      products: getAllProductItem(),
      totalIncome: totalIncome,
      totalExpense: totalExpense,
      totalBalance: totalBalance
    })
  }

  updateProduct(product) {
    console.log("update")
    this.props.history.push('/update-product')
  }

  removeProduct(product) {
    this.removeConfirm(product); 
  }

  removeConfirm(product) {
    var deletePopup = window.confirm("Do you want to delete this item?");
    console.log(deletePopup);
    if (deletePopup) {
      removeproductItem(product);
      this.setState({ products: getAllProductItem() });
      console.log(this.state.products);
      this.getAllCounts();
    }
  }

  numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(value);

  render() {

    //const item = {notes.length ? notes : <p>Default Markup</p>}
    let items;
    if (this.state.products.length > 0) {
      items = this.state.products.map((product,index) => {
        return (
          <tr key={product.serial_no}>
            {/* <td>{index+1}</td> */}
            <td>{product.serial_no}</td>
            <td>{product.startDate.toString().split("T")[0]}</td>
            <td>{product.description}</td>
            <td>{product.income}</td>
            <td><center>{this.numberFormat(product.amount)}</center></td>
            {/* <td>{product.summary}</td> */}
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
    } else {
      items = <div><center>No rows found</center></div>
    }

    //let styles;
    // if(this.state.totalBalance < 0){
    //   styles = style{{color : "red"}}
    // }

    return (
      <div>
        {/* <h4>View products</h4> */}
        {/* <div className="add_button">
              <Button onClick = {() => this.props.addView()}>Add Item</Button>
            </div> */}
        <div className="add_button">
        <Label>Balance :  </Label>&nbsp;&nbsp;
          <Label style = {{fontWeight : "bold"}}>{this.numberFormat(this.state.totalBalance)} </Label>&nbsp;&nbsp; 
          <Label>Income :  </Label>&nbsp;&nbsp;
          <Label style = {{color:"green",fontWeight : "bold"}}>{this.numberFormat(this.state.totalIncome)} </Label>&nbsp;&nbsp;
          <Label>Expense(s) :  </Label>&nbsp;&nbsp; 
           <Label style = {{color:"red",fontWeight : "bold"}}>{this.numberFormat(this.state.totalExpense)} </Label>&nbsp;&nbsp; 
           <span className="add_button"></span>
           <IconContext.Provider 
            value={{ color: 'gray', size: '25px', }} >
            <MdAddBox onClick={() => this.props.addView()} />
          </IconContext.Provider> &nbsp;
        </div>
        <div className="add_button">
          
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
                  {/* <th>S.No</th> */}
                  <th>Item ID</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Amount</th>
                  {/* <th>Summary</th> */}
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