import React from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import DatePicker from "react-datepicker";
import {addOrUpdateProductData} from './userFuction'
import '../index.css'
 
import "react-datepicker/dist/react-datepicker.css";
class AddProduct extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date(),
            description : "",
            income : "",
            amount : "",
            summary : "",
            enableDisable : this.props.enableDisable
        }

        this.onChange = this.onChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.cancel = this.cancel.bind(this);
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
        var date = new Date();
        var dateTime = date.getTime();
        console.log("date",dateTime)
        //new Date().toString().split("T")[0]
        const userDetails = {
            serial_no : dateTime,
            startDate : this.state.startDate,
            income : this.state.income,
            amount : this.state.amount,
            description : this.state.description,
            summary : this.state.summary
        }
        addOrUpdateProductData(userDetails);
        this.props.history.push('/show-product') 

        // console.log(this.state.startDate + " " +
        //             this.state.income + " " +
        //             this.state.amount + " " +
        //             this.state.description );

        this.setState({enableDisable : false})
    }

    cancel(e) {
        console.log("cancel")
        //this.props.history.push('/show-product')
        this.setState({enableDisable : false})
    }

    render() {
        let view
        if(this.state.enableDisable){
             view = 
            <div>
            <h4>Add Item</h4>
            <Form className="login-form" onSubmit = {this.addProduct}>    
               <FormGroup className="mb-3">
                   {/* <Label>Description</Label> */}
                   <Input type="text" 
                   placeholder="Description" 
                   name="description" 
                   id="description" 
                   value = {this.state.description} 
                   onChange = {this.onChange}/> 
               </FormGroup>  
               <FormGroup className="mb-3">
               {/* <Label>Type</Label> */}
                   <Input type="text" placeholder="Income/Expense" name="income" id="income" value = {this.state.income} onChange = {this.onChange}/>   
               </FormGroup> 
               <FormGroup className="mb-3">
                   {/* <Label>Amount</Label> */}
                   <Input type="text" placeholder="Amount" name="amount" id="amount" value = {this.state.amount} onChange = {this.onChange}/>  
               </FormGroup> 
               <FormGroup className="mb-3">
                   {/* <Label>Summary</Label> */}
                   <Input type="text" placeholder="Summary" name="summary" id="summary" value = {this.state.summary} onChange = {this.onChange}/>  
               </FormGroup> 
               {/* <label>Date</label> */}
               <FormGroup className="mb-3">
               <DatePicker
                   selected={this.state.startDate}
                   onChange={this.handleChange}
               />
               </FormGroup>
               <Button value = "submit">Add</Button>&nbsp;
               <Button onClick={this.cancel}>Cancel</Button>
           </Form>
           </div>
        }
        return(
            <div>
                {view}
            </div>
        )
    }
}
export default AddProduct;