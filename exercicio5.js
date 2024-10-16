function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Todos os campos devem ser preenchidos!");
        return false;
    }
    return true;
}