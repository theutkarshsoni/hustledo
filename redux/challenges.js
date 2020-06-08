import * as ActionTypes from './ActionTypes';

export const challenges = ( state = { isLoading: true, errMess: null, challenges: [] }, action ) => {
    switch(action.type) {
        case ActionTypes.CHALLENGES_LOADING:
            return{...state, isLoading: true, errMess: null, challenges: []};

        case ActionTypes.RENDER_CHALLENGES:
            return{...state, isLoading: false, errMess: null, challenges: action.payload};
        
        case ActionTypes.CHALLENGES_FAILED:
            return{...state, isLoading: false, errMess: action.payload, challenges: []};

        default:
            return state;
    }
};