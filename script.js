
const boutonsReadMore = document.querySelectorAll('.btn-read');


boutonsReadMore.forEach(function(bouton) {
    
    
    bouton.addEventListener('click', function() {
        
        const targetId = bouton.getAttribute('data-target');
        

        const infoSupplementaire = document.getElementById(targetId);
        
        
        if (infoSupplementaire.style.display === 'none') {
            infoSupplementaire.style.display = 'block';
            bouton.textContent = 'Read Less ▴';  
        } else {
            infoSupplementaire.style.display = 'none';
            bouton.textContent = 'Read More ▾';  
        }
    });
});


const boutonsModal = document.querySelectorAll('.btn-modal');


boutonsModal.forEach(function(bouton) {
    
    bouton.addEventListener('click', function() {
        
        
        const modalId = bouton.getAttribute('data-modal');
        
        
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});


const boutonsFermer = document.querySelectorAll('.fermer-modal');

boutonsFermer.forEach(function(bouton) {
    
    bouton.addEventListener('click', function() {
        
        
        const modal = bouton.parentElement.parentElement;
        modal.style.display = 'none';
    });
});


window.addEventListener('click', function(event) {
    
    
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});


let slideIndex = 0;  
afficherSlides();   

function afficherSlides() {
    
    
    const slides = document.getElementsByClassName('slide');
    const points = document.getElementsByClassName('point');
    
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    
    for (let i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace(' active', '');
    }
    
    
    slideIndex++;
    
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    
    slides[slideIndex - 1].style.display = 'block';
    
    
    if (points.length > 0) {
        points[slideIndex - 1].className += ' active';
    }
    
    
    setTimeout(afficherSlides, 3000);
}


function currentSlide(n) {
    
    
    slideIndex = n;
    
    
    const slides = document.getElementsByClassName('slide');
    const points = document.getElementsByClassName('point');
    
   
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    
    for (let i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace(' active', '');
    }
    
   
    slides[slideIndex - 1].style.display = 'block';
    points[slideIndex - 1].className += ' active';
}


document.querySelectorAll('a[href^="#"]').forEach(function(lien) {
    
    lien.addEventListener('click', function(event) {
        
        
        event.preventDefault();
        
        
        const targetId = this.getAttribute('href');
        
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function fadeIn() {
    const titre = document.querySelector('.titre-anime');
    let opacity = 0;
    
    
    const interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.02;
            titre.style.opacity = opacity;
        } else {
            clearInterval(interval);  
        }
    }, 50);
}


window.onload = fadeIn;



const formulaire = document.querySelector('.formulaire-contact');

formulaire.addEventListener('submit', function(event) {
    
   
    event.preventDefault();
    
   
    alert('Merci pour votre message ! Nous vous répondrons bientôt. 🇲🇦');
    
    
    formulaire.reset();
});


window.addEventListener('scroll', function() {
    
    
    const sections = document.querySelectorAll('section');
    const liens = document.querySelectorAll('.menu a');
    
    
    sections.forEach(function(section, index) {
        
        
        const rect = section.getBoundingClientRect();
        
        
        if (rect.top <= 150 && rect.bottom >= 150) {
            
           
            liens.forEach(function(lien) {
                lien.classList.remove('active');
            });
            
           
            liens[index].classList.add('active');
        }
    });
});
