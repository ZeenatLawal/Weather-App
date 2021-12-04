import './styles/App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import WeatherCard from './components/WeatherCard';
import { loadingScreen } from './redux/weatherData/weather';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingScreen());
  }, [dispatch]);

  return (
    <div className="App">
      <WeatherCard />
    </div>
  );
};

export default App;
