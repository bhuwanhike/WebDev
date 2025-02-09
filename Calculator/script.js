let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
let btn0 = document.getElementById("zero");
let clearall = document.getElementById("clear");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let divide = document.getElementById("divide");
let percent = document.getElementById("percent");
let dis = document.getElementById("disp");
let multiply = document.getElementById("multiply");
let point = document.getElementById("point");
let equal = document.getElementById("equal");
let off = document.getElementById("OFF");
let del = document.getElementById("dlt");

equal.style.backgroundColor = "#FF803E";
plus.style.color = "#FF803E";
minus.style.color = "#FF803E";
multiply.style.color = "#FF803E";
divide.style.color = "#FF803E";
percent.style.color = "#FF803E";
del.style.color = "#FF803E";
clearall.style.color = "#FF803E";

function overrite(e1, e2) {
  if (e1.innerText == 0) {
    e1.innerText = "";
  }
  e1.innerText += e2.innerText;
}
function disable_buttons(is_off) {
  let buttons = [
    btn1,
    btn2,
    btn3,
    btn4,
    btn5,
    btn6,
    btn7,
    btn8,
    btn9,
    btn0,
    plus,
    minus,
    multiply,
    divide,
    equal,
    point,
    percent,
    del,
    clearall,
  ];
  buttons.forEach((e) => {
    e.disabled = is_off;
  });
}

function operate(dis) {
//   let ran = Math.random();
//   // let operations = { "+": "-", "*": "+", "-": "/", "/": "**" };
//   if (ran <= 0.1) {
  dis.innerText = eval(dis.innerText);
//   } else {
//     //   console.log(eval(a + user + b));
//   }
}
let is_off = true;
off.addEventListener("click", () => {
  if (is_off) {
    is_off = false;
    off.innerText = "OFF";
    dis.innerText = 0;
    cal_on = true;
    disable_buttons(is_off);
  } else {
    dis.innerText = "";
    off.innerText = "ON";
    is_off = true;
    disable_buttons(is_off);
  }
});

  btn1.addEventListener("click", () => {
    overrite(dis, btn1);
  });


btn2.addEventListener("click", () => {
  overrite(dis, btn2);
});
btn3.addEventListener("click", () => {
  overrite(dis, btn3);
});
btn4.addEventListener("click", () => {
  overrite(dis, btn4);
});
btn5.addEventListener("click", () => {
  overrite(dis, btn5);
});
btn6.addEventListener("click", () => {
  overrite(dis, btn6);
});
btn7.addEventListener("click", () => {
  overrite(dis, btn7);
});
btn8.addEventListener("click", () => {
  overrite(dis, btn8);
});
btn9.addEventListener("click", () => {
  overrite(dis, btn9);
});
btn0.addEventListener("click", () => {
  overrite(dis, btn0);
});
clearall.addEventListener("click", () => {
  dis.innerText = 0;
});

plus.addEventListener("click", () => {
  overrite(dis, plus);
});
minus.addEventListener("click", () => {
  overrite(dis, minus);
});
multiply.addEventListener("click", () => {
  overrite(dis, multiply);
});

divide.addEventListener("click", () => {
  overrite(dis, divide);
});
point.addEventListener("click", () => {
  overrite(dis, point);
});
percent.addEventListener("click", () => {
  overrite(dis, percent);
});
equal.addEventListener("click", () => {
  operate(dis);
});
