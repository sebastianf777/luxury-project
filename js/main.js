window.onload = function () {
//All buttons
const all_buttons = document.querySelectorAll('button');
const link_buttons = document.querySelectorAll('a');
(() => {
    all_buttons.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault;
        })
    });
    link_buttons.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault;
        })
    });
})();


//Navbar
const header = document.querySelector('header');
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 50)
})

//Video section


    let sourceVideo = document.getElementById('sourceVideo');
    let index = 0;
    const videoList = ['video_2.mp4', 'video_3.mp4', 'video_1.mp4']
    const videoReproductor = document.getElementById('videoReproductor');
    changeVideo = () => {

        if (index < 2) {
            index++;
            sourceVideo.setAttribute("src", 'videos/' + videoList[index])
            videoReproductor.load();
            videoReproductor.play();
        } else {
            index = 0;
            sourceVideo.setAttribute("src", 'videos/' + videoList[index])
            videoReproductor.load();
            videoReproductor.play();
        }
    }
}

//Video explore

const playExplore = document.querySelector('#exploreVideo');
const closeExplore = document.querySelector('.explore-section__close');
const exploreIframe = document.querySelector('.explore-section__iframe');
const stopVideos = () => {
    document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
    // document.querySelectorAll('video').forEach(v => { v.pause() });
  };
closeExplore.onclick = function(){
    stopVideos();
   
    exploreIframe.style.display = 'none';
    closeExplore.style.display = 'none';


}
playExplore.onclick = function(e){
    e.preventDefault;
    exploreIframe.style.display = 'flex';
    closeExplore.style.display = 'flex';

}

//Testimonials Section

var testimonials = document.getElementById('testimonials');
        var control1 = document.getElementById('control1');
        var control2 = document.getElementById('control2');
        var control3 = document.getElementById('control3');
        
        
        control1.onclick=function(){
            testimonials.style.transform = "translateX(63vw)";
            control1.classList.add("active");
            control2.classList.remove("active");
            control3.classList.remove("active");
        }
        
        control2.onclick=function(){
            testimonials.style.transform = "translateX(0px)";
            control1.classList.remove("active");
            control2.classList.add("active");
            control3.classList.remove("active");
        }
        
        control3.onclick=function(){
            testimonials.style.transform = "translateX(-65vw)";
            control1.classList.remove("active");
            control2.classList.remove("active");
            control3.classList.add("active");
        }