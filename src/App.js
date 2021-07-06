import './App.css';
import Control from './components/Control';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Control />
      <Main />
    </div>
  );
}

export default App;
