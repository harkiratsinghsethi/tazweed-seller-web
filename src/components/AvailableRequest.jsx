import React from 'react';
import ReactTable from 'react-table';
import './common.css';


export default class AvailableRequest extends React.Component {

    constructor() {
        super();
        this.state = {data: [], loading: false, seller_id: 0, isAccepted: false, isRejected: false}
    }


    componentDidMount() {
        this.fetchAppointmentRequests()
    }

    fetchAppointmentRequests = () => {
        fetch(`https://workoutapi-heroku.herokuapp.com/api/getAppointmentRequests?seller_id=${this.state.seller_id}`)
            .then(resp => resp.json())
            .then(respJson => respJson.map(item => ({
                    SELLER_ID: item.seller_id,
                    SLOT: `${item.seller_slot_start_time}-${item.seller_slot_end_time}`,
                    BUYER_NAME: item.buyer_name
                })
            ))
            .then(response => {
                this.setState({
                    data: response,
                    loading: true
                })
            })
    };

    acceptRequest = (rowValue) => {

        const time = rowValue.row.SLOT.split('-');;
        const start_time = time[0];
        const end_time = time[1];
        const seller_id = rowValue.row.SELLER_ID;
        fetch(`https://workoutapi-heroku.herokuapp.com/api/acceptRequest?seller_id=${seller_id}&start_time=${start_time}&end_time=${end_time}`)
            .then(resp =>
                resp.json()
            )
            .then(respJson => {
                console.log(respJson.affectedRows)
            });
        this.fetchAppointmentRequests()
    };
    rejectRequest = (rowValue) => {
        const time = rowValue.row.SLOT.split('-');
        const start_time = time[0];
        const end_time = time[1];
        const seller_id = rowValue.row.SELLER_ID;
        fetch(`https://workoutapi-heroku.herokuapp.com/api/rejectRequest?seller_id=${seller_id}&start_time=${start_time}&end_time=${end_time}`)
            .then(resp =>
                resp.json()
            )
            .then(respJson => {
                console.log(respJson)
            });
        this.fetchAppointmentRequests()

    };

    render() {

        const data = this.state.data;
        const loading = this.state.loading;
        this.state.seller_id = this.props.sellerID;

        return (
            <div style={{marginTop: '20px'}}>
                <div className="row">

                    <ReactTable
                        data={data}
                        columns={[
                            {
                                Header: 'Seller ID',
                                accessor: 'SELLER_ID',
                                width: 300
                            },
                            {
                                Header: 'Requested Slot',
                                accessor: 'SLOT',
                                width: 300
                            },
                            {
                                Header: 'Approve/Reject',
                                width: 300,
                                Cell: row => (<div>
                                    <button onClick={() => this.acceptRequest(row)}>
                                        Accept
                                    </button>
                                    <button onClick={() => this.rejectRequest(row)}>
                                        Reject
                                    </button>
                                </div>)
                            },
                            {
                                Header: 'Buyer ID',
                                width: 300,
                                Cell: row => (<div>
                                    {Math.floor(Math.random() * 100)}
                                </div>)
                            }

                        ]}
                        filterable
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
            </div>
        )

    }
}
