var time;
var run = false;
var ml = 0;
var s = 0;
var min = 0;
var timeStoped = "";
var solves = new Array();
solves.length = 1000;
var average3 = new Array();
average3.length = 3;
var startTime;
window.onkeyup = play;
function play() {
  document.getElementsByClassName(".time").co;
  if (run == false) {
    time = setInterval(function () {
      ml++;
      run = true;
      document.getElementById("ml").innerHTML = ml;

      document.getElementById("s").innerHTML = s;

      if (ml == 99) {
        ml = 0;
        s++;
        document.getElementById("s").innerHTML = s;
      }
      if (s == 59) {
        s = 0;
        min++;
        document.getElementById("min").innerHTML = min;
      }
    }, 10);
    s = 0;
    ml = 0;
    min = 0;
  } else {
    clearTimeout(time);
    run = false;

    updateTime();
  }
}

function updateTime() {
  document.getElementById("ml").innerHTML = ml;
  document.getElementById("s").innerHTML = s;
  document.getElementById("min").innerHTML = min;

  getTime();
}





function getTime() {
  timeStoped = min + ":" + s + ":" + ml;

  for (let index = 0; index < solves.length; index++) {
    if (solves[index] == null ) {
      
      solves[index] = timeStoped;
      
      if (average3[index] == null) {
        average3[index] = timeStoped;
      }
      break;
    }

    console.log(solves);
  }
  timeStoped = "";

  var table = document.getElementById("times");

  table.innerHTML = "";
 
  

  for (var i = 0; i < solves.length; i++) {
    if (solves[i] != null) {
      table.innerHTML += `<li id="${i}">${solves[i]}</li>`;
    }
  }
  document.getElementById('times').lastChild.scrollIntoView();

  // average();

}
// function average() {
//   function ArrayAvg(average3) {
//     var i = 0, summ = 0, ArrayLen = average3.length;
//     while (i < ArrayLen) {
//         summ = summ + average3[i++];
// }
//     return summ / ArrayLen;
// }
// var a = ArrayAvg(average3);
// console.log(a)
// var threeaverage = document.getElementById("average");
// threeaverage.innerHTML += `<span class="threeaverage">${a}</span>`;
// }