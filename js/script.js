function testWebP(e){var t=new Image;t.onload=t.onerror=function(){e(2==t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}testWebP((function(e){1==e?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")}));const dmtMove=document.querySelector(".move__img"),dmtMoveFront=document.querySelector(".move__img-front"),mediaQuery=window.matchMedia("(min-width: 769px)");if(mediaQuery.matches){function MoveBackground(e){let t=e.clientX/window.innerWidth*-30+15,n=e.clientY/window.innerHeight*-20+10,o=e.clientX/window.innerWidth*-60+30,a=e.clientY/window.innerHeight*-40+20;dmtMove.setAttribute("style","transform: translate("+t+"px, "+n+"px);"),dmtMoveFront.setAttribute("style","transform: translate("+o+"px, "+a+"px);")}document.addEventListener("mousemove",(function(e){MoveBackground(e)}))}let playArea=document.querySelectorAll(".play-area"),playAreaMobile=document.querySelector(".main__img"),track=document.querySelector(".track"),playIcon=document.querySelector(".play-icon"),links=document.querySelectorAll(".content__link");if(playArea.length>0)for(let e=0;e<playArea.length;e++)playArea[e].onclick=function(){track.classList.contains("play")?pauseTrack():playTrack()};for(let e=0;e<links.length;e++)links[e].onclick=function(){track.classList.contains("play")&&pauseTrack()};function pauseTrack(){track.pause(),track.classList.remove("play"),playIcon.classList.remove("active")}function playTrack(){track.play(),track.classList.add("play"),playIcon.classList.add("active")}const mediaQueryMobile=window.matchMedia("(max-width: 768px)");if(mediaQueryMobile.matches){document.querySelector(".images__mobile").appendChild(playIcon);let e=document.querySelector(".content__links");document.querySelector(".content").appendChild(e);let t=document.querySelector(".content__top"),n=document.querySelector(".content__subtitle");t.appendChild(n);let o=document.querySelector(".move__img-mobile"),a=document.querySelector(".move__img-front-mobile");function handleOrientation(e){let t=e.beta,n=e.gamma;t>90&&(t=90),t<0&&(t=0),t+=90,n+=90;let c=-120*t/180+80,i=-60*n/180+30,r=-180*t/180+120,l=-90*n/180+45;o.setAttribute("style","transform: translate("+i+"px, "+c+"px);"),a.setAttribute("style","transform: translate("+l+"px, "+r+"px);")}window.addEventListener("deviceorientation",handleOrientation)}