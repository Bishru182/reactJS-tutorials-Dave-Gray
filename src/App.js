import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ['bob', 'kevin', 'dave'];
    const int = Math.floor(Math.random() * 3);/* math.random=>produces random decimal numbers eg
                                                eg;0.00 to 0.99999
                                                 math.random()*3 => decimal numbers produced are multiplied by 3....therefore 0.0000to 2.999
                                                 math.floor => above generated numbers will be round off to the nearest whole number
                                                 SO THE OUTPUT => 0,1,2 */
    return names[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          hello {handleNameChange()}
        </p>
      </header>
    </div>
  );
}

export default App;
