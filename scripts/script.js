const menuBtn = document.querySelector('.navToggle');
const sideNav = document.querySelector('.sideNav');
const navLink = document.querySelector('.nav-links')
const projectBtn = document.querySelector('.project-btn');
const projectDesc = document.querySelector('.project-description');

menuBtn.addEventListener('click', navActivation);
navLink.addEventListener('click', navClose);
projectBtn.addEventListener('click', displayDesc);

function navActivation(){
    if(sideNav.className === 'sideNav inactive'){
        sideNav.classList.remove('inactive');
        sideNav.classList.add('active');
    }else{
        sideNav.classList.remove('active');
        sideNav.classList.add('inactive')
    }
}

function displayDesc(){
    if(projectDesc.className === 'project-description'){
        projectDesc.classList.add('hide')
    }else if(projectDesc.className === 'project-description hide'){
        projectDesc.classList.remove('hide')
    }else{
        projectDesc.classList.add('hide')
    }
}

function navClose(){
    if(sideNav.className === 'sideNav active'){
        sideNav.classList.remove('active');
        sideNav.classList.add('inactive');
    }
}