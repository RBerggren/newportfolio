import IntroOverview from "./components/IntroOverview";
import ModelOverview from "./components/ModelOverview";
import ContactOverview from "./components/ContactOverview";

import "./App.scss";
import React from "react";
import BoxOverview from "./components/BoxOverview";

function App() {
  return (
    <div className="app">
      <IntroOverview />
      <BoxOverview />
      <ModelOverview />
      <ContactOverview />
    </div>
  );
}

export default App;
