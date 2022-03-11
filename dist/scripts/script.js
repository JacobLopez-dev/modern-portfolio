import { PROJECT_LIST } from "./projects.js";

//Buttons, links and their event listeners
const menuBtn = document.querySelector('.navToggle');
menuBtn.addEventListener('click', navActivation);

const navLink = document.querySelector('.nav-links');
navLink.addEventListener('click', navClose);

//Grab a few elements
const sideNav = document.querySelector('.sideNav');
const navToggle = document.querySelector('.navToggle');
const projectDesc = document.querySelector('.project-description');
const projectIcon = document.querySelector('.project-icon');

// Project template
const projectTemplate = document.querySelector('#project-template');
const projectList = document.querySelector('.project-list');

//switch nav icon on click
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
});

//Open and close nav on menu btn click
function navActivation() {
  if (sideNav.className === 'sideNav inactive') {
    sideNav.classList.remove('inactive');
    sideNav.classList.add('active');
  } else {
    sideNav.classList.remove('active');
    sideNav.classList.add('inactive');
  }
}

//Close side nav on link click
function navClose() {
  if (sideNav.className === 'sideNav active') {
    sideNav.classList.remove('active');
    sideNav.classList.add('inactive');
    navToggle.classList.toggle('active');
  }
}

// Render project cards to tempplate from data file
function renderProjects(){
  PROJECT_LIST.forEach(project => {
    const projectCard = document.importNode(projectTemplate.content, true);
    const projectHeading = projectCard.querySelector('h3');
    const projectDescription = projectCard.querySelector('.project-card-description')
    const sourceLink = projectCard.querySelector('.source-link');
    const liveLink = projectCard.querySelector('.live-link');
    const projectImage = projectCard.querySelector('.project-card-content');

    projectHeading.append(project.title);
    projectDescription.append(project.description);
    sourceLink.setAttribute('href', `${project.source_code}`);
    liveLink.setAttribute('href', `${project.live_link}`);
    projectImage.style.backgroundImage = `url(images/${project.cover_image})`
    projectList.appendChild(projectCard);
  })
}

renderProjects();

//Add event delgation to the project card elements
const projectCards = document.querySelectorAll('.project-card');
for (const projectCard of projectCards) {
  let chldNodes = projectCard.children;
  let description = chldNodes[1].firstElementChild;

  projectCard.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList[0] !== 'project-icon') return;
    arrowFlip(target);
    displayDesc2(description);
  });
}

//Flip arrow on click
function arrowFlip(btn) {
  if (btn.classList.contains('fa-ellipsis-h')) {
    btn.classList.remove('fa-ellipsis-h');
    btn.classList.add('fa-times-circle');
  } else {
    btn.classList.remove('fa-times-circle');
    btn.classList.add('fa-ellipsis-h');
  }
}

//Display project description on click
function displayDesc2(desc) {
  if (desc.className === 'project-description') {
    desc.classList.add('hide');
  } else if (desc.className === 'project-description hide') {
    desc.classList.remove('hide');
  } else {
    desc.classList.add('hide');
  }
}
