const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const nearBottom =
    window.scrollY + window.innerHeight >= document.body.scrollHeight - 50;
  backToTopButton.style.display = nearBottom ? "block" : "none";
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
