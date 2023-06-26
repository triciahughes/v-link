import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Create a new scene
const scene = new THREE.Scene();
// const gradient = new THREE.GradientBackground("#FFC0CB", "#DCC8F5");
scene.background = new THREE.Color("#FFC0CB");

// Create a perspective camera with a field of view of 75 degrees, an aspect ratio based on the window's dimensions and near and far clipping planes
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer({ antialias: true }); // enabling antialias for smoother visuals
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2); // set the size of the renderer
renderer.setPixelRatio(window.devicePixelRatio); // adding pixel ratio to handle high DPI displays

// Append the renderer's canvas element to the HTML body
document.body.appendChild(renderer.domElement);

// Set up orbit controls for the camera
const controls = new OrbitControls(camera, renderer.domElement);

// Position the camera and update the controls
camera.position.set(0, 0, 10);
controls.update();

// Set up a hemisphere light (a light source that generates an even light from above the scene)
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

// Set up a directional light (a light that gets emitted in a specific direction)
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(-30, 0, -10);
dirLight.castShadow = true; // enable shadows for this light source
scene.add(dirLight);

const dirLightTwo = new THREE.DirectionalLight(0xffffff, 0.8);
dirLightTwo.position.set(30, 0, 10);
dirLightTwo.castShadow = true; // enable shadows for this light source
scene.add(dirLightTwo);

// Instantiate a GLTFLoader to load our 3D model
const loader = new GLTFLoader();

loader.load(
  "src/AvatarExample.glb", // specify the model file location
  function (gltf) {
    // define the function to be called when loading is successful
    const avatar = gltf.scene;
    avatar.scale.set(15, 15, 15);
    avatar.position.y = -5;
    scene.add(avatar);
    animate(); // Call the animate function to start the render loop
  },
  undefined,
  function (error) {
    // define the function to be called if an error occurs
    console.error(error);
  }
);

// Define the animation loop
function animate() {
  requestAnimationFrame(animate); // Request the next frame

  controls.update(); // Update the camera controls

  // Render the scene with the camera
  renderer.render(scene, camera);
}

// animate();
