const menuBtn = document.querySelector('.navToggle');
menuBtn.addEventListener('click', navActivation);

const navLink = document.querySelector('.nav-links');
navLink.addEventListener('click', navClose);

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

const projectCards = document.querySelectorAll('.project-card');
for(const projectCard of projectCards){
    //console.log(projectCard);
    let chldNodes = projectCard.children;
    let description = chldNodes[1].firstElementChild;
    
    projectCard.addEventListener('click', (e) =>{
        let target = e.target;
        console.log(target)
        if(target.classList[0] !== 'project-icon') return;
        arrowFlip(target);
        displayDesc2(description);
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
