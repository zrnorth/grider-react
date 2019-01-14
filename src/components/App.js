import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div class="ui container">
        <div>
          <h3>Select a language:</h3>
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag jp"
            onClick={() => this.onLanguageChange("japanese")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
