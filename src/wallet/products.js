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
      addStatus: false
    }
    this.buttonView = this.buttonView.bind(this);
    this.addView = this.addView.bind(this);
  }

  buttonView(product) {
    this.setState({ editStatus: true })
    this.setState({ productDetails: product })
  }

  addView() {
    //console.log(this.state.addStatus)
    this.setState({ addStatus: true })
    //console.log(this.state.addStatus)
  }

  render() {
    let view;
    if (this.state.editStatus) {
      view = <UpdateProduct productDetails={this.state.productDetails}></UpdateProduct>
    } else if (this.state.addStatus) {
      view = <AddProduct enableDisable={true}></AddProduct>
    }
    return (
      <div className="container"><br></br>
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
    )
  }
}
export default Products;