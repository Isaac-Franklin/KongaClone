var hoversection = document.querySelector(".categoryhoversection");
var category = document.querySelector(".category");
var compsection = document.querySelector(".compsandacc");
var body = document.querySelector("body");
var categoryinner = document.querySelector(".categoryhoversectioninner");
var allhover = document.querySelector(".categoryhoversection");
hoversection.style.display = "none";
// allhover.style.display = "none";

function start() {
  return (
    // (compsection.style.display = "block"),
    (hoversection.style.display = "block"),
    (categoryinner.style.display = "block")
  );
  // (body.style.background = "grey"),
  // (body.style.opacity = "0")
}

// rgb(68, 67, 67)

function stop() {
  return (
    // (allhover.style.display = "none"),
    (hoversection.style.display = "none"),
    (compsection.style.display = "none"),
    (categoryinner.style.display = "none")
    // (body.style.background = "none"),
    // (body.style.background = "white")
  );
}

// var allhover = document.querySelector(".navdrops");
// function rmvBkg() {
//   return (allhover.style.display = "block");
// }

// function rmvBkgKILL() {
//   return (allhover.style.display = "none");
// }

// HOVER REVEAL FOR COMPUTER AND ACCESSORIES SECTION

var computerandaccess = document.querySelector(".computeroption1");
var compsandacc = document.querySelector(".compsandacc");
var hoversection = document.querySelector(".categoryhoversection");
var navsect = document.querySelector(".navsection3");
compsandacc.style.display = "none";

function start1() {
  return (
    (compsandacc.style.display = "block"),
    (phonesection.style.display = "none"),
    (electsection.style.display = "none"),
    (kongafashionsecction.style.display = "none"),
    (homeandkitchensection.style.display = "none"),
    (babykidsandtoyssection.style.display = "none"),
    (othercategoriessection.style.display = "none"),
    (eleventhgensection.style.display = "none"),
    // EXTERNAL CLASSES TO MAKE INACTIVE BELOW
    phone.classList.remove("active"),
    elect.classList.remove("active"),
    kongafashion.classList.remove("active"),
    homekitchen.classList.remove("active"),
    kids.classList.remove("active"),
    others.classList.remove("active"),
    eleveth.classList.remove("active"),
    computerandaccess.classList.add("active")
  );
}

function stop1() {
  return (
    (compsandacc.style.display = "none"),
    // (phonesection.style.display = "none"),
    // (electsection.style.display = "none"),
    // (kongafashionsecction.style.display = "none"),
    // (homeandkitchensection.style.display = "none"),
    // (babykidsandtoyssection.style.display = "none"),
    // (othercategoriessection.style.display = "none"),
    // (eleventhgensection.style.display = "none"),
    (menuoption.style.display = "none")
  );
  // computerandaccess.classList.remove("active")
}

var phone = document.querySelector(".phoneandtab");
var phonesection = document.querySelector(".phoneandtablets");
phonesection.style.display = "none";
function start3() {
  return (
    (compsandacc.style.display = "none"),
    (phonesection.style.display = "block"),
    (electsection.style.display = "none"),
    (kongafashionsecction.style.display = "none"),
    (homeandkitchensection.style.display = "none"),
    (babykidsandtoyssection.style.display = "none"),
    (othercategoriessection.style.display = "none"),
    (eleventhgensection.style.display = "none"),
    elect.classList.remove("active"),
    kongafashion.classList.remove("active"),
    homekitchen.classList.remove("active"),
    kids.classList.remove("active"),
    others.classList.remove("active"),
    eleveth.classList.remove("active"),
    computerandaccess.classList.remove("active"),
    phone.classList.add("active")
  );
}

var elect = document.querySelector(".elect");
var electsection = document.querySelector(".electronics");
electsection.style.display = "none";
function start4() {
  return (
    (phonesection.style.display = "none"),
    (electsection.style.display = "block"),
    (compsandacc.style.display = "none"),
    (kongafashionsecction.style.display = "none"),
    (homeandkitchensection.style.display = "none"),
    (babykidsandtoyssection.style.display = "none"),
    (othercategoriessection.style.display = "none"),
    (eleventhgensection.style.display = "none"),
    phone.classList.remove("active"),
    kongafashion.classList.remove("active"),
    homekitchen.classList.remove("active"),
    kids.classList.remove("active"),
    others.classList.remove("active"),
    eleveth.classList.remove("active"),
    computerandaccess.classList.remove("active"),
    elect.classList.add("active")
  );
}

