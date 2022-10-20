var time;
var run = false;
var ml = 0;
var s = 0;
var min = 0;
var timeStoped = "";
var solves = [];
var average3 = [];
var startTime;
var record = "";
var numberSolves = 0;
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

  addTimeInArray();
}

function addTimeInArray() {

  timeStoped = min + ":" + s + ":" + ml;
  numberSolves++;
  solves.push(timeStoped)
  average3.push(timeStoped)
  timeStoped = "";

  showTimes();
}

function showTimes() {
  var table = document.getElementById("times");
  var solve = document.getElementById("numSolves");
  table.innerHTML = "";
  console.log(record);
  solve.innerHTML = numberSolves;
  for (var i = 0; i < solves.length; i++) {
    if (solves[i] != null) {

      table.innerHTML += `<li id="${i}">${solves[i]}  <img class="iconDelete" onclick="deleteTime(${i})" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAo0lEQVRIieWTTQqDMBCFP6xb7yg9Qo/SHik3qUgXFlxWqGI3WYQ4Jc5I0NIHswnM+5lH4F9wAXpg9tP7NzVcQGIdFxIWFhcJzBk4D4Yb9vtfYzKpg2aDucWuJHDPLbAlwcJc9gQSTsAbfcEjUMZkUoIJeKi9Q+tFkgJg60Hc+SZg6UHc2S3BIQVUJ7J0oDJVAQPr/8DL76hwBp4ryDug1pL/Dj5MW2BhteGWuAAAAABJRU5ErkJggg=="/></li>`;
    }
  }
  document.getElementById("times").lastChild.scrollIntoView();
}

function deleteTime(id) {
  solves.splice(id, 1);
  numberSolves--;
  console.log(numberSolves);
  showTimes();
}

function record() {
  if (s <= sR) {

  }
  record = minR + ":" + sR + ":" + mlR;
  var recordTime = document.getElementById("recordTime");
  recordTime.innerHTML = record;
}