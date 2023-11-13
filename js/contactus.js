$(".btn-send").click(function(i){
    let all_input = $("form input");
    let txt_area = $(" form textarea");
    i.preventDefault();
    if ( all_input.val().length > 2 && txt_area.val().length > 5 ) {
        $("#showalert").hide();
         $(".gray-div").show();
       $("#loading-div-id").show();
         setTimeout(function(){
            $("#loading-div-id").hide();
             $("#loading-div-id-ver1").show();
        },4000)

    }else{
        $("#showalert").show();
        return false;
    }
});
$("#close-btn").click(function(){
    $("#loading-div-id-ver1").hide();
$("#loading-div-id").hide();
$(".gray-div").hide();
$("#showalert").hide();
});