const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.querySelectorAll('.password-wrapper .pass__h').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const passwordInput = this.previousElementSibling;
        const icon = this.querySelector('img');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.src = './image/eye-close.png';  // ✅ Correct filename
            icon.alt = 'Hide Password';
        } else {
            passwordInput.type = 'password';
            icon.src = './image/eye-open.png';   // ✅ Correct filename
            icon.alt = 'Show Password';
        }
    });
});

