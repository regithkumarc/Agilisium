import React from 'react'
import AddProduct from './add_product'
import ShowProducts from './show-products'
class Products extends React.Component{
    render() {
        return(
            <div className="container">
               <div className="flex-row">
                 <div className="flex-large">
                 <h3>Add Product</h3>
                   <AddProduct></AddProduct>
               </div>
             <div className="flex-large">
                 <h3>View Product</h3>
                  <ShowProducts></ShowProducts>
                </div>
              </div>
             </div>
        )
    }
}
export default Products;