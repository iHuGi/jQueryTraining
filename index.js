// $("h1").removeClass("big-title margin-50"); // Removes Class.

$("h1").text("Goodbye, World!"); // Changes text.

$("button").html("<em>Hey!</em>") // Changes text with HTML into consideration.

$("img").attr("src"); // Acess Image Attribute (needs to be marked because there´s no image and would lead to error).

$("a").attr("href", "https://www.youtube.com"); // Changes the HREF Attribute from Google to YouTube.

$("h1").click(function() {
  $("h1").css("color", "purple"); // Changes the color of h1.
});

$("button").click(function() {
  $("h1").css("color", "purple"); // Changes color clicking on h1.
});

$(document).keydown(function(event) { // Type any key to change h1 text.
$("h1").text(event.key);
});

$("h1").on("mouseover", function() { // Mouse over will change the color to Green.
  $("h1").css("color", "green");
});

// $("button").on("click", function() { // Fade Toggles in and out.
//   $("h1").fadeToggle();
// });

// $("button").on("click", function() { // Slide Toggles in and out.
//   $("h1").slideToggle();
// });

// $("button").on("click", function() { // Animate alloows for higher control over CSS, here we can control the opacity, margin... It has to be a numeric value.
//   $("h1").animate({opacity: 0.5});
// });

$("button").on("click", function() { // We can chain animations as seen here.
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
