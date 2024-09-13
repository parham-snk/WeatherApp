window.onload = () => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=29.6103&longitude=52.5311&current=temperature_2m,relative_humidity_2m,is_day,rain&timezone=auto&forecast_days=10")
        .then(res => res.json())
        .then(res => {
            let { current } = res
            let { temperature_2m, is_day, rain } = current
            let place = res.timezone.split("/")[1]
            
            
        }).catch(err => {
                alert("connection Lost!")
                window.location.reload()
        })
}