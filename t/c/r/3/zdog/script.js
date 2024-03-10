/* Commenting Zone

R's C C F

Front Red
Right Blue
Top White
Bottom Yellow
Left Green
Back Orange
*/

let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 4,
  dragRotate: true,
  // stop rotation when dragging starts
  onDragStart: function() {
    isSpinning = false;
  },
});

let box = new Zdog.Box({
  addTo: illo,
  width: 120,
  height: 100,
  depth: 80,
  stroke: false,
  color: '#000', // default face color
  leftFace: 'green',
  rightFace: 'blue',
  topFace: 'white',
  bottomFace: 'yellow',
  frontFace: 'red',
  backface: 'orange',
});

function animate() {
  illo.rotate.y += isSpinning ? 0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();
