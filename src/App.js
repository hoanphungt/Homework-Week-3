import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ModelDetails from './ModelDetails';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

const modelName = Object.keys(data)

class App extends Component {
  state = {}
  
  updateSelection = (event) => {
    const value = event.target.value;

    this.setState({
      name: value
    })
  }

  addModel = () => {
    data[this.state.name].name = this.state.name
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: data[this.state.name]
    })
  }
  
  render() {
    return (
      <div className="App">
        <ModelDetails models={this.props.models}/>
        <select onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          <option value={modelName[0]}>{modelName[0]} ({data["Ivel Z3"].year})</option>
          <option value={modelName[1]}>{modelName[1]} ({data["Bally Astrocade"].year})</option>
          <option value={modelName[2]}>{modelName[2]} ({data["Sord M200 Smart Home Computer"].year})</option>
          <option value={modelName[3]}>{modelName[3]} ({data["Commodore 64"].year})</option>
        </select> <button onClick={() => this.addModel()}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    models: state
  }
}

export default connect(mapStateToProps)(App);
