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
	let pathname = window.location.pathname;

	// Fix on Github
	$('#html_javascript').load(pathname === '/coders-pxh/' ? 'includes/javascript/index.html' : './../../includes/javascript/index.html');

	setTimeout(() => {
		sh_highlightDocument();
	}, 250);
});
