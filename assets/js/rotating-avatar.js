document.addEventListener("DOMContentLoaded", function () {

  /* ===== Sidebar avatar ===== */

  const avatar = document.querySelector(".author__avatar img");

  const avatarImages = [
"/images/profile/profile1.png",
"/images/profile/profile2.png",
"/images/profile/profile3.png",
"/images/profile/profile4.png",
"/images/profile/profile5.png",
"/images/profile/chihuahua1.png",
"/images/profile/chihuahua2.png",
"/images/profile/chihuahua3.png",
"/images/profile/chihuahua4.png",
"/images/profile/chihuahua5.png",    
  ];

  function getRandomIndex(length, excludeIndex = -1) {
    let index;

    do {
      index = Math.floor(Math.random() * length);
    } while (length > 1 && index === excludeIndex);

    return index;
  }

  if (avatar) {
    let currentAvatar = getRandomIndex(avatarImages.length);
    avatar.src = avatarImages[currentAvatar];

    avatarImages.forEach(function (src) {
      const img = new Image();
      img.src = src;
    });

    setInterval(function () {
      currentAvatar = getRandomIndex(
        avatarImages.length,
        currentAvatar
      );
      avatar.src = avatarImages[currentAvatar];
    }, 20000);
  }


  /* ===== About page hero photo ===== */

  const aboutPhoto =
    document.getElementById("rotating-about-photo");

  const aboutImages = [
    "/images/about/about1.png",
    "/images/about/about2.png",
    "/images/about/about3.png",
  ];

  if (aboutPhoto) {
    let currentAbout = getRandomIndex(aboutImages.length);
    aboutPhoto.src = aboutImages[currentAbout];

    aboutImages.forEach(function (src) {
      const img = new Image();
      img.src = src;
    });

    setInterval(function () {

      aboutPhoto.style.opacity = 0;

      setTimeout(function () {
        currentAbout = getRandomIndex(
          aboutImages.length,
          currentAbout
        );

        aboutPhoto.src = aboutImages[currentAbout];
        aboutPhoto.style.opacity = 1;

      }, 600);

    }, 15000);
  }

});