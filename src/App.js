import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import RequestContext from './utils/RequestContext';
import Dashboard from './components/Dashboard';
import RequestDetail from './pages/RequestDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get('./data.json')
      .then((res) => setRequests(res.data.productRequests))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <RequestContext.Provider value={{ requests }}>
        <Router>
          <Switch>
            <Route path="/requests/:id" component={RequestDetail} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Router>
      </RequestContext.Provider>
    </div>
  );
}

export default App;
