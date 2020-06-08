import * as ActionTypes from './ActionTypes';

export const trainings = ( state = { isLoading: true, errMess: null, trainings: [] }, action ) => {
    switch(action.type) {
        case ActionTypes.TRAININGS_LOADING:
            return{...state, isLoading: true, errMess: null, trainings: []};

        case ActionTypes.RENDER_TRAININGS:
            return{...state, isLoading: false, errMess: null, trainings: action.payload};
        
        case ActionTypes.TRAININGS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, trainings: []};

        default:
            return state;
    }
};