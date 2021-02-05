//Variables for setup
let container;
let camera;
let renderer;
let scene;
let house;

function init() {
  container = document.querySelector('.scene');

  //Create scene
  scene = new THREE.Scene();
  
  const fov = 35;

  const aspect = container.clientWidth / container.clientHeight
}