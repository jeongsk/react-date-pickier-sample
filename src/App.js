import React from "react";

import "./App.css";

import AirbnbReactDates from "./AirbnbReactDates";
import GpblReactDayPicker from "./GpblReactDayPicker";
import Hacker0x01ReactDatepicker from "./Hacker0x01ReactDatepicker";
import Y0cReactDatepicker from "./Y0cReactDatepicker";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #bfbfbf",
        margin: 10,
        padding: 10,
        borderRadius: 10
      }}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <div>
      <Card>
        <AirbnbReactDates />
      </Card>
      <Card>
        <Hacker0x01ReactDatepicker />
      </Card>
      <Card>
        <GpblReactDayPicker />
      </Card>
      <Card>
        <Y0cReactDatepicker />
      </Card>

      <div style={{ height: 500 }} />
    </div>
  );
}

export default App;
