
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

// Function to move the cursor
function moveCursor(x, y) {
    gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.6,
    });
}

// Handling mousemove for desktop
main.addEventListener("mousemove", function(dets) {
    moveCursor(dets.clientX, dets.clientY);
});

// Handling touchmove for mobile
main.addEventListener("touchmove", function(dets) {
    var touch = dets.touches[0];
    moveCursor(touch.clientX, touch.clientY);
});

// Function to scale and update cursor on hover
function hoverEffect() {
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "#ffffff8a",
    });
}

// Function to reset cursor on hover out
function resetCursor() {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff",
    });
}

// Handling mouseenter for desktop
imageDiv.addEventListener("mouseenter", hoverEffect);

// Handling mouseleave for desktop
imageDiv.addEventListener("mouseleave", resetCursor);

// Handling touchstart for mobile
imageDiv.addEventListener("touchstart", hoverEffect);

// Handling touchend for mobile
imageDiv.addEventListener("touchend", resetCursor);
