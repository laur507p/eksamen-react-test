import React, { useState } from "react";

import "./App.css";
import Animation from "./components/Animation";
import Queue from "./components/Queue";
import Order from "./components/Order";

function App() {
  return (
    <div className="App">
      <Animation />
      <Queue />
      <Order />
    </div>
  );
}

export default App;
