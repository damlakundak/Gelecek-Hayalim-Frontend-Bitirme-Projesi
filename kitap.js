// Bu kısım yana tıklayınca değiştiriyordu ama okla beraber çalışmıyor.

// $('input').on('change', function() {
//     $('body').toggleClass('blue');
//   });

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const radioButtons = document.querySelectorAll('input[name="slider"]');

let currentIndex = 0;

function updateSlider(index) {
  radioButtons[index].checked = true;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
  updateSlider(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % radioButtons.length;
  updateSlider(currentIndex);
});
