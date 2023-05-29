function filterMenu(filter) {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach((item) => {
      if (filter === 'all') {
        item.style.display = 'block';
      } else if (item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  
    const menuButtons = document.querySelectorAll('.menu-buttons button');
    
    menuButtons.forEach((button) => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
      
      if (button.innerText.toLowerCase() === filter.toLowerCase()) {
        button.classList.add('active');
      }
    });
  }
  

//   events page
