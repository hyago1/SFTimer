        var time;
        var run = false;
        var ml = 0;
		var s = 0;
        var min = 0;
        window.onkeyup = play;
            function play() {
               
                document.getElementsByClassName(".time").co
            if (run == false) {
              
                 time = setInterval (function() {
                 ml++
                 run = true;
                    document.getElementById('ml').innerHTML = ml;
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
                  
                 ml= 0;
                 s = 0;
                
                  
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
            }
    
