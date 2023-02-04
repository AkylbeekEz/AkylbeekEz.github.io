var burgerCloseButton = document.querySelector('.burger-close-button');
var burgerOpenButton = document.querySelector('.burger-open-button');
var contentPage = document.querySelector('.content-page');
console.log(burgerOpenButton);
var burgerMenu = document.querySelector( '.burger-menu');
burgerCloseButton.addEventListener('click', function (evt) {
 evt.preventDefault();
 burgerMenu.style.transform = "none"; 
 contentPage.style.display = "block";
})
burgerOpenButton.addEventListener('click', function(evt)  {
 evt.preventDefault();
 burgerMenu.style.transform = "translateX(350px)";  
 contentPage.style.display = "none";
});