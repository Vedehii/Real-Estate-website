// Load popup.html into the container
fetch("popup.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("popupContainer").innerHTML = data;
  });

// Open popup
document.addEventListener("click", function(e) {
  if (e.target && e.target.id === "enquireBtn") {
    e.preventDefault();
    document.getElementById("popup").style.display = "flex";
  }
});

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
