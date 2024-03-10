import * as THREE from 'three';

var movO = false;

document.addEventListener("click", function () {
    document.body.requestPointerLock();
	movO = true;
});

var curXpos = 0;
var curYpos = 0;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xfc1703 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

window.addEventListener("load", function () {
        
                window.onmousemove = function (event) {
                    curXpos = event.clientX;
                    curYpos = event.clientY;
                };
            });

function camani(event) {
	if (movO === true) {
		camera.rotation.x -= event.movementY / 64;
		camera.rotation.y -= event.movementX / 64;
		renderer.render( scene, camera );
	}
}

/*
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x = curYpos / 64;
	cube.rotation.y = curXpos / 64;

	renderer.render( scene, camera );
}
*/

document.addEventListener("keypress", function(event) {
		if (event.code == "KeyW") {
			camera.position.z -= 0.1;
		}
		if (event.code == "KeyS") {
			camera.position.z += 0.1;
		}
		if (event.code == "KeyD") {
			camera.position.x += 0.1;
		}
		if (event.code == "KeyA") {
			camera.position.x -= 0.1;
		}
		if (event.code == "Escape") {
			movO = false;
		}
		renderer.render( scene, camera );
});

document.addEventListener("mousemove", camani);

renderer.render( scene, camera );


// document.body.requestPointerLock();
// document.exitPointerLock();
