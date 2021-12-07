const getWeather = async (unit) => {
  try {
    const request = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=abuja,fct&appid=b3cc569b61dc8821a6ecabccb9ce946a&units=${unit}`);
    const response = await request.json();
    return response;
  } catch (err) {
    return err;
  }
};

export default getWeather;
