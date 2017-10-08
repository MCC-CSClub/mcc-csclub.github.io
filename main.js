const globalApplication = {
	/* initialized for event delegation */
	init() {
		globalApplication.events.document();
		globalApplication.events.header();
	},
	events: {
		document() {
			/* first call on startup */
			setClosestHeaderSection();
			$(document).on('scroll', () => {
				setClosestHeaderSection();
			});

			/*
			checks href of each anchor in header, finds id with that href, and returns the closest id.
			*/
			function setClosestHeaderSection() {
				let min;
				let returnId;
				/* we need scope here */
				$('header > ul > li > a').each(function () {
					/* id of the element we should check */
					const currentId = $(this).attr('href');
					/* section distance from top */
					const sectionVerticalPosition = $(currentId).offset().top;
					/* current distance from top */
					const scrollVerticalPosition = $('html, body').scrollTop();
					/* current distance from the scroll position and the section */
					const distance = Math.abs(sectionVerticalPosition - scrollVerticalPosition);

					if (min === undefined || distance < min) {
						min = distance;
						returnId = currentId;
					}
				});
				/* save the current reference to the class to avoid iterating over this selector */
				$('header > ul > li > a').removeClass('current');
				$('header > ul > li ').find(`[href='${returnId}']`).attr('class', 'current');
			}
		},
		header() {
			$('header > ul > li').hover(
				function () {
					$(this).stop().animate({
						opacity: 1,
					}, {
						duration: 250,
						easing: 'linear',
					});
				},
				function () {
					$(this).stop().animate({
						opacity: 0.5,
					}, {
						duration: 250,
						easing: 'linear',
					});
				},
			);

			$('header > ul > li > a').on(
				'click',
				function () {
					/* selector only affects header */
					$('header > ul > li > a').removeClass('current');
					const id = $(this).attr('href');
					$(this).attr('class', 'current');

					$('html, body').stop().animate(
						{
						/* offset from the top position of the element with specific id */
							scrollTop: $(id).offset().top,
						},
						{
							duration: 1000,
							easing: 'swing',
						},
					);
				},
			);
		},
	},
};

$(document).ready(globalApplication.init);

/*
Currently unused and needs patching. Removes specific attribute from immediate children.
*/
function removeChildrenAttribute(parent, attribute, value) {
	if ($(parent).attr(attribute) === value) {
		$(parent).removeAttr(attribute);
	}

	/* we cannot use a selector parameter, since we don't know the attribute */
	$(parent).children().each(function () {
		if ($(this).attr(attribute) === value) {
			$(this).removeAttr(attribute);
		}
	});
}
