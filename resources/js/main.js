
$(document).ready(function(){
    
    //Sticky Menu
$('.js--services-section').waypoint(function(direction){
    if(direction == "down"){
        $("nav").addClass("sticky");
       }else{
        $("nav").removeClass("sticky");
       }
});
    
    //mixitup--Portfolio
    var mixer = mixitup('.container');
    
    //smooth scrool for IE/EDGE/Safari
    
    $("a").on('click',function(event){
        if(this.hash !== ""){
           event.preventDefault();
            var hash = this.hash;
            
            $('html,body').animate({
                scrollTop:$(hash).offset().top
            },800,function(){
                window.location.hash=hash;
            });
           }
    });
});
function openNav(){
    document.getElementById("mynav").style.width="100%";
}
function closeNav(){
    document.getElementById("mynav").style.width="0%";
}
