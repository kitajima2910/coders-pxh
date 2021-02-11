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
	$('#html_javascript').load('./../../includes/javascript/index.html');
});