import './styles/App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WeatherContainer from './components/WeatherContainer';
import { loadingScreen } from './redux/weatherData/weather';

const font = "'Lato', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main: '#ffca28',
    },
    secondary: {
      main: '#023047',
    },
  },
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingScreen());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h2>Weather forecast for Abuja</h2>
        <WeatherContainer />
      </div>
    </ThemeProvider>
  );
};

export default App;
