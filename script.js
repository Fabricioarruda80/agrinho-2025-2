document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('welcome');
    welcomeMessage.innerText = "Bem-vindo ao mundo da tecnologia no campo e na cidade!";
    document.body.appendChild(welcomeMessage);

    setTimeout(() => {
        welcomeMessage.style.opacity = '0';
    }, 3000);
});
