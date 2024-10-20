// Slider buton ve radio butonu
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const radioButtons = document.querySelectorAll('input[name="slider"]');

// Mevcut index (başlangıç slide'ı)
let currentIndex = 0;

// Slider'ı mevcut index'e göre güncelleyen fonksiyon
function updateSlider(index) {
  radioButtons[index].checked = true;
}

prevButton.addEventListener("click", () => {
 // Index'i azalt ve döngüsel hale getir (ilk slide'a dön)
  currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
  updateSlider(currentIndex);
});

nextButton.addEventListener("click", () => {
   // Index'i artır ve döngüsel hale getir (son slide'dan sonra başa dön)
  currentIndex = (currentIndex + 1) % radioButtons.length;
  updateSlider(currentIndex);
});

// Tema değiştirme (dark/light)
document.getElementById("hide-checkbox").addEventListener("change", function () {
  if (this.checked) {  // Eğer checkbox işaretli ise light tema uygula
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  } else {   // Eğer checkbox işaretli değilse dark tema uygula
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  }
});

// Typewriter (yazı yazma) efekti
document.addEventListener("DOMContentLoaded", function () {
  typeWriter();
});

let i = 0;
const txt =
  "İş dünyasında zorluklara göğüs geren kadınların ilham verici hikayelerini keşfedin. Bu platform, engelleri aşarak başarıya ulaşan güçlü kadınların deneyimlerini ve mücadelelerini paylaşmak amacıyla oluşturuldu. Her bir hikaye, azim, kararlılık ve yenilikçilikle dolu. Kendinizi bu cesur kadınların yolculuklarına kaptırın, onların deneyimlerinden ilham alın ve kendi potansiyelinizi keşfedin. Çünkü başarı, cesaretle başlar!";
const speed = 25;  // Yazma hızı (milisaniye)

function typeWriter() {
  if (i < txt.length) {  // Metindeki harfleri sırayla yazdır
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
   // Eğer bir nokta (cümle sonu) varsa 0.5 saniye durakla
    if (txt.charAt(i - 1) === ".") {
      setTimeout(typeWriter, 500);
    } else {
      setTimeout(typeWriter, speed);
    }
  }
}
