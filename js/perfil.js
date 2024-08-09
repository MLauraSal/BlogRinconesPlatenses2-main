document.addEventListener('DOMContentLoaded', function() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const navButton = document.querySelector('#navButton');
  
  if (loggedInUser) {
      navButton.innerHTML = `
          
           <div class="avatar">
              <img src="${loggedInUser.profilePicture}" alt="avatar">
            </div>
            <ul>
              <li><a href="perfil.html">Perfil</a></li>
              <li><a href="">Logout</a></li>
            </ul>
      `;
  }
});


