$(document).ready(function(){
	$('.change-color').click(function(){
		var color = $(this).data('url');
		$('#test').attr('href', color);
		return false;
	});

	$('#toggle-button2').click(function(){
		$('#demo-switcher').toggleClass('opened');
	});
	$('#toggle-button3').click(function(){
		$('#demo-switcher2').toggleClass('opened');
	});
	$('#toggle-button-search').click(function(){
		$('#demo-switcher-search').toggleClass('opened');
	});

	$('#change-version').change(function(){
		window.location.href = $(this).val();
	});
});