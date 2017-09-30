var globalApplication = {
	init: function() { //initialized for event delegation
		$("header > ul > li").hover(
			function() {
				$(this).stop().animate(
				{
					opacity: 1
				}, {
					duration: 250,
					easing: "linear"
				});
			},
			function() {
				$(this).stop().animate(
				{
					opacity: .5
				}, {
					duration: 250,
					easing: "linear"
				});
			});

		$("header > ul > li > a").on("click", function() {
			$("header > ul > li > a").removeClass("current"); //selector only affects header
			$(this).attr("class", "current");
			var id= $(this).attr("href");
			$("html, body").stop().animate(
			{
				scrollTop: $(id).offset().top //offset from the top position of the element with specific id
			},
			{
				duration: 1000,
				easing: "swing"
			});
		});
	}
};
$(document).ready(globalApplication.init);

/*
Currently unused and needs patching. Removes specific attribute from immediate children.
*/
function removeChildrenAttribute(parent, attribute, value) {
	if($(parent).attr(attribute) === value)
		$(parent).removeAttr(attribute);

	$(parent).children().each(function(index) { //we cannot use a selector parameter, since we don't know the attribute
		if($(this).attr(attribute) === value)
			$(this).removeAttr(attribute);
	});
}

