import React from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import DatePicker from "react-datepicker";
import { addOrUpdateProductData } from './userFuction'
import '../index.css'
import "react-datepicker/dist/react-datepicker.css";

class AddProduct extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date(),
            description: "",
            income: "Income",
            amount: "",
            summary: "",
            enableDisable: this.props.enableDisable,
            inputValidation: false
        }

        this.onChange = this.onChange.bind(this);
        this.cancel = this.cancel.bind(this);
        this.dropdownChange = this.dropdownChange.bind(this);
        this.validation = this.validation.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            inputValidation: this.validation()
        })
    }

    validation() {
        let flag = false;
        if (!this.state.description === "" &&
            !this.state.amount === "") {
            flag = true;
        } else {
            flag = false;
        }
        return flag;
    }

    dropdownChange(e) {
        console.log("e", e.target.value)
        this.setState({ income: e.target.value })
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    cancel(e) {
        console.log("cancel")
        //this.props.history.push('/show-product')
        this.setState({ enableDisable: false })
    }

    handleSubmit = (event) => {
        console.log(event)
        const form = event.currentTarget;
        console.log(form.checkValidity())
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({ inputValidation: true });
        } else {
            var date = new Date();
            var dateTime = date.getTime();
            console.log("date", dateTime)
            //new Date().toString().split("T")[0]
            const userDetails = {
                serial_no: dateTime,
                startDate: this.state.startDate,
                income: this.state.income,
                amount: this.state.amount,
                description: this.state.description,
                summary: this.state.summary
            }
            addOrUpdateProductData(userDetails);
            this.props.history.push('/show-product')

            // console.log(this.state.startDate + " " +
            //             this.state.income + " " +
            //             this.state.amount + " " +
            //             this.state.description );

            this.setState({ enableDisable: false })
            //this.setState({inputValidation : true});
        }


    };

    render() {
        let view =
        <div>
            <h6>Add Item</h6>
            <Form novalidate className="login-form" onSubmit={this.handleSubmit}>
                <FormGroup className="mb-3">
                    {/* <Label>Description</Label> */}
                    <Input type="text" required
                        placeholder="Description"
                        name="description"
                        id="description"
                        value={this.state.description}
                        onChange={this.onChange} />
                </FormGroup>
                <FormGroup className="mb-3">
                    {/* <Label>Type</Label> */}
                    <div class="form-group">
                        <select class="form-control" id="income" onChange={this.dropdownChange}>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>
                    {/* <Input type="text" placeholder="Income/Expense" name="income" id="income" value = {this.state.income} onChange = {this.onChange}/>    */}
                </FormGroup>
                <FormGroup className="mb-3">
                    {/* <Label>Amount</Label> */}
                    <Input type="number" required placeholder="Amount" name="amount" id="amount" value={this.state.amount} onChange={this.onChange} />
                </FormGroup>
                {/* <FormGroup className="mb-3">
                    <Label>Summary</Label>
                    <Input type="text" placeholder="Summary" name="summary" id="summary" value={this.state.summary} onChange={this.onChange} />
                </FormGroup> */}
                {/* <label>Date</label> */}
                <FormGroup className="mb-3">
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button value="submit">Add</Button>&nbsp;&nbsp;
                <Button onClick={this.props.cancel}>Cancel</Button>
            </Form>
        </div>
        return (
            <div>
                {view}
            </div>
        )
    }
}
export default AddProduct;