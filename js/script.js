function testWebP(e){var t=new Image;t.onload=t.onerror=function(){e(2==t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}testWebP((function(e){1==e?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")}));const dmtMove=document.querySelector(".move-img");function MoveBackground(e){let t=e.clientX/window.innerWidth*-30+15,o=e.clientY/window.innerHeight*-20+10;dmtMove.setAttribute("style","transform: translate("+t+"px, "+o+"px);")}document.addEventListener("mousemove",(function(e){MoveBackground(e)}));const playArea=document.querySelector(".main__img");let track=document.querySelector(".track"),icon=document.querySelector(".play-icon");playArea.onclick=function(){track.classList.contains("play")?(track.pause(),track.classList.remove("play"),icon.classList.remove("active")):(track.play(),track.classList.add("play"),icon.classList.add("active"))};