function openCenteredPopup(url, width, height) {
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);
    window.open(url, 'popupWindow', `width=${width},height=${height},left=${left},top=${top}`);
    }


 function setLanguage(lang) {
    document.querySelectorAll('.lang-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.' + lang).forEach(el => el.style.display = 'block');
  }


let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}