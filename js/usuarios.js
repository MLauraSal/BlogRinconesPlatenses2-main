document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const profileImage = document.getElementById('profileImage');
    const userName = document.getElementById('user');
    const logoutButton = document.getElementById('logoutButton');

    if (loginForm) {
        loginForm.addEventListener('submit', loginUser);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', registerUser);
    }

    if (profileImage && userName) {
        loadProfile();
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', logoutUser);
    }

    function registerUser(event) {
        event.preventDefault(); // Previene que el formulario se envíe por defecto
        const usuario = document.getElementById('user').value;
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const profilePicture = document.getElementById('profileImage').files[0];

        const reader = new FileReader();
        reader.onload = function () {
            const user = {
                usuario: usuario,
               
                email: email,
                password: password,
                profilePicture: reader.result
            };

            localStorage.setItem(usuario, JSON.stringify(user));
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            window.location.href = '../login.html'; // Redirecciona a la página de inicio después del registro
        };
        reader.readAsDataURL(profilePicture);
    }

    function loginUser(event) {
        event.preventDefault(); // Previene que el formulario se envíe por defecto
        const usuario = document.getElementById('user').value;
        const password = document.getElementById('password').value;

        const user = JSON.parse(localStorage.getItem(usuario));

        if (user && user.password === password) {
            sessionStorage.setItem('loggedInUser', usuario);
            window.location.href = '../pages/profile.html';
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    }

    function loadProfile() {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            window.location.href = '../index.html';
            return;
        }

        const user = JSON.parse(localStorage.getItem(loggedInUser));
        if (user) {
            profileImage.src = user.profilePicture;
            userName.textContent = user.usuario;
        }
    }

    function logoutUser() {
        sessionStorage.removeItem('loggedInUser');
        window.location.href = '../index.html';
    }
});



