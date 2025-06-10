
//Dati API convertiti in JSON
function searchcity() {
  let input = document.getElementById("city").value
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input + '&appid=818a10523e668affb1e8b4863c91f90f&lang=it')
  .then(response => response.json())
  .then(data => {

      //Dati  JSON 
      let alldata = (data)
      console.log(alldata)


      // Temperatura "Attuale" convertita da kelvin a celcius.
      let temperatura = (data.main.temp)
      let celcius = temperatura - 273.15


      let tempo = data.weather[0].description
      // Tutte le lettere della variabile "tempo" tranne la prima che è stata modificata in lettera maiuscola ed aggiunta insieme a questa variabile.
      let temp1 = tempo.charAt(0).toUpperCase() + tempo.slice(1, tempo.lenght)
      // Prima lettera della variabile "tempo" presa e modificata in lettera Maiuscola. 



      document.getElementById("tempAttuale").textContent = temp1 + " " + "(" + (Math.round(celcius)) + '°C' + ")"

      document.getElementById("dinamicimg").src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"

      // Temperatura "massima" convertita da kelvin a celcius.
      let temperaturamax = (data.main.temp_max)
      let celciusmax = temperaturamax - 273.15;



      //Temperatura "minima" convertita da kelvin a celcius.
      let temperaturamin = (data.main.temp_min)
      let celciusmin = temperaturamin - 273.15

    });

    
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input + '&appid=ffda2e7adc4f108ad6cc4329b06e8b3c&lang=it')
    .then(response => response.json())
    .then(data => {
      console.log(data)


      let prev12 = data.list[0].main.temp
      let previ12 = prev12 - 273.15

      let timeprn = data.list[0].dt_txt.slice(10, 16)


      let desc12 = data.list[0].weather[0].description
      let descr12 = desc12.charAt(0).toUpperCase() + desc12.slice(1, desc12.lenght)

      document.getElementById("prev12").textContent = timeprn + " - " + descr12 + " " + "(" + (Math.round(previ12)) + '°C' + ")"
      document.getElementById("dinamicimg0").src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"

      let prev15 = data.list[1].main.temp
      let previ15 = prev15 - 273.15

      let timeprn1 = data.list[1].dt_txt.slice(10, 16)

      let desc15 = data.list[1].weather[0].description
      let descr15 = desc15.charAt(0).toUpperCase() + desc15.slice(1, desc15.lenght)

      document.getElementById("prev15").textContent = timeprn1 + " - " + descr15 + " " + "(" + (Math.round(previ15)) + '°C' + ")"
      document.getElementById("dinamicimg1").src = "http://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + "@2x.png"


      let prev18 = data.list[2].main.temp
      let previ18 = prev18 - 273.15

      let timeprn2 = data.list[2].dt_txt.slice(10, 16)

      let desc18 = data.list[2].weather[0].description
      let descr18 = desc18.charAt(0).toUpperCase() + desc18.slice(1, desc18.lenght)

      document.getElementById("prev18").textContent = timeprn2 + " - " + descr18 + " " + "(" + (Math.round(previ18)) + '°C' + ")"
      document.getElementById("dinamicimg2").src = "http://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + "@2x.png"

      let prev21 = data.list[3].main.temp
      let previ21 = prev21 - 273.15

      let timeprn3 = data.list[3].dt_txt.slice(10, 16)

      let desc21 = data.list[3].weather[0].description
      let descr21 = desc21.charAt(0).toUpperCase() + desc21.slice(1, desc21.lenght)

      document.getElementById("prev21").textContent = timeprn3 + " - " + descr21 + " " + "(" + (Math.round(previ21)) + '°C' + ")"
      document.getElementById("dinamicimg3").src = "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + "@2x.png"

      let prev00 = data.list[4].main.temp
      let previ00 = prev00 - 273.15


      let timeprn4 = data.list[4].dt_txt.slice(10, 16)

      let desc00 = data.list[4].weather[0].description
      let descr00 = desc00.charAt(0).toUpperCase() + desc00.slice(1, desc00.lenght)

      document.getElementById("prev00").textContent = timeprn4 + " - " + descr00 + " " + "(" + (Math.round(previ00)) + '°C' + ")"
      document.getElementById("dinamicimg4").src = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + "@2x.png"


      let prev03 = data.list[5].main.temp
      let previ03 = prev03 - 273.15


      let timeprn5 = data.list[5].dt_txt.slice(10, 16)

      let desc03 = data.list[5].weather[0].description
      let descr03 = desc03.charAt(0).toUpperCase() + desc03.slice(1, desc03.lenght)

      document.getElementById("prev03").textContent = timeprn5 + " - " + descr03 + " " + "(" + (Math.round(previ03)) + '°C' + ")"
      document.getElementById("dinamicimg5").src = "http://openweathermap.org/img/wn/" + data.list[5].weather[0].icon + "@2x.png"

      let prev06 = data.list[6].main.temp
      let previ06 = prev06 - 273.15


      let timeprn6 = data.list[6].dt_txt.slice(10, 16)

      let desc06 = data.list[6].weather[0].description
      let descr06 = desc06.charAt(0).toUpperCase() + desc06.slice(1, desc06.lenght)

      document.getElementById("prev06").textContent = timeprn6 + " - " + descr06 + " " + "(" + (Math.round(previ06)) + '°C' + ")"
      document.getElementById("dinamicimg6").src = "http://openweathermap.org/img/wn/" + data.list[6].weather[0].icon + "@2x.png"

      let prev09 = data.list[7].main.temp
      let previ09 = prev09 - 273.15


      let timeprn7 = data.list[7].dt_txt.slice(10, 16)

      let desc09 = data.list[7].weather[0].description
      let descr09 = desc09.charAt(0).toUpperCase() + desc09.slice(1, desc09.lenght)

      document.getElementById("prev09").textContent = timeprn7 + " - " + descr09 + " " + "(" + (Math.round(previ09)) + '°C' + ")"
      document.getElementById("dinamicimg7").src = "http://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + "@2x.png"


    })

}
searchcity()




function covid() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
      'X-RapidAPI-Key': 'd9c3d0e747msh209608dbde9926dp11944bjsn8fbf5a415fa7'
    }
  };

  fetch('https://covid-193.p.rapidapi.com/statistics?country=italy', options)
    .then(response => response.json())
    .then(data2 => {
      console.log(data2)

      let totalcase = data2.response[0].cases.total
      let casiattuali = data2.response[0].cases.new
 
      
      document.getElementById("casitotali").textContent = totalcase


      if (casiattuali !== null) {
    
      document.getElementById("casiattuali").textContent = casiattuali
      }




    })
}
covid()


function time() {
  fetch("http://worldtimeapi.org/api/timezone/Europe/Rome")
    .then(response => response.json())
    .then(data1 => {




      let day = data1.datetime.slice(8, 10)
      let month = data1.datetime.slice(5, 7)
      let year = data1.datetime.slice(0, 4)
      document.getElementById("year").textContent = day + "/" + month + "/" + year;


      let hour = data1.datetime.slice(11, 16)
      document.getElementById("hour").textContent = hour;

    })

}
setInterval(time, 1000)









