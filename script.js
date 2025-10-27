document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggleButton = document.getElementById('chatbot-toggle-button');
    const chatbotCloseButton = document.getElementById('chatbot-close-button');
    const chatbotContainer = document.getElementById('chatbot-container');

    // Muestra el contenedor del chatbot al hacer clic en el botón
    chatbotToggleButton.addEventListener('click', () => {
        chatbotContainer.classList.remove('hidden');
    });

    // Oculta el contenedor del chatbot al hacer clic en el botón de cerrar
    chatbotCloseButton.addEventListener('click', () => {
        chatbotContainer.classList.add('hidden');
    });
    // Aquí iría la lógica para manejar el envío y recepción de mensajes con el chatbot.
    // Por ahora, los campos de texto están deshabilitados.
});