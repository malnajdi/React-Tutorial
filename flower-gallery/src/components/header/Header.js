import React from 'react'
import './Header.css';

// [1] : Function Based Component
function Header (props) {
    return (
        <h2>
            Welcome {props.firstName} <br/>
                    {props.lastName} Your Age is  
                    <strong> {props.age}</strong>
        </h2>
    );
}

// [2] : Class Based Component
// class Header extends React.Component {
//     render() {
//         return (
//             <h2>Class Based Header</h2>
//         );
//     }
// }

export default Header;