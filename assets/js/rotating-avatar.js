document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.querySelector(".author__avatar img");
  if (!avatar) return;

  const images = [
    "/images/profile1.png",
    "/images/profile2.png",
    "/images/profile3.png",
    "/images/profile4.png",
    "/images/profile5.png",   
  ];

  let i = 0;

  setInterval(function () {
    i = (i + 1) % images.length;
    avatar.src = images[i];
  }, 30000); // 30秒
});