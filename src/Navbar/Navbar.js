import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">Res Navbar</div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
                <a href="">Github</a>
                <a href="">Stackoverflow</a>
                <a href="">LinkedIn</a>
                <a href="">Codepen</a>
                <a href="">JsFiddle</a>
            </div>
        </div>
    );
}

export default Navbar;
