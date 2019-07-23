window.addEventListener('load',loading(),false);
    function loading(){
        var main = document.getElementById("main");
        var loader = document.getElementById("loader");
        main.style.display = "block";
        loader.style.display = "none";
    }