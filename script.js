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
    if (slides.length > 0) {
  slides[slideIndex - 1].style.display = "block";
}
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

document.querySelectorAll('video').forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.muted = false;
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
    video.muted = true;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector('video');
  if (video) {
    video.addEventListener('click', () => {
      video.muted = false;
      video.play();
    });
  } 
});



  function showPopup() {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'block';
    } 
  }

  function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'none';
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(showPopup, 2000);
  });


