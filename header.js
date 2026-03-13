function scrollSlider(direction) {
  const slider = document.getElementById('slider');
  const slideWidth = slider.clientWidth; 
  const totalWidth = slider.scrollWidth;
  
  const currentPos = slider.scrollLeft;
  const newTarget = currentPos + (slideWidth * direction);

  if (direction === -1 && Math.abs(currentPos) >= (totalWidth - slideWidth - 5)) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  } 
  else if (direction === 1 && Math.abs(currentPos) <= 5) {
    slider.scrollTo({ left: -totalWidth, behavior: 'smooth' });
  } 
  else {
    slider.scrollBy({ left: slideWidth * direction, behavior: 'smooth' });
  }
}
