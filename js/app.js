document.querySelectorAll(".training__card").forEach(card => {
    card.addEventListener("click", () => {
      const box = card.parentElement;
      const img = card.querySelector(".training__card-img");
      const info = box.querySelector(".training__info");
  
      // toggle qilish
      if (box.classList.contains("active")) {
        box.classList.remove("active");
        info.style.maxHeight = null;
        img.src = "./images/arrovs-top.svg"; // yopilganda
      } else {
        box.classList.add("active");
        info.style.maxHeight = info.scrollHeight + "px";
        img.src = "./images/arrows-bottom.svg"; // ochilganda
      }
    });
  });
  

  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1280: {
            slidesPerView: 8,
            spaceBetween: 45,
        },
    },
});