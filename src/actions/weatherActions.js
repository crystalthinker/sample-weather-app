import ACTION_CONSTANT from '../config/action_constants';
import WeatherDispatcher from '../dispatcher/weatherDispatcher';

const Actions = {
    searchCity(text) {
        WeatherDispatcher.dispatch({
            type: ACTION_CONSTANT.SEARCH_NEW_COUNTRY,
            text,
        });
    }
};

export default Actions;