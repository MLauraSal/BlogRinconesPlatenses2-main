document.getElementById('loginForm').addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const adminUser = "../users.json"


    // Chequear si es admin
    if (username === adminUser.username && password === adminUser.password) {
        // Guardar sesión del admin
        localStorage.setItem('loggedInUser', JSON.stringify({username: adminUser.username, password: adminUser.password, isAdmin: true}));
        alert('Inicio de sesión de administrador exitoso');
        // Redirigir al panel de administración
        window.location.href = 'adminPanel.html';
        return; // Salir de la función
    }
   
    // Chequear usuarios registrados
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
        alert('Inicio de sesión exitoso');
        window.location.href = '../index.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});