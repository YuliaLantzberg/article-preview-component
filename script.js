const share_btn = document.querySelector(
	".article__footer--regular .btn-share"
);
const share_btn_socials = document.querySelector(
	".article__footer--active .btn-share"
);
const artl__footer = document.querySelector(".article__footer--regular");
const socials = document.querySelector(".article__footer--active");

share_btn.addEventListener("click", () => {
	artl__footer.classList.remove("active");
	socials.classList.add("active");
});

share_btn_socials.addEventListener("click", () => {
	socials.style.classList.remove("active");
	artl__footer.classList.add("active");
});

// for desktop
const triangle = document.querySelector(".triangle-down");
share_btn.addEventListener("mouseenter", () => {
	socials.classList.add("hover");
	triangle.classList.add("hover");
});

share_btn.addEventListener("mouseleave", () => {
	socials.classList.remove("hover");
	triangle.classList.remove("hover");
});
