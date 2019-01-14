import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderButtonWithColor = color => {
    return (
      <button className={`ui ${color} button`}>
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "登録")}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    // The context consumer gets passed a callback with one argument;
    // it'll get called with the value of the item currently in the context.
    // You do it this way, the more complicated way, when you have multiple contexts.

    return (
      <ColorContext.Consumer>
        {color => this.renderButtonWithColor(color)}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
