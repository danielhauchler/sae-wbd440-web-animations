// elements
var $slider = document.getElementById('slider'),
    $controls = document.getElementById('controls'),
    $prev = document.getElementById('prev'),
    $next = document.getElementById('next'),
    // slider 1
    $sliderItemOne = document.getElementById('slider-item-1'),
    $bgPanel1 = document.getElementById('bg-panel-1'),
    $typePanel1 = document.getElementById('type'),
    $headlineBgPanel1 = document.getElementById('headline-bg'),
    $taxi1 = document.getElementById('taxi1'),
    $taxi2 = document.getElementById('taxi2'),
    $taxi3 = document.getElementById('taxi3'),
    $taxi4 = document.getElementById('taxi4'),
    $taxi5 = document.getElementById('taxi5'),
    // slider 2
    $sliderItemTwo = document.getElementById('slider-item-2'),
    $headlinePanel2Wrap = document.getElementById('headline-panel-2-wrap'),
    $sublinePanel2 = document.getElementById('subline-panel-2'),
    $scissorHolder = document.getElementById('scissors-holder'),
    $scissors1 = document.getElementById('scissors-1'),
    $scissors2 = document.getElementById('scissors-2'),
    $measure = document.getElementById('measure'),
    $bowl = document.getElementById('bowl'),
    // slider 3
    $sliderItemThree = document.getElementById('slider-item-3'),
    $opener = document.querySelectorAll('.opener'),
    $clothes = document.querySelectorAll('.clothes'),
    // slider 4
    $sliderItemFour = document.getElementById('slider-item-4');

// animation panel1
var tlPanel1 = new gsap.timeline(),
    tlPanel2 = new gsap.timeline(),
    tlPanel3 = new gsap.timeline(),
    tlPanel4 = new gsap.timeline();
    tlScissors = new gsap.timeline({repeat: -1, repeatDelay:3});


gsap.to($controls, .3, { opacity: 1 }, '-=.3')

function typePanel1() {
  Typed.new('#type', {
    strings: ["The American Dream."],
    stringsElement: null,
    typeSpeed: 24,
    startDelay: 600,
    attr: null,
    contentType: 'html',
    showCursor: false,
  });
}

tlPanel1.pause()
        .to($sliderItemOne, .3, { opacity: 1 })
        .to($bgPanel1, .9, { scale: 1.5, ease: Power2.easeOut }, '-=.3')

        .set($typePanel1, { onComplete: typePanel1 }, '-=.6')
        .from($headlineBgPanel1, .9, { width: 0, ease: Back.easeOut.config(.8) }, '+=1.4')
        .to($slider, { onComplete: function () { console.log(tlPanel1.time()) } })
        .add('taxis')
        // taxi1
        .set($taxi1, { opacity: 1 }, 'taxis')
        .from($taxi1, 3, { top: "-38px", left: "90px", ease: Power3.easeOut }, 'taxis+1')
        .to($taxi1, 4.2, { top: "348px", left: "472px", ease: Power3.easeIn }, 'taxis+=3')
        // taxi2
        .set($taxi2, { opacity: 1 }, 'taxis')
        .to($taxi2, 5, { top: "-46px", left: "429px", ease: Linear.easeNone }, 'taxis')
        // taxi3
        .set($taxi3, { opacity: 1 }, 'taxis')
        .from($taxi3, 4, { top: "348px", left: "911px", ease: Power3.easeOut }, 'taxis+=1')
        .to($taxi3, 2, { top: "118px", left: "678px", ease: Power3.easeIn }, 'taxis+=6')
        .to($taxi3, 2, { top: "120px", left: "636px", rotate: 90, ease: Power3.easeOut }, 'taxis+=8')
        .to($taxi3, 3, { top: "349px", left: "407px", ease: Linear.easeNone }, 'taxis+=10  ')

        .from($taxi4, 5, { top: "-40px", left: "786px", ease: Linear.easeNone }, 'taxis+=5')

        .to($taxi5, 3, { top: "154px", left: "640px", ease: Power3.easeOut }, 'taxis+=5')

        .to($taxi5, 3, { top: "-40px", left: "821px", ease: Power3.easeIn }, 'taxis+=9')

tlScissors.pause()
          .add('scissors')
          .from($scissors1, .6, {rotate: 0, ease: Power1.easeInOut}, 'scissors')
          .from($scissors2, .6, {rotate: 0, ease: Power1.easeInOut}, 'scissors')
          .to($scissors1, .6, {rotate: 0, ease: Power1.easeInOut}, 'scissors+=.9')
          .to($scissors2, .6, {rotate: 0, ease: Power1.easeInOut}, 'scissors+=.9')


