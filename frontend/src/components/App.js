import React from "react";

import axios from "axios";

class App extends React.Component {
  onPost = async () => {
    const response = await axios.get("http://localhost:4000/");
    document.querySelector("p").innerHTML = response.data;
  };

  render() {
    return (
      <React.Fragment>
        <button type='submit' onClick={this.onPost}>
          Get
        </button>
        <p></p>
      </React.Fragment>
    );
  }
}

export default App;
