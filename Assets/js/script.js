const todayEL = document.getElementById("currentDay")
const today = moment().format("dddd,MMMM Do")
console.log(today)
todayEL.textContent = today

