import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { categories } from './categories';
import { trainings } from './trainings';
import { workouts } from './workouts';
import { challenges } from './challenges';
import { exercises } from './exercises';
import { yogas } from './yogas';
import { nutritions } from './nutritions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            categories,
            trainings,
            workouts,
            challenges,
            exercises,
            yogas,
            nutritions
        }),
        applyMiddleware(thunk)
        // applyMiddleware(thunk, logger)
    );

    return store;
}