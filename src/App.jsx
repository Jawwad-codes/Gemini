import React from "react";
import Main from "./Components/Main/Main";
import Sidebar from "./Components/Sidebar/Sidebar";
const App = () => {
  return (
    <div className="root">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
