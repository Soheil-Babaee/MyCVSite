// Start Code JS for message input name

setTimeout( function() {
  $("#div-gray").show();
  $("#input-name-div-id").show();
}, 100);
$("#submit-id").click(function(i){ 
i.preventDefault();
let fullname = $("#input-text-name");
$("#showname").html(fullname.val());

if(fullname.val().length > 2){
  $("#input-name-div-id").hide();
  $(".div_loading").show();
  setTimeout( function() {
    $(".div_loading").hide();

  }, 4000);
  setTimeout(function() {
    $("#input-name-div-id-ver1").show();
  }, 4001);
  setTimeout(function()  {
    $("#div-gray").hide();
    $("#input-name-div-id").hide();
    $(".div_loading").hide();
    $("#input-name-div-id-ver1").hide();
    document.getElementById("welcome-message").classList.remove("welcome-message-div-blur");
    }, 7000);
   }else{
    $(".alert-p-showname").show();
   }
  
  });
// end Code JS for message input name




