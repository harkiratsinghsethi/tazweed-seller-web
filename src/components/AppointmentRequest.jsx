import React from 'react';

export default class AppointmentRequest extends React.Component {
    constructor() {
        super();
    }

    handleHeaderNameChange = (event) => {
        this.setState({headerValue: event.target.value});
    }

    render() {
        return (<input type="text" className='' value='Enter Seller ID' onChange={this.handleHeaderNameChange} required/>
        )
    }
}
