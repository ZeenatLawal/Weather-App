import './styles/App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import WeatherContainer from './components/WeatherContainer';
import { loadingScreen } from './redux/weatherData/weather';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingScreen());
  }, [dispatch]);

  return (
    <div className="App">
      <WeatherContainer />
    </div>
  );
};

export default App;
