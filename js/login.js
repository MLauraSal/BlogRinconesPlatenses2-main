// admin.json es el archivo JSON con la información del administrador
const adminUser = {
    username: "admin",
    password: "admin123",
    email: "admin@example.com",
    profilePic: "../images/avatar/avatar.jpg"
  };
  
  // Guardar admin en el localStorage si no está ya guardado
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(adminUser));
  }
  
  // Función para manejar el registro
  function handleRegister(event) {
    event.preventDefault();
  
    const username = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const profilePic = document.getElementById('profilePic').files[0];
  
    if (!username || !email || !password || !profilePic) {
      alert("Todos los campos son obligatorios");
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function () {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const newUser = {
        username,
        email,
        password,
        profilePic: reader.result
      };
  
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert("Usuario registrado con éxito");
      window.location.href = "../index.html";
    };
    reader.readAsDataURL(profilePic);
  }
  
  // Función para manejar el login
  function handleLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const admin = JSON.parse(localStorage.getItem('admin'));
  
    const foundUser = users.find(user => user.username === username && user.password === password) || 
                      (admin.username === username && admin.password === password ? admin : null);
  
    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      alert("Inicio de sesión exitoso");
      window.location.href = "../index.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
  
  // Función para manejar el estado del usuario logueado
  function handleLoggedInUser() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  
    if (loggedInUser) {
      const loginLink = document.getElementById('loginLink');
      const avatar = document.querySelector('.avatar img');
      const navProfile = document.getElementById('nav-profile');
  
      loginLink.style.display = 'none';
      avatar.src = loggedInUser.profilePic;
      navProfile.querySelector('ul').style.display = 'block';
  
      document.getElementById('logoutLink').addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.removeItem('loggedInUser');
        window.location.href = "../index.html";
      });
    }
  }
  
  // Eventos para el registro y login
  document.getElementById('registerForm')?.addEventListener('submit', handleRegister);
  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
  
  // Verificar el estado del usuario logueado
  document.addEventListener('DOMContentLoaded', handleLoggedInUser);
  
