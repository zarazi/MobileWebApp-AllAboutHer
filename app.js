
function showBigImage(item) {
	console.log('picurl: '+item.src);

	if ($('body div[data-role="page"][id="imagePage"]').length == 0) {
		var imagePage = $('<div id="imagePage" data-role="page" data-fullscreen="true" data-add-back-btn="true">');
		imagePage.append($('<div data-role="header" data-position="fixed">').html('<h1 id="imageName">ImageName</h1>'));
		imagePage.append($('<div data-role="content">').html('<img id="bigImage">'));
		imagePage.append($('<div data-role="footer" data-position="fixed">').html('<h4 id="authorBy">by whom</h4>'));
		imagePage.appendTo($('body'));
		imagePage.page();			
	}

	//$('#imageName').html(item.title);
	$('#authorBy').html(item.author);
	$('#imagePage').css('background-image', "url('"+item.src+"')")
	.css('background-color', '#000')
	.css('background-size','contain')
	.css('background-position', 'center')
	.css('background-repeat','no-repeat').page();

	$.mobile.changePage('#imagePage', {
		transition: 'fade'
	});
};

$('#photoPage').live( 'pageinit', function() {


	var imgs = $('img',$(this));
	$.each(imgs, function(i, item) {
		//console.log(i);
		$(item).bind('tap', function(e){
	    	e.stopPropagation();
	    	showBigImage(item);
	    	return true;
	    });
	});

	
});