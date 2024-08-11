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
        alert('Registro exitoso');
        window.location.href = 'login.html';
    };
    
    reader.readAsDataURL(profilePic);
});
