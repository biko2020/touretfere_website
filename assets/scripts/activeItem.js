var navItems = document.querySelectorAll('.rd-navbar-nav .rd-nav-item');

// Loop through the items and add a click event listener to each one
navItems.forEach(function(item) {
  item.addEventListener('click', function() {

    // Remove the "active" class from all the items
    navItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Add the "active" class to the clicked item
    item.classList.add('active');

  });
});


// select sub menu
// var navItems = document.querySelectorAll('.rd-navbar-nav .rd-nav-item');

// navItems.forEach(function(item) {
//   item.addEventListener('click', function(event) {
//     console.log('Clicked on menu item');
//     navItems.forEach(function(item) {
//       item.classList.remove('active');
//     });
//     item.classList.add('active');
//     event.stopPropagation();
//   });

//   var subMenuItems = item.querySelectorAll('.rd-navbar-dropdown li a');
//   subMenuItems.forEach(function(subMenuItem) {
//     subMenuItem.addEventListener('click', function(event) {
//       console.log('Clicked on submenu item');
//       navItems.forEach(function(item) {
//         item.classList.remove('active');
//       });
//       item.classList.add('active');
//       event.stopPropagation();
//     });
//   });
// });
