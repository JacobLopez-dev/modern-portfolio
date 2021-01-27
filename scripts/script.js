const menuBtn = document.querySelector('.navToggle');
const sideNav = document.querySelector('.sideNav');
const navLink = document.querySelector('.nav-links')
const projectBtn = document.querySelector('.project-btn');
const projectDesc = document.querySelector('.project-description');
const projectIcon = document.querySelector('.project-icon');

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

    if(projectIcon.classList.contains("fa-arrow-up")){
        projectIcon.classList.remove("fa-arrow-up");
        projectIcon.classList.add("fa-arrow-down");
    }else{
        projectIcon.classList.remove("fa-arrow-down");
        projectIcon.classList.add("fa-arrow-up");
    }
}

function navClose(){
    if(sideNav.className === 'sideNav active'){
        sideNav.classList.remove('active');
        sideNav.classList.add('inactive');
    }
}