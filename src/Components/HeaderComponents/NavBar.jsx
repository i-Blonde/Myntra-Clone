
import React from 'react';
import './navBar.css';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import Auth from './Auth';

const NavBar = () => {
    return (
        <section id="navBarBlock">
            <article>
                <Logo/>
                <Menu/>
                <Search/>
                <Auth/>
            </article>
        </section>
    )
}

export default NavBar;
