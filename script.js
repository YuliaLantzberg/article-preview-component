const share_btn = document.querySelector(".ad__footer button");
const share_btn_socials = document.querySelector(".socials button");
const ad__footer = document.querySelector(".ad__footer");
const socials = document.querySelector(".socials");

share_btn.addEventListener("click", () => {
	ad__footer.style.display = "none";
	socials.style.display = "flex";
});

share_btn_socials.addEventListener("click", () => {
	socials.style.display = "none";
	ad__footer.style.display = "flex";
});
