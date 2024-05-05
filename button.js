
      window.onload = function() { //loads the window completely 
  
  
        //the animation script for noBtn
          var button = document.getElementById('no-btn');
          //creating a variable button and assigning it the element from HTML file
      

  
      button.addEventListener('mouseover', function(event) {
                  // when the mouse moves onto the button the following variables justified will perform a specific fucntion- the function is to make the button unclickable

          var buttonWidth = button.offsetWidth;
          var buttonHeight = button.offsetHeight;
  
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
  
          var randomX = Math.random() * (windowWidth - buttonWidth);
          var randomY = Math.random() * (windowHeight - buttonHeight);
  
          button.style.left = randomX + 'px';
          button.style.top = randomY + 'px';
      });
    }
    //animation scrip for the yesBtn
    document.getElementById('yesBtn').addEventListener('click', function(event) {
        const confettiCount = 20; // Number of confetti pieces to generate
        const yesBtn = this;
    
        document.getElementById('yesBtn').addEventListener('click', function() {
            const blush1 = document.getElementById('blush1');
            blush1.classList.add('blush');  

        document.getElementById('yesBtn').addEventListener('click', function() {
            const blush2 = document.getElementById('blush2');
            blush2.classList.add('blush'); 
        });
        // Get the coordinates of the click relative to the yesBtn
        const rect = yesBtn.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
    
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            yesBtn.appendChild(confetti);
    
            // Randomize initial position around the click position
            const spreadRadius = Math.random() * 100 + 50; // Random spread radius between 50 and 150 pixels
            const angle = Math.random() * 2 * Math.PI; // Random angle in radians (0 to 2pi)
            const initialX = offsetX + spreadRadius * Math.cos(angle); // Calculate initial X coordinate
            const initialY = offsetY + spreadRadius * Math.sin(angle); // Calculate initial Y coordinate
            const velocity = Math.random() * 500 + 400; // Random velocity between 400 and 500 pixels per second
    
            confetti.style.setProperty('--x', `${initialX}px`);
            confetti.style.setProperty('--y', `${initialY}px`);
            confetti.style.setProperty('--angle', `${angle}rad`);
            confetti.style.setProperty('--velocity', `${velocity}px`);
        }
        setTimeout(() => {
            yesBtn.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
        }, 8500);//for stopping the animation after 5 secs
    });
         setTimeout(function() {
        const heart = document.getElementById('heart');
         heart.style.display = 'block';
        }, 6500);
    });
   