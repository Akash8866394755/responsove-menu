window.onload = function() {
    var barBtn = document.getElementById("bar-btn");
    barBtn.onclick = function() {

        var menuBox = document.getElementById("menu-box");
        var barIcon = document.getElementById("bar-icon");
        if(menuBox.style.display == "flex") {
            menuBox.style.display = "none";
            barIcon.className = "fas fa-bars";
        } 
        else {
            menuBox.style.display = "flex";
            barIcon.className = "fa fa-times";
        }
       
    }
   
}
