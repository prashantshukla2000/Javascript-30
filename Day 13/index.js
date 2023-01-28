//it will help run te checslide once every 20 millisecond hich is oka speed won't let any performance issue
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");
function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    //height at which we slide in the image---halfway throught the image-> window.scrollY-gives the px at the top the page....window.innerHeight--Gives the height of content...so now points at the bottom of screen..
    const slideInAt =
      (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    //after the end of the images
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
