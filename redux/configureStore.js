import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { categories } from './categories';
import { trainings } from './trainings';
import { workouts } from './workouts';
import { challenges } from './challenges';
import { exercises } from './exercises';
import { yogas } from './yogas';
import { nutritions } from './nutritions';

const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true
}

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
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
    
    const persistor = persistStore(store);
    return { persistor, store };
}