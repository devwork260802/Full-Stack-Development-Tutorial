// Question 2 JavaScript
document.querySelectorAll('.btn2').forEach(btn2 => {
    load2.style.width = "0vw";
    btn2.addEventListener("click", () => {
        load2.style.width = "100vw";
    })
})