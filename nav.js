const navBottom = document.querySelector("nav");
const aboutTop = document.querySelector("#about-top");
const about = document.querySelector("#about");
const levelsTop = document.querySelector("#levelstop");
const levels = document.querySelector("#levels");
const rolesTop = document.querySelector("#rolesTop");
const roles = document.querySelector("#roles");
const applicationTop = document.querySelector("#applicationTop");
const application = document.querySelector("#application");
function movetoabout(e) {
  e.preventDefault();
  window.scrollTo(0, aboutTop.offsetTop - navBottom.offsetHeight);
}
function movetolevels(e) {
  e.preventDefault();
  window.scrollTo(0, levelsTop.offsetTop - navBottom.offsetHeight);
}
function movetoroles(e) {
  e.preventDefault();
  window.scrollTo(0, rolesTop.offsetTop - navBottom.offsetHeight);
}
function movetoapplications(e) {
  e.preventDefault();
  window.scrollTo(0, applicationTop.offsetTop - navBottom.offsetHeight);
}
about.addEventListener("click", movetoabout);
levels.addEventListener("click", movetolevels);
roles.addEventListener("click", movetoroles);
application.addEventListener("click", movetoapplications);
