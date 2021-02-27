import React, { useState } from 'react';
import './Toolbar.css';
import logo from '../../bluestacks.svg';

const Toolbar = () => {

    return (
        <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__logo"><a href="#" ><img src={logo } alt="logo"/></a></div>
        </nav>
    </header>
    )
}
    

export default Toolbar;