var kongafashion = document.querySelector(".fashionkonga");
var kongafashionsecction = document.querySelector(".kongafashion");
kongafashionsecction.style.display = "none";
function start5() {
  return (
    (electsection.style.display = "none"),
    (kongafashionsecction.style.display = "block"),
    (compsandacc.style.display = "none"),
    (phonesection.style.display = "none"),
    (homeandkitchensection.style.display = "none"),
    (babykidsandtoyssection.style.display = "none"),
    (othercategoriessection.style.display = "none"),
    (eleventhgensection.style.display = "none"),
    elect.classList.remove("active"),
    phone.classList.remove("active"),
    homekitchen.classList.remove("active"),
    kids.classList.remove("active"),
    others.classList.remove("active"),
    eleveth.classList.remove("active"),
    computerandaccess.classList.remove("active"),
    kongafashion.classList.add("active")
  );
}

var homekitchen = document.querySelector(".home");
var homeandkitchensection = document.querySelector(".homeandkitchen");
homeandkitchensection.style.display = "none";

function start6() {
  return (
    (homeandkitchensection.style.display = "block"),
    (kongafashionsecction.style.display = "none"),
    (compsandacc.style.display = "none"),
    (phonesection.style.display = "none"),
    (electsection.style.display = "none"),
    (babykidsandtoyssection.style.display = "none"),
    (othercategoriessection.style.display = "none"),
    (eleventhgensection.style.display = "none"),
    kongafashion.classList.remove("active"),
    elect.classList.remove("active"),
    phone.classList.remove("active"),
    kids.classList.remove("active"),
    others.classList.remove("active"),
    eleveth.classList.remove("active"),
    computerandaccess.classList.remove("active"),
    homekitchen.classList.add("active")
  );
}

var kids = document.querySelector(".kids");
var babykidsandtoyssection = document.querySelector(".babykidsandtoys");
babykidsandtoyssection.style.display = "none";

function start7() {
  return (
    (babykidsandtoyssection.style.display = "block"),
    (homeandkitchensection.style.display = "none"),
    (compsandacc.style.display = "none"),
    (phonesection.style.display = "none"),
    (electsection.style.display = "none"),
    (kongafashionsecction.style.display = "none"),
    (othercategoriessection.style.display = "none"),
    (eleventhgensection.style.display = "none"),
    homekitchen.classList.remove("active"),
    kongafashion.classList.remove("active"),
    elect.classList.remove("active"),
    phone.classList.remove("active"),
    others.classList.remove("active"),
    eleveth.classList.remove("active"),
    computerandaccess.classList.remove("active"),
    kids.classList.add("active")
  );
}

var others = document.querySelector(".others");
var othercategoriessection = document.querySelector(".othercategories");
othercategoriessection.style.display = "none";

function start8() {
  return (
    (othercategoriessection.style.display = "block"),
    (babykidsandtoyssection.style.display = "none"),
    (compsandacc.style.display = "none"),
    (phonesection.style.display = "none"),
    (electsection.style.display = "none"),
    (kongafashionsecction.style.display = "none"),
    (homeandkitchensection.style.display = "none"),
    (eleventhgensection.style.display = "none"),
    kids.classList.remove("active"),
    homekitchen.classList.remove("active"),
    kongafashion.classList.remove("active"),
    elect.classList.remove("active"),
    phone.classList.remove("active"),
    eleveth.classList.remove("active"),
    computerandaccess.classList.remove("active"),
    others.classList.add("active")
  );
}

var eleveth = document.querySelector(".eleveth");
var eleventhgensection = document.querySelector(".eleventhgen");
eleventhgensection.style.display = "none";

function start9() {
  return (
    (eleventhgensection.style.display = "block"),
    (othercategoriessection.style.display = "none"),
    (compsandacc.style.display = "none"),
    (phonesection.style.display = "none"),
    (electsection.style.display = "none"),
    (kongafashionsecction.style.display = "none"),
    (homeandkitchensection.style.display = "none"),
    (babykidsandtoyssection.style.display = "none"),
    others.classList.remove("active"),
    kids.classList.remove("active"),
    homekitchen.classList.remove("active"),
    kongafashion.classList.remove("active"),
    elect.classList.remove("active"),
    phone.classList.remove("active"),
    computerandaccess.classList.remove("active"),
    eleveth.classList.add("active")
  );
}

