import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext; // remember: contextType is a magic name

  render() {
    const text = this.context === "english" ? "Submit" : "登録";
    return <button className="ui button primary">{text}</button>;
  }
}
export default Button;
