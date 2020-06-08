import * as ActionTypes from './ActionTypes';

export const nutritions = ( state = { isLoading: true, errMess: null, nutritions: [] }, action ) => {
    switch(action.type) {
        case ActionTypes.NUTRITIONS_LOADING:
            return{...state, isLoading: true, errMess: null, nutritions: []};

        case ActionTypes.RENDER_NUTRITIONS:
            return{...state, isLoading: false, errMess: null, nutritions: action.payload};
        
        case ActionTypes.NUTRITIONS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, nutritions: []};

        default:
            return state;
    }
};