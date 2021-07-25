import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import './Header.css';

const Header = () => {
    const [ t, i18n ] = useTranslation();

    return (
        <header id="header">
            <a href="/" class="logo"><strong>{t('title')}</strong></a>
            <ul class="icons">
                <li><a href="" className="icon solid fa-sign-out-alt"><span className="label">Logout</span></a></li>
                <li><a href="" className="icon solid fa-sign-in-alt"><span className="label">Login</span></a></li>
                <li>
                { i18n.language === 'en' && <button onClick={() => {
                    i18n.changeLanguage('ar');
                }}>ar</button>}
                { i18n.language === 'ar' && <button onClick={() => {
                    i18n.changeLanguage('en');
                }}>en</button>}
                </li>
            </ul>
        </header>
    );
}

export default Header;