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
                    var name = data[i].name.slice(0, 8);
                    $(".outer").append('<div class="names">' + name + '<ul class="submenu"></ul></div>');
                }
                $('.names').mouseenter(function (e) {

                    $('ul').empty();
                    e.preventDefault();
                    e.stopPropagation();
                    // $('.names').addClass('someClass');
                    $('.names').each(function (j) {
                        $(this).attr('data-id', +(j))

                    })

                   var returnedId = $(this).attr("data-id");
                        $(this).children('ul').append('<li class="test">' +
                            '<div>' + data[returnedId].email + '</div>' +
                            '<div>' + data[returnedId].username + '</div>' +
                            '<div>' + data[returnedId].website + '</div>' +
                            '<div>' + data[returnedId].phone + '</div>' +
                            '<div>' + data[returnedId].address.street + '</div>' +
                            '<div>' + data[returnedId].address.city + '</div>' +
                            '</li>');

                }).mouseleave(function () {
                    $('ul').empty();
                })
            })
        });
    }
};

myCode.emailValidation();
myCode.menu();


