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
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
//*Objeto para crear geometry ocn su material
const element = new THREE.Mesh( geometry, material );


//*Insertar en escena el elemento
scene.add(element);

//*Añadir malla a escena
const grid = new THREE.GridHelper(10, 10);
scene.add(grid);
camera.position.z = 15;
camera.position.y = -10;
camera.rotation.y = -10;
camera.rotation.x = 10;

//*renderizar la escena
function animate() {
    renderer.render( scene, camera );
    //*Girar el elemento
    element.rotation.x += 0.01;
    element.rotation.y += 0.01;
}
renderer.setAnimationLoop( animate );