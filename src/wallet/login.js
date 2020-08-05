import React from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

class Login extends React.Component{

    login(e){
        console.log(e);
    }
    render() {
        return(
            <div>
                 <Form className="login-form" onSubmit = {this.login}>  
                    <h1>Login</h1>  
                    <FormGroup className="mb-3">
                        <Label>UserName</Label>
                        <Input type="text" placeholder="UserName" name="userName" id="userName" onChange = {this.onChange}/>
                    </FormGroup>  
                    <FormGroup className="mb-3">
                        <Label>Password</Label>
                        <Input type="text" placeholder="Password" name="password" id="password" onChange = {this.onChange}/>  
                    </FormGroup>  
                    <Button value = "submit">Login</Button>
                    {/* <Link to="/register" className = "nav-link">Register</Link> */}
                </Form>
            </div>
        )
    }
}
export default Login;