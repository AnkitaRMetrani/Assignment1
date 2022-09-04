$(function(){
    $("#formvalidation").validate({
        rules:{
            name:{
                minlength:2
            },
            email:{
                email:true
            },
            phone:{
                number:true,
                minlength:10,
                maxlength:10,
            },
            password:{
                required:true,
                minlength:8,
            },
            confirmpassword:{
                required:true,
                minlength:8,
                equalTo:"#password"
            }
            
        },
        messages:{
            name:{
                required:"Enter your Name",
                minlength:"Name should be atleast 2 characters!"
            },
            email:"Enter a valid email address",
            phone:"Enter 10 digits mobile number",
            dob:"Enter your Date of Birth",
            password:{
                required:"Enter Password",
                minlength:"Password must be more than 8 characters",
            },
            confirmpassword:{
                required:"Confirm your Password",
                minlength:"Password must be more than 8 characters",
                equalTo:"Passwords must be similar "

            }


        },

        submitHandler: function(form) {
          form.submit();
        }
       });

        $('#dat').datepicker({
            format: "dd-mm-yyyy",
            
        });
        
});



/*
    jQuery without validate Plugin

    $('#password, #confirmpassword').on('keyup', function(){

            $('.error').removeClass('success-message').removeClass('error-message');
    
            var password=$('#password').val();
            var confirm_password=$('#confirmpassword').val();
    
            if(password===""){
                $('.error').text("Password Field cannot be empty").addClass('error-message');
            }
            if(password<8){
                $('.error').text("Password Shouls be more than 8 characters").addClass('error-message');
            }
            else if(confirm_password===""){
                $('.error').text("Confirm Password Field cannot be empty").addClass('error-message');
            }
            else if(confirm_password===password)
            {
                $('.error').text('Password Match!').addClass('success-message');
            }
            else{
                $('.error').text("Password Doesn't Match!").addClass('error-message');
            }
    
        });
*/
    
