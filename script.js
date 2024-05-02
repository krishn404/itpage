const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  trailer.style.left = x + 'px';
  trailer.style.top = y + 'px';
  
  const keyframes = {
    transform: `scale(${interacting ? 8 : 1})`
  };
  
  trailer.animate(keyframes, { 
    duration: 900, 
    fill: "forwards" 
  });
}

window.addEventListener('mousemove', (e) => {
  const interactable = e.target.closest(".interactable");
  const interacting = interactable !== null;
  
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if (interacting) {
    icon.style.opacity = 1;
    // Set appropriate class based on the type
    // icon.className = getTrailerClass(interactable.dataset.type);
  } else {
    icon.style.opacity = 0;
  }
});
