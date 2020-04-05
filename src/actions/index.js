import axios from 'axios';

export const FETCH_OFFERS = 'fetch_offers';
export const FETCH_CENTER_DATA = 'fetch_center_data';
export const FILTER_BY_BUSINESS = 'filter_by_business';


const BASE_URL = 'http://localhost:3456';

export function fetchOffers() {
    const request = axios.get(`${BASE_URL}/offers`);
    return {
        type: FETCH_OFFERS,
        payload: request
    };
}

export function fetchCenterData() {
    const request = axios.get(`${BASE_URL}/shoppingcenter`);
    return {
        type: FETCH_CENTER_DATA,
        payload: request
    };
}

export function selectBusiness(value) {
    return {
        type: FILTER_BY_BUSINESS,
        value
    };
}