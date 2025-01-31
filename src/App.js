import logo from './logo.svg';
import './App.css';

function App() {
  const name= "dave"/* variable declaration */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see changes.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name}</p>{/* this is how expression with a value is used */}
      </header>
    </div>
  );
}

export default App;
