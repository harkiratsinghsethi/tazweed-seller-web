import React from 'react';

import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';

export default class SelectTimeSlot extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        fetch('https://workoutapi-heroku.herokuapp.com/api/showTimeSlot?seller_id=1')
            .then(result =>
                result.json()
            ).then(jsonResponse => {
            console.log(jsonResponse)
        })


    }

    render() {
        return (<div style={{marginTop:'20px'}}>
                <ReactTimeslotCalendar
                    initialDate={moment([2017, 3, 24]).format()}
                    lastDate={moment([2017, 3, 24]).format()}
                    timeslots={[
                        ['9', '10'],
                        ['10', '11:30:00 A'],
                    ]}

                />
            </div>
        );
    }
}

