(async function (){


    var $prev=$(".img_slide>div>p:first>img");
    var $next=$(".img_slide>div>p:last>img");
    var $ul=$(".sm_img_list");
    var moved=0,LIWIDTH=85;
    //往左移动
    $next.click(function(){
        var $next=$(this);
        //如果当前按钮不是禁用的
       if(!$next.is(".disabled")){
        moved++;
        $ul.css("marginLeft",-LIWIDTH*moved);
        $prev.removeClass("disabled");
        if($ul.children().length-3==moved){
            $next.addClass("disabled")
        }
       }
    })
    //往右移动
    $prev.click(function(){
        var $prev=$(this);
        if(!$prev.is(".disabled")){
            moved--;
            $ul.css("marginLeft",-LIWIDTH*moved);
            $prev.removeClass("disabled");
            if(moved==0){
                $prev.addClass("disabled")
            }else{
                $next.removeClass("disabled")
            }
        }
    })
    //更换图片
    var $limg=$(".lg_img>img");
    $ul.on("mouseover","img",function(){
        var md=$(this).attr("data-md");
        $limg.attr("src",md);
    })
})()