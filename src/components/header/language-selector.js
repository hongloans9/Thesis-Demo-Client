import React, { Component } from 'react';
import './header.css';

export class LanguageSelector extends Component {
    render() {
        return (
            <div className="language-selector-wrapper">
                <span className="header-search-icon">
                    {/* <img src={`${searchIcon}`} alt="search" /> */}
                    <i className="fa fa-search"></i>
                </span>
                <a href="#" className="language-item selected"> FI </a>
                <a href="#" className="language-item"> EN </a>
            </div>
        );
    }
}

export default LanguageSelector;