export const sideScroll = (direction, distance) => {
  let scrollAmount = 0;
  let element = document.querySelector(".container");
  let slideTimer = setInterval(function () {
    if (direction === "left") {
      element.scrollLeft -= 10;
      element.classList.add("indiana-scroll-container--dragging");
    } else {
      element.scrollLeft += 10;
      element.classList.add("indiana-scroll-container--dragging");
    }
    scrollAmount += 10;
    if (scrollAmount >= distance) {
      element.classList.remove("indiana-scroll-container--dragging");
      window.clearInterval(slideTimer);
    }
  }, 15);
};
