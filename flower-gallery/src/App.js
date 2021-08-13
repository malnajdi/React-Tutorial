import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/Header.js';
import HomePage from './pages/home/HomePage.js';
import DetailPage from './pages/detail/DetailPage.js';
import LoginPage from './pages/login/LoginPage.js';
import './App.css';


const App = () => {
  const [flowers, setFlowers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState();

  const handleError = response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }

  useEffect(() => {
      fetch('http://127.0.0.1:8000/api/flowers/', {
        method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
          },
      })
      .then(handleError)
      .then(result => {
        setFlowers(result);
      },
      (error) => {
        console.log(error);
      });
  }, [token])

  return (
    <div className="is-preload">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <Router>
            <Header loggedIn={loggedIn} setToken={setToken}/>
              <Switch>
                
                <Route exact path="/">
                  <HomePage flowers={flowers} token={token}/>
                </Route>
                
                <Route path="/flower/:id">
                  <DetailPage token={token}/>
                </Route>
                
                <Route path="/login/">
                  <LoginPage 
                    setToken={setToken}
                    setLoggedIn={setLoggedIn}
                    loggedIn={loggedIn}/>
                </Route>

              </Switch>
            </Router>
          </div>
	      </div>
      </div>
      <script src="{% static 'js/jquery.min.js' %}"></script>
      <script src="{% static 'js/browser.min.js' %}"></script>
      <script src="{% static 'js/breakpoints.min.js' %}"></script>
      <script src="{% static 'js/util.js' %}"></script>
      <script src="{% static 'js/main.js' %}"></script>
    </div>
  );
}


export default App;
