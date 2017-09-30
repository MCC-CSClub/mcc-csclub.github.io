var globalApplication = {
	init: function() { //initialized for event delegation
		globalApplication.events.document();
		globalApplication.events.header();
	},
	events: {
		document: function() {
			setClosestHeaderSection(); //first call on startup;
			
			$(document).on("scroll", function() {
				setClosestHeaderSection();
			});

			/*
			checks href of each anchor in header, finds id with that href, and returns the closest id.
			*/
			function setClosestHeaderSection() {
				var min, //undefined
				returnId;
				$("header > ul > li > a").each(function(index, value) {
					var currentId = $(this).attr("href"), //id of the element we should check
					sectionVerticalPosition = $(currentId).offset().top, //section distance from top
					scrollVerticalPosition = $("html, body").scrollTop(); //current distance from top
					distance = Math.abs(sectionVerticalPosition - scrollVerticalPosition); //current distance from the scroll position and the section
					
					if(min === undefined || distance < min) {
						min = distance;
						returnId = currentId;
					}
				});
				$("header > ul > li > a").removeClass("current"); //we should save the current reference to the class to avoid iterating over this selector
				$("header > ul > li ").find("[href='" + returnId + "']").attr("class", "current");
			}
		},
		header: function() {
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

			$("header > ul > li > a").on("click",
				function() {
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

