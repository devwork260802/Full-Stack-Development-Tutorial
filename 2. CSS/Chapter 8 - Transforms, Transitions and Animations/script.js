// Transition JavaScript
image2.style.width = "120px";
image2.style.height = "120px";
btn2.addEventListener("click", () => {
    if (image2.style.width === '600px' && image2.style.height === "600px") {
        image2.style.width = '120px';
        image2.style.height = '120px';
    }
    else if (image2.style.width === '120px' && image2.style.height === "120px") {
        image2.style.width = "600px";
        image2.style.height = "600px";
    }
})