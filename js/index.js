const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

var header = document.getElementsByTagName('header');

header.textContent = 'DOM IS AWESOME';

var button = document.querySelector('button');

button.textContent = 'Get Started';

var heroImg = document.getElementById('cta-img');

heroImg.setAttribute('src', '/img/header-img.png');

document.querySelector('nav a').textContent = 'Services';

var servicesLink = document.querySelector('nav a');

servicesLink.nextElementSibling.textContent = 'Product';

servicesLink.nextElementSibling.nextElementSibling.textContent = 'Vision';

servicesLink.nextElementSibling.nextElementSibling.nextElementSibling.textContent = 'Features';

servicesLink.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent= 'About';

servicesLink.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent= 'Contact';

const mainKeys = Object.keys(document.querySelector('.main-content'));

const mainh4 = document.querySelectorAll('.text-content h4');

const subHeadings = ["Features", "About", "Services", "Product", "Vision"];

mainh4.forEach((h4, idx) =>{h4.textContent = subHeadings[idx]});

const mainPs = document.querySelectorAll('.text-content p');

const paraText = ["Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.", "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."];

mainPs.forEach((p, idx) => {p.textContent = paraText[idx]}) ;

document.getElementById('middle-img').setAttribute('src', '/img/mid-page-accent.jpg');

document.querySelector('.contact h4').textContent = 'Contact';

 const contactInfo = document.querySelectorAll('.contact p');

 const contactText = ["123 Way 456 Street Somewhere, USA", "1 (888) 888-8888", "sales@greatidea.io"];

 contactInfo.forEach((p, indx) =>{
   p.textContent = contactText[indx];
 })

 document.querySelector('footer p').textContent = "Copyright Great Idea! 2018";

const navLinks = document.querySelectorAll('nav a');
console.log(navLinks);

navLinks.forEach((a)=>{
a.style.color = 'green';
})

var nav = document.querySelector('nav');

let newLink = document.createElement('a');

// let newText = document.createTextNode('Fun Stuff');

// newLink.appendChild(newText);

newLink.textContent = 'Fun Stuff';
let otherLink = document.createElement('a');

otherLink.textContent = 'Boring stuff';

nav.prepend(otherLink);
nav.appendChild(newLink);

