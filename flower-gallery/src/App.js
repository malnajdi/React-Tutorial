import React, {useState} from 'react';
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
  const [flowers, setFlowers] = useState([
    {
      'id': 1,
      'title': '1',
      'title_ar': '1',
      'description': '1',
      'description_ar': '1',
    },
    {
      'id': 2,
      'title': '2',
      'title_ar': '2',
      'description': '2',
      'description_ar': '2',
    },
    {
      'id': 3,
      'title': '3',
      'title_ar': '3',
      'description': '3',
      'description_ar': '3',
    }
]);

  return (
    <body class="is-preload">
      <div id="wrapper">
        <div id="main">
          <div class="inner">
            <Header />
            <Router>
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
