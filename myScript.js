//function to perfom scrolling of the left arrow
function leftScroll() {
    const left = document.querySelector(".scrollingPJ");
    left.scrollBy(-500, 0);
}

function rightScroll() {
    const right = document.querySelector(".scrollingPJ");
    right.scrollBy(500, 0);
}

function showContent(id) {
  // Get all content items
  var contentItems = document.getElementsByClassName('content-item');
  
  // Hide all content items
  for (var i = 0; i < contentItems.length; i++) {
    contentItems[i].classList.remove('active');
  }
  
  // Show the selected content item
  var selectedContent = document.getElementById('content-' + id);
  selectedContent.classList.add('active');
  
  // Set the active class on the selected sidebar item
  var sidebarItems = document.getElementsByClassName('sidebar')[0].getElementsByTagName('a');
  for (var i = 0; i < sidebarItems.length; i++) {
    sidebarItems[i].classList.remove('active');
  }
  sidebarItems[id-1].classList.add('active');
}
