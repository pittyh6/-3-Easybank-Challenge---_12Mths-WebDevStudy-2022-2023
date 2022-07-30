
$(function() {
    $(".toggle").on("click", function(){
        if($(".nav-item").hasClass("active")){
            $(".nav-item").removeClass("active");
            $("#toggle-img").attr("src", "./images/icon-hamburger.svg");
        }else{
            $(".nav-item").addClass("active");
            $("#toggle-img").attr("src", "./images/icon-close.svg");
        }
    })
})