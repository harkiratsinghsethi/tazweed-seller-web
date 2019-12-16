import React from 'react';

export default class SelectSellerId extends React.Component {
    constructor() {
        super();
        this.state = {seller_id: 0}
    }

    handleHeaderNameChange = (event) => {
        console.log(event.target.value);
        this.setState({seller_id: event.target.value});
    };

    handleSubmit = (event) => {
        console.log('****', this.state.seller_id);
        // console.log(`https://workoutapi-heroku.herokuapp.com/api/findSellerID?seller_id=${this.state.seller_id}`);
        fetch(`https://workoutapi-heroku.herokuapp.com/api/findSellerID?seller_id=${this.state.seller_id}`,
            {
                method: "GET",
                headers: {
                    "access-control-allow-origin": "*",
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(result => {
                console.log(result)
            });
        event.preventDefault();
    };

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="col-75" onChange={this.handleHeaderNameChange}
                       required/>
                <div className="col-25">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
}
