import * as THREE from 'three';

const scene = new THREE.Scene();
//*bg fondo
// scene.background = new THREE.Color(0x666666);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
//*Permite añadir transparencias
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//*Tipo de objeto que se crea( cubo, esfera, cono, tubo, toriode etc... )
const geometry = new THREE.BoxGeometry();
//*Material que se le aplica al objeto
const material = new THREE.MeshStandardMaterial({color: 0x00ff00});
//*Objeto para crear geometry ocn su material
const element = new THREE.Mesh( geometry, material );
//*Especificar que el cubo tb genreará sombras
element.castShadow = true;
element.position.set(1,2,1)
//*Insertar en escena el elemento
scene.add(element);

//*Lights
const light = new THREE.DirectionalLight(0xffffff, 1, 10);
light.position.set(-1, 1, 1);
//*Especificar que la luz genera sombra
light.castShadow = true;
scene.add(light);


//*Añadir malla a escena
// const grid = new THREE.GridHelper(10, 10);
// scene.add(grid);
camera.position.z = 5;
camera.position.y = -3;
camera.rotation.x = .5;
// camera.position.x = -5;
// camera.rotation.z = 1;
// camera.rotation.z = 1;


//*PLANO
const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
const planeMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
//*Decir que el plano recibe/mostrarrá sombras
plane.receiveShadow = true;
plane.position.set(0, 0, 0);
scene.add(plane);

//*renderizar la escena
function animate() {
    // element.rotation.x += 0.01;
    // element.rotation.y += 0.01;
    renderer.render( scene, camera );
    //*Girar el elemento
}
renderer.setAnimationLoop( animate );