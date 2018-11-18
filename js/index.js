$(".hab").on("click",function(){
    $(".overlay").addClass("active");
    $("body").addClass("active");
    console.log("aa");
    return false;
    
    
})
$(".close").on("click",function(){
    $(".overlay").removeClass("active");
    $("body").removeClass("active");
    console.log("bb");
    
})


var Width=$(".slider-list img").width();
var nowIndex=0;
var timer1;
    setInterval(function(){
    if(nowIndex==2){
        nowIndex=0;
    }
    $(".slider-list").css({ 
        transform:'translateX(-'+Width * (nowIndex++)+'px)'
    })
}
,1500);
  
    $("#Arrow").mouseover(function(){
        $("#Arrow").css({
            transform:'translateX(7px)',
            transition:'all .3s ease'
        })
    })
    $("#Arrow").mouseout(function(){
        $("#Arrow").css({
            transform:'translateX(-7px)',
            transition:'all .3s ease'
        })
    })
    $(".top").mouseover(function(){
        $(".top").css({
            transform:'translateY(-7px)',
            transition:'all .3s ease'
        })
    });
    $(".top").mouseout(function(){
        $(".top").css({
            transform:'translateY(0px)',
            transition:'all .3s ease'
        })
    })



/*下面是横向滚动*/ 
var scrollBar=$(".scroll-item")[0];
var timer=null;
$("#next").on("click",function(){
    run("left");
});
$("#pre").on("click",function(){
    run("right");
});
function run(dire){
    var scrollLeft=dire =="left" ?scrollBar.scrollLeft +300 :scrollBar.scrollLeft -300;
    $(".scroll-item").animate({
        scrollLeft:scrollLeft
    },500,function(){
        showArrow();
    })
}
function showArrow(){
    $("#pre").add("#next").show();
    if(scrollBar.scrollLeft <=0){
        $("#pre").hide();
    }
    else if(scrollBar.scrollLeft>=scrollBar.scrollWidth -scrollBar.clientWidth){
        $("#next").hide();
    }
}
$(".scroll-item").on("scroll",function(){
    if($(this).data("timer")){
        clearTimeout($(this).data("timer"));
    }
    $(this).data("timer",setTimeout(function(){showArrow()},1000));
})

