document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  const menuContainer = document.querySelector('.menu-container');
  
  let currentIndex = 0;
  const totalItems = items.length;
  
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }
  
  // 自动轮播
  let autoplay = setInterval(nextSlide, 3000);
  
  // 按钮点击事件
  nextBtn.addEventListener('click', () => {
    clearInterval(autoplay);
    nextSlide();
    autoplay = setInterval(nextSlide, 3000);
  });
  
  prevBtn.addEventListener('click', () => {
    clearInterval(autoplay);
    prevSlide();
    autoplay = setInterval(nextSlide, 3000);
  });
  
  menuIcon.addEventListener('click', function() {
    menuContainer.classList.add('active');
  });
  
  closeIcon.addEventListener('click', function() {
    menuContainer.classList.remove('active');
  });
}); 