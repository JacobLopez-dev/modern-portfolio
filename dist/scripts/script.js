const menuBtn = document.querySelector('.navToggle');
const sideNav = document.querySelector('.sideNav');
const navLink = document.querySelector('.nav-links')
const projectImg = document.querySelector('.project-image');
const projectDesc = document.querySelector('.project-description');

menuBtn.addEventListener('click', navActivation);
navLink.addEventListener('click', navClose);
//projectImg.addEventListener('click', )

function navActivation(){
    if(sideNav.className === 'sideNav inactive'){
        sideNav.classList.remove('inactive');
        sideNav.classList.add('active');
    }else{
        sideNav.classList.remove('active');
        sideNav.classList.add('inactive')
    }
}

//function displayDesc(){

//}

function navClose(){
    if(sideNav.className === 'sideNav active'){
        sideNav.classList.remove('active');
        sideNav.classList.add('inactive');
    }
}