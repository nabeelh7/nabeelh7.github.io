// Animate each letter of the name
const animatedName = document.getElementById('animated-name');
const nameText = 'NABEEL HUSSAIN';

let index = 0;
function typeEffect() {
    if (index < nameText.length) {
        animatedName.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}
typeEffect();

// Smooth scroll to the "About" section
const learnMoreButton = document.querySelector('.learn-more');
learnMoreButton.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
