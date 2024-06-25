import * as THREE from './three.module.js';
import { OrbitControls } from "./OrbitControls.js"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({color: 0x00ff00});
const element = new THREE.Mesh( geometry, material );
element.castShadow = true;
element.position.set(1,2,1)
scene.add(element);

const light = new THREE.DirectionalLight(0xffffff, 1, 10);
light.position.set(-1, 1, 1);
light.castShadow = true;
scene.add(light);


camera.position.z = 5;
camera.position.y = -3;
camera.rotation.x = .5;

const controls = new OrbitControls(camera, renderer.domElement);
//* desactivar zoom
// controls.enableZoom = false;
//*Rango paara zoom
// controls.minDistance = 1;
// controls.maxDistance = 15;
controls.enableDamping = true;
//*velocidad de giro
controls.dampingFactor = 0.1;

const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
const planeMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
plane.position.set(0, 0, 0);
scene.add(plane);

function animate() {


    renderer.render( scene, camera );

}
renderer.setAnimationLoop( animate );