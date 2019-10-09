//请求后台数据填充页面
(async function () {
    // var res = await ajax({
    //     url:"http://127.0.0.1:3000/index/list",
    //     type:"get",
    //     dataType:"json"
    // });
    // console.log(res);
    // var parent = document.querySelector(".zw-home-firstfoces>.zw-home-list>li:first-child");
    // var html = "";
    // for(var p of res){
    //  html += ` <img src="${p.img}" alt="" style="height:420px;width:100%; ">`;
    // }
    // parent.innerHTML = html;
    $(function(){
        var slideBox = $(".slideBox");
       
        var ul = slideBox.find("ul");

        var oneWidth = slideBox.find("ul li").eq(0).width();//移动一次的宽度
        var number = slideBox.find(".spanBox span");
        var timer = null;//设置定时器
        var sw = 0; //往左移动的数量
    })
    var res = await ajax({
        url: "http://127.0.0.1:3000/index/",
        type: "get",
        dataType: "json"
    });
    /********************1F*************************** */
    //第一个商品 
    var p = res[0];
    //console.log(p);
    var {
        details,
        pic,
        price,
        href
    } = p;
    //  找到要修改的元素
    var parent = document.querySelector("section div.zw-home-todaysale-content ul:first-child li:first-child");
    // 加载的内容
    var html = ` <a href="${href}">
                <img src="${pic}" alt="">
                <h3 class=" zw-home-todaysale-list-item-title">${details}</h3>
                <p class="price mb-2 mr-2">${price}<span>元起</span></p>
              </a>`;
    parent.innerHTML = html;
    /*********第二个商品*************/
    var p = res[1];
    var {
        details,
        pic,
        price,
        href
    } = p;
    //修改的元素
    var parent = parent.nextElementSibling;
    //加载的内容
    var html = `<a href="${href}">
                <img src="${pic}" alt="">
                <h3 class=" zw-home-todaysale-list-item-title">${details}</h3>
                <p class="price mb-2 mr-2">${price}<span>元起</span></p>
                </a>`;
    parent.innerHTML = html;
    /*********第三个商品*************/
    var p = res[2];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = ` <a href="${href}">
            <img src="${pic}" alt="">
            <h3 class=" zw-home-todaysale-list-item-title">${details}</h3>
            <p class="price mb-2 mr-2">${price}<span>元起</span></p>
            </a>`;
    parent.innerHTML = html;
    /*********第四个商品*************/
    var p = res[3];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `<a href="${href}}">
            <img src="${pic}" alt="">
            <h3 class=" zw-home-todaysale-list-item-title">${details}</h3>
            <p class="price mb-2 mr-2">${price}<span>元起</span></p>
            </a>`;
    parent.innerHTML = html;
    /*********第二排第一个商品*************/
    var p = res[4];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.parentElement.nextElementSibling.children[0];
    var html = ` <a href="${href}">
            <img src="${pic}" alt="">
            <h3 class=" zw-home-todaysale-list-item-title">${details}</h3>
            <p class="price mb-2 mr-2">${price}<span>元起</span></p>
            </a>`;
    parent.innerHTML = html;
    /*********第二排第二个商品*************/
    var p = res[5];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = ` <a href="${href}">
            <img src="${pic}" alt="">
            <h3 class=" zw-home-todaysale-list-item-title">${details}</h3>
            <p class="price mb-2 mr-2">${price}<span>元起</span></p>
            </a>`;
    parent.innerHTML = html;
    /*********第二排第3三个商品*************/
    var p = res[6];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = ` <a href="${href}">
            <img src="${pic}" alt="">
            <h3 class=" zw-home-todaysale-list-item-title">${details}</h3>
            <p class="price mb-2 mr-2">${price}<span>元起</span></p>
            </a>`;
    parent.innerHTML = html;
    /*********第二排第四三个商品*************/
    var p = res[7];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = ` <a href="${href}">
            <img src="${pic}" alt="">
            <h3 class=" zw-home-todaysale-list-item-title">${details}</h3>
            <p class="price mb-2 mr-2">${price}<span>元起</span></p>
            </a>`;
    parent.innerHTML = html;
    /****************1F  限时特卖end**************** */

    /****************2F  机酒自由行**************** */
    //第一个商品
    var p = res[8];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[1].children[0].children[0];
    var html = `   <a href="${href}">
            <img src="${pic}" alt="">
            <div class="zw-home-ziyouxing-title d-flex">
                <p>机票</p>
                 <p>${price}<span>元起</span></p>
            </div>
            <div class="zw-home-ziyouxing-info">
                <h3 class="text-truncate">${details}</h3>
                <p>旅行时间 2016/10-2018/12</p>
            </div>  
            </a>`;
    parent.innerHTML = html;
    //第二个商品
    var p = res[9];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `  <a href="${href}">
            <img src="${pic}" alt="">
            <div class="zw-home-ziyouxing-subtitle d-flex ">
                <p>机票</p>
                <p>${price}<span>元起</span></p>
            </div>
            <div class="zw-home-ziyouxing-info1">
                <h3 class="">${details}</h3>
            </div>
            </a>`;
    parent.innerHTML = html;
    //第3三个商品
    var p = res[10];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `  <a href="${href}">
            <img src="${pic}" alt="">
            <div class="zw-home-ziyouxing-subtitle d-flex ">
                <p>机票</p>
                <p>${price}<span>元起</span></p>
            </div>
            <div class="zw-home-ziyouxing-info1">
                <h3 class="">${details}</h3>
            </div>
            </a>`;
    parent.innerHTML = html;
    //  第四个商品
    var p = res[11];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `  <a href="${href}">
            <img src="${pic}" alt="">
            <div class="zw-home-ziyouxing-subtitle d-flex ">
                <p>机票</p>
                <p>${price}<span>元起</span></p>
            </div>
            <div class="zw-home-ziyouxing-info1">
                <h3 class="">${details}</h3>
            </div>
            </a>`;
    parent.innerHTML = html;
    //  第五个商品
    var p = res[12];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `  <a href="${href}">
            <img src="${pic}" alt="">
            <div class="zw-home-ziyouxing-subtitle d-flex ">
                <p>机票</p>
                <p>${price}<span>元起</span></p>
            </div>
            <div class="zw-home-ziyouxing-info1">
                <h3 class="">${details}</h3>
            </div>
            </a>`;
    parent.innerHTML = html;
    //第六个
    var p = res[13];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `  <a href="${href}">
            <img src="${pic}" alt="">
            <div class="zw-home-ziyouxing-subtitle d-flex ">
                <p>机票</p>
                <p>${price}<span>元起</span></p>
            </div>
            <div class="zw-home-ziyouxing-info1">
                <h3 class="">${details}</h3>
            </div>
            </a>`;
    parent.innerHTML = html;
    /****************2F  机酒自由行  end**************** */

    /****************3F  当地玩乐**************** */
    //  第一行第一个产品
    var p = res[14];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = document.querySelector(".zw-home-wanle-content>ul>li:first-child");
    var html = `  <a href="${href}">
        <img src="${pic}" alt="">
        <div class="mask"></div>
        <h3 class="title">${details}</h3>
        <div class="zw-home-wanle-info d-flex justify-content-between">
            <p class="type ">城市玩乐</p>
           <p class="price">${price}<span>元起</span></p>
        </div>
        </a>`
    parent.innerHTML = html;
    // 第二个产品
    var p = res[15];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = ` <a href="${href}">
            <p class="pics"><img src="${pic}" width="120" height="120" style="display: block;">
            <h3 class="title1">${details}</h3></p>
            <p class="price">${price}<span>元起</span></p>
        </a>`
    parent.innerHTML = html;
    //第三个产品 右2
    // 第二个产品
    var p = res[16];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = ` <a href="${href}" >
    <p class="pics"><img src="${pic}" width="120" height="120" style="display: block;">
    <h3 class="title1">${details}</h3></p>
    <p class="price">${price}<span>元起</span></p>
    </a>`
    parent.innerHTML = html;
    //查看更多的下一个 第四个产品
    var p = res[17];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling.nextElementSibling;
    var html = ` <a href="${href}" >
    <p class="pics"><img src="${pic}" width="120" height="120" style="display: block;">
    <h3 class="title1">${details}</h3></p>
    <p class="price">${price}<span>元起</span></p>
    </a>`
    parent.innerHTML = html;
    //第五个产品
    var p = res[18];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling
    var html = ` <a href="${href}" >
    <p class="pics"><img src="${pic}" width="120" height="120" style="display: block;">
    <h3 class="title1">${details}</h3></p>
    <p class="price">${price}<span>元起</span></p>
    </a>`
    parent.innerHTML = html;
    //第六个产品
    var p = res[19];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = ` <a href="${href}" >
    <p class="pics"><img src="${pic}" width="120" height="120" style="display: block;">
    <h3 class="title1">${details}</h3></p>
    <p class="price">${price}<span>元起</span></p>
    </a>`
    parent.innerHTML = html;
    /****************3F  当地玩乐   end**************** */
    /****************4F  最世界丶深度旅行**************** */
    //第一个产品
    var p = res[20];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = document.querySelector(".zw-home-zhuanti-content>ul>li:first-child");
    var html = `   <a href="${href}" class="">
                <p class="zw-home-titlerow-icon">
                        海外<br>
                        City Walk
                    </p>  
            <img src="${pic}" alt="">
            <div class="zw-home-zhuanti-title d-flex">
           <p class="price">${price}<span>元起</span></p>
            </div>
            <div class="zw-home-ziyouxing-info">
                <h3 class="text-truncate">${details}</h3>
            </div>  
            </a>`
    parent.innerHTML = html;
    //第二个产品
    var p = res[21];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `<a href="${href}">
            <img src="${pic}" alt="">
            <div class="zw-home-ziyouxing-subtitle d-flex ">
            <p>${price}<span>元起</span></p>
            </div>
            <div class="zw-home-ziyouxing-info1">
                <h3 class="">${details}</h3>
            </div>
        </a>`
    parent.innerHTML = html;
    // 第三个
    var p = res[22];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `<a href="${href}">
                <img src="${pic}" alt="">
                <div class="zw-home-ziyouxing-subtitle d-flex ">
                <p>${price}<span>元起</span></p>
                </div>
                <div class="zw-home-ziyouxing-info1">
                    <h3 class="">${details}</h3>
                </div>
            </a>`
    parent.innerHTML = html;
    // 第四个
    var p = res[23];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `<a href="${href}">
                <img src="${pic}" alt="">
                <div class="zw-home-ziyouxing-subtitle d-flex ">
                <p>${price}<span>元起</span></p>
                </div>
                <div class="zw-home-ziyouxing-info1">
                    <h3 class="">${details}</h3>
                </div>
            </a>`
    parent.innerHTML = html;
    //第五个
    var p = res[24];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `<a href="${href}">
                <img src="${pic}" alt="">
                <div class="zw-home-ziyouxing-subtitle d-flex ">
                <p>${price}<span>元起</span></p>
                </div>
                <div class="zw-home-ziyouxing-info1">
                    <h3 class="">${details}</h3>
                </div>
            </a>`
    parent.innerHTML = html;
    //第六个
    var p = res[25];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `<a href="${href}">
                <img src="${pic}" alt="">
                <div class="zw-home-ziyouxing-subtitle d-flex ">
                <p>${price}<span>元起</span></p>
                </div>
                <div class="zw-home-ziyouxing-info1">
                    <h3 class="">${details}</h3>
                </div>
            </a>`
    parent.innerHTML = html;
    /****************4F  最世界丶深度旅行  end**************** */

    /****************5F  跟团/半自助游**************** */
    var p = res[26];
    var {
        details,
        pic,
        price,
        href
    } = p;;
    var parent = document.querySelector("#zw-home-group .zw-home-zhuanti-content>ul>li:first-child");

    var html = `   <a href="${href}" class="">
                  <p class="zw-home-titlerow-icon">
                          海外<br>
                          City Walk
                      </p>  
              <img src="${pic}" alt="">
              <div class="zw-home-zhuanti-title d-flex">
             <p class="price">${price}<span>元起</span></p>
              </div>
              <div class="zw-home-ziyouxing-info">
                  <h3 class="text-truncate">${details}</h3>
              </div>  
              </a>`
    parent.innerHTML = html;
    //第二个产品
    var p = res[27];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `<a href="${href}">
              <img src="${pic}" alt="">
              <div class="zw-home-ziyouxing-subtitle d-flex ">
              <p>${price}<span>元起</span></p>
              </div>
              <div class="zw-home-ziyouxing-info1">
                  <h3 class="">${details}</h3>
              </div>
          </a>`
    parent.innerHTML = html;
    // 第三个
    var p = res[28];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `<a href="${href}">
                  <img src="${pic}" alt="">
                  <div class="zw-home-ziyouxing-subtitle d-flex ">
                  <p>${price}<span>元起</span></p>
                  </div>
                  <div class="zw-home-ziyouxing-info1">
                      <h3 class="">${details}</h3>
                  </div>
              </a>`
    parent.innerHTML = html;
    // 第四个
    var p = res[29];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `<a href="${href}">
                  <img src="${pic}" alt="">
                  <div class="zw-home-ziyouxing-subtitle d-flex ">
                  <p>${price}<span>元起</span></p>
                  </div>
                  <div class="zw-home-ziyouxing-info1">
                      <h3 class="">${details}</h3>
                  </div>
              </a>`
    parent.innerHTML = html;
    //第五个
    var p = res[30];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `<a href="${href}">
                  <img src="${pic}" alt="">
                  <div class="zw-home-ziyouxing-subtitle d-flex ">
                  <p>${price}<span>元起</span></p>
                  </div>
                  <div class="zw-home-ziyouxing-info1">
                      <h3 class="">${details}</h3>
                  </div>
              </a>`
    parent.innerHTML = html;
    //第六个
    var p = res[31];
    var {
        details,
        pic,
        price,
        href
    } = p;
    var parent = parent.nextElementSibling;
    var html = `<a href="${href}">
                  <img src="${pic}" alt="">
                  <div class="zw-home-ziyouxing-subtitle d-flex ">
                  <p>${price}<span>元起</span></p>
                  </div>
                  <div class="zw-home-ziyouxing-info1">
                      <h3 class="">${details}</h3>
                  </div>
              </a>`
    parent.innerHTML = html;
})();

//选项条
jQuery.fn.tab = function () {
    this //侵入
        .children("div.zw-home-titlerow")
        .children("ul:first")
        .addClass("tabs") //ul
        .children("li:first") //第一个li
        .addClass("active")
        .parent().children() //所有的li下的a元素
        .children("a") //a
        .attr("data-toggle", "tab")
        .parent().parent()
        .next().addClass("container") //div
        .children("div:first").addClass("active") //第一个div
    //触发事件的元素
    $(".tabs:has([data-toggle=tab])")
        .on("mouseover", "[data-toggle]", e => {
            var $tar = $(e.target);
            if (!$tar.parent().is(".active")) {
                $tar.parent().addClass("active")
                    .siblings().removeClass("active");
                var id = $tar.attr("data-target");
                $(id).addClass("show")
                    .siblings().removeClass("show");
            }
        })
}
$(function () { ////DOM操作加载完就提前执行,不等css和图片
    //选项卡
    $(".zw-home-wanle .zw-home-ziyouxing-warp").tab();
    $(".zw-home-ziyouxing .zw-home-ziyouxing-warp").tab();
    $(".zw-home-zhuanti .zw-home-ziyouxing-warp").tab();
    $("#zw-home-group .zw-home-ziyouxing-warp").tab();
})