import React from 'react'
import "./menu.css"
const Menu = () => {
    return (
        <div className="menuBar">
            <ul className="menuUl">
                <li>
                <a href="https://www.myntra.com/shop/men">MEN</a> 
                 </li>
                <li>
                <a href="https://www.myntra.com/shop/women">WOMEN</a>
                </li>
                <li>
                <a href="https://www.myntra.com/shop/kids">KIDS</a>
                </li>
                <li>
                <a href="https://www.myntra.com/shop/home-living">HOME & LIVING</a>
                </li>
                <li>
                <a href="https://www.myntra.com/personal-care">BEAUTY</a>
                </li>
            
            </ul>
        </div>
    )
}

export default Menu
