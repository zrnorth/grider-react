import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <h3>Select a language:</h3>
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag jp"
          onClick={() => this.context.onLanguageChange("japanese")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
