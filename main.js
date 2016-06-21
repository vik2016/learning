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
                //console.log(data)
                for (var i = 0; i < data.length; i++) {
                    var name = data[i].name;
                    $(".outer").append('<div class="names">' + name + '<ul class="submenu"></ul></div>');
                    var myArray = Object.keys(data[i]);
                }
                var someArray = $('.outer').children();
               // for (var k = 0; k<someArray.length; k++){
                //    console.log($(someArray[k]).text())
              //  }
                $('.names').on('click',function (e) {
                    e.preventDefault();
                    e.stopPropagation();


                    $('.names').toggleClass('someClass');
                    if($(this).hasClass('someClass')) {
                        for (var j = 0; j < data.length; j++) {
                            $('ul').show();
                           // console.log(data[j]);
                            console.log(data[j].name +  ' : '+ $(someArray[data[j].id -1]).text())

                            //if($(someArray[data[j].id -1]).text() == data[j].name){
                                $(this).children('ul').append('<li class="test">' +

                                    '<div>'+data[j].email+'</div>' +
                                    '<div>'+data[j].username+'</div>'+
                                    '</li>');
                          //  }

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

            })


        });

    }
};

myCode.emailValidation();
myCode.menu();


