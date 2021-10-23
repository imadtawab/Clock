
////////Star TIME//////
let time = 1000


const speSpan = document.querySelector(".speed .loop span")
const speed = document.querySelector(".speed .loop")

speed.addEventListener("click",(eo) => {
  if (document.querySelector(".speed .loop span").className == "r-check"){
    time = 10
  } else if (document.querySelector(".speed .loop span").className == "l-check bg-check"){
    time = 1000

  }
  console.log(time);
  speSpan.classList.toggle("r-check")
  speSpan.classList.toggle("l-check")
  speed.classList.toggle("bg-check")
  speSpan.classList.toggle("bg-check")

  

})
////////End TIME//////
const cog = document.getElementById("cog");
const inpSec = document.getElementById("inpSec");
const inpMin = document.getElementById("inpMin");
const inpHour = document.getElementById("inpHour");


// Star-dg-clock
const dgSec = document.getElementById("dg-sec");
const dgMin = document.getElementById("dg-min");
const dgHour = document.getElementById("dg-hour");

cog.parentElement.parentElement.style.left = `-${
  cog.parentElement.parentElement.scrollWidth - 43
}px`;

// 
const regSpan = document.querySelector(".reglage .loop span")
const reglage = document.querySelector(".reglage .loop")
const parSetting = document.querySelector(".par-setting")

reglage.addEventListener("click",(eo) => {
  play.removeAttribute("disabled")
  reglage.setAttribute("disabled","")
  speed.removeAttribute("disabled")
  if (document.querySelector(".reglage .loop span").className == "r-check"){
    regSpan.classList.remove("r-check")
    regSpan.classList.add("l-check")
    reglage.classList.add("bg-check")
    regSpan.classList.add("bg-check")

// 
    parSetting.classList.add("setActive")
    ads = setInterval(() => {
      //**************************************//
      //********* REVERSE TIME TO DEG *********//
      //**************************************//
      let secDeg = parseInt(`${inpSec.value * 6}`);
      let minDeg = parseInt(`${inpMin.value * 6}`);
      let hourDeg = parseInt(`${inpHour.value * 30}`);
      let topHour = parseInt(`${hourDeg + inpMin.value * 0.5}`);

      sec.style.transform = `translateY(-50%) rotate(${secDeg}deg)`;
      min.style.transform = `translateY(-50%) rotate(${minDeg}deg)`;
      hour.style.transform = `translateY(-50%) rotate(${topHour}deg)`;
    

      //**************************************//
      //********* STAR DIGITAL CLOCK *********//
      //**************************************//
      // INPUT-SEC

      if (inpSec.value == "") {
        dgSec.innerText = "00";
      } else if (inpSec.value < 10) {
        dgSec.innerText = `0${inpSec.value}`;
       }
       else {
        dgSec.innerText = inpSec.value;
      }

      // INPUT-MIN

      if (inpMin.value == "") {
        dgMin.innerText == "00";
      } else if (inpMin.value < 10) {
        dgMin.innerText = `0${inpMin.value}`;
      } else {
        dgMin.innerText = inpMin.value;
      }
      // INPUT-HOUR

      if (inpHour.value == "") {
        dgHour.innerText == "00";
      } else if (inpHour.value < 10) {
        dgHour.innerText = `0${inpHour.value}`;
      } else {
        dgHour.innerText = inpHour.value;
      }
    }, 500);
  

  } else if (document.querySelector(".reglage .loop span").className == "l-check bg-check"){
    regSpan.classList.add("r-check")
    regSpan.classList.remove("l-check")
    reglage.classList.remove("bg-check")
    regSpan.classList.remove("bg-check")
    parSetting.classList.remove("setActive")

  }
})


// 

