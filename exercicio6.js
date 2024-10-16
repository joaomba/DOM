function addItem(){
    var item= document.getElementById("item").value
    if (item !==""){
        var li = document.getElementById("item").value
        li.texteContent = item
        document.getElementById("list").appendChild(li)
        document.getElementById("item").value = ""
    }
}