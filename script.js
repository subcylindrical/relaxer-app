const floatingDot = document.querySelector('.floating-dot');
const relaxer = document.querySelector('.relaxer');
const action = document.querySelector('.action');
let dotAngle = 270;

// Set floating dot animation
setInterval(() => {
  floatingDot.style.transform = `rotate(${dotAngle}deg) translate(175px)`;
  dotAngle += 0.5;
  setStyles(dotAngle);
}, 10);

// Sets DOM styles
function setStyles() {
  // console.log(dotAngle);
  if (dotAngle >= 360) {
    dotAngle = 0;
  }
  if (dotAngle < 150) {
    console.log('breath in');
    relaxer.classList.add('breath-in');
    action.textContent = 'Breath In';
  }
  if (dotAngle > 150 && dotAngle < 220) {
    console.log('hold');
    relaxer.classList.remove('breath-in');
    relaxer.classList.add('hold');
    action.textContent = 'Hold';
  } else if (dotAngle > 200 && dotAngle < 360) {
    // relaxer.classList.remove('breath-in');
    relaxer.classList.remove('hold');
    console.log('breath out');
    action.textContent = 'Breath Out';
  }
}
