var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(50, innerWidth/innerHeight, 1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor (0xffffff, 1);
renderer.setSize(innerWidth, innerHeight);

cam.position.y = 1;
cam.position.z = 6;

document.body.appendChild(renderer.domElement);

var directionalLight = new THREE.AmbientLight({color: 0xffffff, intensity:1000});
directionalLight.position.set(150, 50, 50);
scene.add(directionalLight);

var scale = 0.4
const url = '/public/lampu.glb';
let lamp;
let gltfLoader = new THREE.GLTFLoader().load(url, function(result) {
    lamp = result.scene;
    lamp.scale.set(scale,scale,scale)
    scene.add(lamp);
  });
  
let lamp1;
let gltfLoader2 = new THREE.GLTFLoader().load(url, function(result) {
    lamp1 = result.scene;
    lamp1.scale.set(scale,scale,scale)
    lamp1.position.x = 2;
    lamp1.position.z = -2;
    scene.add(lamp1);
  });

let lamp2;
let gltfLoader3 = new THREE.GLTFLoader().load(url, function(result) {
    lamp2 = result.scene;
    lamp2.scale.set(scale,scale,scale)
    lamp2.position.x = -2;
    lamp2.position.z = -2;
    scene.add(lamp2);
  });

function drawScene() {
    if (lamp1 || lamp2){
        lamp1.rotation.y +=0.005;
        lamp2.rotation.y += 0.005;
    }
    renderer.render(scene, cam);
    requestAnimationFrame(drawScene);
}

drawScene();