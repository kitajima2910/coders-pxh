//Basic function
$("[role='tab']").click(function (e) {
	e.preventDefault();
	$(this).attr("aria-selected", "true");
	$(this).parent().siblings().children().attr("aria-selected", "false");
	var tabpanelShow = $(this).attr("href");
	$(tabpanelShow).attr("aria-hidden", "false");
	$(tabpanelShow).siblings().attr("aria-hidden", "true");
});

/*
 ** Edit 25/02/16 - Commented this part because discovered a simple solution within css:
 ** [role="tablist"] { display: table; white-space: nowrap; }
 ** [role="tablist"] > [role="presentation"] { display: table-cell }
 
 //Prevent tab break on resize with horizontal scroll
 
 var allWidth = 0;
 $("[role='tablist']").children().each(function() {
	allWidth += $(this)[0].getBoundingClientRect().width
 });
 $("[role='tablist']").css('min-width', allWidth);
 */