var now = new Date()
var hour = now.getHours()
var greeting
if (hour < 12) {
    greeting = "Bom dia!"
} else if (hour < 18) {
    greeting = "Boa tarde!"
} else {
    greeting = "Boa noite!"
}
document.getElementById("greeting").textContent = greeting