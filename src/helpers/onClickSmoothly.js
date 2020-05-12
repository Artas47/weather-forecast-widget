export const sideScroll = (direction, distance) => {
  let scrollAmount = 0;
  let element = document.querySelector(".container");
  let slideTimer = setInterval(function () {
    if (direction === "left") {
      element.classList.add("indiana-scroll-container--dragging");
      element.scrollLeft -= 10;
    } else {
      element.classList.add("indiana-scroll-container--dragging");
      element.scrollLeft += 10;
    }
    scrollAmount += 10;
    if (scrollAmount >= distance) {
      element.classList.remove("indiana-scroll-container--dragging");
      window.clearInterval(slideTimer);
    }
  }, 25);
};
