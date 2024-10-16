var count = 10
var interval = setInterval(function() {
    count--;
    document.getElementById("counter").textContent = count
    if (count ===0) {
        clearInterval(interval)
        alert("Tempo esgotado!")
    }
},100)