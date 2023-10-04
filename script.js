document.addEventListener("DOMContentLoaded", function () {
  // Select the body element
  var body = document.body;

  // Set the opacity to 1 to make the content visible
  body.style.opacity = "1";

  var slideIndex = 0;
  var slides = document.querySelectorAll("#slideshow-container li");

  function showSlides() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0"; // Set opacity to 0 for all slides
      slides[i].style.display = "none"; // Hide all slides
    }

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    slides[slideIndex].style.display = "block"; // Display the current slide
    setTimeout(function () {
      slides[slideIndex].style.opacity = "1"; // Fade in the current slide
    }, 150); 
  }

  showSlides();

  // Get the "Next" and "Previous" button elements
  var nextBtn = document.getElementById("nextBtn");
  var prevBtn = document.getElementById("prevBtn");

  // Add click event listeners to the "Next" and "Previous" buttons
  nextBtn.addEventListener("click", function () {
    slideIndex++;
    showSlides();
  });

  prevBtn.addEventListener("click", function () {
    slideIndex--;
    showSlides();
  });

  // Add event listener for arrow key presses
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      slideIndex--;
      showSlides();
    } else if (event.key === "ArrowRight") {
      slideIndex++;
      showSlides();
    }
  });
});

