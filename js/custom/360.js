var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('syr-3d-container').appendChild(renderer.domElement);

// Create a loading manager
var loadingManager = new THREE.LoadingManager();

// Create a loader element with a full-screen preview image
var loaderElement = document.createElement('img');
loaderElement.src = '../images/360/pre_view.jpg';
loaderElement.style.position = 'absolute';
loaderElement.style.top = '0';
loaderElement.style.left = '0';
loaderElement.style.width = '100%';
loaderElement.style.height = '100%';
loaderElement.style.objectFit = 'cover';
loaderElement.style.opacity = '0.9';
loaderElement.style.display = 'block'; // Initially visible
document.body.appendChild(loaderElement);

// Set up a texture loader with the loading manager
var texture = new THREE.TextureLoader(loadingManager).load('../images/360/view.jpg', function() {
    // Hide the loader when the texture is fully loaded
    loaderElement.style.display = 'none';
});

var material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });

var geometry = new THREE.SphereGeometry(500, 60, 40);
geometry.scale(-1, 1, 1);

var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.set(150, 20, 0);

var mouseX = 0;
var mouseY = 0;
var isMouseDown = false;
var rotationSpeed = 0.001;

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
        mouseY -= 0.001;
    } else if (event.key === 'ArrowDown') {
        mouseY += 0.001;
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
