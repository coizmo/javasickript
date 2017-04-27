//scene
var scene = new THREE.Scene();

//camera
var fov = 75;
var aspect = window.innerWidth / window.innerHeight;
var near = 0.1;
var far = 80;
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
var camera_position_x0 = 0;
var camera_position_y0 = 0;
var camera_position_z0 = -100;

camera.position.set(camera_position_x0, camera_position_y0, camera_position_z0);


//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

var orbitControls = new THREE.OrbitControls(camera)

/*
 * draw objects
 */

var sphereGeometry = new THREE.SphereGeometry( 50, 12, 12 );
var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0x0080e3, wireframe: true } );
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.position.set( 0, 0, 0 );
scene.add( sphere );


/*
 * シーンをレンダリング
 */
function rendererRender() {
    renderer.render(scene,camera);
    orbitControls.update();
    requestAnimationFrame(rendererRender);
}

rendererRender();