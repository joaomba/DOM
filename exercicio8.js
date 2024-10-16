function showTime(){
    var now = new Date()
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    document.getElementById("time").textContent = time
}