// game objects/checks
 function checkxposbound () {

           if (xcord > 1) {
			  updateDisplay("You Cant Go That Way");
              xcord = xcord - 1;
           }
        }

        function checkxnegbound () {

           if (xcord < -1 ) {
			  updateDisplay("You Cant Go That Way");
              xcord = xcord + 1;
           }
        }

        function checkyposbound () {

           if (ycord > 1 ) {
			  updateDisplay("You Cant Go That Way");
              ycord = ycord - 1;
           }
        }

        function checkynegbound () {

           if (ycord < -1 ) {
			  updateDisplay("You Cant Go That Way");
              ycord = ycord + 1;
           }
        }

        function checkzposbound () {

           if (zcord > 1) {
			  updateDisplay("You Cant Go That Way");
              zcord = zcord - 1;
           }
        }

        function checkznegbound() {

           if (zcord < -1) {
		      updateDisplay("You Cant Go That Way");
              zcord = zcord + 1;
           }
        }

        function checkbound () { // this checks to make sure that the player does not walk out of the space of the game

           checkxposbound();
           checkxnegbound();
           checkyposbound();
           checkynegbound();
        }
		 function checkdirectionalinputs () {
		 
			var check = document.getElementById("txtcmd");
			switch (check.value) {
			case "n":
			   goNorth();
               check.value = "";
			   break;
			case "N":
			    goNorth();
                check.value = "";
				break;
			case "s":
			   goSouth();
               check.value = "";
			   break;
			case "S":
			   goSouth();
               check.value = "";
			   break;
			case "e":
			   goEast();
               check.value = "";
			   break;
			case "E":
			   goEast();
               check.value = "";
			   break;
			case "w":
			   goWest();
              check.value = "";
			  break; 
			case "W":
			   goWest();
              check.value = "";
			  break;
			case "i":
			   updateDisplay(inventory);
			   check.value ="";
			   break;
			case "pickup":
			   pickupaxe();
			   check.value ="";
			   break;
			case "search":
			    findkey();
			   check.value ="";
			   break;
			case "use":
			   changelights();
			   check.value ="";
			   break;
			case "up":
			   goingupchecker();
			   break;
			case "down":
			   goingdownchecker();
			   break;
			case "help":
			    help();
			   check.value ="";
			   break;
			default:
			   check.value = "";
			   updateDisplay("Invalid Command if you need help type help for directions");
			 }
		}
		function goingupchecker () {
		
		   var check = document.getElementById("txtcmd");
		   if ((xcord === -1 && ycord === 1 && zcord ===-1) || (xcord === 1 && ycord === -1 && zcord === 0) ) {
		       checkbasstairsup();
			   checkatticstairsup();
			   check.value ="";
		    }
			else {
			   error();
			}
		}
		
		function goingdownchecker () {
		
		   var check = document.getElementById("txtcmd");
		   if ( (xcord === -1 && ycord === 1 && zcord ===0) || (xcord === 1 && ycord === -1 && zcord === 1) ) {
		       checkmiddlestairsdown();
			   checkatticstairsdown();
			   check.value ="";
		    }
			else {
			   error();
			}
		}

        function checkmiddlestairsdown () {

           var check = document.getElementById("txtcmd");

           if ( (xcord === -1 && ycord === 1 && zcord ===0) && (check.value === "down") ) {
              godown();
			  checkLoc();
              check.value = "";	 
           }
        }

        function checkbasstairsup(){

           var check = document.getElementById("txtcmd");

           if ((xcord === -1 && ycord === 1 && zcord ===-1) && (check.value === "up")) {
              goup();
			  checkLoc();
              check.value = "";
           }
        }

        function checkatticstairsup () {

           var check = document.getElementById("txtcmd");

           if ((xcord === 1 && ycord === -1 && zcord === 0) && (check.value === "up")) {
              goup();
			  checkLoc();
              check.value = "";
           }
        }

        function checkatticstairsdown () {

           var check = document.getElementById("txtcmd");

           if ((xcord === 1 && ycord === -1 && zcord === 1) && (check.value === "down")) {
              godown();
			  checkLoc();
              check.value = "";
           }
        }
	
        function stairscheck () {

           checkmiddlestairsdown();
           checkbasstairsup();
           checkatticstairsup();
           checkatticstairsdown();
           roomstorecheck(); // rechecks the locations that dont get checked
        }

        function pickupaxe() {

           var check = document.getElementById("txtcmd");

           if ( (xcord === 1 && ycord === 0 && zcord === -1) && ( axe === false) && (check.value === "pickup") ) {
              
		      if (axe === false) {
			     inventory = inventory + "" + "axe";
				 updateDisplay("Player picks up the axe");
			     axe = true;
                 check.value = "";
			  }
			  else {
			     updateDisplay("Already have the axe");
			     check.value = "";
			  }
            
           }
		   else {
		   error();
		   }
        }

        function changelights() {

           var check = document.getElementById("txtcmd");

           if ( (xcord === 0 && ycord === 0 && zcord === -1) && ( lights === false) && (check.value === "use") ) {
		      if (lights === false) {
	             inventory = inventory + "" + "Turned on Lights";
				  updateDisplay("Player turns on the lights");
                 lights = true;
                 check.value = "";
			   }
			   else {
		         updateDisplay("Already turned the lights on");
			     check.value = "";
               }
		   
		   }
		   else {
		      error();
		   }
		   
        }

        function findkey () {
		
		    var check = document.getElementById("txtcmd");

           if ( (xcord === -1 && ycord === -1 && zcord === 1) && ( key === false) && (check.value === "search") ) {
		      if ( key === false) {
	             inventory = inventory + "" + "Key";
				 updateDisplay("Player finds the key");
                 key = true;
                 check.value = "";
           }
		     else {
		        updateDisplay("Already have the key")
			    check.value = "";
			}
          }
		  else {
		   error();
			}

        }
		
        function resetbuttons () {

           westbutton.disabled = false;
           southbutton.disabled = false;
           eastbutton.disabled = false;
           northbutton.disabled = false;
        }
	
	function help () {

	   var check = document.getElementById("txtcmd");

	   var message = "WELCOME to the help Screen to move throughout my game there are four buttons north east south or west you can also type 'n' 's' 'e' or 'w' to move type 'i' to view inventory"
	   if (check.value === "help"){
	      updateDisplay(message);
	      check.value = "";
	   }
	}