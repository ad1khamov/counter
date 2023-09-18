const  time = document.querySelector(".time");
const step = document.querySelector(".step");
const counter = document.querySelector(".counter");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
let a = 1;
let b = 1;
plus.onclick = () => {
 setTimeout(() => {
  step.innerText = `Step-${a}`;
  counter.innerText = `${b}`;
  a++;

  let c = counter.innerText;
  b=eval(`${a}+${c}`);
 }, `${time.value}000`);
};
/*Minus ishlamidi */
// minus.onclick = () => {
//  setTimeout(() => {
//   step.innerText = (`Step-${a}`);
//   a++;
//   counter.innerText =eval(`${b}-${a}`);
//  }, `${time.value}000`);
// };