import React, {Component} from 'react';


const time_slots = ['8', '9', '10', '11', '12', '13']
export default class SelectTimeSlot extends React.Component {
    state = {
        selectedTime: '',
        seller_id: '',
        start_time: '',
        end_time: ''
    };


    // componentDidMount() {
    //     fetch('https://workoutapi-heroku.herokuapp.com/api/showTimeSlot?seller_id=1')
    //         .then(result =>
    //             result.json()
    //         ).then(jsonResponse => {
    //         console.log(jsonResponse)
    //     })
    //
    //
    // }

    handleDropDownChange = (event) => {

        const time = event.target.value.split('-');
        const start_time = time[0];
        const end_time = time[1];

        // console.log(start_time, end_time);

        this.setState({
            start_time: time[0],
            end_time: time[1],
            isSubmitted: false,
            isError: false
        })
    };

    submitAvailability = () => {
        // console.log(`https://workoutapi-heroku.herokuapp.com/api/submitTimeSlot?seller_id=${this.state.seller_id}&start_time=${this.state.start_time}:00&end_time=${this.state.end_time}:00`)

        fetch(`http://workoutapi-heroku.herokuapp.com/api/submitTimeSlot?seller_id=${this.state.seller_id}&start_time=${this.state.start_time}:00&end_time=${this.state.end_time}:00`)
            .then(resp => {
                return resp;
            })
            .then(respJson => {
                if (respJson.status === 404) {
                    this.setState({isError: true, isSubmitted: false})

                }
                else {
                    this.setState({isSubmitted: true, isError: false})
                }
            })
    };


    render() {
        this.state.seller_id = this.props.sellerID;
        const optionItems = time_slots.map(time =>
            <option key={time}>{`${time}:00-${time}:30`}</option>
        );

        return (
            <div>
                <select onChange={this.handleDropDownChange}>
                    <option value="none" selected>None</option>
                    {optionItems}
                </select>

                <button onClick={() => this.submitAvailability()}> Submit Availability</button>
                {this.state.isSubmitted ? <label> Availability Submitted Successfully</label> : <label> </label>}
                {this.state.isError ? <label> Some Unexpected Error OR entry is already there</label> :
                    <label> </label>}
            </div>
        );
    }
}

