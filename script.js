$("a").hover(function() {
    $("a").css("text-decoration", "underline");
});

$("a").mouseleave(function() {
    $("a").css("text-decoration", "none");
});
// Any text wrapped in an <a> element will have an underline appear if a mouse is over it, and the underline disappears when it leaves.

// When the start button is clicked...
$(".start-button").click(function() {
// 	The first image, button, and title are hidden and then replaced with 2 new buttons, along with a new image and flavor text.
    $(".firstImage").fadeOut();
    $(".title").fadeOut();
    $(".start-button").fadeOut();
    $(".messageStart").fadeOut();
    $(".path-1a").show();
    $(".path-1b").show();
    $(".imageStart").show();
    $(".message-1").show();
    $("body").css("background-color","#4d5ef6");
});
// User begins the game! User is shown an image of a starry night skey and expositionary text.

$(".path-1a").click(function() {
    $(".path-1a").hide();
    $(".path-1b").hide();
    $(".imageStart").hide();
    $(".message-1").hide();
    $(".path-2").show();
    $(".imageHauntedHouse").show();
    $(".message-1a").show();
    $("body").css("background-color","#263a2d");
});
// User chooses to follow the bird, where they are shown a picture of a haunted house and expositionary text

$(".path-1b").click(function() {
    $(".path-1a").fadeOut();
    $(".path-1b").fadeOut();
    $(".imageStart").fadeOut();
    $(".message-1").fadeOut();
    $(".imageBadEnd").show();
    $(".message-1b").show();
    $(".badEnd").show();
    $("body").css("background-color","#800000");
    $(".message-restart").show();
});
// User chooses to sleep. This even triggers the "Stiff Neck" end.

$(".path-2").click(function() {
    $(".path-2").hide();
    $(".imageHauntedHouse").hide();
    $(".message-1a").hide();
    $(".imageLeftHallway").show();
    $(".imageRightHallway").show();
    $(".message-2").show();
    $(".path-2a").show();
    $(".path-2b").show();
    $(".empty_space").show();
    $("body").css("background-color","#520a7c");
});
// User decides to enter the haunted house, and is greeted with 2 hallways that they must choose to take.

$(".path-2a").click(function() {
    $(".imageLeftHallway").hide();
    $(".imageRightHallway").hide();
    $(".message-2").hide();
    $(".path-2a").hide();
    $(".empty_space").hide();
    $(".imageDeadEnd").show();
    $(".message-2a").show();
    $("body").css("background-color","#800000");
});
// User goes to the left hallway and is shown a brick wall. The user can choose the right hallway, and the event should play out the same way as the comment below.

$(".path-2b").click(function() {
    $(".imageLeftHallway").hide();
    $(".imageRightHallway").hide();
    $(".message-2").hide();
    $(".path-2a").hide();
    $(".path-2b").hide();
    $(".empty_space").hide();
    $(".imageDeadEnd").hide();
    $(".message-2a").hide();
    $(".imageCarKeys").show();
    $(".message-2b").show();
    $("body").css("background-color","#89e968");
});
// User goes to the right hallway and finds the car keys. There is blue action text that will trigger the next event if clicked.

$(".ghost-text").click(function() {
    $(".imageCarKeys").hide();
    $(".message-2b").hide();
    $(".message-3").show();
    $(".imageGhost").show();
    $("body").css("background-color","#faf533");
});
// When the user clicks the blue action text, a gif of a spinning ghost appears with new blue action text at the bottom of the gif.

$(".message-3").click(function() {
    $(".message-3").fadeOut();
    $(".imageGhost").fadeOut();
    $(".message-4").show();
    $(".imageGoodEnd").show();
    $(".message-ending").show();
    $("body").css("background-color","gray");
    $(".message-restart").show();
});
// When the user clicks the "A GHOST!!" action text, they are revealed an image of a fireplace. Large green text should inform them that the game is over.

$(".message-restart").click(function() {
    $(".message-restart").hide();
    $(".imageBadEnd").hide();
    $(".message-1b").hide();
    $(".badEnd").hide();
    $(".message-4").hide();
    $(".imageGoodEnd").hide();
    $(".message-ending").hide();
    $(".firstImage").fadeIn();
    $(".title").fadeIn();
    $(".start-button").fadeIn();
    $(".messageStart").fadeIn();
    $("body").css("background-color","orange");
});
// If the user clicks this text, the campaign should go back to the beginning, allowing replayability without the need to reload the browser.