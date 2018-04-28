window.addEventListener('DOMContentLoaded', () => {

  //HEADER BACKGROUND ANIMATION
  const header = document.getElementById('header');
  const windowWidth = window.innerWidth / 5;
  const windowHeight = window.innerHeight / 0 ;

  header.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;

    header.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  });


  //TYPING FONT AFFECT FUNCTION
  const message = 'reena verma <br> front-end developer';
  const messageTwo = 'science fiction fan';


  // TYPING H1 TITLE FUNCTION
  const title = () => {
    const typingTitle = (message, timeout) =>
      [...message].map(
        (ch, i) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve(message.substring(0, i + 1));
            }, timeout * i);
          })
      );
    typingTitle(message, 140).forEach(promise => {
      promise.then(message => {
        document.querySelector('h1').innerHTML = message;
      });
    });
  };


  // TYPING SUBTITLE FUNCTION
  const subTitle = () => {
    const typingSubTitle = (messageTwo, timeout) =>
      [...messageTwo].map(
        (ch, i) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve(messageTwo.substring(0, i + 1));
            }, timeout * i);
          })
      );

    typingSubTitle(messageTwo, 30).forEach(promise => {
      promise.then(messageTwo => {
        document.querySelector('h2').innerHTML = messageTwo;
      });
    });
  };

  title();
  subTitle();

  $(window).on('scroll',function(){
    const trainPosition = Math.round($(window).scrollTop() / $(window).height() * 100);
    $('.line').css('transform','translateX('+(trainPosition-30)+'%)');
  });



});
