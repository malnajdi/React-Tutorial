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
      'title': 'Red Flower',
      'title_ar': 'وردة حمراء',
      'description': "represent desire, strength, and passionate love. With beauty, courage and heat as its symbolism, it's no surprise that a bouquet filled with rich, red blooms knows no restraint.",
      'description_ar': 'تمثل الرغبة والقوة والحب العاطفي. مع الجمال والشجاعة والحرارة كرمز لها ، فليس من المستغرب أن باقة مليئة بالأزهار الحمراء الغنية لا تعرف أي قيود. ',
    },
    {
      'id': 2,
      'title': 'Yellow Flower',
      'title_ar': 'وردة صفراء',
      'description': 'burst with happiness. They symbolize the bonds of friendship, the taste of success and pride. Joy is also one of the meanings of this flower, as that is one of the feelings the color is said to evoke.',
      'description_ar': 'تنفجر من السعادة. إنها ترمز إلى روابط الصداقة وطعم النجاح والفخر. الفرح هو أيضًا أحد معاني هذه الزهرة ، حيث أن هذا أحد المشاعر التي يُقال إن اللون يستحضرها. ',
    },
    {
      'id': 3,
      'title': 'Blue flower',
      'title_ar': 'وردة زرقاء',
      'description': "stands for desire, love, and inspiration. It is a flower that represents the metaphysical striving for the impossible and infinite. Color blue in the flower that is for ambitious people who would like to reach for the unreachable and wouldn't leave any stone unturned to accomplish their goals.",
      'description_ar': 'يرمز إلى الرغبة والحب والإلهام. إنها زهرة تمثل الكفاح الميتافيزيقي من أجل المستحيل واللانهائي. لون الزهرة باللون الأزرق للأشخاص الطموحين الذين يرغبون في الوصول إلى من لا يمكن الوصول إليهم ولن يتركوا أي حجر دون أن يقلبوه لتحقيق أهدافهم. ',
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
