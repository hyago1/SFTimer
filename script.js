        var time;
        var run = false;
        var ml = 0;
		var s = 0;
        var min = 0;
        var timeStoped = "";
        var solves = ["dde","dewdw","rdfewf"];
       
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
                  
                    solves[index] = timeStoped;
                  
               
                  
                    console.log(solves[index])

                }
                timeStoped = 0;
                
        }