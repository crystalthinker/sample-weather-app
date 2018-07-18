import App from '../App';
import {Container} from 'flux/utils';
import WeatherStore from '../store/weatherStore';

function getStores() {
    return [
        WeatherStore,
    ];
}

function getState() {
    return {
        weatherData: WeatherStore.getState(),
    };
}

export default Container.createFunctional(App, getStores, getState);