$(function () {
    //导航栏 鼠标经过 a时显示item
    showItem();
    //banner
    $(".banner .slick").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
    });
    //翻页
    changePage();
    //main_3 轮播图
    $('.main_3 .slick').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 7000,
        accessibility: false,
        arrows: false
    });
    //main_4轮播图
    $('.main_4 .slick').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 7000,
        accessibility: false,
        arrows: false
    });
    //main_6 轮播图
    $('.main_6 .slick').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 7000,
        accessibility: false,
        arrows: false
    });


    //显示和隐藏动画
    $('.body_main').scroll(function () {
        //可视窗口页面高度
        var w_h = $(window).height();

        //main_2 部分动画
        // 元素的offsetTop高度
        var main2_h = $('.main_2').offset().top;
        //要变化的元素
        var main2_ele = $('.main_2 .item');

        if (2 * (w_h - main2_h) > w_h) {
            for (let i = 0; i < main2_ele.length; i++) {
                $(main2_ele[i]).addClass('showdiv');
            }
        } else {
            for (let i = 0; i < main2_ele.length; i++) {
                $(main2_ele[i]).removeClass('showdiv');
            }
        }

        //main_3  part2部分动画
        var main3_h = $('.main_3 .part2').offset().top;
        var main3_items = $('.main_3 .part2 .d');
        if (4 * (w_h - main3_h) > w_h) {
            for (let i = 0; i < main3_items.length; i++) {
                $(main3_items[i]).addClass('showdiv');
            }
        } else {
            for (let i = 0; i < main3_items.length; i++) {
                $(main3_items[i]).removeClass('showdiv');
            }
        }

        //main_4 部分动画
        var main4_h = $('.main_4 .tr').offset().top;
        var main4_tr = $('.main_4 .tr');
        var main4_bl = $('.main_4 .bl');
        var main_tlItems = $('.main_4 .tl > div');
        var main_brItems = $('.main_4 .br > div');
        if (4 * (w_h - main4_h) > w_h) {
            for (let i = 0; i < main_tlItems.length; i++) {
                $(main_tlItems[i]).addClass('showdiv');
                $(main_brItems[i]).addClass('showdiv');
            }
            main4_tr.addClass('showdiv');
            main4_bl.addClass('showdiv');
        } else {
            for (let i = 0; i < main_tlItems.length; i++) {
                $(main_tlItems[i]).removeClass('showdiv');
                $(main_brItems[i]).removeClass('showdiv');
            }
            main4_tr.removeClass('showdiv');
            main4_bl.removeClass('showdiv');
        }

        //main_5 部分动画
        var main5_h = $('.main_5').offset().top;
        var main5_l = $('.main_5 .l');
        var main5_r = $('.main_5 .r');
        if (4 * (w_h - main5_h) > w_h) {
            main5_l.addClass('showdiv');
            main5_r.addClass('showdiv');
        } else {
            main5_l.removeClass('showdiv');
            main5_r.removeClass('showdiv');
        }


        //main_6 部分动画
        var main6_h = $('.main_6').offset().top;
        var main6_items = $('.main_6 .item');
        if (4 * (w_h - main6_h) > w_h) {
            for (let i = 0; i < main6_items.length; i++) {
                $(main6_items[i]).addClass('showdiv');
            }
        } else {
            for (let i = 0; i < main6_items.length; i++) {
                $(main6_items[i]).removeClass('showdiv');
            }
        }


    });
});


//导航栏 鼠标经过 a时显示item
const showItem = () => {
    let nav_as = $('.nav_main a');
    let nav_items = $('.nav_child .item');
    for (let i = 0; i < nav_as.length; i++) {
        $(nav_as[i]).attr('index', i);
        $(nav_items[i]).attr('index', i);
        //鼠标进入 显示
        $(nav_as[i]).on('mouseover', function () {
            $(nav_items[$(this).attr('index')]).css({ 'opacity': 1, 'visibility': 'visible' });
        });
        $(nav_items[i]).on('mouseover', function () {
            $(this).css({ 'opacity': 1, 'visibility': 'visible' });
        });
        //鼠标离开，隐藏
        $(nav_as[i]).on('mouseleave', function () {
            let that = $(this);
            $(nav_items[that.attr('index')]).css({ 'opacity': 0, 'visibility': 'hidden' });
        });
        $(nav_items[i]).on('mouseleave', function () {
            let that = $(this);
            that.css({ 'opacity': 0, 'visibility': 'hidden' });
        });
    }
};

// 翻页函数
const changePage = () => {
    //获取两个页面
    let home = document.querySelector('.body_home');
    let main = document.querySelector('.body_main');
    //获取header
    let home_header = document.querySelector('.body_home header');
    let main_header = document.querySelector('.body_main header');
    //获取顶部body_main中的 d1
    let main_d1 = document.querySelector('.body_main .d1');
    //鼠标在 body_home时 鼠标向下滑动；
    home.onmousewheel = function (event) {
        //翻页
        if (event.deltaY > 0) {
            //调整位置
            if (document.body.clientWidth >= 850) {
                main.style.top = "0";
            }
            main_header.style.top = '0%';
            home_header.style.top = '-100px';
            //设置透明度
            main_header.style.opacity = '1';
            home_header.style.opacity = '0';
            return;
        }
    };
    //鼠标在 body_main时 ；
    main.onmousewheel = function (event) {
        //翻页
        if (this.scrollTop == 0 && event.deltaY < 0) {
            if (document.body.clientWidth >= 850) {
                main.style.top = "100%";
            }
            main_header.style.top = '-100px';
            home_header.style.top = '0%';
            //设置透明度
            main_header.style.opacity = '0';
            home_header.style.opacity = '1';
            return;
        }
        //向下滑动
        if (event.deltaY > 0 && document.body.clientWidth >= 850) {
            main_header.style.top = '-45px';
            return;
        }
        //向上滑动
        if (event.deltaY < 0 && document.body.clientWidth >= 850) {
            main_header.style.top = '0%';
            return;
        }

    };


};

