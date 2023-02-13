// import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/nav';
import { Body } from './components/body';
import { Carosal } from './components/carosel';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap"

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Carosal/>
     <Button variant="primary">Primary</Button>
     <Body/>
     <Footer/>
     
    </div>
  );
}

export default App;
