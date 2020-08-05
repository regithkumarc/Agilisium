import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Navbars from './navbars'
import Products from './products';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateProduct from './update-product';

class WalletRoute extends React.Component {
    render(){
        return(
            <Router>
                 <div>
                 <Navbars></Navbars>
                <Route exact path = "/" component = {Home}></Route>
                    <div class="container">
                        <Route exact path = "/home" component = {Home}></Route>
                        <Route exact path = "/update-product" component = {UpdateProduct}></Route>
                        <Route exact path = "/show-product" component = {Products}></Route>
                    </div>
                 </div>
            </Router>
        )
    }
}
export default WalletRoute;