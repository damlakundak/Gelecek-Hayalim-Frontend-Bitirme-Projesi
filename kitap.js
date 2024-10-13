
// "prev" butonunu seçer
const prevButton = document.getElementById("prev");
// "next" butonunu seçer
const nextButton = document.getElementById("next");
const radioButtons = document.querySelectorAll('input[name="slider"]');

// Mevcut indeks (slayt) için başlangıç değeri
let currentIndex = 0;

function updateSlider(index) {
  // Belirtilen indekse sahip radio butonunu seçili yapar
  radioButtons[index].checked = true;
}

// Önceki butonuna tıklama olayı
prevButton.addEventListener("click", () => {
  // Mevcut indeksi bir azaltır, döngüsel olması için toplam buton sayısı kadar ekler
  currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
  // Slaytı günceller
  updateSlider(currentIndex);
});

nextButton.addEventListener("click", () => {
  // Mevcut indeksi bir arttırır, döngüsel olması için radio butonlarının sayısını kullanır
  currentIndex = (currentIndex + 1) % radioButtons.length;
  updateSlider(currentIndex);
});