cog.addEventListener("click", (eo) => {
 
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////// OPEN-SETTING ////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  if (eo.target.parentElement.parentElement.className == "setting") {
    eo.target.parentElement.parentElement.classList.add("active");
    cog.parentElement.parentElement.style.left = "0px";
    eo.target.classList.add("rotate");

  
  }

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////// CLOSE-SETTING ////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  else if (
    eo.target.parentElement.parentElement.className == "setting active"
  ) {
    eo.target.parentElement.parentElement.classList.remove("active");
    cog.parentElement.parentElement.style.left = `-${
      cog.parentElement.parentElement.scrollWidth - 43
    }px`;
    eo.target.classList.remove("rotate");
    clearInterval(ads);
  }
});

const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const play = document.getElementById("play");
play.addEventListener("click", (eo) => {

if (inpSec.value == "") {
  dgSec.innerText = "00";
  }
 if (inpMin.value == "") {
    dgMin.innerText = "00";
    }
   if (inpHour.value == "") {
      dgHour.innerText = "00";
      }

  reglage.addEventListener("click", (eo) => {

    inpSec.value == ""
    inpMin.value == ""
    inpHour.value == ""
    if (document.querySelector(".reglage .loop span").className == "l-check bg-check"){
      
      clearInterval(goSec)
    }
  
  })

  reglage.removeAttribute("disabled")

  play.setAttribute("disabled","")
  speed.setAttribute("disabled","")
// 
  regSpan.classList.add("r-check")
  regSpan.classList.remove("l-check")
  reglage.classList.remove("bg-check")
  regSpan.classList.remove("bg-check")
  parSetting.classList.remove("setActive")
  /////////////////////////////////////////////////////////////
  //////////////////// CLOSE SETTING //////////////////////////
  /////////////////////////////////////////////////////////////
  eo.target.parentElement.parentElement.classList.remove("active");
  cog.parentElement.parentElement.style.left = `-${
    cog.parentElement.parentElement.scrollWidth - 43
  }px`;
  cog.classList.remove("rotate");
 
  /////////////////////////////////////////////////////////////
  //////////////////// Star Seconds //////////////////////////
  /////////////////////////////////////////////////////////////

  let secDeg = parseInt(`${inpSec.value * 6}`);
  let minDeg = parseInt(`${inpMin.value * 6}`);
  let hourDeg
  if (inpHour.value < 12) {
    hourDeg = parseInt(`${inpHour.value * 30}`);
  } else {
    hourDeg = parseInt(`${(inpHour.value - 12) * 30}`);
  }
  
  let topHour = parseInt(`${hourDeg + inpMin.value * 0.5}`)
  let iSec = parseInt(inpSec.value);
  let iMin = parseInt(inpMin.value);
  let iHour = parseInt(inpHour.value);
  // let iSec =  inpSec.value
  goSec = setInterval(() => {
    
    if (secDeg < 360) {
      sec.style.transform = `translateY(-50%) rotate(${secDeg + 6}deg)`;
      secDeg += 6;
    } else {
      sec.style.transform = `translateY(-50%) rotate(6deg)`;
      secDeg = 6;

      if (minDeg < 360) {
        min.style.transform = `translateY(-50%) rotate(${minDeg + 6}deg)`;
        minDeg += 6;
      } else {
        min.style.transform = `translateY(-50%) rotate(6deg)`;
        minDeg = 6;
      }

      //
      // if (topHour < 360) {
        // if (topHour >= 360) {
        //   hour.style.transform = `translateY(-50%) rotate(${topHour - 360}deg)`;
        // }
        if (topHour < 360) {
          // let topHour = parseInt((minDeg * 0.5) / 30 / 6)
  
          hour.style.transform = `translateY(-50%) rotate(${topHour}deg)`;
  
          topHour += 0.5;
  
        } else {
          hour.style.transform = `translateY(-50%) rotate(0.5deg)`;
          topHour = 0;
        }

    }
    //**************************************//
    //********* STAR DIGITAL CLOCK *********//
    //**************************************//
    //  INPUT-SEC

    if (inpSec.value == "") {
      iSec = 0;
      inpSec.value = 0;
      dgSec.innerText = `0${parseInt(iSec + 1)}`;
    } else if (iSec < 9) {

      dgSec.innerText = `0${parseInt(iSec + 1)}`;
    } else if (iSec == 59) {
      iSec = -1;
      dgSec.innerText = `0${parseInt(iSec + 1)}`;
    //  INPUT-MIN

      if (inpMin.value == "") {
        iMin = 0;
        inpMin.value = 0;
        dgMin.innerText = `0${parseInt(iMin + 1)}`;
      } else if (iMin < 9) {

        dgMin.innerText = `0${parseInt(iMin + 1)}`;
      } else if (iMin == 59) {
        iMin = -1;
        dgMin.innerText = `0${parseInt(iMin + 1)}`;
            //  INPUT-Hour

      if (inpHour.value == "") {
        iHour = 0;
        inpHour.value = 0;
        dgHour.innerText = `0${parseInt(iHour + 1)}`;
      } else if (iHour < 9) {

        dgHour.innerText = `0${parseInt(iHour + 1)}`;
      } else if (iHour == 23) {
        iHour = -1;
        dgHour.innerText = `0${parseInt(iHour + 1)}`;
      } else {

        dgHour.innerText = parseInt(iHour + 1);
      }
      iHour++
      // :////
      } else {

        dgMin.innerText = parseInt(iMin + 1);
      }
      iMin++
      // :////
    } else {

      dgSec.innerText = parseInt(iSec + 1);
    }

  












    console.log(iSec);
    iSec++;
  }, time);

  clearInterval(ads);
});

