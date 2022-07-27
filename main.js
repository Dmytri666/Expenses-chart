var arrayDays=new Array("mon","tue","wed","thu",
"fri","sat","sun");
$(document).ready(function(){
for (let index = 0; index < arrayDays.length; index++) {
     let element = arrayDays[index];
     $("#"+element+" .price").hide(400);
     $("div."+element).css("height",getRndInteger(40,150));
     $("#"+element+" .price").text("$"+getRndInteger(20.22,88.22));

    $("div."+element).hover(function(){

        $("#"+element+" .price").show(400);
        $("div."+element).css("background-color","#fff");
    },
    function(){

        $("#"+element+" .price").hide(400);
        $("div."+element).css("background-color","#ffd600");

    })

}});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
