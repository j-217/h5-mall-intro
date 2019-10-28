$(function(){
    var screen_height = $(window).height();
    var p2_is_loaded = false;
    var p3_is_loaded = false;
    var p5_is_loaded = false;
    $("#fullpage").fullpage({
        navigation: true,
        scrollingSpeed: 1000,
        afterLoad: function(origin, destination, direction){
            // console.log(origin);
            // console.log(destination);
            // 第二屏
            if(destination.index == 1 && p2_is_loaded == false){
                $(".search").animate({"right": 389}, 1500, function(){
                    $(".keywords").animate({"opacity": 1}, 500, function(){
                        $(".search").hide();
                        $(".search_02").show().animate({"height": 30, "top": 20, "right": 245}, 800);
                        $(".sofa-2-1").show().animate({"height": 218}, 800);
                        $(".slogan-2-2").animate({"opacity": 1}, 800);
                        p2_is_loaded = true;
                    });
                });
            }
        },
        onLeave: function(origin, destination, direction){
            if(destination.index == 2 && direction == "down" && p2_is_loaded == true){
                $(".sofa-2-2").show().animate({"bottom": -(screen_height - 345), "left": 263, "height": 166}, 1200, function(){
                    $(".sofa-2-2").hide();
                    $(".sofa-3-1").show(0, function(){
                        $(".size-3-2").animate({"opacity": 1}, 500, function(){
                            $(".cart-3-2").animate({"opacity": 1}, 500, function(){
                                $(".size-3-1, .cart-3-1").hide();
                                p3_is_loaded = true;
                            })
                        });
                    });
                });
                $(".cover-2").show();
            };
            if(destination.index == 3 && direction == "down" && p3_is_loaded == true){
                $(".sofa-3-1").hide();
                $(".sofa-3-2").show().animate({"bottom": -(screen_height - 215), "left": 455}, 1200, function(){
                    $(".sofa-3-2").hide();
                    $(".sofa-4-1").show(0, function(){
                        $(".wrap4-cart").animate({"left": "150%"}, 2000, function(){
                            $(".slogan-4-1").hide();
                            $(".slogan-4-2").animate({"opacity": 1}, 1000);
                            $(".wrap4-note").fadeIn(1000, function(){
                                $(".note-4").fadeIn(1000);
                            });
                        });
                    });
                });
            };
            if(destination.index == 4 && direction == "down"){
                $(".hand-5").animate({"bottom": 0}, 1000, function(){
                    $(".mouse-5-2").animate({"opacity": 1}, 1000, function(){
                        $(".mouse-5-1").hide();
                        $(".sofa-5").show().animate({"top": 390}, 800, function(){
                            $(".order-5").animate({"top": 165}, 500);
                            p5_is_loaded = true;
                        });
                    });
                });
            };
            if(destination.index == 5 && direction == "down" && p5_is_loaded == true){
                $(".sofa-5").animate({"top": 2 * screen_height - 564, "left": 250,"height": 50}, 1200);
                $(".box-6").animate({"left": 430}, 1200, function(){
                    $(".sofa-5").hide();
                    $(this).animate({"bottom": 100}, 500, function(){
                        $(this).hide();
                        $(".address-6").fadeIn(500, function(){
                            $(".section6").animate({"background-positionX": "100%"}, 4000, function(){
                                $(".boy-6").show().animate({"height": 250,"right": 550}, 500, function(){
                                    $(".check-6").fadeIn(500, function(){
                                        $(".door-6").show(0, function(){
                                            $(".girl-6").show().animate({"height": 250, "right": 400}, 500);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            };
            if(destination.index == 6 && direction == "down"){
                setTimeout(function(){
                    $(".stars-7").animate({"width": 100}, 1000, function(){
                    $(".comment-7").fadeIn(500);
                    });
                }, 1000);                
            };
            if(destination.index == 7 && direction == "down"){
                $(".start-8-1").mouseenter(function(){
                    $(".start-8-2").show();
                });
                $(".start-8-1").mouseleave(function(){
                    $(".start-8-2").hide();
                });
                $(document).mousemove(function(event){
                        var x = event.pageX - $(".hand-8").width()/2;
                        var y = event.pageY + 5;
                        var min_y = $(window).height() - $(".hand-8").height();
                        if(y < min_y){
                            y = min_y;
                        }
                        $(".hand-8").css({"left": x,"top":y});
                });
                $(".again-8").click(function(event){
                    $.fn.fullpage.moveTo(1);
                    window.location.reload();
                });
            };
        },
    });
});