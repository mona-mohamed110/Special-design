let maincolor = localStorage.getItem('option-box');

if(maincolor !== null){

    document.documentElement.style.setProperty('--main-color', localStorage.getItem('option-box') );

}


document.querySelector('.setting .fa-gear').onclick = function(){
    this.classList.toggle("fa-spin")
    document.querySelector('.box-setting').classList.toggle("open")

}

// nav bullet
let bullets = document.querySelectorAll('.nav-bullet .bullet');

bullets.forEach(bullets => {

    bullets.addEventListener('click' , function(e){

        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        })
    })
});





let listcolor = document.querySelectorAll('.colors-list li');

listcolor.forEach(li => {
    li.addEventListener('click' , function(e){

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color );

        localStorage.setItem("option-box" ,e.target.dataset.color );

    })
});


let landing = document.querySelector('.landing');

let imgarr = ["1.jpeg" , "2.webp" , "3.jpeg" , "4.webp" , "5.webp"];

setInterval(() => {

    let rondom = Math.floor(Math.random()* imgarr.length)

    landing.style.backgroundImage = 'url("img/'+imgarr[rondom]+'")'
}, 2500);








let skill = document.querySelector('.skills');

window.onscroll=function(){
    let offsettop = skill.offsetTop;

    let height = skill.offsetHeight;

    let windowheight = window.innerHeight;

    let windowtop = this.scrollY;
    // console.log(windowtop);
    

    let allskill = document.querySelectorAll('.skill-box .skill-progress span');

    if(windowtop > (offsettop + height - windowheight)- 100){
        allskill.forEach(skill =>{

        skill.style.width = skill.dataset.progress;

        })
    }
}


// popup overlay

let ourgally = document.querySelectorAll(".gallry .image-box img");

ourgally.forEach(img => {

    img.addEventListener('click', (e)=>{

        let overlay = document.createElement('div');

        overlay.className='overlay';

        document.body.appendChild(overlay);

        let popupbox = document.createElement('div');

        popupbox.className='popup-box'

        if(img.alt !== null){
            let heading = document.createElement('h2');

            heading.className='h2-h'

            let texth = document.createTextNode(img.alt);

            heading.appendChild(texth);

            popupbox.appendChild(heading)
        }

        let popupimage = document.createElement('img');

        popupimage.src = img.src;
        popupbox.appendChild(popupimage);
        document.body.appendChild(popupbox);


        let close = document.createElement('span');

        let textclose = document.createTextNode("X")

        close.appendChild(textclose);
        
        close.className = 'close';

        popupbox.appendChild(close)
    })
});

document.addEventListener('click' , (e)=>{
    if(e.target.className=='close'){

        e.target.parentNode.remove();

        document.querySelector('.overlay').remove();

    }
})


