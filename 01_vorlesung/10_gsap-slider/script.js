// elements
var $slider = document.getElementById('slider'),
    $controls = document.getElementById('controls'),
    $prev = document.getElementById('prev'),
    $next = document.getElementById('next'),
  
    // slider 1
    $slideOne = document.getElementById('slide-1'),
    // slider 2
    $slideTwo = document.getElementById('slide-2'),
    // slider 3
    $slideThree = document.getElementById('slide-3'),
    // slider 4
    $slideFour = document.getElementById('slide-4');

// animation panel1
var tlSlide1 = new gsap.timeline(),
    tlSlide2 = new gsap.timeline(),
    tlSlide3 = new gsap.timeline(),
    tlSlide4 = new gsap.timeline();

gsap.to($controls, .3, { opacity: 1 }, '-=.3')

tlSlide1.pause()
tlScissors.pause()
tlSlide2.pause()
tlSlide3.pause()
tlSlide4.pause()


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

new AnimPanel(tlSlide1)




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

