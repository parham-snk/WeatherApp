let timer = setInterval(() => {
  let span = document.getElementById("point")
  span.innerHTML.length > 2 ? document.getElementById("point").innerHTML = "" : document.getElementById("point").innerHTML += "."
}, 500);


window.onload = async () => {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=29.6103&longitude=52.5311&current=temperature_2m,is_day,rain,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max").then(res => res.json())
    .then(async res => {
      console.log(res)
      let current = { temperature_2m, is_day, rain, time } = res.current
      let daily = ({ sunrise, sunset, uv_index_max, temperature_2m_max, temperature_2m_min, rain } = res.daily)
      console.log(uv_index_max)
      let icons = is_day == 0 ? {
        clear: "bi bi-moon",
        cloud: "bi bi-cloud-moon-fill",
        rain: 'bi bi-cloud-drizzle-fill'
      } : {
        clear: "bi bi-brightness-high-fill",
        cloud: "bi bi-cloud-sun",
        rain: 'bi bi-cloud-drizzle-fill'
      }
      let icon;
      current.rain == 0 ? icon = icons.clear : icon = icons.rain
      let info = { icon, daily, current }
      return info

    }).then(async (info) => {

      info.daily.sunrise.forEach((day, index) => {
        let date = new Date(info.daily.time[index]).getDay()
        let dayname;
        switch (date) {
          case 0:
            dayname = "sunday"
            break;
          case 1:
            dayname = "monday"
            break
          case 2:
            dayname = "tueseday"
            break
          case 3:
            dayname = "wendsday"
            break
          case 4:
            dayname = "thuersday"
            break
          case 5:
            dayname = "friday"
            break
          case 6:
            dayname = "satureDay"
            break
        }
        if (index == 0) {
          dayname = 'today'
        } else if (index == 1) {
          dayname = "tommorow"
        }
        document.getElementById('g').innerHTML += `<div class="d">
                <figure>
                  <i class="bi bi-cloud-sun"></i>
                  <figcaption>
                    <div class="p">
                      <i class="bi bi-thermometer-half"></i>
                      <div class="temp">
                        <div class="low">${info.daily.temperature_2m_min[index]}</div>
                        <div class="high">${info.daily.temperature_2m_max[index]}</div>
                      </div>
      
                    </div>
                    <div class="p">
                      <i class="bi bi-umbrella"></i>
                      <p>${Math.floor(Math.random() * 100)}%</p>
                    </div>
                    <div class="p" style="grid-column: 1/3;">
                      <div class="Dname">${dayname}</div>
                    </div>
      
                  </figcaption>
                </figure>
              </div>`
      })
      document.getElementById("temp").innerHTML = info.current.temperature_2m
      document.getElementById("icon").setAttribute("class", info.icon);
      document.getElementById("city").innerHTML = "shiraz";

    }).then(() => {
      (document.getElementById("loading").style.scale = 1.1)
      setTimeout(() => {
        (document.getElementById("loading").style.opacity = 0)

      }, 200);
      setTimeout(() => {
        document.body.removeChild(document.getElementById("loading"))
      }, 3000);
      clearInterval(timer)
    }).catch(err => {
      console.log("there is Some Error!", err)
      // window.location.reload()
    })

}