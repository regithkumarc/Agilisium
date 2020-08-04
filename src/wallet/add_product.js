import React from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import DatePicker from "react-datepicker";
import {addProductDetails,reloadProductDataCount} from './userFuction'
 
import "react-datepicker/dist/react-datepicker.css";
class AddProduct extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date(),
            description : "",
            income : "",
            amount : "",
            summary : ""
        }

        this.onChange = this.onChange.bind(this);
        this.addProduct = this.addProduct.bind(this);

    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleChange = date => {
        this.setState({
          startDate: date
        });
      };

    addProduct(e){
        const userDetails = {
            serial_no : reloadProductDataCount() + 1,
            startDate : this.state.startDate,
            income : this.state.income,
            amount : this.state.amount,
            description : this.state.description,
            summary : this.state.summary
        }
        addProductDetails(userDetails);
        // console.log(this.state.startDate + " " +
        //             this.state.income + " " +
        //             this.state.amount + " " +
        //             this.state.description );
    }
    render() {
        return(
            <div>
                 <Form className="add-form" onSubmit = {this.addProduct}>  
                    <FormGroup className="mb-3">
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                    </FormGroup>  
                    <FormGroup className="mb-3">
                        <Label>Description</Label>
                        <Input type="text" 
                        placeholder="Description" 
                        name="description" 
                        id="description" 
                        value = {this.state.description} 
                        onChange = {this.onChange}/>  
                    </FormGroup>  
                    <FormGroup className="mb-3">
                        <Label>Income/Expense</Label>
                        <Input type="text" placeholder="Income/Expense" name="income" id="income" value = {this.state.income} onChange = {this.onChange}/>  
                    </FormGroup> 
                    <FormGroup className="mb-3">
                        <Label>Amount</Label>
                        <Input type="text" placeholder="Amount" name="amount" id="amount" value = {this.state.amount} onChange = {this.onChange}/>  
                    </FormGroup> 
                    <FormGroup className="mb-3">
                        <Label>Summary</Label>
                        <Input type="text" placeholder="Summary" name="summary" id="summary" value = {this.state.summary} onChange = {this.onChange}/>  
                    </FormGroup> 
                    <Button value = "submit">Add</Button>
                </Form>
            </div>
        )
    }
}
export default AddProduct;