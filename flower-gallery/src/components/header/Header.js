import React, { useEffect } from 'react'
import './Header.css';

const Header = () => {
    return (
        <header id="header">
            <a href="/" class="logo"><strong>Flower Gallary</strong></a>
            <ul class="icons">
                <li><a href="" class="icon solid fa-sign-out-alt"><span class="label">Logout</span></a></li>
                <li><a href="" class="icon solid fa-sign-in-alt"><span class="label">Login</span></a></li>
                <li>
                <button>ar</button>
                <button>en</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;