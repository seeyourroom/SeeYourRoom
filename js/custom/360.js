var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('syr-3d-container').appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(500, 60, 40);
geometry.scale(-1, 1, 1);

var texture = new THREE.TextureLoader().load('../images/360/view.jpg');
var material = new THREE.MeshBasicMaterial({ map: texture });

var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.set(0, 0, 0);

var rotationSpeed = 0.002;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += rotationSpeed;
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
