import React, {useState} from 'react';
import './App.css';
import Header from './components/header/Header';


// Function Based State
function App() {
  const [firstName, setFirstName] = useState("Mohammed");

  function handleNameChange() {
    setFirstName("Abdullah");
  }

  return (
    <div>
      <p>{firstName}</p>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
}

// Class Based States
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       first_name: "Mohammed",
//     }
//     this.handleNameChange = this.handleNameChange.bind(this);
//   }

//   handleNameChange() {
//     this.setState({first_name: 'Abdullah'});
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.first_name}</p>
//         <button onClick={this.handleNameChange}>Change Name</button>
//       </div>
//     );
//   }
// }

// function App() {
//   const users = [
//     {
//       "first_name": "Mohammed",
//       "last_name": "Alnajdi",
//       "age": 25
//     },
//     {
//       "first_name": "Mohammed",
//       "last_name": "Alnajdi",
//       "age": 25
//     },
//   ];

//   return (
//     <div className="App">
//     {/* Loop Over Users List */}
//     {users.length ? users.map(user => {
//       return (
//         <Header 
//           first_name={user.first_name}
//           last_name={user.last_name}
//           age={user.age}
//         />
//       );
//     }): <p>No Users</p>}
//     </div>
//   );
// }

export default App;
