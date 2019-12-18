import React from 'react';
import SelectTimeSlot from './SelectTimeSlot'
import AvailableRequest from "./AvailableRequest";

const button = {
    margin: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    background: '#1890ff',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
    transition: '.3s background',
    '&:hover': {
        background: '#40a9ff'
    }
};

export default class SelectSellerId extends React.Component {
    constructor() {
        super();
        this.state = {
            seller_id: 0,
            not_found: false,
            showButtons: false,
            showTimeSlots: false,
            showAvailableRequests: false
        }
    }

    handleHeaderNameChange = (event) => {
        this.setState({seller_id: event.target.value});
    };

    handleSubmit = (event) => {
        fetch(`https://workoutapi-heroku.herokuapp.com/api/findSellerID?seller_id=${this.state.seller_id}`)
            .then(result =>
                result.json()
            )
            .then(jsonLoad => {
                if (jsonLoad.length > 0) {
                    this.setState({
                        showButtons: true, not_found: false,
                        showTimeSlots: false, showAvailableRequests: false

                    })

                } else {
                    this.setState({
                        not_found: true,
                        showButtons: false,
                        showAvailableRequests: false,
                        showTimeSlots: false
                    })
                }

            });
        event.preventDefault();
    };
    showTimeSlot = () => {
        this.setState({
            showTimeSlots: true,
            showAvailableRequests: false,
        })
    };
    showAvailableRequests = () => {
        this.setState({
            showAvailableRequests: true,
            showTimeSlots: false

        })
        // this.handleSubmit();
    }

    render() {

        return (
            <div style={{textAlign: 'center'}}>

                <form onSubmit={this.handleSubmit}>
                    <input type="number" className="col-75" placeholder="Enter Your Seller ID"
                           onChange={this.handleHeaderNameChange}
                           required/>
                    <div className="col-25">
                        <input type="submit" value="Submit"/>

                    </div>

                </form>

                {this.state.not_found ? <label>Seller ID not found</label> : <label></label>
                }
                {
                    this.state.showButtons ?
                        <div>
                            <button style={button} onClick={() => this.showTimeSlot()}> Set Availability</button>
                            <button style={button} onClick={() => this.showAvailableRequests()}> Check Appointment
                                Requests
                            </button>
                        </div> : <label></label>

                }
                {this.state.showTimeSlots ? <SelectTimeSlot sellerID={this.state.seller_id}/> : <label></label>}
                {this.state.showAvailableRequests ? <AvailableRequest sellerID={this.state.seller_id}/> :
                    <label></label>}


            </div>

        )
    }
}
