import './App.css';
import Countdown from './pages/Count.jsx';
import './assets/scss/style.scss';
import Terminos from './pages/Terminos.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Countdown} />
        <Route exact path="/services" component={Terminos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;


/*
function App() {
  return (

    <Countdown />
  );
}

export default App;
 */