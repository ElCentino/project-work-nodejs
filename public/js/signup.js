$(document).ready(function(){

    $("#full_name").focus(function(){
       $("#full_name").css('border-bottom-color', 'red');
    });
    $("#full_name").focusout(function(){
         var full_name = $("#full_name").val();
         if (full_name == "") {$("#full_name").css('border-bottom-color', 'red'); }else{$("#full_name").css('border-bottom-color', '#16a085'); }
    });
    $("#email").focus(function(){
       $("#email").css('border-bottom-color', 'red');
    });
    $("#email").focusout(function(){
         var email = $("#email").val();
         if (email == "") {$("#email").css('border-bottom-color', 'red'); }else{$("#email").css('border-bottom-color', '#16a085'); }
    });
    $("#password").focus(function(){
       $("#password").css('border-bottom-color', 'red');
    });
    $("#password").focusout(function(){
         var password = $("#password").val();
         if (password == "") {$("#password").css('border-bottom-color', 'red');}else{$("#password").css('border-bottom-color', '#16a085'); } 
    
    });
    $("#retype_password").focus(function(){
       $("#retype_password").css('border-bottom-color', 'red');
    });
    $("#retype_password").focusout(function(){
         var password = $("#password").val();
         var retype_password = $("#retype_password").val();
        if (retype_password == "") {$("#retype_password").css('border-bottom-color', 'red');}else{$("#retype_password").css('border-bottom-color', '#16a085'); }
         
    });
});