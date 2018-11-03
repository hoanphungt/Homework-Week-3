import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ModelDetails.css'

export default class ModelDetails extends Component {
    static propTypes = {
        models: PropTypes.array.isRequired        
    }

    render() {
        return (
            <div className="modelDetails">
                {this.props.models.map(model => (
                    <ul>
                        <li>Name: {model.name}</li>
                        <li>Manufacturer: {model.manufacturer}</li>
                        <li>Year: {model.year}</li>
                        <li>Origin: {model.origin}</li>
                    </ul>
                ))}

            </div>
        )
    }
}