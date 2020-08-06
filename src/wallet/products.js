import React from 'react'
import AddProduct from './add_product'
import ShowProducts from './show-products'
import UpdateProduct from './update-product'
import '../index.css'
// import { BsFillPlusCircleFill } from "react-icons/bs";
// import { IconContext } from "react-icons";

class Products extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      editStatus: false,
      productDetails: [],
      addStatus: false,
      enableDisable: false
    }
    this.buttonView = this.buttonView.bind(this);
    this.addView = this.addView.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  buttonView(product) {
    console.log("button view")
    this.setState({ editStatus: true,
                    addStatus: false,
                    enableDisable: true })
    this.setState({ productDetails: product })
  }

  addView() {
    console.log("addview")
    //console.log(this.state.addStatus)
    this.setState({ addStatus: true,
                    editStatus: false,
                    enableDisable: true })
    //console.log(this.state.addStatus)
  }

  cancel() {
    this.setState({ enableDisable: false })
  }

  render() {
    let view;
    if (this.state.enableDisable) {
      if (this.state.editStatus) {
        view = <UpdateProduct cancel={this.cancel} productDetails={this.state.productDetails}></UpdateProduct>
      } else if (this.state.addStatus) {
        view = <AddProduct cancel={this.cancel}></AddProduct>
      }
    }
    return (
      <div className="container"><br></br>
      <h3 style = {{color : "grey",textAlign : "left",fontWeight : "bold"}}>My Wallet</h3>
        <div style = {{margin : "30px"}}>
        <div className="flex-row">
          {/* <IconContext.Provider
                    value={{ color: 'gray', size: '30px' }} >
                    <div>
                    <BsFillPlusCircleFill />
                    </div>
                  </IconContext.Provider> */}
          {view}
          <div className="flex-large">
            <div className="flex-medium">
              <ShowProducts addView={this.addView} buttonClick={this.buttonView}></ShowProducts>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
export default Products;