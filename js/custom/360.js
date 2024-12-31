var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('syr-3d-container').appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(500, 60, 40);
geometry.scale(-1, 1, 1);

var texture = new THREE.TextureLoader().load('../images/360/view.jpg');
var material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });

var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.set(150, 20, 0);

var mouseX = 0;
var mouseY = 0;
var isMouseDown = false;
var rotationSpeed = 0.002;

var interactionHint = document.createElement('div');
interactionHint.innerText = 'Drag to Rotate';
interactionHint.style.position = 'absolute';
interactionHint.style.top = '20px';
interactionHint.style.left = '20px';
interactionHint.style.fontSize = '18px';
interactionHint.style.color = '#fff';
interactionHint.style.opacity = '0.8';
document.body.appendChild(interactionHint);

document.addEventListener('mousemove', function(event) {
    if (isMouseDown) {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = - (event.clientY / window.innerHeight) * 2 + 1;
    }
});

document.addEventListener('mousedown', function() {
    isMouseDown = true;
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;
});

document.addEventListener('touchstart', function(event) {
    lastMouseX = event.touches[0].clientX;
    lastMouseY = event.touches[0].clientY;
});

document.addEventListener('touchmove', function(event) {
    var deltaX = event.touches[0].clientX - lastMouseX;
    var deltaY = event.touches[0].clientY - lastMouseY;

    mouseX += deltaX * rotationSpeed;
    mouseY -= deltaY * rotationSpeed;

    lastMouseX = event.touches[0].clientX;
    lastMouseY = event.touches[0].clientY;
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        mouseX -= 0.05;
    } else if (event.key === 'ArrowRight') {
        mouseX += 0.05;
    } else if (event.key === 'ArrowUp') {
        mouseY -= 0.05;
    } else if (event.key === 'ArrowDown') {
        mouseY += 0.05;
    }
});

function animate() {
    requestAnimationFrame(animate);

    camera.rotation.x += (mouseY * Math.PI / 4 - camera.rotation.x) * rotationSpeed;
    camera.rotation.y += (mouseX * Math.PI / 4 - camera.rotation.y) * rotationSpeed;

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
