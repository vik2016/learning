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
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var name = data[i].name;
                    $(".outer").append('<div class="names" data-id = ' + data[i].id + '>' + name + '<ul class="submenu"></ul></div>');
                }
                 $('.names').on('click',function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $('.names').toggleClass('someClass');
                    if($(this).hasClass('someClass')) {
                            $('ul').show();
                       var returnedId = $(this).attr("data-id")-1;
                        console.log(returnedId);
                        $(this).children('ul').append('<li class="test">' +
                            '<div>'+data[returnedId].email+'</div>' +
                            '<div>'+data[returnedId].username+'</div>'+
                            '<div>'+data[returnedId].website+'</div>'+
                            '<div>'+data[returnedId].phone+'</div>' +
                            '<div>'+data[returnedId].address.street+'</div>'+
                            '<div>'+data[returnedId].address.city+'</div>'+
                            '</li>');
                    }
                    else{
                        $('ul').empty();
                    }
                })
            })
        });
    }
};

myCode.emailValidation();
myCode.menu();


