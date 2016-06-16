$(".subscribeForm .primary").click(function (evt) {
     evt.preventDefault();
    var email = $("#subscribe").val();

    if (isEmailValid(email)) {
        $('.error').hide();
        console.log('valid email');
    }
    else if (!isEmailValid(email)) {
        $('.error').show();
        console.log('invalid email');
    }
});
function isEmailValid(emailAdress) {
    var rexp = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
//  console.log(rexp.test(emailAdress))
    return rexp.test(emailAdress)
}
