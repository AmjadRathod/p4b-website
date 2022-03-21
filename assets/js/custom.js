$(function() {
  console.log( "ready!" );
  $(".press-item").hide()
  $(".press-item").slice(0, 10).show()
  if($(".press-item").length <= 10) {
    $(".load-more-button").css("display", "none")
  }
  $(".load-more-button").on("click", function(e){
    e.preventDefault()
    $(".press-item:hidden").slice(0, 9).slideDown()
    if($(".press-item:hidden").length == 0) {
      $(".load-more-button").css("display", "none")
    }
  })
});