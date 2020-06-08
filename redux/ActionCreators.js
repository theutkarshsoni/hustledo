import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchCategories = () => (dispatch) => {

    dispatch(categoriesLoading());

    return fetch(baseUrl + 'categories')
        .then(
            response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(categories => dispatch(renderCategories(categories)))
        .catch(error => dispatch(categoriesFailed(error.message)));
};

export const categoriesLoading = () => ({
    type: ActionTypes.CATEGORIES_LOADING
});

export const renderCategories = (categories) => ({
    type: ActionTypes.RENDER_CATEGORIES,
    payload: categories
});

export const categoriesFailed = (errmess) => ({
    type: ActionTypes.CATEGORIES_FAILED,
    payload: errmess
});

export const fetchTrainings = () => (dispatch) => {

    dispatch(trainingsLoading());

    return fetch(baseUrl + 'trainings')
        .then(
            response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(trainings => dispatch(renderTrainings(trainings)))
        .catch(error => dispatch(trainingsFailed(error.message)));
};

export const trainingsLoading = () => ({
    type: ActionTypes.TRAININGS_LOADING
});

export const renderTrainings = (trainings) => ({
    type: ActionTypes.RENDER_TRAININGS,
    payload: trainings
});

export const trainingsFailed = (errmess) => ({
    type: ActionTypes.TRAININGS_FAILED,
    payload: errmess
});

export const fetchWorkouts = () => (dispatch) => {

    dispatch(workoutsLoading());

    return fetch(baseUrl + 'workouts')
        .then(
            response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(workouts => dispatch(renderWorkouts(workouts)))
        .catch(error => dispatch(workoutsFailed(error.message)));
};

export const workoutsLoading = () => ({
    type: ActionTypes.WORKOUTS_LOADING
});

export const renderWorkouts = (workouts) => ({
    type: ActionTypes.RENDER_WORKOUTS,
    payload: workouts
});

export const workoutsFailed = (errmess) => ({
    type: ActionTypes.WORKOUTS_FAILED,
    payload: errmess
});

export const fetchChallenges = () => (dispatch) => {

    dispatch(challengesLoading());

    return fetch(baseUrl + 'challenges')
        .then(
            response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(challenges => dispatch(renderChallenges(challenges)))
        .catch(error => dispatch(challengesFailed(error.message)));
};

export const challengesLoading = () => ({
    type: ActionTypes.CHALLENGES_LOADING
});

export const renderChallenges = (challenges) => ({
    type: ActionTypes.RENDER_CHALLENGES,
    payload: challenges
});

export const challengesFailed = (errmess) => ({
    type: ActionTypes.CHALLENGES_FAILED,
    payload: errmess
});

export const fetchExercises = () => (dispatch) => {

    dispatch(exercisesLoading());

    return fetch(baseUrl + 'exercises')
        .then(
            response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(exercises => dispatch(renderExercises(exercises)))
        .catch(error => dispatch(exercisesFailed(error.message)));
};

export const exercisesLoading = () => ({
    type: ActionTypes.EXERCISES_LOADING
});

export const renderExercises = (exercises) => ({
    type: ActionTypes.RENDER_EXERCISES,
    payload: exercises
});

export const exercisesFailed = (errmess) => ({
    type: ActionTypes.EXERCISES_FAILED,
    payload: errmess
});

export const fetchYogas = () => (dispatch) => {

    dispatch(yogasLoading());

    return fetch(baseUrl + 'yogas')
        .then(
            response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(yogas => dispatch(renderYogas(yogas)))
        .catch(error => dispatch(yogasFailed(error.message)));
};

export const yogasLoading = () => ({
    type: ActionTypes.YOGAS_LOADING
});

export const renderYogas = (yogas) => ({
    type: ActionTypes.RENDER_YOGAS,
    payload: yogas
});

export const yogasFailed = (errmess) => ({
    type: ActionTypes.YOGAS_FAILED,
    payload: errmess
});

export const fetchNutritions = () => (dispatch) => {

    dispatch(nutritionsLoading());

    return fetch(baseUrl + 'nutritions')
        .then(
            response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(nutritions => dispatch(renderNutritions(nutritions)))
        .catch(error => dispatch(nutritionsFailed(error.message)));
};

export const nutritionsLoading = () => ({
    type: ActionTypes.NUTRITIONS_LOADING
});

export const renderNutritions = (nutritions) => ({
    type: ActionTypes.RENDER_NUTRITIONS,
    payload: nutritions
});

export const nutritionsFailed = (errmess) => ({
    type: ActionTypes.NUTRITIONS_FAILED,
    payload: errmess
});