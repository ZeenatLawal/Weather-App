const LOADING = 'weather-app/weatherData/LOADING';

const initialState = [];

export const loadingScreen = () => ({
  type: LOADING,
});

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default weatherReducer;
