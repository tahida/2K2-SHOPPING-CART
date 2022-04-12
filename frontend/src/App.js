// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Switch} from "react"

// import screen
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


// import components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar>
    
      <main>
        <Switch>
          <Route path="/" component= {HomeScreen} />
          <Route path="/product/:id" component= {ProductScreen}/>
          <Route path="/cart" component= {CartScreen}/>
        </Switch>
      </main>
      </Navbar>
    </Router>
    
  );
}

export default App;



/* <div className="App">
      <header className="App-header">
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
      </header>
    </div> */