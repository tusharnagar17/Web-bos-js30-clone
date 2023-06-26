// things to done
// 1. toggle play or pause (whether on screen or button)
// 2. range slider 
// 3. data-skip to -10s to 25s.
// 4. progressBar is autoupdated 
// 5. Manually update progress bar by click 
// 6. Full screen mode. ##notcomplete

// get variable
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const inputs = player.querySelectorAll('input');
const skips = player.querySelectorAll('[data-skip]');
const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');
const fullscn = player.querySelector('.fullscreen');
// function works
function toggle_play(){
   const method = video.paused ? `play` : `pause`;
    video[method]();
}

function update_status(){
    const icon = video.paused ?  '►' : '❚ ❚';
    toggle.textContent = icon; 
}
function update_prop(){
   video[`${this.name}`]= this.value;
}
function skip_video(){
    // console.log(this.dataset.skip); ##IMP
    video.currentTime += parseFloat(this.dataset.skip);
}

function update_progress(){ // ## error
    let percent1 = (video.currentTime / video.duration) * 100;
    // console.log(percent);
    progressBar.style.flexBasis = `${percent1}%`;
}

function scrub(e){
    let scrubtime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubtime; 
    //   console.log(scrubtime);
}
function putfull(){
    video.requestFullscreen();
}
// eventlisteners
function tushar(){
    console.log("It's worked!");
}

video.addEventListener('click', toggle_play);
video.addEventListener('timeupdate', update_progress);
video.addEventListener('play', update_status);
video.addEventListener('pause', update_status);

toggle.addEventListener('click', toggle_play);

inputs.forEach(input => input.addEventListener('change', update_prop));
inputs.forEach(input => input.addEventListener('mousemove', update_prop));

skips.forEach(skipp => skipp.addEventListener('click', skip_video));

progress.addEventListener('click', scrub);

fullscn.addEventListener('click', putfull);