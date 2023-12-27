    var $inp_name = $("#name");
    var $inp_family = $("#family");
    var $inp_phone = $("#phone");
    var $inp_email = $("#email");
    var $inp_title = $("#title");
    var $txtarea_message = $("#message");
    $("body").keypress(function (ascii_code) {
        if (ascii_code.which === 13) {
            ascii_code.preventDefault();
            form();
                }
      });
    function check_inpname() { 
        if ($inp_name.val().length > 2) {
            $("#name_id").hide("fast");
        }else{
            $("#name_id").show("fast");
        }
     }
     $inp_name.focus(check_inpname).keyup(check_inpname);


     function check_inpfamily() { 
        if ($inp_family.val().length > 2) {
            $("#family_id").hide("fast");
        }else{
            $("#family_id").show("fast");
        }
     }
     $inp_family.focus(check_inpfamily).keyup(check_inpfamily);


     function check_inpemail() { 
        if ($inp_email.val().includes("@gmail.com")) {
            $("#email_id").hide("fast");
        }else{
            $("#email_id").show("fast");
        }
     }
     $inp_email.focus(check_inpemail).keyup(check_inpemail);


     function check_inpphone() { 
        if ($inp_phone.val().length >= 11 && $inp_phone.val().length <= 11) {
            $("#phone_id").hide("fast");
        }else{
            $("#phone_id").show("fast");
        }
     }
     $inp_phone.focus(check_inpphone).keyup(check_inpphone);

     function check_inptitle() { 
        if ($inp_title.val().length >= 3) {
            $("#title_id").hide("fast");
        }else{
            $("#title_id").show("fast");
        }
     }
     $inp_title.focus(check_inptitle).keyup(check_inptitle);


     function check_txtarea() { 
        if ($txtarea_message.val().length >= 4) {
            $("#txtarea_id").hide("fast");
        }else{
            $("#txtarea_id").show("fast");
        }
     }
     $txtarea_message.focus(check_txtarea).keyup(check_txtarea);
    function form() {
    
        if(
            $inp_name.val().length > 2
            && $inp_family.val().length > 2
            && $inp_email.val().includes("@gmail.com")
            && $inp_phone.val().length >= 11 && $inp_phone.val().length <= 11
            && $inp_title.val().length >= 3
            && $txtarea_message.val().length >= 4
            ){
                $(".gray-div").show();
                     $("#loading-div-id").show();
                          setTimeout(function(){
                             $("#loading-div-id").hide("fast");
                              $("#loading-div-id-ver1").show();
                         },4000)
            }else{
                $(".div_alert").show("slow");
                
                setTimeout( function() {
                    $(".div_alert").hide("slow");
                }, 5000);
                return false;
            }

     $("#close-btn").click(function(){
             $("#loading-div-id-ver1").hide("fast");
         $("#loading-div-id").hide("fast");
         $(".gray-div").fadeOut(600);
         $("#showalert").hide();
         });
        }
        $("#inp_submit").click(function (event) {
            event.preventDefault();
            form();
          });