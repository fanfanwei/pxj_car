jQuery(document).ready(function($) {
	/*第一张banner图在上边*/
	$('.banner-t li:first').css({'z-index':'1'});
	// 轮播图
	var timer = null;
	var snum = 0;
	$('.sy-jb li').click(function(event) {
		snum = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.banner-t li').eq(snum).stop().fadeIn(300).siblings().fadeOut(300);
	});
	timer = setInterval(fun,5000);
	function fun(){
		snum++;
		if(snum>2){
			snum = 0;
		}
		$('.banner-t li').eq(snum).stop().fadeIn(300).siblings().fadeOut(300);
		$('.sy-jb li').eq(snum).addClass('current').siblings().removeClass('current');
	}
	$('.banner-bg').hover(function() {
		clearInterval(timer);
	}, function() {
		timer =setInterval(fun,5000);
	});
	//首页精确查找车辆
	$('.sy-bnr-dibu .li').hover(function() {
		$(this).addClass('current').siblings().removeClass('current');
		$(this).children('.li_ul').stop().slideDown(100);
	}, function() {
		$(this).removeClass('current');
		$(this).children('.li_ul').stop().slideUp(100);
	});
	//单击自己 自己内容成为父盒子兄弟的内容
	$('.li_ul li a').click(function(event) {
		$(this).parent().parent().siblings('.a').html($(this).html());
	});
	//小轮播图
	var num = 0;
	var numJ = 0;
	var timer2 = null;
	var juli = 0;
	$('.sy-mc-ol li').click(function(event) {
			numJ = $(this).index();
			num = numJ;
			juli = -num*396;
			$(this).addClass('current').siblings().removeClass('current');
			$('.banner2 ul').stop().animate({left:juli}, 300);
	});
	timer2 = setInterval(fn, 5000);
	function fn(){
		num++;
		if(num>4){
			num=1;
			$('.banner2 ul').css('left','0');
		}
		juli = -num*396;
		numJ++;
		if(numJ>3){numJ=0};
		$('.banner2 ul').stop().animate({left:juli}, 300);
		$('.banner2 ol li').eq(numJ).addClass('current').siblings().removeClass('current');
	}
	
	$('.banner2').hover(function() {
		clearInterval(timer2)
	}, function() {
		timer2 = setInterval(fn, 5000);
	});

	//中东版车型 鼠标滑上添加类 查询车辆
	$('.zdb-ul .li').mouseover(function() {
		$(this).children('.a').addClass('acurrent').siblings().removeClass('acurrent');
		$(this).children('ol').stop().slideDown(10);
		$(this).children('ol').css({'display':'block'});
	}).mouseleave(function() {
		$(this).children('.a').removeClass('acurrent');
		$(this).children('ol').stop().slideUp(10);
	});
	$('.zdb-ul ol li a').click(function(event) {
		$(this).parent().parent().siblings('.a').html($(this).html());
	});

	$('.zdbcx-radio dd').click(function(event) {
		$(this).addClass('current').siblings().removeClass('current');
	});

	// 中东版详情页轮播图
	$('#click-ul li').click(function(event) {
		$('#click-box li').html($(this).html());
	});
	
	//中东版详情页导航鼠标滑上自己变颜色  兄弟变回
	$('.zdxq-nav li').hover(function() {
		$(this).addClass('zdxq-first-li').siblings().removeClass('zdxq-first-li');
		$('.zdxq-ddbox .li').eq($(this).index()).stop().show().siblings('li').hide();
	});
	//中东版详情页中第3个和第5个dl没有右边距
	$('.zdxq-content .zdxq-dl:eq(2)').css({'margin-right':'0'});
	$('.zdxq-content .zdxq-dl:eq(5)').css({'margin-right':'0'});
	$('.zdxq-content .zdxq-dl:lt(3)').css({'margin-bottom':'65px'});
	$('.zdxq-img li:eq(0)').css({'margin-right':'13px'});
	$('.zdxq-img li:eq(3)').css({'margin-right':'13px'});
	$('.zdxq-foor li').addClass('clearfix');
	$('.shbz-ul li').addClass('clearfix');
	$('.gcfw-main li').addClass('clearfix');
	$('.pfsxx-ul li').addClass('clearfix');
	$('.zdxq-foor li:odd').css({'background-color':'#f6f4f4'});
	$('.gcfw-main li:odd').css({'background-color':'#ffffff'});
	$('.shbz-ul li:eq(1) .img').css({'background-position':'center -327px'});
	$('.shbz-ul li:eq(2) .img').css({'background-position':'center -681px'});
	$('.shbz-ul li:eq(3) .img').css({'background-position':'center -1043px'});
	$('.zdxq-box2 li button').click(function(event) {
		$(this).siblings('div').stop().slideToggle(100);
	});
	$('.yykc-form label').click(function(event) {
		$(this).addClass('current').parent().siblings('div').children('label').removeClass('current');
	});
	var shuzi = $(window).height()-$('.zhmm1-header').height();
	$('.zhmm1-content').css({height:shuzi});
	var shuzi2 = $('.zhmm1-content').height()-75; 
	$('.zhmm1-main').css({height:shuzi2});
	$('.zcy-form label').click(function(event) {
		$(this).toggleClass('cue');
	});
	var sh = 0;
	var shu2 = 0;
	$('.ptdz-position img').hover(function() {
		sh = $(this).index()*287+30+20;
		sh2 =$(this).index()*287+30;
		$(this).stop().animate({'left': sh}, 200);
	}, function() {
		$(this).stop().animate({left:sh2}, 200);
	});
	$('.djtp-r-t .fr .a2').click(function(event) {
		$(this).toggleClass('a3');
	});
	$('.fix ul li:eq(1)').css({'background-position':'center -74px'});
	$('.fix ul li:eq(2)').css({'background-position':'center -148px'});
	$('.fix .ul li').hover(function() {
		$(this).children().children('img').stop().show(200);
	}, function() {
		$(this).children().children('img').stop().hide(200);
	});
	var shuzi3 = 0;
	$(window).scroll(function(event) {
		shuzi3 = $(window).scrollTop();
		if(shuzi3<300){
			$('.scroll .fix').css({'position':'absolute',top:577});
		}else{
			$('.scroll .fix').css({'position':'fixed',top:300});
		}
	});
	$('.gxhdzsy-ul2 li').hover(function() {
		$(this).addClass('current').siblings().removeClass('current');
		$('.gxhdzsy-ul .gll').eq($(this).index()).addClass('gxhdzsy-li').siblings().removeClass('gxhdzsy-li');
	});
	$('.gxqypz-nav li').hover(function() {
		$(this).addClass('current').siblings().removeClass('current');
		$('.gxqypz-main .ypz-li').eq($(this).index()).addClass('ypz-licutn').siblings().removeClass('ypz-licutn');
	});
	$('.gxqypz-box li label').click(function(event) {
		$(this).addClass('current').parent().siblings().children('label').removeClass('current');
	});
	// 我的订单
	$('.wddd-table tr').hover(function() {
		$(this).children('td').css('background-color','#fcedd8');
	}, function() {
		$(this).children('td').css('background-color','#fff');
	});
	$('.ddxq-table tr td:first').css({'width':'250px'});
	$('.dzgl-table tr td:last').css({'width':'280px'});
	$('.ptdz-table tr td:last').css({'width':'330px'});
	$('.cxfl-biao tr td:last').css({'width':'330px'});
	$('.jyl-biao tr td:last').css({'width':'180px'});
	$('.qygl-biao tr td:last').css({'width':'180px'});
	$('.qygl-biao tr td:first').css({'width':'50px'});
	$('.zugl-biao tr td:first').css({'width':'100px'});
	$('.zugl-biao tr td:last').css({'width':'300px'});

	$('.qygl-biao .qygl-radio').click(function(event) {
		$(this).addClass('qygl-current').closest('tr').siblings().find('.qygl-radio').removeClass('qygl-current');
	});
	//添加收货地址
	$('.tjshdz-form label').click(function(event) {
		$(this).toggleClass('label');
	});
	$('.ckwdz-box1>li').addClass('clearfix');
	$('.tsym-form ul>li').addClass('clearfix');
	$('.ckwdz-box1>li:odd').css({'background-color':'#f6f4f4'});
	$('.ckcl-box>li:even').css({'background-color':'#f6f4f4'});
	$('.ckcl-box>li:odd').css({'background-color':'#fff'});
	//批发商-订单编辑
	$('.ddbj-table div').click(function(event) {
		$(this).addClass('current').closest('tr').siblings('tr').find('div').removeClass('current');
	});

	//编辑车辆
	$('.bjcl-d-box1 a').click(function(event) {
		var mytag2 = $('<img src="images/duigou.png" alt="" class="bjcl_img">')
		$(this).append(mytag2).siblings().children('.bjcl_img').remove();
	});

	$('.xzcy_form-in .xzcy_bel').click(function(event) {
		$(this).toggleClass('xzcy_b');
	});
	$('.cxfl-ul .li').click(function(event) {
		$(this).addClass('li-curremt').siblings('.li').removeClass('li-curremt');
	});
	$('.qyck_table tr td:first').css({'width':'320px'});
	$(".fl_select").mouseleave(function() {
		$(".fl_select ul ").hide();

	});
	$('.fl_select .fl_selecttriangle').click(function() {
		var index = $(this).index(".fl_select .fl_selecttriangle");
		$('.fl_select ul.fl_selectlist').eq(index).toggle();
	});
	$(".fl_selectlist li").click(function() {
		//		alert($(".fl_selectlist li").eq(0).text());
		var index = $(this).index(".fl_selectlist  li");
		$(this).parents().children('input.fl_selectinput').val($(".fl_selectlist li").eq(index).text());
		$('.fl_selectlist ').hide();
	});
	$('.sub_rsel1 img').click(function(){
		$(this).next('ul').show();
	});
	$('.sub_rsel1 ul li').click(function(){
		$(this).parent('ul').hide();
	});
	$("#firstpane h3").click(function() {
		var index = $(this).index("#firstpane h3");
		$(this).toggleClass("active");
		$(this).addClass("current").next("div.menu_body").slideToggle(300);
		$(this).siblings().removeClass("current");
	});
	$(".menu_body a").click(function() {
		var index = $(this).index(".menu_body a");
		$(this).addClass("active").siblings('.menu_body a').removeClass("active");
	});
	
});