 const drumContainer=document.getElementById('drum-kit-container')
  
  keyPlayTune();
  keyClickTune();

  // Keyboard press functionality
  function keyPlayTune(){
      // Event on key down
  window.addEventListener('keydown',(e)=>{
    // console.log(e.keyCode); // This gives us code for keyboard keys 
    const keyCode= e.keyCode;
    const audioTune= document.querySelector(`audio[data-key="${keyCode}"]`);
    // console.log(audioTune);
    if(!audioTune) return; // if invalid key pressed than return

    const keyElem= document.querySelector(`.keys[data-key="${keyCode}"]`);
    
    // Now audio functionality
    audioTune.currentTime=0;
    audioTune.play()
    //Playing Effect
    keyElem.classList.add('playing');
  })

  // Event on keyUp
  window.addEventListener('keyup',(e)=>{
    const keyCode= e.keyCode;
    const keyElem= document.querySelector(`.keys[data-key="${keyCode}"]`);
    if(!keyElem) return;
    //Playing Effect Removed on keyUp
    keyElem.classList.remove('playing');
  })
   

  } 
  
  // Mobile/Desktop click functionality
  function keyClickTune() {

  drumContainer.addEventListener("pointerdown", (e) => {
    const keyElem = e.target.closest(".keys");
    if (!keyElem) return;

    const keyCode = keyElem.dataset.key;
    const audioTune = document.querySelector(
      `audio[data-key="${keyCode}"]`
    );

    if (!audioTune) return;

    
    audioTune.currentTime = 0;
    audioTune.play().catch(err => {
      console.warn("Audio blocked:", err);
    });

    keyElem.classList.add("playing");
  });

  drumContainer.addEventListener("pointerup", (e) => {
    const keyElem = e.target.closest(".keys");
    if (!keyElem) return;
    keyElem.classList.remove("playing");
  });

  drumContainer.addEventListener("pointerleave", () => {
    document.querySelectorAll(".keys").forEach(k =>
      k.classList.remove("playing")
    );
  });

}
