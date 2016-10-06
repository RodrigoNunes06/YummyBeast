$(document).on("scroll", function(e) {
  if ($(document).scrollTop() > 155) {
    $(".navbar-form").addClass("fix-search");
    $("header").addClass("after-scroll")
    $(".yummy").removeClass("hidden")
  } else {
    $(".navbar-form").removeClass("fix-search");
    $("header").removeClass("after-scroll")
    $(".yummy").addClass("hidden")
  }
});