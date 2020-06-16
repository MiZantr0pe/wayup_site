// a = prompt ("Сколько тебе лет?");

// if (a == 23) {
// 	alert ('Норм, мне тоже');
// } else if (a == 47) {
// 	alert ('Моей маме тоже 47');
// } else if (a == 46) {
// 	alert ('Моему отцу столько же');	
// } else if (a < 18) {
// 	alert ('Покинь страницу, рано тебе еще');
// } else if (a < 23) {
// 	alert ('Ты моложе меня');
// } else if (a > 23) {
// 	alert ('Ты старше меня');
// }

$(window).scroll(function() {
	$('.future').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("animate__zoomInUp animate__delay-0s");
		}
	});
});
