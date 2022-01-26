import React from "react";

import TestElements from "./TestElements/TestElements";
import TestEvents from "./TestEvents/TestEvents";
import TestAsync from "./TestAsync/TestAsync";

const App = () => {
  return (
    <div>
      <TestElements />
      <TestEvents />
      <TestAsync />
    </div>
  );
};

export default App;
