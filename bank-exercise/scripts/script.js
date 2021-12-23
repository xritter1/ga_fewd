console.log("Hello")
    // alert("hi")

let hoursMonth = prompt("How many hours do you work a month?")
let hourlyWage = prompt("What is your hourly wage?")
let monthlyExpense = prompt("What are your monthly expenses?")

let netMonthlyIncome = (hoursMonth * hourlyWage - monthlyExpense)

if (netMonthlyIncome >= 2200) {
    document.write("Your Net Monthly Intake of $" + netMonthlyIncome + " is enough to qualify for a mortgage.")
} else if (netMonthlyIncome <= 2200) {
    document.write("You do not qualify for a Mortgage with our bank.")
} else {
    document.write("Please insert a number.")
}