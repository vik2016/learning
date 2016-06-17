var myCode = {
    emailValidation: function () {
        $(".primary").click(function (evt) {
            evt.preventDefault();
            var email = $("#subscribe").val();

            if (isEmailValid(email)) {
                $('.error').hide();
                console.log('valid email')
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
    },
    menu: function () {
        $(document).ready(function () {
            var data = 'http://jsonplaceholder.typicode.com/users';
            $.getJSON(data, function (data) {

                for (var i = 0; i < data.length; i++) {
                    var myObj = data[i];
                     myArray = Object.keys(myObj);
                    $(".outer").append('<li class="names">' + myObj.name + '</li>');
                    for(var j = 0; j<myArray.length;j++){
                        console.log(myArray[j])
                        $('.names').on('click',function(){
                           // console.log($(this));
                            $(this).append('<ul class="submenu"><li>'+(myArray[j])+'</li></ul>');
                            //  $(".outer").append('<li class="names">' + data[i].name + '</li>');
                        })
                    }
                  //  console.log(Object.keys(myObj));

                }

/*                $('.dropdown .drop').on('mouseover', function () {
                    for (var i = 0; i < data.length; i++) {
                        $(".dropdown .name").append('<li>' + data[i].name);
                        console.log(data[i].name);

                        // $('.name li').on('mouseover',function(){

                            // $(".name ").append('<ul> <li>' + data[i].email);
                        // })
                        $(".dropdown .name ").append('<ul> <li>' + data[i].email);
                        $(".dropdown .name ").append('<ul> <li>' + data[i].address);
                        $(".dropdown .name ").append('<ul> <li>' + data[i].phone);
                        $(".dropdown .name ").append('<ul> <li>' + data[i].website);
                        $(".dropdown .name ").append('<ul> <li>' + data[i].company);


                    }
                })*/


            })


        });

    }
};

myCode.emailValidation();
myCode.menu();


