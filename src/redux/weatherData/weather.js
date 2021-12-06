import getWeather from './ApiCalls';

const LOADING = 'weather-app/weatherData/LOADING';
const GET_DAILY = 'weather-app/weatherData/GET_DAILY';

const initialState = [];

const options = { year: 'numeric', month: 'short', day: 'numeric' };

export const loadingScreen = () => ({
  type: LOADING,
});

const dailyWeather = (payload) => ({
  type: GET_DAILY,
  payload,
});

export const loadDaily = (metric) => async (dispatch) => {
  const getResult = await getWeather(metric);
  const groupedData = [];
  for (let i = 0; i < getResult.list.length; i += 8) {
    const temporary = {
      id: getResult.list[i].dt,
      date: new Date(getResult.list[i].dt * 1000).toLocaleDateString('en-US', options),
      temp: getResult.list[i].main.temp,
      desc: getResult.list[i].weather[0].description,
      icon: getResult.list[i].weather[0].icon,
    };

    groupedData.push(temporary);
  }

  if (groupedData) {
    dispatch(dailyWeather(groupedData));
  }
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_DAILY:
      return {
        ...state,
        daily: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
