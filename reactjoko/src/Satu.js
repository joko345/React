import React from "react";
import ReactDOM from "react-dom";

function Header() {
  return ( // Notice the closing parenthesis here
    <div>
      <h1>Function Component</h1>
    </div>
  );
}

ReactDOM.render(<Header />, document.getElementById("root"));
