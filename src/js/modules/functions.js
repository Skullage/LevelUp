export function isWebp() {

    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function Timer() {
    let totalSeconds = parseInt($('.order__minutes').text()) * 60 + parseInt($('.order__seconds').text()), int;
    int = setInterval(function() {
        if(totalSeconds > 0) {
            totalSeconds--;
            if(Math.floor(totalSeconds / 60) < 10) {
                $('.order__minutes').text('0' + Math.floor(totalSeconds / 60));
            } else {
                $('.order__minutes').text(Math.floor(totalSeconds / 60));
            }

            if(totalSeconds % 60 < 10) {
                $('.order__seconds').text('0' + totalSeconds % 60);
            } else {
                $('.order__seconds').text(totalSeconds % 60);
            }
        } else {
            clearInterval(int);
            $('.order__minutes').css({'display':'none',});
            $('.order__seconds').css({'display':'none',});
            $('.order__end').css({'display':'block',});
        }
    }, 1000);
}

export function checkNumber() {
    $(".form__phone").keypress(function (e){
        let charCode = (e.which) ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
        }
      });
    $('.form__phone').keydown(function(event) {
        if (!(!event.shiftKey // запрет шифт + цифра
                && !(event.keyCode < 48 || event.keyCode > 57) // цифры
                || !(event.keyCode < 96 || event.keyCode > 105) // numpad
                || event.keyCode == 46 // delete
                || event.keyCode == 8  // backspace
                || event.keyCode == 9  // tab
                || event.keyCode == 27 // escape
                || (event.keyCode == 65 && (event.ctrlKey === true || event.metaKey === true)) // Ctrl+A
                || (event.keyCode == 67 && (event.ctrlKey === true || event.metaKey === true)) // Ctrl+C
                || (event.keyCode == 86 && (event.ctrlKey === true || event.metaKey === true)) // Ctrl+V
                || (event.keyCode >= 35 && event.keyCode <= 39) // Home, End
                )) {
            event.preventDefault();
        }
    });
}

export function scroll() {
    $('.scroll__btn').click(function() {
        console.log(1)
        $('html, body').animate({
            scrollTop: $("#order").offset().top
        }, 2000);
    })
}