// ----------------------HOVER SECTIONS DISAPPEARANCE EDITS ON MOUSE REMOVAL!!
var menulist123 = document.querySelector(".categoryhoversection");
var element1 = document.querySelector(".secA");
var element2 = document.querySelector(".sectB");
var element3 = document.querySelector(".sectC");
var element4 = document.querySelector(".sectD");
var element5 = document.querySelector(".sectE");
var element6 = document.querySelector(".sectF");
var element7 = document.querySelector(".sectG");
var element8 = document.querySelector(".sectH");
var categoryinner = document.querySelector(".categoryhoversectioninner");
// var allhover = document.querySelector(".navdrops");
function navbarshowless() {
  return (
    (menulist123.style.display = "none"),
    (element1.style.display = "none"),
    (element2.style.display = "none"),
    (element3.style.display = "none"),
    (element4.style.display = "none"),
    (element5.style.display = "none"),
    (element6.style.display = "none"),
    (element7.style.display = "none"),
    (element8.style.display = "none"),
    (categoryinner.style.display = "none")
    // (allhover.style.display = "block")
    // (allhover.style.display = "none"),
  );
}

//HOVER REVEAL SECTION EDITS

// computermenu hover effect below
var compnav = document.querySelector(".computermenu");
var compsec = document.querySelector(".compsection2");
compsec.style.display = "none";
function trigger1() {
  compnav.classList.add("active");
  return (compsec.style.display = "block"), (othersec.style.display = "none");
}

function trigger1kill() {
  compnav.classList.remove("active"),
    (compsec.style.display = "none"),
    (phonesec.style.display = "none"),
    (compsec.style.display = "none"),
    (electsec.style.display = "none"),
    (fashsec.style.display = "none"),
    (homesec.style.display = "none"),
    (babysec.style.display = "none"),
    (othersec.style.display = "none");
}

// phonemenu hover effect below

var phonenav = document.querySelector(".phonemenu");
var phonesec = document.querySelector(".phonesection2");
phonesec.style.display = "none";
function trigger2() {
  phonenav.classList.add("active");
  return (phonesec.style.display = "block"), (compsec.style.display = "none");
}

function trigger2kill() {
  phonenav.classList.remove("active"),
    (compsec.style.display = "none"),
    (phonesec.style.display = "none"),
    (compsec.style.display = "none"),
    (electsec.style.display = "none"),
    (fashsec.style.display = "none"),
    (homesec.style.display = "none"),
    (babysec.style.display = "none"),
    (othersec.style.display = "none");
}

// ELECTMENU hover effect below

var electnav = document.querySelector(".electmenu");
var electsec = document.querySelector(".electsection2");
electsec.style.display = "none";
function trigger3() {
  electnav.classList.add("active");
  return (electsec.style.display = "block"), (phonesec.style.display = "none");
}

function trigger3kill() {
  electnav.classList.remove("active"),
    (phonesec.style.display = "none"),
    (compsec.style.display = "none"),
    (electsec.style.display = "none"),
    (fashsec.style.display = "none"),
    (homesec.style.display = "none"),
    (babysec.style.display = "none"),
    (othersec.style.display = "none");
}

// FASHION hover effect below

var fashionnav = document.querySelector(".fashionmenu");
var fashsec = document.querySelector(".fashionsection2");
fashsec.style.display = "none";
function trigger4() {
  fashionnav.classList.add("active");
  return (fashsec.style.display = "block"), (electsec.style.display = "none");
}

function trigger4kill() {
  fashionnav.classList.remove("active"),
    (phonesec.style.display = "none"),
    (compsec.style.display = "none"),
    (electsec.style.display = "none"),
    (fashsec.style.display = "none"),
    (homesec.style.display = "none"),
    (babysec.style.display = "none"),
    (othersec.style.display = "none");
}

// HOME hover effect below

var homenav = document.querySelector(".homemenu");
var homesec = document.querySelector(".homesection2");
fashsec.style.display = "none";
function trigger5() {
  homenav.classList.add("active");
  return (homesec.style.display = "block"), (fashsec.style.display = "none");
}

function trigger5kill() {
  homenav.classList.remove("active"),
    (phonesec.style.display = "none"),
    (compsec.style.display = "none"),
    (electsec.style.display = "none"),
    (fashsec.style.display = "none"),
    (homesec.style.display = "none"),
    (babysec.style.display = "none"),
    (othersec.style.display = "none");
}

// BABY hover effect below

var babynav = document.querySelector(".babymenu");
var babysec = document.querySelector(".babysection2");
babysec.style.display = "none";
function trigger6() {
  babynav.classList.add("active");
  return (babysec.style.display = "block"), (homesec.style.display = "none");
}

