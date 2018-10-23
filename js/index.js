$(".hab").on("click",function(){
    $(".overlay").addClass("active");
    console.log("aa");
    return false;
    
    
})
$(".close").on("click",function(){
    $(".overlay").removeClass("active");
    console.log("bb");
    
})

var globalIndex=0;
var timer,isRun=true,isTimer=true;
var aSlist=document.querySelector(".slider-list");
var aMain=document.querySelector(".main-slider");
var aRrow=document.querySelector(".arrow");

function change(index){
    isRun=false;
    var direction=1;
    index > globalIndex ?direction=1 :direction=-1;
    globalIndex=index;
    timer=setInterval(function(){
        aSlist.style.left=aSlist.offsetLeft -direction * 10 +"px";
        if(aSlist.offsetLeft == -index * 885){
            clearInterval(timer);
            if(index==2){
                aSlist.style.left=0;
                globalIndex=0;
            }
        }
        console.log("aa");
        
    },16)
    console.log("cc");
    
}


aRrow.onclick=function(){
    if(isRun){
        change(globalIndex++);
    }
}
setInterval(function(){
    if(isRun &&isTimer){
        change(globalIndex++);
        console.log("bb");
        
    }
},1500)

aMain.onmouseover=function(){
    isTimer=false;
}
aMain.onmouseout=function(){
    isTimer=true;
}