tlPanel2.pause()
        .from($scissorHolder, 1.2, {x: -400, y: 600, rotate: -360, ease: Back.easeOut.config(.5)}, '+=.3')
        .from($measure, 1.2, {x: 400, y: -400, rotate: 360, ease: Back.easeOut.config(.5)}, '-=.9')
        .from($bowl, 1.2, {x: 400, y: 600, rotate: 360, ease: Back.easeOut.config(.5)}, '-=.8')
 
        .from($headlinePanel2Wrap, .6, {width: 0, ease: Power1.easeInOut}, '+=.3')
        .from($sublinePanel2, .6, {opacity: 0, y: 10})
        
        .set($headlinePanel2Wrap, {onComplete: function() {tlScissors.play(0)}})

        .to($slider, .3, {opacity: 1}, '+=10')
        

tlPanel3.pause()



tlPanel4.pause()

// Panel 2
function mouseOver() {
  gsap.to([$scissorHolder, $measure, $bowl], .3, {scale:1.2})
}
function mouseOut() {
  gsap.to([$scissorHolder, $measure, $bowl], .3, {scale:1})
}
$sliderItemTwo.addEventListener("mouseover", mouseOver);
$sliderItemTwo.addEventListener("mouseout", mouseOut);


// Panel 3
function animOpenerItemMouseover() {
  gsap.to(this,.9, {y:0, ease: Power1.easeInOut})
  gsap.to(this.getElementsByClassName('clothes'), .3, {rotate: -45, ease: Power3.easeInOut})
  gsap.to(this.getElementsByClassName('clothes'), .3, {rotate: 45, ease: Power3.easeInOut, delay: .1})
  gsap.to(this.getElementsByClassName('clothes'), .3, {rotate: 0, ease: Power3.easeInOut, delay: .3})
}
function animOpenerItemMouseout() {
  gsap.to(this, .9, {y:-100, ease: Power1.easeInOut})

  console.log(this)
}

$opener.forEach(element => {
  element.addEventListener("mouseover", animOpenerItemMouseover)
  element.addEventListener("mouseout", animOpenerItemMouseout)
});

var index = 1;

if (index == 1) {
  tlPanel1.play(0)
}

// constrols
$next.addEventListener("click", function () {
  if (index == 1) {
    gsap.to($sliderItemOne, .3, { opacity: 0 });
    gsap.to($sliderItemTwo, .3, { opacity: 1 });
    tlPanel2.play(0);
    tlPanel1.pause(0);
    index = 2;
  } else if (index == 2) {
    gsap.to($sliderItemTwo, .3, { opacity: 0 });
    gsap.to($sliderItemThree, .3, { opacity: 1 });
    tlPanel3.play(0);
    tlPanel2.pause(0);
    index = 3;
  } else if (index == 3) {
    gsap.to($sliderItemThree, .3, { opacity: 0 });
    gsap.to($sliderItemFour, .3, { opacity: 1 });
    tlPanel4.play(0);
    tlPanel3.pause(0);
    index = 4;
  } else if (index == 4) {
    gsap.to($sliderItemFour, .3, { opacity: 0 });
    gsap.to($sliderItemOne, .3, { opacity: 1 });
    tlPanel1.play(0);
    tlPanel4.pause(0);
    index = 4;
  }
});

$prev.addEventListener("click", function () {
  if (index == 1) {
    gsap.to($sliderItemOne, .3, { opacity: 0 });
    gsap.to($sliderItemFour, .3, { opacity: 1 });
    tlPanel4.play(0);
    tlPanel1.pause(0);
    index = 4;
  } else if (index == 4) {
    gsap.to($sliderItemFour, .3, { opacity: 0 });
    gsap.to($sliderItemThree, .3, { opacity: 1 });
    tlPanel3.play(0);
    tlPanel4.pause(0);
    index = 3;
  } else if (index == 3) {
    gsap.to($sliderItemThree, .3, { opacity: 0 });
    gsap.to($sliderItemTwo, .3, { opacity: 1 });
    tlPanel2.play(0);
    tlPanel3.pause(0);
    index = 2;
  } else if (index == 2) {
    gsap.to($sliderItemTwo, .3, { opacity: 0 });
    gsap.to($sliderItemOne, .3, { opacity: 1 });
    tlPanel1.play(0);
    tlPanel2.pause(0);
    index = 1;
  }
});

new AnimPanel(tlPanel1)