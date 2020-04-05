import { FETCH_OFFERS, FETCH_CENTER_DATA, FILTER_BY_BUSINESS } from '../actions';
import _ from 'lodash';

const initialState = {
    offers: [],
    filteredOffers: [],
    selectedBusinessID: '',
    businessList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CENTER_DATA:
            return { ...state, businessList: action.payload.data.business };
        case FETCH_OFFERS:
            return { ...state, offers: action.payload.data, filteredOffers: action.payload.data }
        case FILTER_BY_BUSINESS:
            return {
                ...state, filteredOffers: action.value != '' ? state.offers.filter(offer => offer.businessId === action.value.id) : state.offers,
                selectedBusinessID: action.value.id
            };
        default:
            return state;
    }
}
