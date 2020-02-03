import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // initialize state object as null; = only time we do direct assignment of state
    this.state = { lat: null };

    // place this here, not in render() so only gets called once.
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position), // success callback
      err => console.log(err)
    );
  }

  // render() method is obligatory in React
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
