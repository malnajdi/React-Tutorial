import React, { useEffect } from 'react'
import './Header.css';

// [1] : Function Based Component
function Header (props) {

    useEffect(() => {
        console.log(`First Render`);
    }, []);

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

//     componentDidMount(){
//         console.log('Did Mount');
//     }

//     componentDidUpdate(){
//         console.log('Did Update');
//     }

//     componentWillUnmount(){
//         console.log('Will Unmount');
//     }


//     render() {
//         return (
//             <h2>Class Based Header</h2>
//         );
//     }
// }

export default Header;