var li = document.querySelectorAll('nav > ul > li'),
    sidemenu = document.getElementById('sidemenu');

    function clearClicks(){
      for(let i =0; i<li.length; i++){
        li[i].children[1].style.opacity = 0;
      }
    }

for(let i =0; i<li.length; i++){
  clearClicks();
  li[i].onclick = function() {
    if(this.children[1].style.opacity == 1)
      this.children[1].style.opacity = 0;
    else {
      clearClicks();
      this.children[1].style.opacity = 1;
    }
  };
}

function showSidebar() {
    if(sidemenu.style.opacity == 0){
      sidemenu.style.opacity = '1';
      sidemenu.style.width = '400px';
    }
    else {
      sidemenu.style.opacity = '0';
      sidemenu.style.width = '0';
    }
}
