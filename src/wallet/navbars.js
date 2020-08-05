import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../App.css'

class Navbars extends React.Component {
    render() {

        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <Link to="/show-product" className="nav-link">My Wallet</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default withRouter(Navbars);