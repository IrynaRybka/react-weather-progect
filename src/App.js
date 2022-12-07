import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer className="creator">
          Coded by Iryna Rybka {" "}
          <a
            href="https://github.com/IrynaRybka/react-weather-progect"
            target="_blank"
            rel="noopener noreferrer"
          >
          GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
