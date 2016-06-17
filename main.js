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
               console.log(data)
                for (var i = 0; i < data.length; i++) {
                    var name = data[i].name.slice(0,5);
                    $(".outer").append('<div class="names">' + name + '<ul class="submenu"></ul></div>');
                    var myArray = Object.keys(data[i]);
                }
                $('.names').on('click',function (e) {
                    $('this').toggleClass('someClass');
                    e.preventDefault();
                    e.stopPropagation();
                    $('.names').toggleClass('someClass');
                     if($(this).hasClass('someClass')) {
                         for (var j = 0; j < myArray.length; j++) {
                             $('ul').show();
                             $(this).children('ul').append('<li class="test">' + myArray[j] + '</li>');
                         }
                         $('li.test').on('click',function () {
                             $(this).append('<li class="ok">kam</li>');
                             console.log('hello')
                         })
                     }
                    else{
                     $('ul').empty();
                    }

                });




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


