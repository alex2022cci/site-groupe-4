function depart(){
    let TA = document.getElementById('textAni') ;
    TA.style.color = "green" ;
    let img = document.getElementById('nighsky');
    img.style.animationDirection = "alternate" ;
}

$("start").on("click",function(){
    $("fusee").animate({left: '250px'});
    $("textAni").animate({down: '400px'});
    });  
