import React, { useContext, useState } from "react";
import Main from "./Components/Main/Main";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  const [Theme, setTheme] = useState("light");
  return (
    <div className={`root ${Theme}`}>
      <Sidebar Theme={Theme} setTheme={setTheme} />
      <Main Theme={Theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
