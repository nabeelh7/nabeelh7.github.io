const greeting = document.querySelector('#home h2');
const hours = new Date().getHours();

if (hours < 12) {
    greeting.textContent = "Good Morning! I'm Nabeel!";
} else if (hours < 18) {
    greeting.textContent = "Good Afternoon! I'm Nabeel!";
} else {
    greeting.textContent = "Good Evening! I'm Nabeel!";
}