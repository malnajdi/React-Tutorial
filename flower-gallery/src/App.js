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

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/flowers/')
      .then(res => res.json())
      .then((result) => {
        setFlowers(result);
    })
  }, []);

  return (
    <body class="is-preload">
      <div id="wrapper">
        <div id="main">
          <div class="inner">
            <Router>
              <Header />
              <Switch>
              <Route exact path="/">
                  <HomePage flowers={flowers}/>
                </Route>
                
                <Route path="/flower/:id">
                  <DetailPage />
                </Route>
                
                <Route path="/login/">
                  <LoginPage />
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
    </body>
  );
}


export default App;
