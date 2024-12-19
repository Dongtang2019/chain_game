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
    const translateX = -106 * currentIndex;
    container.style.transform = `translateX(${translateX}%)`;
    updateButtons();
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
