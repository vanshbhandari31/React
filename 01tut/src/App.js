import logo from './logo.svg';
import './App.css'
import header from './header';

function App() {
  const name="vansh";
  const handleNameChange=()=>{
    const names=["Vansh","Bhandari","Rahul","Samajpati"]
    const int=Math.floor(Math.random()*4)
    return names[int]
  }
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <header/>
        <p>
          Hello World!
          Hello {name}
          Hello {handleNameChange()}
        </p>
      </header>
      {/*curly brackets are used to show that this is a javascript element*/}
    </div>
  );
}

export default App;
