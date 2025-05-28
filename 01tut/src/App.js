
import Header from './Header';
import Content from './Content'
import Footer from "./footer";
import './index.css';



function App() {
  const name="vansh";


  return (
    <div className="App">

        {/*<img src={logo} className="App-logo" alt="logo" />*/}
      <Header/>
      <Content/>
      <Footer/>
      {/*curly brackets are used to show that this is a javascript element*/}
    </div>

  );
}

export default App;
