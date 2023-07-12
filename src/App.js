import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1> 📚 Dictionary 📚</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          {" "}
          This App was coded by Tracy Vonk and is{" "}
          <a
            href="https://github.com/TracyV8/version2-dictionary"
            target="_blank"
            rel="nonreferrer"
          >
            {" "}
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
