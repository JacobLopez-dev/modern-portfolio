const menuBtn = document.querySelector('.navToggle');
menuBtn.addEventListener('click', navActivation);

const navLink = document.querySelector('.nav-links');
navLink.addEventListener('click', navClose);

//const projectBtn = document.querySelector('.project-btn');
//projectBtn.addEventListener('click', displayDesc);

const sideNav = document.querySelector('.sideNav');
const projectDesc = document.querySelector('.project-description');
const projectIcon = document.querySelector('.project-icon');

//Open and close nav on menu btn click currently only works on the first element
function navActivation(){
    if(sideNav.className === 'sideNav inactive'){
        sideNav.classList.remove('inactive');
        sideNav.classList.add('active');
    }else{
        sideNav.classList.remove('active');
        sideNav.classList.add('inactive')
    }
}

//Close side nav on link click
function navClose(){
    if(sideNav.className === 'sideNav active'){
        sideNav.classList.remove('active');
        sideNav.classList.add('inactive');
    }
}
/*
//Display project description on click
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
*/
const projectCards = document.querySelectorAll('.project-card');
for(const projectCard of projectCards){
    projectCard.addEventListener('click', (e) =>{
        let target = e.target;
        if(target.classList[0] !== 'project-icon') return;
        arrowFlip(target)
    })
}

function arrowFlip(btn){
    if(btn.classList.contains("fa-arrow-up")){
        btn.classList.remove("fa-arrow-up");
        btn.classList.add("fa-arrow-down");
    }else{
        btn.classList.remove("fa-arrow-down");
        btn.classList.add("fa-arrow-up");
    }
}


//Display project description on click
function displayDesc2(desc){
    if(desc.className === 'project-description'){
        desc.classList.add('hide')
    }else if(desc.className === 'project-description hide'){
        desc.classList.remove('hide')
    }else{
        desc.classList.add('hide')
    }
}
