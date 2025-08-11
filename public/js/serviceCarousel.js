document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.service-track');
  const prevBtn = document.getElementById('prev-button');
  const nextBtn = document.getElementById('next-button');

  const maxVisible = 3;
  const total = track.children.length;
  let currentIndex = 0;

  function slideWidth() {
    if (track.children.length > 1) {
      return track.children[1].offsetLeft - track.children[0].offsetLeft;
    }
    return track.children[0].offsetWidth;
  }

  function update() {
    const width = slideWidth();
    track.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex >= total - maxVisible) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    update();
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex <= 0) {
      currentIndex = total - maxVisible;
    } else {
      currentIndex -= 1;
    }
    update();
  });

  window.addEventListener('resize', update);

  update();
});