const problem = document.getElementById("problem");

setInterval(() => {
if(inpSec.value >=60 || inpMin.value >=60 || inpHour.value >=24 ){
  if(inpHour.value >=24){
    inpHour.classList.add("error")
    
  } else if( inpMin.value >=60 ){
    inpMin.classList.add("error")
    
  } else if(inpSec.value >=60 ){
    inpSec.classList.add("error")
    
  }
  play.setAttribute("disabled","")

  problem.classList.add("problem")
  problem.classList.remove("dn")
} else{
  inpSec.classList.remove("error")
    inpMin.classList.remove("error")
    inpHour.classList.remove("error")
    if (reglage.className == "loop bg-check") {
      play.removeAttribute("disabled")
    } else {
      play.setAttribute("disabled","")
    }
    // reglage.className == "loop bg-check"
    problem.classList.remove("problem")
    problem.classList.add("dn")

} 
},200)



const chgSpan = document.querySelector(".change .loop span")
const change = document.querySelector(".change .loop")
const dgclock = document.querySelector(".digital-clock")
const clock = document.querySelector(".clock")
const container = document.querySelector(".container")
const brand = document.querySelector(".brand-dg")
// console.log(change)


change.addEventListener("click",(eo) => {
  
  // eo.target.style.left="initial"
  chgSpan.classList.toggle("r-check")
  chgSpan.classList.toggle("l-check")
  change.classList.toggle("bg-check")
  chgSpan.classList.toggle("bg-check")
  clock.classList.toggle("opc")
  brand.classList.toggle("opc")
  dgclock.classList.toggle("bom-dg")
  

})



// const regSpan = document.querySelector(".reglage .loop span")
// const reglage = document.querySelector(".reglage .loop")
// const parSetting = document.querySelector(".par-setting")

// reglage.addEventListener("click",(eo) => {
//   if (document.querySelector(".reglage .loop span").className == "r-check"){
//     parSetting.classList.add("setActive")
//   } else if (document.querySelector(".reglage .loop span").className == "l-check bg-check"){
//     parSetting.classList.remove("setActive")
    

//   }

//   regSpan.classList.toggle("r-check")
//   regSpan.classList.toggle("l-check")
//   reglage.classList.toggle("bg-check")
//   regSpan.classList.toggle("bg-check")

  

// })


