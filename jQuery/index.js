$("h1").click(function(){
    $("h1").addClass("big-title");
});

$(document).keydown(function(event){
    $("h1").text(event.key);
});