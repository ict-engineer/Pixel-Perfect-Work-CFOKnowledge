/* javascriptのコードを記載 */
jQuery(function($){
	$.fn.extend({
        scrollToMe: function() {
            if($(this).length){
                var top = $(this).offset().top - 100;
                $('html,body').animate({scrollTop: top}, 600);
            }
        },
        scrollToJustMe: function(){
            if($(this).length){
                var top = $(this).offset().top;
                $('html,body').animate({scrollTop: top}, 600);
            }
        }
    });

    $(document).ready(function() {
        $("#hero a.scroller").off("click").on("click", function(){
            $("section.cfo-knowledge").scrollToMe();
        });
        $("footer a.scroller").off("click").on("click", function(){
            $('html,body').animate({scrollTop: 0}, 600);
        });
        $(".nav-burger").off("click").on("click",function(){
            if($("body").hasClass("nav-open")) {
                $("body").removeClass("nav-open");
            } else {
                $("body").addClass("nav-open");
            }
        });
        $(".overlay").off("click").on("click",function(){
            $("body").removeClass("nav-open");
        });
    });
});