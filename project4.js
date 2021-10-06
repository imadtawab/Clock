//      , >
const cog = document.getElementById("cog");
const inpSec = document.getElementById("inpSec");
const inpMin = document.getElementById("inpMin");
const inpHour = document.getElementById("inpHour");

cog.parentElement.parentElement.style.left = `-${
  cog.parentElement.parentElement.scrollWidth - 43
}px`;

// console.log(cog.parentElement.parentElement.scrollWidth);

cog.addEventListener("click", (eo) => {
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////// OPEN-SETTING ////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  if (eo.target.parentElement.parentElement.className == "setting") {
    eo.target.parentElement.parentElement.classList.add("active");
    cog.parentElement.parentElement.style.left = "0px";
    eo.target.classList.add("rotate");

    ads = setInterval(() => {
      //**************************************//
      //********* REVERSE TIME TO DEG *********//
      //**************************************//
      let secDeg = parseInt(`${inpSec.value * 6}`);
      let minDeg = parseInt(`${inpMin.value * 6}`);
      let hourDeg = parseInt(`${inpHour.value * 30}`);
      sec.style.transform = `translateY(-50%) rotate(${secDeg}deg)`;
      min.style.transform = `translateY(-50%) rotate(${minDeg}deg)`;
      hour.style.transform = `translateY(-50%) rotate(${hourDeg}deg)`;
    }, 500);
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
  /////////////////////////////////////////////////////////////
  //////////////////// CLOSE SETTING //////////////////////////
  /////////////////////////////////////////////////////////////

  eo.target.parentElement.classList.remove("active");
  cog.parentElement.parentElement.style.left = `-${
    cog.parentElement.parentElement.scrollWidth - 43
  }px`;
  cog.classList.remove("rotate");
  clearInterval(ads);
  /////////////////////////////////////////////////////////////
  //////////////////// Star Seconds //////////////////////////
  /////////////////////////////////////////////////////////////

  let secDeg = parseInt(`${inpSec.value * 6}`);
  let minDeg = parseInt(`${inpMin.value * 6}`);
  let hourDeg = parseInt(`${inpHour.value * 30}`);

  goSec = setInterval(() => {
    if (secDeg < 360) {
      sec.style.transform = `translateY(-50%) rotate(${secDeg + 6}deg)`;
      secDeg += 6;
      // console.log(secDeg);
    } else {
      sec.style.transform = `translateY(-50%) rotate(6deg)`;
      secDeg = 6;
      if (minDeg < 360) {
        min.style.transform = `translateY(-50%) rotate(${minDeg + 6}deg)`;
        minDeg += 6;
        // console.log(minDeg);
      } else {
        min.style.transform = `translateY(-50%) rotate(6deg)`;
        minDeg = 6;
        if (hourDeg < 360) {
          // let topHour = parseInt((minDeg * 0.5) / 30 / 6)
          hour.style.transform = `translateY(-50%) rotate(${hourDeg + 30}deg)`;
          hourDeg += 30;
          // console.log(hourDeg + topHour);
        } else {
          hour.style.transform = `translateY(-50%) rotate(1deg)`;
          hourDeg = 0;
        }
      }
    }
  }, 1000);
  cog.addEventListener("click", (eo) => {
    if (eo.target.parentElement.parentElement.className == "setting active") {
      clearInterval(goSec);
    }
  });
});
