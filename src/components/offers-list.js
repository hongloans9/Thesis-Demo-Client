import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOffers, fetchCenterData, selectBusiness } from '../actions';
import _ from 'lodash';
import Moment from 'react-moment';


class OffersList extends Component {
    componentDidMount() {
        this.props.fetchOffers();
        this.props.fetchCenterData();
    }

    renderBusinessList(business, index) {
        const { selectedBusinessID } = this.props.offersPage;
        const className = `offers-category ${business.id === selectedBusinessID ? 'active' : ''}`;
        return (
            <div className={className} key={index}>
                <p className="offers-category-name" onClick={() => this.props.selectBusiness(business)}>
                    {business.description}
                </p>
            </div>
        );
    }

    formatDate (start, end) {
        return (
            <span>
            <Moment format="DD.MM.">
                {start}
            </Moment>
            -
            <Moment format="DD.MM.YYYY">
                {end}
            </Moment>
        </span>
        );
    }
    
    renderOffers(offer, index) {
        const background = { backgroundImage: `url(${offer.image})` },
            modalTarget = '#offer-' + index, popupID = 'offer-' + index;
        return (
            <div className="col-6 col-md-4 col-lg-3 mb-5" key={index}>
                <div className="offer-image">
                    <div className="offer-image-blur" style={background}></div>
                    <img src={offer.image}></img>
                </div>
                <div className="offer-info">
                    <h5 className="offer-store-name">
                        {offer.store.name}
                    </h5>
                    <p className="offer-title">{offer.title}</p>
                    <p className="offer-valid-date">Voimassa {this.formatDate(offer.startDate, offer.endDate)}</p>
                    <p className="offer-subtitle">{offer.subTitle}</p>
                    <div className="show-more-btn" data-toggle="modal" data-target={modalTarget}>Lue lisää</div>
                </div>
                <hr className="line-break"></hr>
                <div className="modal offer-modal" id={popupID} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="offer-image">
                                <div className="offer-image-blur" style={background}></div>
                                <img src={offer.image}></img>
                            </div>
                            <button type="button" className="close" data-dismiss="modal">X</button>
                            <div className="offer-info">
                                <h5 className="offer-store-name">
                                    {offer.store.name}
                                </h5>
                                <p className="offer-title">{offer.title}</p>
                                <p className="offer-valid-date">Voimassa {this.formatDate(offer.startDate, offer.endDate)}</p>
                                <p className="offer-subtitle">{offer.subTitle}</p>
                                <p className="offer-description">{offer.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { filteredOffers, businessList, selectedBusinessID } = this.props.offersPage;
        const className = `offers-category ${selectedBusinessID ? '' : 'active'}`;
        return (
            <div className="offers-list">
                <div className="offers-category-wrapper mt-4 mb-4">
                    <div className="d-flex flex-wrap">
                        <div className={className}>
                            <p className="offers-category-name" onClick={() => this.props.selectBusiness('')}>
                                Kaikki
                            </p>
                        </div>
                        {businessList.map((bs, index) => {
                            return this.renderBusinessList(bs, index);
                        })}
                    </div>
                </div>
                <div className="offers-list-wrapper row">
                    {filteredOffers.map((offer, index) => {
                        return this.renderOffers(offer, index);
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { offersPage: state.offersPage };
}

export default connect(mapStateToProps, { fetchOffers, fetchCenterData, selectBusiness })(OffersList);