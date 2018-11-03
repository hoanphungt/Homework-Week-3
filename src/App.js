import React, { Component } from 'react';
import './App.css';

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
console.log(modelName)

class App extends Component {
  render() {
    return (
      <div className="App">
        <select>
          <option value="">-- pick a model --</option>
          <option value={modelName[0]}>{modelName[0]} ({data["Ivel Z3"].year})</option>
          <option value={modelName[1]}>{modelName[1]} ({data["Bally Astrocade"].year})</option>
          <option value={modelName[2]}>{modelName[2]} ({data["Sord M200 Smart Home Computer"].year})</option>
          <option value={modelName[3]}>{modelName[3]} ({data["Commodore 64"].year})</option>
        </select>
      </div>
    );
  }
}

export default App;
