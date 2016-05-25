/**
 * Created by Administrator on 2015/8/25.
 */
var jWindow = $(window);
jWindow.scroll(function(){
    var scrollHeight = jWindow.scrollTop();
    var contentHeight = $(".articles").height() - $("#navbar-left").height();
    console.log("height--" + contentHeight + "   scrollHeight--" + scrollHeight);

    if(scrollHeight > 600 && scrollHeight < contentHeight + 600){
        $("#navbar-left").css({
            position:"fixed",
            left:"0px",
            top:"0px"
        });
    }else if(scrollHeight <= 600){
        $("#navbar-left").css({
            position:"absolute",
            float:"left",
            left:"0px",
            top:"600px"
        });
    }else if(scrollHeight >= contentHeight + 600){
        $("#navbar-left").css({
            position:"absolute",
            float:"left",
            left:"0px",
            top:"600px"
        });
    }
});