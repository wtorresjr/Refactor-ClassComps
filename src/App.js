import React from "react";
import Clock, { ClockToggle } from "./components/Clock";
import Folder from "./components/Folder";
import Weather from "./components/Weather";
import Autocomplete from "./components/Autocomplete";
// import { render } from "@testing-library/react";
import { useState } from "react";

const names = [
  "Abba",
  "Barbara",
  "Barney",
  "Jeff",
  "Jenny",
  "Sally",
  "Sarah",
  "Xander",
];

const folders = [
  { title: "one", content: "I am the first" },
  { title: "two", content: "Second folder here" },
  { title: "three", content: "Third folder here" },
];

const App = () => {
  const [showClock, setShowClock] = useState(true);
  const toggleClock = () => setShowClock(!showClock);
  return (
    <div className="widgets">
      <Folder folders={folders} />
      <Weather />
      <ClockToggle toggleClock={toggleClock} />
      {showClock && <Clock />}
      <Autocomplete names={names} />
    </div>
  );
};

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showClock: true
//     };
//   }

//   render () {
//     return (
//       <div className="widgets">
//         <Folder folders={folders} />
//         <Weather />
//         <ClockToggle toggleClock={this.toggleClock} />
//         {this.state.showClock && <Clock />}
//         <Autocomplete names={names} />
//       </div>
//     );
//   }
// }
