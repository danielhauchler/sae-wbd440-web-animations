// elements
const $slider = document.getElementById('slider'),
      $controls = document.getElementById('controls'),
      $prev = document.getElementById('prev'),
      $next = document.getElementById('next'),
    
      // slider 1
      $slideOne = document.getElementById('slide-1'),
      $taxi1 = document.querySelector('#taxi-1'),
      $taxi2 = document.querySelector('#taxi-2'),
      $taxi3 = document.querySelector('#taxi-3'),
      $taxi4 = document.querySelector('#taxi-4'),
      $slide1Bg = document.querySelector('#slide-1-bg'),
      $headlineBg = document.querySelector('#headline-bg'),
      // slider 2
      $slideTwo = document.getElementById('slide-2'),
      // slider 3
      $slideThree = document.getElementById('slide-3'),
      // slider 4
      $slideFour = document.getElementById('slide-4');

// animation panel1
const tlSlide1 = new gsap.timeline(),
      tlSlide2 = new gsap.timeline(),
      tlSlide3 = new gsap.timeline(),
      tlSlide4 = new gsap.timeline();

gsap.to($controls, .3, { opacity: 1 }, '-=.3')

tlSlide1.pause()
tlSlide2.pause()
tlSlide3.pause()
tlSlide4.pause()

tlSlide1
  .to($slideOne, .3, {opacity: 1})
  .from($slide1Bg, .9, {scale: 2, rotate: .02, onComplete: typed})
  .to($headlineBg, .9, {width: 730, ease: Back.easeOut.config(1)}, '+=1.6')
  .add('taxi-start')
  .from($taxi1, 8, {x: 83,y: 406,ease: Power1.easeOut},'taxi-start')
  // taxi 1
  .to($taxi1, 3, {x: 544,y: -60,ease: Power1.easeIn}, 'taxi-start+=7')
  // taxi 2
  .to($taxi2, 6, {x: 854, y: 382, ease: Power0.easeNone}, 'taxi-start+=3')
  // taxi 3
  .to($taxi3, 3, {x: 228, y: 45, ease: Power1.easeIn}, 'taxi-start')
  .to($taxi3, 3, {x: 389, y: 205, ease: Power0.easeNone}, 'taxi-start+=3')
  .to($taxi3, 3, {x: 448, y: 264, ease: Power1.easeOut}, 'taxi-start+=6')
  .to($taxi3, 3, {x: 460, y: 277, ease: Power1.easeIn}, 'taxi-start+=9')
  .to($taxi3, 2, {rotate: -90, ease: Power1.easeIn}, 'taxi-start+=12')
  .to($taxi3, 6, {x: 782, y: -45, ease: Power0.easeNone}, 'taxi-start+=14')
  // taxi 4
  .from($taxi4, 3, {x: 397, y: 381, ease: Power1.easeOut}, 'taxi-start+=10')
  .to($taxi4, 2, {x: 496, y: 276, ease: Power1.easeIn}, 'taxi-start+=13')
  .to($taxi4, 6, {x: 819, y: -45, ease: Power0.easeNone}, 'taxi-start+=15')


function typed() {
  var typed = new Typed("#headline", {
    strings: ['The American Dream.'],
    typeSpeed: 20,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,
    loop: false,
  });
}
var index = 1;

if (index == 1) {
  tlSlide1.play(0)
}

// constrols
$next.addEventListener("click", function () {
  if (index == 1) {
    gsap.to($slideOne, .3, { opacity: 0 });
    gsap.to($slideTwo, .3, { opacity: 1 });
    tlSlide2.play(0);
    tlSlide1.pause(0);
    index = 2;
  } else if (index == 2) {
    gsap.to($slideTwo, .3, { opacity: 0 });
    gsap.to($slideThree, .3, { opacity: 1 });
    tlSlide3.play(0);
    tlSlide2.pause(0);
    index = 3;
  } else if (index == 3) {
    gsap.to($slideThree, .3, { opacity: 0 });
    gsap.to($slideFour, .3, { opacity: 1 });
    tlSlide4.play(0);
    tlSlide3.pause(0);
    index = 4;
  } else if (index == 4) {
    gsap.to($slideFour, .3, { opacity: 0 });
    gsap.to($slideOne, .3, { opacity: 1 });
    tlSlide1.play(0);
    tlSlide4.pause(0);
    index = 1;
  }
});

$prev.addEventListener("click", function () {
  if (index == 1) {
    gsap.to($slideOne, .3, { opacity: 0 });
    gsap.to($slideFour, .3, { opacity: 1 });
    tlSlide4.play(0);
    tlSlide1.pause(0);
    index = 4;
  } else if (index == 4) {
    gsap.to($slideFour, .3, { opacity: 0 });
    gsap.to($slideThree, .3, { opacity: 1 });
    tlSlide3.play(0);
    tlSlide4.pause(0);
    index = 3;
  } else if (index == 3) {
    gsap.to($slideThree, .3, { opacity: 0 });
    gsap.to($slideTwo, .3, { opacity: 1 });
    tlSlide2.play(0);
    tlSlide3.pause(0);
    index = 2;
  } else if (index == 2) {
    gsap.to($slideTwo, .3, { opacity: 0 });
    gsap.to($slideOne, .3, { opacity: 1 });
    tlSlide1.play(0);
    tlSlide2.pause(0);
    index = 1;
  }
});

// new AnimPanel(tlSlide1)
new AnimPanel(tlSlide2)
// new AnimPanel(tlSlide3)
// new AnimPanel(tlSlide4)


// mouseOver & mouseOut
function mouseOver() {}
function mouseOut() {}
$slideTwo.addEventListener("mouseover", mouseOver);
$slideTwo.addEventListener("mouseout", mouseOut);

// Panel 3
function animOpenerItemMouseover() {
  // gsap.to(this,.9, {y:0, ease: Power1.easeInOut})
  // gsap.to(this.getElementsByClassName('clothes'), .3, {rotate: -45, ease: Power3.easeInOut})
  // gsap.to(this.getElementsByClassName('clothes'), .3, {rotate: 45, ease: Power3.easeInOut, delay: .1})
  // gsap.to(this.getElementsByClassName('clothes'), .3, {rotate: 0, ease: Power3.easeInOut, delay: .3})
}
function animOpenerItemMouseout() {
  // gsap.to(this, .9, {y:-100, ease: Power1.easeInOut})
  // console.log(this)
}

// $opener.forEach(element => {
//   // element.addEventListener("mouseover", animOpenerItemMouseover)
//   // element.addEventListener("mouseout", animOpenerItemMouseout)
// });

