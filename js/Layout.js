$(document).ready(function() {
    $("#capslide_img_cont1_wb").capslide({
	caption_color : '#000',
	caption_bgcolor : '#fff',
	overlay_bgcolor : '#000',
	border : '',
	showcaption : true
    });

    $("#capslide_img_cont2_wb").capslide({
	caption_color : '#000',
	caption_bgcolor : '#fff',
	overlay_bgcolor : '#000',
	border : '',
	showcaption : true
    });

    $("#capslide_img_cont3_wb").capslide({
	caption_color : '#000',
	caption_bgcolor : '#fff',
	overlay_bgcolor : '#000',
	border : '',
	showcaption : true
    });

    $("#capslide_img_cont4_wb").capslide({
	caption_color : '#000',
	caption_bgcolor : '#fff',
	overlay_bgcolor : '#000',
	border : '',
	showcaption : true
    });
});

$(document).ready(function() {
    $(".various").fancybox({
	maxWidth : 300,
	maxHeight : 300,
	fitToView : false,
	width : '100%',
	height : '100%',
	autoSize : true,
	closeClick : false,
	openEffect : 'none',
	closeEffect : 'none',
	helpers: { title : { type : 'inside' } }
    });

    $(".various1").fancybox({
	maxWidth : 630,
	maxHeight : 340,
	fitToView : false,
	width : '100%',
	height : '100%',
	autoSize : false,
	closeClick : false,
	openEffect : 'none',
	closeEffect : 'none',
	type : 'iframe',
	helpers: { title : { type : 'inside' } }
    });

    $(".various2").fancybox({
	maxWidth : 1000,
	maxHeight : 800,
	fitToView : false,
	width : '100%',
	height : '100%',
	autoSize : false,
	closeClick : false,
	openEffect : 'none',
	closeEffect : 'none',
	type : 'iframe',
	helpers: { title : { type : 'inside' } }
    });
    
    $(".various3").fancybox({
	maxWidth : 1200,
	maxHeight : 1000,
	fitToView : false,
	width : '100%',
	height : '100%',
	autoSize : false,
	closeClick : false,
	openEffect : 'none',
	closeEffect : 'none',
	type : 'iframe',
	helpers: { title : { type : 'inside' } }
    });
    
    $(".fancybox-thumb").fancybox({
	prevEffect : 'none',
	nextEffect  : 'none',
	helpers : {
	    title : { type : 'inside' },
	    thumbs : { source: function( item ) {
		temp = item.href.replace('.png', '_Thumbnail');
		temp = temp.replace('.jpg', '_Thumbnail');
		temp = temp + '.jpg';
		return temp;}, width : 80, height : 80 }
	},
    });

    $(".fisheyeItem").fancybox({
	maxWidth : 1100,
	maxHeight : 800,
	fitToView : false,
	width : '100%',
	height : '100%',
	autoSize : false,
	closeClick : false,
	openEffect : 'none',
	closeEffect : 'none',
	type : 'iframe',
	helpers: { title : { type : 'inside' } }
    });
});

$(document).ready(function(){  
    $('.button1 a').hover(function(){  
	$(this).stop().animate({'opacity' : '0'}, 500);  
    }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});  
    
    $('.button2 a').hover(function(){  
	$(this).stop().animate({'opacity' : '0'}, 500);  
    }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});
    
    $('.button3 a').hover(function(){  
	$(this).stop().animate({'opacity' : '0'}, 500);  
    }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});  
});  

$('#input1 :input').fancyInput();

$(document).ready(function() {
    $(window).keydown(function(event){
	if(event.keyCode == 13) {
	    event.preventDefault();
	    return false;
	}
    });
});