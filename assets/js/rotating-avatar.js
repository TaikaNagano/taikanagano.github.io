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

  function getRandomIndex(excludeIndex = -1) {
    let index;

    do {
      index = Math.floor(Math.random() * images.length);
    } while (images.length > 1 && index === excludeIndex);

    return index;
  }

  // ページを開くたびにランダムな画像から開始
  let currentIndex = getRandomIndex();
  avatar.src = images[currentIndex];

  // 画像を先読み
  images.forEach(function (src) {
    const img = new Image();
    img.src = src;
  });

  // 30秒ごとに、現在とは違う画像へランダム切替
  setInterval(function () {
    currentIndex = getRandomIndex(currentIndex);
    avatar.src = images[currentIndex];
  }, 30000);
});