// $( '.navbar ul li a' ).on( 'click', function () {
// 	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
// 	$( this ).parent( 'li' ).addClass( 'active' );
// });

$(".navbar ul li a").click(function(){
	$(".navbar ul li a").removeClass("active")
	$(this).addClass("active");
})
