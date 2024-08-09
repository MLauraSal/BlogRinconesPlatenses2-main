document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
        alert('Inicio de sesión exitoso');
        window.location.href = '../index.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});

