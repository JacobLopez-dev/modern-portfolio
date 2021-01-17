const menuBtn = document.querySelector('.navToggle');
const sideNav = document.querySelector('.sideNav');
const navLinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', myFunction);
navLinks.addEventListener('click', myFunction2);

function myFunction(){
    if(sideNav.className === 'sideNav inactive'){
        sideNav.classList.remove('inactive');
        sideNav.classList.add('active');
    }else{
        sideNav.classList.remove('active');
        sideNav.classList.add('inactive')
    }
}

function myFunction2(){
    if(sideNav.className === 'sideNav active'){
        sideNav.classList.remove('active');
        sideNav.classList.add('inactive');
    }
}