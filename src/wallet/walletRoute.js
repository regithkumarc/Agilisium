import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import Navbars from './navbars'
import Products from './products';
import 'bootstrap/dist/css/bootstrap.min.css';

class WalletRoute extends React.Component {
    render(){
        return(
            <Router>
                 <div>
                 <Navbars></Navbars>
                <Route exact path = "/" component = {Login}></Route>
                    <div class="container">
                        <Route exact path = "/login" component = {Login}></Route>
                        <Route exact path = "/show-product" component = {Products}></Route>
                    </div>
                 </div>
            </Router>
        )
    }
}
export default WalletRoute;