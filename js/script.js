var listMenu = document.getElementById("list-menu");
listMenu.style.maxHeight = "0em";

function toggleMenu(){
    if(listMenu.style.maxHeight == "0em") {
        listMenu.style.maxHeight = "15em";
        // listMenu.style.display = "block";
    }   else {
        listMenu.style.maxHeight = "0em";
        // listMenu.style.display = "none";
    }
}

$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 400, function(){
        window.location.hash = hash;
        });
    } 
    });
});