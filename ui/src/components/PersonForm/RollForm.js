import React, { Component } from "react";
import { graphql } from "react-apollo";
import FetchRolls from '../../queries/People/allRolls';
import AddRoll from '../../queries/People/CreateRoll';


class RollCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { name: ''};
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {    name: this.state.name, 
                            type: this.state.type, 
                             },
            refetchQueries: [{ query: FetchRolls }]
        });
        // need to send user back to Rolllist after added name
    }
    render() {
        return (
            <div>
                {/* <Link to="/Rolllist">Back</Link> */}
                <h3>Add Roll</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Roll name</label>
                    <input 
                        onChange={event => this.setState({ name: event.target.value })}
                        value={this.state.name}
                    />
                        <br></br>
                        <br></br>
                    <label>Roll type</label>
                    <input 
                        onChange={event => this.setState({ type: event.target.value })}
                        value={this.state.type}
                    />
                        <br></br>
                        <br></br>
                    
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}



export default graphql(AddRoll)(RollCreate);