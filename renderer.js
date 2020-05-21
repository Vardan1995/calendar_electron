let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const today = new Date()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()
const selectMonth = document.getElementById("month")
const monthAndYear = document.getElementById("monthAndYear")
const tbl = document.getElementById("calendar-body")

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay()
  let daysInMonth = 32 - new Date(year, month, 32).getDate()
  tbl.innerHTML = ""
  monthAndYear.innerHTML = months[month] + " " + year
  selectMonth.value = month

  let date = 1
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr")
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td")
        let cellText = document.createTextNode("")
        cell.appendChild(cellText)
        row.appendChild(cell)
      } else if (date > daysInMonth) {
        let cell = document.createElement("td")

        row.appendChild(cell)
      } else {
        let cell = document.createElement("td")
        let cellText = document.createTextNode(date)
        cell.style = "background-color: lightblue"

        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.style = "background-color: red"
        }
        cell.appendChild(cellText)
        row.appendChild(cell)
        date++
      }
    }

    tbl.appendChild(row)
  }
}
function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear
  currentMonth = (currentMonth + 1) % 12
  showCalendar(currentMonth, currentYear)
}

function prev() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1
  showCalendar(currentMonth, currentYear)
}
function jumpToSelectedMounth() {
  currentMonth = +selectMonth.value
  showCalendar(currentMonth, currentYear)
}
showCalendar(currentMonth, currentYear)
