const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];


const giveWay = document.querySelector('.giveway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items);
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 5, 15, 10, 30);
// console.log(futureDate)
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(months[month])
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
giveWay.textContent = `giveway ends on ${weekday} ${date} ${month} ${year} ${hours}: ${minutes}am`;

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    // console.log(today)
    const t = futureTime - today
        // console.log(t)
        // 1s = 1000ms
        // 1m = 60s
        // 1hour = 60min
        // 1d = 24hr

    // value in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = t / oneDay
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let miniutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);


    // set values array

    const values = [days, hours, miniutes, seconds];

    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index])
    })
    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expried">sorry, this giveway has expired</h4>`
    }


}

//countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()