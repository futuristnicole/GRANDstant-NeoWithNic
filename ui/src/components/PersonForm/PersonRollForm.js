import React, { Component } from "react";
import { graphql } from "react-apollo";
import FetchRolls from '../../queries/People/allRolls';
import AddPersonRoll from '../../queries/People/AddPersonRoll';


class PersonRollForm extends Component {
    // reach router to change screens 
    // 1 list rolls
    // 2 choice person for roll
    // 3 add person to roll
}



export default graphql(AddPersonRoll)(PersonRollForm);