let pPortfolio = document.getElementById("portfolio");

// Logo Popmotion script
const { styler, spring, listen, pointer, value } = window.popmotion;

const popSpring = document.querySelector(".popSpring");
const divStyler = styler(popSpring);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(popSpring, "mousedown touchstart").start(e => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200
    // mass: 1,
    // damping: 10
  }).start(ballXY);
});
// End of Logo Popmotion script
