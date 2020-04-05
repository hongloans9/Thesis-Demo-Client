import React, { Component } from 'react';
import logo from './logo.png';
import './header.css';
import NavLink from './navigation';
import LanguageSelector from './language-selector';

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid">
                    <div className="row navigation-row align-items-center">
                        <div className="col-2 col-lg-2">
                            <a className="top-brand" href="">
                                <img src={`${logo}`} alt="Logo"/>
                            </a>
                        </div>
                        <div className="col-lg-10 d-none d-lg-block">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="collapse navbar-collapse">
                                    <NavLink/>
                                </div>
                                <LanguageSelector/>
                            </nav>
                        </div>
                        <div className="col-10 d-lg-none">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <LanguageSelector/>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </nav>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <NavLink/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;