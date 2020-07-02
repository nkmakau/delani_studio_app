$(document).ready(function () {
    $("#design-img").click(function () {
        $("#design-img").slideDown('1500').hide('1000');
        $("#design").show('1500');
    });
    $("#design").click(function () {
        $("#design").slideUp('1500');
        $("#design-img").slideDown('1500');
    });
});

$(document).ready(function () {
    $("#development-img").click(function () {
        $("#development-img").slideDown('1500').hide('1000');
        $("#development").show('1500');
    });
    $("#development").click(function () {
        $("#development").slideUp('1500');
        $("#development-img").slideDown('1500');
    });
});

$(document).ready(function () {
    $("#product-img").click(function () {
        $("#product-img").slideDown('1500').hide('1000');
        $("#product").show('1500');
    });
    $("#product").click(function () {
        $("#product").slideUp('1500');
        $("#product-img").slideDown('1500');
    });
});

$(document).ready(function () {
    $("#port1").mouseover(function () {
        $("#overlay1").show();
    }).mouseout(function () {
        $("#overlay1").hide();
    });
});
$(document).ready(function () {
    $("#port2").mouseover(function () {
        $("#overlay2").show();
    }).mouseout(function () {
        $("#overlay2").hide();
    });
});
$(document).ready(function () {
    $("#port3").mouseover(function () {
        $("#overlay3").show();
    }).mouseout(function () {
        $("#overlay3").hide();
    });
});
$(document).ready(function () {
    $("#port4").mouseover(function () {
        $("#overlay4").show();
    }).mouseout(function () {
        $("#overlay4").hide();
    });
});

$(document).ready(function () {
    $("#port5").mouseover(function () {
        $("#overlay5").show();
    }).mouseout(function () {
        $("#overlay5").hide();
    });
    $("#port6").mouseover(function () {
        $("#overlay6").show();
    }).mouseout(function () {
        $("#overlay6").hide();
    });
    $("#port7").mouseover(function () {
        $("#overlay7").show();
    }).mouseout(function () {
        $("#overlay7").hide();
    });
    $("#port8").mouseover(function () {
        $("#overlay8").show();
    }).mouseout(function () {
        $("#overlay8").hide();
    });
});

$(document).ready(function () {
    $("form#delanicf").submit(function (event) {
        var name = $("input#fullname").val()
        var email = $("input#email").val()
        var message = $("textarea#message").val()
        if ($("input#email").val() && $("input#fullname").val()) {
            alert(name + ", Thank you for your message. Our representative will be intouch soonest.")
        }
        else {
            alert("Opps!! Please enter your name and email!")
            event.preventDefault();
        }

    });

});