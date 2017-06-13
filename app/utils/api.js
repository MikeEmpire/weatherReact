var axios = require('axios');

module.exports = {
  fetchWeather: function(area) {
    var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + area + '&appid=615e677e85986ec9db1b638178542c28');

    return axios.get(encodedURI)
      .then(function(response){
        return response.data.list
      })
  }
}
