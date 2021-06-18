import './App.css';
import Header from './components/header/Header';


function App() {
  const users = [
    {
      "first_name": "Mohammed",
      "last_name": "Alnajdi",
      "age": 25
    },
    {
      "first_name": "Mohammed",
      "last_name": "Alnajdi",
      "age": 25
    },
  ];

  return (
    <div className="App">
    {/* Loop Over Users List */}
    {users.length ? users.map(user => {
      return (
        <Header 
          first_name={user.first_name}
          last_name={user.last_name}
          age={user.age}
        />
      );
    }): <p>No Users</p>}
    </div>
  );
}

export default App;
