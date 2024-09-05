const share_btn = document.querySelector(
	".article__footer--regular .btn-share"
);
const share_btn_socials = document.querySelector(
	".article__footer--active .btn-share"
);
const artl__footer = document.querySelector(".article__footer--regular");
const socials = document.querySelector(".article__footer--active");

share_btn.addEventListener("click", () => {
	artl__footer.style.display = "none";
	socials.style.display = "flex";
});

share_btn_socials.addEventListener("click", () => {
	socials.style.display = "none";
	artl__footer.style.display = "flex";
});
