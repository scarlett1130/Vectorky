var jr444 = jQuery.noConflict();
jr444(document).ready(function() {
    var current_index = 0;
    $('.banner_slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 5000
    });

    $(".header_menu .mobile_menu").click(function() {
        $(this).parent('.header_menu').toggleClass('openMenu');
    });

    $(document).click(function(e) {
        var menu = $(".header_menu .mobile_menu");
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            $(".header_menu").removeClass('openMenu');
        }
    });


    $(".thumbnail_menu li a").click(function() {
        $(".thumbnail_menu li").removeClass('active');
        $(this).parent('li').addClass('active');


        $(".thumbnail_menu li a").removeClass('aactive');
        $(this).addClass('aactive');
        var dataIndex = $(this).parent('li').index();
        current_index = dataIndex
        $(".owl-dots div strong").each(function() {
            var Index = parseInt($(this)[0].innerText);
            if (dataIndex == Index) {
                $(this).trigger('click');
            }
        });

        if (dataIndex == 0) {
            $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(180,86,58,0.91)');

            $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(180,86,58,0.91)');

            var offsetLeft = $(this).offset().left;
            var Width = $(this).width();
            var total = offsetLeft + Width + 10;
            $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
            $("#footer").removeClass('d-block');
        } else if (dataIndex == 1) {
            $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(134,135,139,0.91)');
            $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(134,135,139,0.91)');
            var offsetLeft = $(this).offset().left;
            var Width = $(this).width();
            var total = offsetLeft + Width + 10;
            $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
            $("#footer").removeClass('d-block');
        } else if (dataIndex == 2) {
            $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(43,37,37,0.91)');

            $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(43,37,37,0.91)');

            var offsetLeft = $(this).offset().left;
            var Width = $(this).width();
            var total = offsetLeft + Width + 10;
            $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
            $("#footer").removeClass('d-block');
        } else if (dataIndex == 3) {
            $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(180,86,58,0.91)');

            $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(180,86,58,0.91)');

            var offsetLeft = $(this).offset().left;
            var Width = $(this).width();
            var total = offsetLeft + Width + 10;
            $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
            $("#footer").removeClass('d-block');
        } else if (dataIndex == 4) {
            $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(134,135,139,0.91)');
            $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(134,135,139,0.91)');

            $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: 100%;}</style>');
            $("#footer").addClass('d-block');
        }
    });

    $(document).ready(function() {
        // var offsetLeft = $(".slider_thumbnail_part .thumbnail_menu li:first-child").offset().left;
        // var Width = $(".slider_thumbnail_part .thumbnail_menu li:first-child").width();
        // var total = offsetLeft + Width + 10;
        // $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>')
    });

    $(".slider_thumbnail_part .mouse").click(function() {
        var Index = (++current_index) % 5;
        $(".owl-dots div strong").each(function() {
            var innerIndex = parseInt($(this)[0].innerText);
            if (Index == innerIndex) {
                $(this).trigger('click');
                if (innerIndex == 0) {
                    $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(180,86,58,0.7)');

                    $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(180,86,58,0.7)');

                    $(".thumbnail_menu li").each(function() {
                        var ind = $(this).index();
                        if (ind == 0) {
                            $(".thumbnail_menu li").removeClass('active');
                            $(this).addClass('active');
                            var offsetLeft = $(this).offset().left;
                            var Width = $(this).width();
                            var total = offsetLeft + Width + 10;
                            $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
                            $("#footer").removeClass('d-block');
                        }
                    });
                } else if (innerIndex == 1) {
                    $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(134,135,139,0.7)');
                    $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(134,135,139,0.7)');

                    $(".thumbnail_menu li").each(function() {
                        var ind = $(this).index();
                        if (ind == 1) {
                            $(".thumbnail_menu li").removeClass('active');
                            $(this).addClass('active');
                            var offsetLeft = $(this).offset().left;
                            var Width = $(this).width();
                            var total = offsetLeft + Width + 10;
                            $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
                            $("#footer").removeClass('d-block');
                        }
                    });
                } else if (innerIndex == 2) {
                    $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(43,37,37,0.7)');
                    $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(43,37,37,0.7)');


                    $(".thumbnail_menu li").each(function() {
                        var ind = $(this).index();
                        if (ind == 2) {
                            $(".thumbnail_menu li").removeClass('active');
                            $(this).addClass('active');
                            var offsetLeft = $(this).offset().left;
                            var Width = $(this).width();
                            var total = offsetLeft + Width + 10;
                            $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
                            $("#footer").removeClass('d-block');
                        }
                    });
                } else if (innerIndex == 3) {
                    $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(180,86,58,0.7)');

                    $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(180,86,58,0.7)');

                    $(".thumbnail_menu li").each(function() {
                        var ind = $(this).index();
                        if (ind == 3) {
                            $(".thumbnail_menu li").removeClass('active');
                            $(this).addClass('active');
                            var offsetLeft = $(this).offset().left;
                            var Width = $(this).width();
                            var total = offsetLeft + Width + 10;
                            $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
                            $("#footer").removeClass('d-block');
                        }
                    });
                } else if (innerIndex == 4) {
                    $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(134,135,139,0.7)');
                    $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(134,135,139,0.7)');


                    $(".thumbnail_menu li").each(function() {
                        var ind = $(this).index();
                        if (ind == 4) {
                            $(".thumbnail_menu li").removeClass('active');
                            $(this).addClass('active');
                            $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: 100%;}</style>');
                            $("#footer").addClass('d-block');
                        }
                    });
                }
            }
        });
    });

    $(document).ready(function() {
        setInterval(function() {
            $(".owl-dots div strong").each(function() {
                if ($(this).hasClass('active')) {
                    var Index = parseInt($(this)[0].innerText) + 1;
                    $(".slider_thumbnail_part .mouse").attr('data-index', Index);
                }
            });
        }, 1000);
    });

    $(document).ready(function() {
        $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(180,86,58,0.7)');


        $(".fname").change(function() {
            // Print entered value in a div box

            if ($(".fname").val() != "") {
                $('.pfname').hide();
            } else {
                $('.pfname').show();

            }

        });
        $(".fmobile").change(function() {
            // Print entered value in a div box

            if ($(".fmobile").val() != "") {
                $('.pmobile').hide();
            } else {
                $('.pmobile').show();

            }

        });

        $(".femail").change(function() {
            // Print entered value in a div box

            if ($(".femail").val() != "") {
                $('.pemail').hide();
            } else {
                $('.pemail').show();

            }

        });

        $(".fmessage").change(function() {
            // Print entered value in a div box

            if ($(".fmessage").val() != "") {
                $('.pmessage').hide();
            } else {
                $('.pmessage').show();

            }

        });



        setInterval(function() {
            $(".owl-dots div strong").each(function() {
                if ($(this).hasClass('active')) {
                    var Index = parseInt($(this)[0].innerText);
                    if (Index == 0) {
                        $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(180,86,58,0.7)');

                        $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(180,86,58,0.7)');

                        $(".thumbnail_menu li").each(function() {
                            var ind = $(this).index();
                            if (ind == 0) {
                                $(".thumbnail_menu li").removeClass('active');
                                $(this).addClass('active');

                                $(".thumbnail_menu li a").removeClass('aactive');
                                $(this).find("a").addClass('aactive');
                                var offsetLeft = $(this).offset().left;
                                var Width = $(this).width();
                                var total = offsetLeft + Width + 10;
                                $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
                                $("#footer").removeClass('d-block');
                            }
                        });
                    } else if (Index == 1) {
                        $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(134,135,139,0.7)');

                        $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(134,135,139,0.7)');

                        $(".thumbnail_menu li").each(function() {
                            var ind = $(this).index();
                            if (ind == 1) {
                                $(".thumbnail_menu li").removeClass('active');
                                $(this).addClass('active');

                                $(".thumbnail_menu li a").removeClass('aactive');
                                $(this).find("a").addClass('aactive');

                                var offsetLeft = $(this).offset().left;
                                var Width = $(this).width();
                                var total = offsetLeft + Width + 10;
                                $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
                                $("#footer").removeClass('d-block');
                            }
                        });
                    } else if (Index == 2) {
                        $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(43,37,37,0.7)');

                        $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(43,37,37,0.7)');

                        $(".thumbnail_menu li").each(function() {
                            var ind = $(this).index();
                            if (ind == 2) {
                                $(".thumbnail_menu li").removeClass('active');
                                $(this).addClass('active');

                                $(".thumbnail_menu li a").removeClass('aactive');
                                $(this).find("a").addClass('aactive');

                                var offsetLeft = $(this).offset().left;
                                var Width = $(this).width();
                                var total = offsetLeft + Width + 10;
                                $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
                                $("#footer").removeClass('d-block');
                            }
                        });
                    } else if (Index == 3) {
                        $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(180,86,58,0.7)');

                        $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(180,86,58,0.7)');

                        $(".thumbnail_menu li").each(function() {
                            var ind = $(this).index();
                            if (ind == 3) {
                                $(".thumbnail_menu li").removeClass('active');
                                $(this).addClass('active');


                                $(".thumbnail_menu li a").removeClass('aactive');
                                $(this).find("a").addClass('aactive');
                                var offsetLeft = $(this).offset().left;
                                var Width = $(this).width();
                                var total = offsetLeft + Width + 10;
                                $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: ' + total + 'px;}</style>');
                                $("#footer").removeClass('d-block');
                            }
                        });
                    } else if (Index == 4) {
                        $("#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part").css('background-color', 'rgba(134,135,139,0.7)');

                        $("#bannerSlider .banner_slider_section .banner_slider_content .mouse .dot").css('background-color', 'rgba(134,135,139,0.7)');

                        $(".thumbnail_menu li").each(function() {
                            var ind = $(this).index();
                            if (ind == 4) {
                                $(".thumbnail_menu li").removeClass('active');
                                $(this).addClass('active');

                                $(".thumbnail_menu li a").removeClass('aactive');
                                $(this).find("a").addClass('aactive');

                                var offsetLeft = $(this).offset().left;
                                var Width = $(this).width();
                                var total = offsetLeft + Width + 10;
                                $('body').append('<style>#bannerSlider .banner_slider_section .banner_slider_content .slider_thumbnail_part:after{width: 100%;}</style>');
                                $("#footer").addClass('d-block');
                            }
                        });
                    }
                }
            });
        }, 5000);
    });
});