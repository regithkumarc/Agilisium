import React from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import DatePicker from "react-datepicker";
import { addOrUpdateProductData } from './userFuction'

class UpdateProduct extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.productDetails)
        console.log(this.props.productDetails.startDate)
        this.state = {
            updateSerial_no: this.props.productDetails.serial_no,
            updateStartDate: new Date(),
            updateIncome: this.props.productDetails.income,
            updateAmount: this.props.productDetails.amount,
            updateDescription: this.props.productDetails.description,
            updateSummary: this.props.productDetails.summary
        }

        //console.log(this.state.startDate)
        this.onChange = this.onChange.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.dropdownChange = this.dropdownChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChange = date => {
        this.setState({
            updateStartDate: date
        });
    };

    dropdownChange(e) {
        this.setState({updateIncome : e.target.value})
    }
    updateProduct() {
        const productDetails = {
            serial_no: this.state.updateSerial_no,
            startDate: this.state.updateStartDate,
            income: this.state.updateIncome,
            amount: this.state.updateAmount,
            description: this.state.updateDescription,
            summary: this.state.updateSummary
        }
        addOrUpdateProductData(productDetails)
        console.log("Product Updated Successfully")
    }
    render() {
        return (
            <div>
                <h6>Update Product</h6>
                <Form className="login-form" onSubmit={this.updateProduct}>
                    <FormGroup className="mb-3">
                        {/* <Label>Description</Label> */}
                        <Input type="text"
                            placeholder="Description"
                            name="updateDescription"
                            id="updateDescription"
                            value={this.state.updateDescription}
                            onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        {/* <Label>Income/Expense</Label>
                        <Input type="text"
                            placeholder="Income/Expense"
                            name="updateIncome"
                            id="updateIncome"
                            value={this.state.updateIncome}
                            onChange={this.onChange} /> */}
                                                        <div class="form-group">
                                <select class="form-control" value = {this.state.updateIncome} name="updateIncome" id="updateIncome" onChange={this.dropdownChange}>
                                    <option value="Income">Income</option>
                                    <option value="Expense">Expense</option>
                                </select>
                            </div>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        {/* <Label>Amount</Label> */}
                        <Input type="text"
                            placeholder="Amount"
                            name="updateAmount"
                            id="updateAmount"
                            value={this.state.updateAmount}
                            onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        {/* <Label>Summary</Label> */}
                        <Input type="text"
                            placeholder="Summary"
                            name="updateSummary"
                            id="updateSummary"
                            value={this.state.updateSummary}
                            onChange={this.onChange} />
                    </FormGroup>
                    {/* <label>Date</label> */}
                    <FormGroup className="mb-3">
                        <DatePicker
                            selected={this.state.updateStartDate}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button value="submit">Update</Button>
                </Form>
            </div>
        )
    }
}
export default UpdateProduct;