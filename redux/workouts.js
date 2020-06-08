import * as ActionTypes from './ActionTypes';

export const workouts = ( state = { isLoading: true, errMess: null, workouts: [] }, action ) => {
    switch(action.type) {
        case ActionTypes.WORKOUTS_LOADING:
            return{...state, isLoading: true, errMess: null, workouts: []};

        case ActionTypes.RENDER_WORKOUTS:
            return{...state, isLoading: false, errMess: null, workouts: action.payload};
        
        case ActionTypes.WORKOUTS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, workouts: []};

        default:
            return state;
    }
};