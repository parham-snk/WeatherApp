let date = new Date("2024-09-17").getDay()
let day;
switch (date) {
    case 0:
        day = "sunday"
        break;
    case 1:
        day = "monday"
        break
    case 2:
        day = "tueseday"
        break
    case 3:
        day = "wendsday"
        break
    case 4:
        day = "thuersday"
        break
    case 5:
        day = "friday"
        break
    case 6:
        day = "satureDay"
        break
}

console.log(day)