import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List";
import Test from "./Components/Test";
import cat01 from "../src/Components/Assets/Picture/cat01.webp";
import cat02 from "../src/Components/Assets/Picture/cat02.jpg";
import cat03 from "../src/Components/Assets/Picture/cat03.png";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <List />
      {/* <Test image={[cat01, cat02, cat03]} /> */}
    </div>
  );
}

export default App;
