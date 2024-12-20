document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.carousel-container');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const items = document.querySelectorAll('.carousel-item');

  let currentIndex = 0;
  const totalItems = items.length;

  // 更新按钮状态
  const updateButtons = () => {
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    nextBtn.style.opacity = currentIndex === totalItems - 1 ? '0.5' : '1';
  };

  // 初始化按钮状态
  updateButtons();

  // 切换到指定索引
  const goToSlide = (index) => {
    currentIndex = index;
    const translateX = -100 * currentIndex;
    container.style.transform = `translateX(${translateX}%)`;
    updateButtons();

    // 更新进度条
    const progress = (currentIndex / (totalItems - 1)) * 100;
    document.querySelector('.progress-bar-fill').style.width = `${progress}%`;
  };

  // 上一张
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  });

  // 下一张
  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
      goToSlide(currentIndex + 1);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.carousel-container-2');
  const prevBtn = document.querySelector('.carousel-prev-2');
  const nextBtn = document.querySelector('.carousel-next-2');
  const items = document.querySelectorAll('.carousel-item-2');

  let currentIndex = 0;
  const totalItems = items.length;

  // 更新按钮状态
  const updateButtons = () => {
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    nextBtn.style.opacity = currentIndex === totalItems - 1 ? '0.5' : '1';
  };

  // 初始化按钮状态
  updateButtons();

  // 切换到指定索引
  const goToSlide = (index) => {
    currentIndex = index;
    const translateX = -100 * currentIndex;
    container.style.transform = `translateX(${translateX}%)`;
    updateButtons();

    // 更新进度条
    const progress = (currentIndex / (totalItems - 1)) * 100;
    document.querySelector('.progress-bar-fill-2').style.width = `${progress}%`;
  };

  // 上一张
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  });

  // 下一张
  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
      goToSlide(currentIndex + 1);
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  const menuContainer = document.querySelector('.menu-container');

  menuIcon.addEventListener('click', function () {
    menuContainer.classList.add('active');
  });

  closeIcon.addEventListener('click', function () {
    menuContainer.classList.remove('active');
  });
}); 