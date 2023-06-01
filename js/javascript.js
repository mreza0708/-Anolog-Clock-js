let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hour = document.querySelector(".hour");
let deg = 6;

setInterval(clockHandler, 1000);

function clockHandler() {
  let d = new Date();
  let h = d.getHours() * 30;
  let m = d.getMinutes() * deg;
  let s = d.getSeconds() * deg;

  hour.style.transform = `rotateZ(${h + m / 12}deg)`;
  min.style.transform = `rotateZ(${m}deg)`;
  sec.style.transform = `rotateZ(${s}deg)`;
}

// const deg = 6;
// const hour = document.querySelector('.hour');
// const min = document.querySelector('.min');
// const sec = document.querySelector('.sec');

// setInterval(() =>{
//     let d = new Date();
//     let hDeg = d.getHours() * 30;
//     let mDeg = d.getMinutes() * deg;
//     let sDeg = d.getSeconds() * deg;

//     hour.style.transform = `rotateZ(${(hDeg)+(mDeg/12)}deg)`;
//     min.style.transform = `rotateZ(${mDeg}deg)`;
//     sec.style.transform = `rotateZ(${sDeg}deg)`;

// },1000)
