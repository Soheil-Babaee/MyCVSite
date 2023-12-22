// Start Code JS for message input name
setTimeout( function() {
     $("#div-gray").show();
     $("#input-name-div-id").show();
   }, 100); 

$("body").keypress(function(ascii_code) {
  if (ascii_code.which === 13) {
      ascii_code.preventDefault();
      submitForm();
  }
});

function submitForm() {
  let fullname = $("#input-text-name");
  $("#showname").html(fullname.val());

  if (fullname.val().length > 2) {
      $("#input-name-div-id").hide("fast");
      $(".div_loading").show();
      
      setTimeout(function() {
          $(".div_loading").hide("fast");
      }, 4000);

      setTimeout(function() {
          $("#input-name-div-id-ver1").show();
      }, 4001);

      setTimeout(function() {
          $("#div-gray").fadeOut(600);
          $("#input-name-div-id").fadeOut(600);
          $(".div_loading").fadeOut(600);
          $("#input-name-div-id-ver1").hide("fast");
          document.getElementById("welcome-message").classList.remove("welcome-message-div-blur");
      }, 7000);
  } else {
      $(".alert-p-showname").show("fast");
      setTimeout( function() {
        $(".alert-p-showname").hide("fast");
      }, 3000);
  }
}
$("#submit-id").click(function(event) {
  event.preventDefault();
  submitForm();
});






// setTimeout( function() {
//   $("#div-gray").show();
//   $("#input-name-div-id").show();
// }, 100);
// $("#submit-id").click(function(i){ 
// i.preventDefault();
// let fullname = $("#input-text-name");
// $("#showname").html(fullname.val());

// if(fullname.val().length > 2){
//   $("#input-name-div-id").hide();
//   $(".div_loading").show();
//   setTimeout( function() {
//     $(".div_loading").hide();

//   }, 4000);
//   setTimeout(function() {
//     $("#input-name-div-id-ver1").show();
//   }, 4001);
//   setTimeout(function()  {
//     $("#div-gray").fadeOut(600);
//     $("#input-name-div-id").fadeOut(600);
//     $(".div_loading").fadeOut(600);
//     $("#input-name-div-id-ver1").hide();
//     document.getElementById("welcome-message").classList.remove("welcome-message-div-blur");
//     }, 7000);
//    }else{
//     $(".alert-p-showname").show();
//    }
  
//   });
// end Code JS for message input name




