//scene
var scene = new THREE.Scene();

//camera
var fov = 75;
var aspect = window.innerWidth / window.innerHeight;
var near = 1;
var far = 1000;

var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0, 0, 60);

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

var orbitControls = new THREE.OrbitControls(camera)

/*
 * draw objects
 */

var sphereGeometry = new THREE.SphereGeometry(40, 16, 16);
sphereGeometry.scale(-1, 1, 1);
var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0x0080e3, wireframe: true } );
var sphereMaterialTexture = new THREE.MeshPhongMaterial({
	color: 0xffffff,
	ambient: 0xffffff,
	specular: 0xcccccc,
	shininess: 50,
	metal: true,
	map: new THREE.TextureLoader('./image.jpg')
});
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.position.set( 0, 0, 0 );
scene.add(sphere);


function rendererRender() {
    renderer.render(scene,camera);
    orbitControls.update();
    requestAnimationFrame(rendererRender);
}

rendererRender();