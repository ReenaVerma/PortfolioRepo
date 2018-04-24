//background animation
window.addEventListener('DOMContentLoaded', () => {

  const header = document.getElementById('header');
  const windowWidth = window.innerWidth / 8;
  const windowHeight = window.innerHeight / 8 ;

  header.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;

    header.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  });
});
