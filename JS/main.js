let sideBar = document.querySelector('.sideBar')
const menu = document.getElementById('menuIcon')

const exit = document.getElementById('exit')


menu.addEventListener("click", menuClicked);

function menuClicked(){
    sideBar.style.display = 'flex';
}

exit.addEventListener("click", menuHide);
function menuHide(){
    sideBar.style.display = 'none';
}

