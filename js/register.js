document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const profilePic = document.getElementById('profilePic').files[0];
    
    const reader = new FileReader();
    reader.onload = function() {
        const userData = {
            username: username,
            email: email,
            password: password,
            profilePic: reader.result // Guardar la imagen como un string en base64
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
         // Recuperar el usuario del localStorage y parsear el JSON
         const storedUser = JSON.parse(localStorage.getItem('user'));
        
         // Mostrar el alert con el nombre de usuario
         alert(`Bienvenid@ ${storedUser.username} a nuestra página!!`);
        window.location.href = 'login.html';
    };
    
    reader.readAsDataURL(profilePic);
});
