document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const navProfile = document.querySelector('.nav-profile');
    
    if (loggedInUser) {
        navProfile.innerHTML = `
              <div class="avatar">
                  
                  <img src="${loggedInUser.profilePic}" alt="avatar">
              </div>
              <ul id="profileMenu" onclick="toggleProfileMenu()">
                  
                  <li><a href="../index.html" onclick="logout()">Logout</a></li>
              </ul>
        `;
    }
  });
  
  function toggleProfileMenu() {
    document.getElementById('profileMenu').classList.toggle('show');
  }
  
  function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = '../index.html';
  }
  