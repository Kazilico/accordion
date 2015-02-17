var pullCard = function(info) {

	var cardHtml = "<div class='accordion'><div class='info'>" + info + "</div></div>";

	var $cardInfo = $(cardHtml);

	$("#sections").append($cardInfo)

	$cardInfo.on("click", function(evt){

		$(".accordion").removeClass("opened");

		var $openedCard = $(this);

		$openedCard.toggleClass("opened");
	});
}



$(".accordion").on("click", function(evt){

  var $clickedHeader = $(this);

  $(".sections").removeClass("active");

  $clickedHeader.find(".sections").addClass("active");

});