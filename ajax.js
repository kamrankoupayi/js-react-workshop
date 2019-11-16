(function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            console.log(this.status);
        }
    }
    xhr.setRequestHeader("Content-type", "application/json");
    xhttp.open("GET", "/get ", true);
    xhttp.send();
})();