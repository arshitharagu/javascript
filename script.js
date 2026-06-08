console.log("Portfolio Loaded Successfully");

/* ==========================
   CARD HOVER EFFECT
========================== */

const cards = document.querySelectorAll(
'.project-card, .skill-box, .highlight-card, .contact-card'
);

cards.forEach(card => {

card.addEventListener('mouseenter', () => {

card.style.transform = 'translateY(-10px)';

});

card.addEventListener('mouseleave', () => {

card.style.transform = 'translateY(0px)';

});

});

/* ==========================
   CONTACT FORM
========================== */

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you for contacting me! I will get back to you soon."
);

form.reset();

});

}

/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.1
}

);

const hiddenElements =
document.querySelectorAll(
'.project-card,.skill-box,.highlight-card,.contact-card'
);

hiddenElements.forEach(el=>{

observer.observe(el);

});

/* ==========================
   ACTIVE NAVIGATION
========================== */

const navLinks =
document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

if(
link.href === window.location.href
){

link.style.color = "#38bdf8";

}

});

/* ==========================
   WELCOME MESSAGE
========================== */

window.addEventListener("load",()=>{

console.log(
"Welcome to Arshitha's Portfolio 🚀"
);

});