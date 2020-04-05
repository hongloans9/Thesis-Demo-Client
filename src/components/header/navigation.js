import React, { Component } from 'react';
import './header.css';

export class NavLink extends Component {
    render() {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Liikkeet</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ravintolat</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Tajoukset</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ajankohtaista</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Info</a>
                </li>
            </ul>
        );
    }
}

export default NavLink;