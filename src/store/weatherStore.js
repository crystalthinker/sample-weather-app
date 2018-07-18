import {ReduceStore} from 'flux/utils';
import ACTION_CONSTANT from '../config/action_constants';
import WeatherDispatcher from '../dispatcher/weatherDispatcher';
import axios from "axios/index";
import APP_CONSTANTS from "../config/constants";

class WeatherStore extends ReduceStore {
    constructor() {
        super(WeatherDispatcher);
    }

    getInitialState() {
        return [];
    }

    getWeatherData(searchText){
        let url = `${APP_CONSTANTS.API_URL}?q=${searchText}&appid=${APP_CONSTANTS.API_KEY}`;
        axios.get(url)
            .then(res => {
                console.log(res.data.list);
                return res.data.list||[];
            })

    }

    reduce(state, action) {
        switch (action.type) {
            case ACTION_CONSTANT.SEARCH_NEW_COUNTRY:
                return this.getWeatherData(action.text);

            default:
                return state;
        }
    }
}

export default new WeatherStore();