function trigger6kill() {
  babynav.classList.remove("active"),
    (phonesec.style.display = "none"),
    (compsec.style.display = "none"),
    (electsec.style.display = "none"),
    (fashsec.style.display = "none"),
    (homesec.style.display = "none"),
    (babysec.style.display = "none"),
    (othersec.style.display = "none");
}

// OTHER hover effect below

var othernav = document.querySelector(".othermenu");
var othersec = document.querySelector(".othersection2");
othersec.style.display = "none";
function trigger7() {
  othernav.classList.add("active");
  return (othersec.style.display = "block"), (babysec.style.display = "none");
}

function trigger7kill() {
  othernav.classList.remove("active"),
    (phonesec.style.display = "none"),
    (compsec.style.display = "none"),
    (electsec.style.display = "none"),
    (fashsec.style.display = "none"),
    (homesec.style.display = "none"),
    (babysec.style.display = "none"),
    (othersec.style.display = "none");
}

// SECOND NAV OPTION DISAPPEARANCE WORK BEKOW

var element1a = document.querySelector(".secA1");
var element2a = document.querySelector(".sectB1");
var element3a = document.querySelector(".sectC1");
var element4a = document.querySelector(".sectD1");
var element5a = document.querySelector(".sectE1");
var element6a = document.querySelector(".sectF1");
var element7a = document.querySelector(".sectG1");
var element8a = document.querySelector(".sectH1");

function navhovererase() {
  console.log("out of there!");

  return (
    (element1a.style.display = "none"),
    (element2a.style.display = "none"),
    (element3a.style.display = "none"),
    (element4a.style.display = "none"),
    (element5a.style.display = "none"),
    (element6a.style.display = "none"),
    (element7a.style.display = "none"),
    (element8a.style.display = "none")
  );
}

// DROP DOWN HELP BUTTON EFFECT BELOW
var helpbtn = document.querySelector(".helpnav");
var helpdrop = document.querySelector(".helpdropdown");

function toggledropdown() {
  helpdrop.style.display = "block";
  helpbtn.classList.add("active");
}

function toogledropdownkill() {
  helpdrop.style.display = "none";
  helpbtn.classList.remove("active");
}

// MAIN BODY CAROUSEL EDITS FROM BELOW
// onload(timerslide);
var carousel = document.querySelector(".maincarousel");

var reduceopa = setTimeout(reduceopacity, 5900);
function reduceopacity() {
  carousel.style.opacity = 0.2;
}

// SETTING ONLOAD SLIDER ACTIVATION
function timerslider1() {
  setInterval(fade, 6000);
}
window.onload = timerslider1();

//END OF SETTING ONLOAD SLIDER ACTIVATION

// OPACITY REGAIN FUNCTION
var regainopa = setInterval(fadein, 6000);
function fadein() {
  carousel.style.opacity = 1;
}

// SLIDE EFFECT
var maincarouse = document.querySelector(".maincarousel img");
setInterval(fade, 3000);
var n = maincarouse.width;
// n === 850 ? (n = 1700) : (n = 850);
function fade() {
  return (
    carousel.scrollTo(n, 0),
    n === maincarouse.width
      ? (n = maincarouse.width * 2)
      : (n = maincarouse.width)
  );
  // onload(regainopa);
  // carousel.scrollTo(770, 0);
  // onload(regainopa);()

  // onload(timerslide);

  // for (var n = 1; n < 1000; n++) {
  //   n *= 850;
  //   var timer = carousel.scrollTo(n, 0);
  //   //The code inside this for loop will never stop
  //   // carousel.scrollTo(770, 0);
  //   return timer;
  // }
  // var timer = onload(timerslide);
}
// function fade() {
//   return reduceopa, carousel.scrollTo(770, 0), regainopa;
//   // onload(regainopa);
//   // carousel.scrollTo(770, 0);
//   // onload(regainopa);
// }
// OPACITY REDUCTION FUNCTION

// clearInterval(timerslide);

// function fade() {

//   if ((n = 770)) return carousel.scrollTo(n, 0), (n = 1540);
//   else if (n > 770) {
//     return carousel.scrollTo(1540, 0), (n = 770);
//   }
// }

// var a = 1;
// var b;
// while (a < 1000) {
//   b + 770;
// }
// a = a + 1;

// carousel.scrollTo(b, 0);

// for (var i = 1; i > 0; i++) {
//   //The code inside this for loop will never stop
//   carousel.scrollTo(770, 0);
// }
