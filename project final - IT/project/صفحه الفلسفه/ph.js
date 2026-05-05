let video = document.getElementById("video");
let bar = document.getElementById("progress-bar");
let text = document.getElementById("progress-text");
video.addEventListener("timeupdate",function(){
   let progress = video.currentTime / video.duration*100;
   bar.style.width= progress +"%";
   text.innerHTML = Math.floor(progress)+"%"; 
});
function changeVideo(videoSrc){
   let video = document.getElementById("video");
   let source= video.querySelector("source");
   source.src = videoSrc;
   video.load();
   video.play();
}
