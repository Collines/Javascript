document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('showPwCheckbox');
    const passwordField = document.getElementById('passwordField');

    checkbox.onclick = () => {
        if (passwordField.type === 'text') {
            passwordField.type = 'password';
        } else {
            passwordField.type = 'text';
        }
    };
});
