import React, { Component } from 'react';
import '../App.css';

class Cnames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countriesNames: require('bc-countries').getAllCountries(),
        }
    }
    render() {

        return (

            <select name='pais' value={this.props.pais} onChange={this.props.onChange} >
                {
                    this.state.countriesNames.map(
                        (names, index) => <option key={index} > {names.name} </option>

                    )}
            </select>
        )
    }
}

export default Cnames;