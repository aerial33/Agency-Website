console.log('Hey 🤓')
const menu= document.querySelector('.toggle')
const navigation= document.querySelector('.navigation')
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener('click', () => {
  menu.classList.toggle('active')
  navigation.classList.toggle('active')
})


navLink.forEach((link) => link.addEventListener("click", () =>{
  menu.classList.remove("active")
  navigation.classList.remove("active")
}));
