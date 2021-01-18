function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});;

const dmtMove = document.querySelector('.move__img');
const dmtMoveFront = document.querySelector('.move__img-front');
const mediaQuery = window.matchMedia('(min-width: 769px)');
if (mediaQuery.matches) {
   document.addEventListener("mousemove", function (e) { MoveBackground(e); });

   function MoveBackground(e) {
      let offsetX = (e.clientX / window.innerWidth * -30) + 15;
      let offsetY = (e.clientY / window.innerHeight * -20) + 10;
      let offsetXfast = (e.clientX / window.innerWidth * -60) + 30;
      let offsetYfast = (e.clientY / window.innerHeight * -40) + 20;
      dmtMove.setAttribute("style", "transform: translate(" + offsetX + "px, " + offsetY + "px);");
      dmtMoveFront.setAttribute("style", "transform: translate(" + offsetXfast + "px, " + offsetYfast + "px);");
   }
}

let playArea = document.querySelectorAll('.play-area');
let playAreaMobile = document.querySelector('.main__img');
let track = document.querySelector('.track');
let playIcon = document.querySelector('.play-icon');
let links = document.querySelectorAll('.content__link');

if (playArea.length > 0) {
   for (let i = 0; i < playArea.length; i++) {
      playArea[i].onclick = function () {
         if (track.classList.contains('play')) {
            pauseTrack();
         } else {
            playTrack();
         }
      };
   }
}
for (let i = 0; i < links.length; i++) {
   links[i].onclick = function () {
      if (track.classList.contains('play')) {
         pauseTrack();
      }
   }
}
function pauseTrack() {
   track.pause();
   track.classList.remove('play');
   playIcon.classList.remove('active');
}
function playTrack() {
   track.play();
   track.classList.add('play');
   playIcon.classList.add('active');
}

const mediaQueryMobile = window.matchMedia('(max-width: 768px)');
if (mediaQueryMobile.matches) {
   let mobileImages = document.querySelector('.images__mobile');
   mobileImages.appendChild(playIcon);
   let linksBox = document.querySelector('.content__links');
   let content = document.querySelector('.content');
   content.appendChild(linksBox);
   let contentTop = document.querySelector('.content__top');
   let contentSubtitle = document.querySelector('.content__subtitle');
   contentTop.appendChild(contentSubtitle);


   let backMobile = document.querySelector('.move__img-mobile');
   let frontMobile = document.querySelector('.move__img-front-mobile');

   function handleOrientation(event) {
      let x = event.beta;
      let y = event.gamma;

      if (x > 89) { y = -y };

      if (x > 88) { x = 88 };
      if (x < -30) { x = -30 };
      if (y > 58) { y = 58 };
      if (y < -58) { y = -58 };

      x += 60;
      y += 90;

      let osX = (-60 * x / 180 + 30);
      let osY = (-60 * y / 180 + 30);
      let osXFast = (-120 * x / 180 + 60);
      let osYFast = (-120 * y / 180 + 60);

      let isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());

      if (isiDevice) {
         backMobile.style = "-webkit-transform: translate(" + osY + "px, " + osX + "px);";
         frontMobile.style = "-webkit-transform: translate(" + osYFast + "px, " + osXFast + "px);";
      } else {
         backMobile.style = "transform: translate(" + osY + "px, " + osX + "px);";
         frontMobile.style = "transform: translate(" + osYFast + "px, " + osXFast + "px);";
      }
   }

   window.addEventListener('deviceorientation', handleOrientation);
   let isi = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
   if (isi) {
      alert('это iphone');
   }
}