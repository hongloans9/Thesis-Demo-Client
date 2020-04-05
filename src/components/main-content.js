import React, { Component } from 'react';
import './offers.css';
import OffersList from './offers-list';

export class MainContent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="offers-page-title text-center w-100 m-4 m-lg-5">TARJOUKSET</h1>
                    <div className="col-12 search-box-wrapper">
                        <div className="input-group">
                            <input type="search" placeholder="Etsi tarjouksia" className="search-box form-control"></input>
                            <div className="input-group-append border-0">
                                <button type="button" className="btn btn-link"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <OffersList/>
            </div>
        );
    }
}

export default MainContent;