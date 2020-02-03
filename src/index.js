import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // initialize state object as null; = only time we do direct assignment of state
    this.state = { lat: null, errorMessage: "" };

    // place this here, not in render() so only gets called once.
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      }, // success callback
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // render() method is obligatory in React
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
