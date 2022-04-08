        var time;
        var run = false;
        var ml = 0;
		var s = 0;
        var min = 0;
        var timeStoped = "";
        var solves = new Array();
        solves.length = 100;
       var startTime; 
        window.onkeyup = play;
            function play() {
                document.getElementsByClassName(".time").co
            if (run == false) {
              
                 time = setInterval (function() {
                 ml++
                 run = true;
                    document.getElementById('ml').innerHTML = ml;

                    document.getElementById('s').innerHTML = s;

                  if (ml == 99) {
                      ml = 0;
                      s++;
                      document.getElementById('s').innerHTML = s;

                  }   
                  if (s == 59) {
                      s = 0;
                      min++;
                      document.getElementById('min').innerHTML = min;
                  }

                  }, 10);
                  s = 0; 
                  ml= 0;
                
                
                  
            }
            else{
        
                    clearTimeout(time);       
                    run = false
                    
              
                updateTime();
                
               
            }
               

            }

            function updateTime() {
                
                document.getElementById('ml').innerHTML = ml;
                document.getElementById('s').innerHTML = s;
                document.getElementById('min').innerHTML = min;
          
                getTime();
               
            }
    
            function getTime() {
        timeStoped = min+":"+s+":"+ml;
                for (let index = 0; index < solves.length; index++) {
                  if (solves[index] == null) {
                                solves[index] = timeStoped;
                                break;
                  }
          
                  
               
                  
                    console.log(solves)

                }
                timeStoped = "";

                var table = document.getElementById("times");// sugestão, coloque um id na tabela para usar getElementById.


// limpar tbody

table.innerHTML="";
for(var i=0; i< solves.length; i++){
    if (solves[i] != null) {
        
           table.innerHTML += "<li>"+solves[i]+"</li>";   
          
    }
                       
}
                
        }