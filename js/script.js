
/*-------NAV DROP DOWN---------*/ 


document.querySelector('#nav_open-btn').addEventListener('click', () => {
  document.querySelector('.nav-items').style.display= 'flex';
  document.querySelector('#nav_open-btn').style.display= 'none';
  document.querySelector('#nav_close-btn').style.display= 'inline-block';
  
})

document.querySelector('#nav_close-btn').addEventListener('click', () => {
  document.querySelector('.nav-items').style.display= 'none';
  document.querySelector('#nav_open-btn').style.display= 'inline-block';
  document.querySelector('#nav_close-btn').style.display= 'none';
  
})