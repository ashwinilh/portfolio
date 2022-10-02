import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Home></Home>
        {/* <Switch> */}
        <About></About>
        {/* </Switch> */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
