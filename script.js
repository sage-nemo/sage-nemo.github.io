$(document).ready(function(){
    $("button").click(function(){
   $(".font-animation").animate({fontSize: "2em",},1000); 
   $(".font-animation").animate({fontSize: "1em",},1000);
   $(".font-animation").css("color", "red");
   $(".border-animation").css("border", "solid 1px red");
    });
});
