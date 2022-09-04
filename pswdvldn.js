$(function(){
    $('#password, #confirmpassword').on('keyup', function(){

        $('.error').removeClass('success-message').removeClass('error-message');

        let password=$('#password').val();
        let confirm_password=$('#confirmpassword').val();

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
})