import React from "react";
import Card from "./components/users";

class App extends React.Component {
  render() {
    return <div className="app">
      <h1>Users</h1>
      <Card/>
    </div>
  }
}

export default App;