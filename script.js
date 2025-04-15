document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message');
    const charCountDisplay = document.getElementById('charCount');

    messageInput.addEventListener('input', function() {
        const charCount = messageInput.value.length;
        charCountDisplay.textContent = charCount;
    });
});