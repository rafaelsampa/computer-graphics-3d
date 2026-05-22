import { criarCubo } from './cubo.js';

const cena = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(6, 6, 6);

const renderizador = new THREE.WebGLRenderer({
  antialias: true
});

renderizador.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderizador.domElement);

const controles = new THREE.OrbitControls(
  camera,
  renderizador.domElement
);

controles.enableDamping = true;

const luz = new THREE.AmbientLight(0xffffff, 1);
cena.add(luz);

const cubinhos = criarCubo(cena);

function animar(){
  requestAnimationFrame(animar);
  controles.update();
  renderizador.render(cena, camera);
}

animar();
