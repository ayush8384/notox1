$(document).ready(function() {

    var customPrevArrow =
        '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.8679 21.5001L26.5337 27.2313C27.1554 27.8653 27.1554 28.891 26.5337 29.5251C25.9054 30.1583 24.8903 30.1583 24.2621 29.5251L17.4663 22.6469C16.8446 22.0129 16.8446 20.9863 17.4663 20.3531L24.2621 13.4748C24.8905 12.8409 25.9056 12.8426 26.5337 13.4748C27.1554 14.108 27.1554 15.1337 26.5337 15.7677L20.8679 21.5001Z" fill="black"/></svg>';
    var customNextArrow =
        '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.1321 22.5001L17.4663 28.2313C16.8446 28.8653 16.8446 29.891 17.4663 30.5251C18.0946 31.1583 19.1097 31.1583 19.7379 30.5251L26.5337 23.6469C27.1554 23.0129 27.1554 21.9863 26.5337 21.3531L19.7379 14.4748C19.1095 13.8409 18.0944 13.8426 17.4663 14.4748C16.8446 15.108 16.8446 16.1337 17.4663 16.7677L23.1321 22.5001Z" fill="black"/></svg>';

    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">' +
            customPrevArrow +
            "</button>",
        nextArrow: '<button type="button" class="slick-next">' +
            customNextArrow +
            "</button>",
        responsive: [{
            breakpoint: 1270,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 965,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 766,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
            }
        }]
    });

    document.getElementById("toggleBtn").addEventListener("click", function() {
        var video = document.getElementById("myvideo");
        video.play();
        document.getElementById("toggleBtn").style.display = "none"

        video.addEventListener("click", function() {
            document.getElementById("toggleBtn").style.display = "block"
            video.pause();
        })
    });


    document.getElementById("leftArrow").addEventListener("click", function() {
        let stack = document.querySelector(".stack");
        let card = stack.querySelector(".card:last-child");
        card.style.animation = "swap 700ms forwards";

        setTimeout(() => {
            card.style.animation = "";
            stack.prepend(card);
        }, 700);
    });

    document.getElementById("rightArrow").addEventListener("click", function() {
        let stack = document.querySelector(".stack");
        let card = stack.querySelector(".card");
        card.style.animation = "swap-reverse 700ms forwards";

        setTimeout(() => {
            card.style.animation = "";
            stack.appendChild(card);
        }, 700);
    });

    jQuery(".tab__label").click(function() {
        jQuery(this).parent(".tab").toggleClass("open");

        var tabContent = jQuery(this).next(".tab__content");
        tabContent.toggleClass("open");
        if (tabContent.hasClass("open")) {
            tabContent.css("max-height", tabContent.prop("scrollHeight") + "px");
        } else {
            tabContent.css("max-height", "0");
        }
    });
});

// start 3D slider

jQuery(document).ready(function() {
    function detect_active() {
        var get_active = $("#dp-slider .dp_item:first-child").data("class");
        $("#dp-dots li").removeClass("active");
        $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
    }
    $("#dp-next").click(function() {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        $.each($(".dp_item"), function(index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
        });
        detect_active();
    });

    $("#dp-prev").click(function() {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
        $.each($(".dp_item"), function(index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
        });

        detect_active();
    });

    $("#dp-dots li").click(function() {
        $("#dp-dots li").removeClass("active");
        $(this).addClass("active");
        var get_slide = $(this).attr("data-class");
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]")
            .hide()
            .prependTo("#dp-slider")
            .fadeIn();
        $.each($(".dp_item"), function(index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
        });
    });

    $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function() {
        var get_slide = $(this).attr("data-class");
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]")
            .hide()
            .prependTo("#dp-slider")
            .fadeIn();
        $.each($(".dp_item"), function(index, dp_item) {
            $(dp_item).attr("data-position", index + 1);
        });

        detect_active();
    });
});

// end 3D slider