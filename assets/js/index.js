$(() => {
	//Basic function
	$("[role='tab']").click(function (e) {
		e.preventDefault();
		$(this).attr("aria-selected", "true");
		$(this).parent().siblings().children().attr("aria-selected", "false");
		var tabpanelShow = $(this).attr("href");
		$(tabpanelShow).attr("aria-hidden", "false");
		$(tabpanelShow).siblings().attr("aria-hidden", "true");
	});
	
	// Load HTML: JavaScript
	let host = window.location.host;
	let pathname = window.location.pathname;
	let uri = host + pathname;
	
	// Fix on Github
	if(pathname === '/coders-pxh/') {
		$('#html_javascript').load('includes/javascript/index.html');
	} else {
		$('#html_javascript').load('./../../includes/javascript/index.html');
	}
	
});
