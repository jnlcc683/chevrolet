$(document).ready(function(){


    //4페이지 탭메뉴
    let direction_img_arr = [
        "./img/front.png",
        "./img/side_final_final.png",
        "./img/rear.png"
    ]
    $(".direction_list>li").click(function(){
        let idx = $(this).index()
        $(".direction_img").attr("src",direction_img_arr[idx])
    })

    $(".direction_list>li").click(function(){
        $(".direction_list>li").removeClass("on")
        $(this).addClass("on")
    })




    //5페이지 탭메뉴
    let turbo_engine_arr = [
        "./img/turbo_engine.jpg",
        "./img/exterior.jpg",
        "./img/interior.jpg",
        "./img/convenience.jpg"
    ]
    $(".direction_list5>li").click(function(){
        let idx = $(this).index()
        $(".turbo_engine").attr("src",turbo_engine_arr[idx])
    })

    $(".direction_list5>li").click(function(){
        $(".direction_list5>li").removeClass("on")
        $(this).addClass("on")
    })



    //6페이지 탭메뉴
    let tabgroup_2025_arr = [
        "./img/2025.png",
        "./img/2024.png",
        "./img/2023.png"
    ]
    $(".direction_list6>li").click(function(){
        let idx = $(this).index()
        $(".tabgroup_2025").attr("src",tabgroup_2025_arr[idx])
    })

    $(".direction_list6>li").click(function(){
        $(".direction_list6>li").removeClass("on")
        $(this).addClass("on")
    })

})