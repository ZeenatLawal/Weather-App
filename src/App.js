import './styles/App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WeatherContainer from './components/WeatherContainer';
import { loadingScreen } from './redux/weatherData/weather';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffca28',
    },
    secondary: {
      main: '#8ecae6',
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
        <WeatherContainer />
      </div>
    </ThemeProvider>
  );
};

export default App;
