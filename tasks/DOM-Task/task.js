(function(){
    document.getElementById("btn").addEventListener("click", buttonClicked);

    function buttonClicked(){
        event.preventDefault();
        var num = document.getElementById("exampleInputEmail1").value;
        alert(num);
    }
})();