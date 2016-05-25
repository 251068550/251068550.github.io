/**
 * Created by Administrator on 2015/8/26.
 */

$(document).ready(function () {
   $(window).on("load", function(){
       imgLocation();

       var dataImg = {"data":[{"src":"pic1.jpg"},{"src":"pic2.jpg"},{"src":"pic3.jpg"},{"src":"pic4.jpg"},
           {"src":"pic5.jpg"},{"src":"pic6.jpg"},{"src":"pic7.jpg"},{"src":"pic8.jpg"},
           {"src":"pic9.jpg"},{"src":"pic10.jpg"}]};

       window.onscroll = function(){
           if(scrollSide()){
               $.each(dataImg.data,function(index,value){
                   var box = $("<div>").addClass("box").appendTo($("#container"));
                   var img = $("<img>").attr("src","img/" + $(value).attr("src")).appendTo(box);
                   //var desc = $("<div>").addClass("desc").appendTo(box);
                   //var p = $("<p>").wrapInner("��ǩ:").appendTo(desc);
                   //var a = $("<a>").attr("href","#").wrapInner("charactor").appendTo(p);
               });
               imgLocation();
           }
       };
   });
});

function scrollSide(){
    var box = $(".box");
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastBoxHeight < scrollHeight + documentHeight)?true:false;
}

function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = 4;
    var boxArr = [];
    box.each(function(index, value){
        var boxHeight = box.eq(index).height();
        if(index < num){
            boxArr[index] = boxHeight;
        }else{
            var minboxHeight = Math.min.apply(null, boxArr);
            var minboxIndex = $.inArray(minboxHeight,boxArr);

            $(value).css({
                "position":"absolute",
                "top":minboxHeight + 20,
                "left":box.eq(minboxIndex).position().left
            });

            boxArr[minboxIndex] += box.eq(index).height() + 20;
        }
    });
}