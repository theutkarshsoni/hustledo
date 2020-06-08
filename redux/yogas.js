import * as ActionTypes from './ActionTypes';

export const yogas = ( state = { isLoading: true, errMess: null, yogas: [] }, action ) => {
    switch(action.type) {
        case ActionTypes.YOGAS_LOADING:
            return{...state, isLoading: true, errMess: null, yogas: []};

        case ActionTypes.RENDER_YOGAS:
            return{...state, isLoading: false, errMess: null, yogas: action.payload};
        
        case ActionTypes.YOGAS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, yogas: []};

        default:
            return state;
    }
};