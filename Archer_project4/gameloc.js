// game locations
 function firstfloorstairwell_check () { // this is the start of the locations

           if ( xcord === -1 && ycord === 1&& zcord ===0) {

              northbutton.disabled = true;
              westbutton.disabled = true;
              var message = "You enter a room with staircase leading down... type -down- to go down the stairs ";
              var location = "First Floor StairWell";
              updateLocation(location);
              updateDisplay(message);
              first_firstfloorstairwell_score();
           }
        }

        function fireplaceroom_check () {

           if ( xcord === 0 && ycord === 1 && zcord ===0) {

              northbutton.disabled = true;
              var message = "You move into the Fire Place Room"
              var location = "Fireplace Room";
              updateDisplay(message);
              updateLocation(location);
              first_fireplaceroom_score();
           }
        }

        function kitchen_check () {

           if ( xcord === 1 && ycord === 1&& zcord ===0) {

              northbutton.disabled = true;
              eastbutton.disabled = true;
              var message = "You enter the kitchen";
              var location = "Kitchen";
              updateDisplay(message);
              updateLocation(location);
              first_kitchen_score();
           }
        }

        function grandroom_check () {

           if ( xcord === -1 && ycord === 0&& zcord ===0) {

              westbutton.disabled = true;
              var message = "You head into the Grand Room";
              var location = "Grand Room";
              updateDisplay(message);
              updateLocation(location);
              first_grandroom_score();
           }
        }

        function startroom_check () {

           if ( xcord === 0 && ycord === 0&& zcord ===0) {

              var message = " This is the room you start in";
              var location = "Starting Room";
              updateDisplay(message); // passes as a parameter and updates the text area
              updateLocation(location); // passes as a parameter and updates a text box with location
         
           }
        }

        function diningroom_check () {

           if ( xcord === 1 && ycord === 0&& zcord ===0) {

              eastbutton.disabled = true;
              var message = "You move ino the Dining Room, The room is empty however the table is set like someone is ready to eat";
              var location = "Dining Room";
              updateDisplay(message);
              updateLocation(location);
              first_diningroom_score();
           }
        }

        function ballroom_check () {

           if ( xcord === -1 && ycord === -1 && zcord ===0) {

              southbutton.disabled = true;
              westbutton.disabled = true;
              var message = "You enter the Ball Room, Crazy stuff happens here ";
              var location = "Ball Room";
              updateDisplay(message);
              updateLocation(location);
              first_ballroom_score();
           }
        }

        function foyer_check () {

           if ( xcord === 0 && ycord === -1&& zcord ===0) {

              southbutton.disabled = true;
             var message = "You Move Into The Foyer and you see the Front Door, however the door cannot be opened without the lights on,a key, and the axe"
             var location = "Foyer Room";
             updateDisplay(message);
             updateLocation(location);
             first_foyer_score();
          }
        }

        function atticstairwellup_check () {

           if ( xcord === 1 && ycord === -1&& zcord ===0) {

              southbutton.disabled = true;
              eastbutton.disabled = true;
              var message = "You enter a room with a staircase leading up... type -up- to go up";
              var location = "Attic Stairwell";
              updateDisplay(message);
              updateLocation(location);
              first_atticstairwellup_score();
           }
        }

        function basementstairwell_check() {

           if ( xcord === -1 && ycord === 1 && zcord ===-1) {

              westbutton.disabled = true;
              northbutton.disabled = true;
              var message = "You Enter the Basement Stairwell with stairs leading up type --up-- to go up the stairs";
              var location = "Basement Stairwell";
              updateDisplay(message);
              updateLocation(location);
              first_basementstairwell_score();
           }
        }

        function basementstorageroom_check() {

           if ( xcord === 0 && ycord === 1 && zcord === -1) {

              northbutton.disabled = true;
              var message = "You Enter the storage room";
              var location = " Storage Room";
              updateDisplay(message);
              updateLocation(location);
              first_basementstorageroom_score();
           }
        }

        function basementwineceller_check () {

           if ( xcord === 1 && ycord === 1 && zcord === -1) {

              northbutton.disabled = true;
              eastbutton.disabled = true;
              var message = "You enter the Wine Celler";
              var location = " Wine Celler";
              updateDisplay(message);
              updateLocation(location);
              first_basementwineceller_score();
           }
        }

        function basementbathroom_check () {

           if ( xcord === -1 && ycord === 0 && zcord === -1) {

              westbutton.disabled = true;
              var message = "You Enter the Basement Bathroom";
			  var location = "Basement Bathroom";
              updateDisplay(message);
              updateLocation(location);
              first_basementbathroom_score();
           }
        }

        function basementbreakerroom_check () {

           if ( xcord === 0 && ycord === 0 && zcord === -1) {

              var message = "You Enter the Basement in the center region you see a box in the center with a sign that reads --Turn on power-- type --use-- to see what it does";
              var location = "Breaker Room";
              updateDisplay(message);
              updateLocation(location);
              first_basementbreakerroom_score();
           }
        }

        function basementtoolroom_check () {

           if ( xcord === 1 && ycord === 0 && zcord === -1) {

              eastbutton.disabled = true;
              var message = "You Enter the Basement Tool Room, There are various garden tools scattered around and a large axe on a table in the middle of the room type --pickup-- to pick up the axe ";
              var location = "Tool Room";
              updateDisplay(message);
              updateLocation(location);
              first_basementtoolroom_score();
           }
        }

        function basementshrineroom_check () {

           if ( xcord === -1 && ycord === -1 && zcord === -1) {

              westbutton.disabled = true;
              southbutton.disabled = true;
              var message = "You Enter a room with a strange shrine in it";
              var location = " Shrine Room";
              updateDisplay(message);
              updateLocation(location);
              first_basementshrineroom_score();
           }
        }

        function basementbillardroom_check () {

           if ( xcord === 0 && ycord === -1 && zcord === -1) {
 
              southbutton.disabled = true;
              var message = "You Enter the Billard Room, A strange creature is standing on the table";
              var location = " Billard Room";
              updateDisplay(message);
              updateLocation(location);
              first_basementbillardroom_score();
           }
        }

        function basementwashroom_check () {

           if ( xcord === 1 && ycord === -1 && zcord === -1) {

              southbutton.disabled = true;
              eastbutton.disabled = true;
              var message = "You Enter the Wash Room there is nothing useful in this room";
              var location = " Wash Room";
              updateDisplay(message);
              updateLocation(location);
              first_basementwashroom_score();
           }
        }

        function atticstairwelldown_check () {

           if ( xcord === 1 && ycord === -1 && zcord === 1) {

              southbutton.disabled = true;
              eastbutton.disabled = true;
              var message = "You Enter a stairwell type --down-- to go down";
              var location = "Attic Stairwell";
              updateDisplay(message);
              updateLocation(location);
              first_atticstairwell_score();
           }
        }

        function atticgeustroom_check () {

           if ( xcord === 0 && ycord === 1 && zcord === 1) {

              northbutton.disabled = true;
              var message = "You Enter the geust best room sleep in the bed?";
              var location = "Geust Room";
              updateDisplay(message);
              updateLocation(location);
              first_atticgeustroom_score();
           }
        }

        function atticmasterbedroom_check() {

           if ( xcord === -1 && ycord === 1 && zcord === 1) {

              westbutton.disabled = true;
              northbutton.disabled = true;
              var message = "You Enter a master bedroom with nobody around";
              var location = "Master Bedroom";
              updateDisplay(message);
              updateLocation(location);
              first_atticmasterbedroom_score();
           }
        }

        function atticbalcony_check () {

           if ( xcord === 0 && ycord === -1 && zcord === 1) {

              southbutton.disabled = true;
              var message = "You enter a balcony room with a great view of a lake";
              var location = "Balcony";
              updateDisplay(message);
              updateLocation(location);
              first_atticbalcony_score();
           }
        }

        function atticbathroom_check () {

           if ( xcord === -1 && ycord === -1 && zcord === 1) {

              southbutton.disabled = true;
              westbutton.disabled = true;
              var message = " Your enter a bathroom with a key -search- to pick up the key";
              var location = "Attic Bath Room";
              updateDisplay(message);
              updateLocation(location);
              first_atticbathroom_score();
           }
        }

        function atticcloset_check() {

           if ( xcord === -1 && ycord === 0 && zcord === 1) {

              westbutton.disabled = true;
              var message = "You Enter a closet with clothes in it";
              var location = "Closet";
              updateDisplay(message);
              updateLocation(location);
              first_atticcloset_score();
           }
        }

        function atticparlor_check() {

           if ( xcord === 0 && ycord === 0 && zcord === 1) {

              var message = "You Enter a creepy empty parlor";
              var location = " Parlor";
              updateDisplay(message);
              updateLocation(location);
              first_atticparlor_score();
           }
        }

        function atticstudy_check() {

           if ( xcord === 1 && ycord === 1 && zcord === 1) {

              northbutton.disabled = true;
              eastbutton.disabled = true;
              var message = "You Enter a Study with many books";
              var location = " Study";
              updateDisplay(message);
              updateLocation(location);
              first_atticstudy_score();
           }
        }

        function atticshitroom_check() {

           if ( xcord === 1 && ycord === 0 && zcord === 1) {

              eastbutton.disabled = true;
              var message = "You Enter a empty lounge";
              var location = " Lounge";
              updateDisplay(message);
              updateLocation(location);
              first_atticshitroom_score();
           }
        }

        function firstfloorlocationscheck() { // checks all locations for the first floor

           firstfloorstairwell_check();
           fireplaceroom_check();
           kitchen_check();
           grandroom_check();
           startroom_check();
           diningroom_check();
           ballroom_check();
           foyer_check();
           atticstairwellup_check();
        }

        function basementfloorlocationscheck() { // checks all locations for the basement floor

           basementstairwell_check();
           basementstorageroom_check();
           basementwineceller_check();
           basementbathroom_check();
           basementbreakerroom_check();
           basementtoolroom_check();
           basementshrineroom_check();
           basementbillardroom_check();
           basementwashroom_check();
        }

        function atticlocationscheck() { // checks all of the locations in the attic

           atticstairwelldown_check();
           atticgeustroom_check();
           atticmasterbedroom_check();
           atticbalcony_check();
           atticbathroom_check();
           atticcloset_check();
           atticparlor_check();
           atticstudy_check();
           atticshitroom_check();
        }

        function checkLoc() { // checks to see where the player is

           checkbound(); // checks boundries and doesnt let the player leave the game
           resetbuttons(); // resets the values of button values
           atticlocationscheck(); // checks the locations for the attic
           firstfloorlocationscheck(); // checks the first floor locations
           basementfloorlocationscheck(); // checks the basement locations
        }

        function roomstorecheck() {

           atticstairwelldown_check();
           basementstairwell_check();
           firstfloorstairwell_check();
           atticstairwellup_check();
        }