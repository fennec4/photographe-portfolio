let a = document.querySelectorAll("section a");
//let p = document.querySelectorAll("section p");
a.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.lastElementChild.textContent = "voir ";
  });
  img.addEventListener("mouseout", () => {
    img.lastElementChild.textContent = "";
  });
});
