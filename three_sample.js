//scene
var scene = new THREE.Scene();

//camera
var fov = 75;
var aspect = window.innerWidth / window.innerHeight;
var near = 1;
var far = 1000;

var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0, 0, 0);
scene.add(camera);

// light
var light = new THREE.DirectionalLight(0xffffff);
light.position.set(50, 50, 50);
scene.add(light);

var ambient = new THREE.AmbientLight(0x333333);
scene.add(ambient);

// renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

var orbitControls = new THREE.OrbitControls(camera);
orbitControls.target.set(
    camera.position.x + 0.1,
    camera.position.y,
    camera.position.z
);

orbitControls.noZoom = true;
orbitControls.noPan = true;

orbitControls.enableDamping = true;
orbitControls.dampingFactor = 0.1;
orbitControls.rotateSpeed = 0.08;

orbitControls.autoRotate = true;
orbitControls.autoRotateSpeed = 0.05;

/*
 * draw objects
 */

var geometry = new THREE.SphereGeometry(5, 64, 36);
geometry.scale(-1, 1, 1);
var loader = new THREE.TextureLoader();
loader.load("image.jpg", function(texture){
    sphere = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({map: texture})
    );
    sphere.position.set(0, 0, 0);
    scene.add(sphere);
})

function rendererRender() {
    renderer.render(scene,camera);
    orbitControls.update();
    requestAnimationFrame(rendererRender);
}

rendererRender();