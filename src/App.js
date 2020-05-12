import React from "react";
import DayList from "./components/day-list/day-list";
import { GlobalStyles } from "./global-styles";
import Lines from "./components/lines/lines";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <DayList />
      <Lines />
    </div>
  );
}

export default App;
