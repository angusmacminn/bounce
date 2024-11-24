// Imports
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import GUI from 'lil-gui'
import CANNON, { ConeTwistConstraint } from 'cannon'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import fragmentShader from './shaders/objects/fragment.glsl'
import vertexShader from './shaders/objects/vertex.glsl'


// HTML elements
// start screen
const startScreen = document.querySelector('.starting-screen')
const startButton = document.querySelector('.start-button')
const exitButton = document.getElementById('exit')

// win screen
const winScreen = document.querySelector('.win-screen')
const finalTime = document.querySelector('.final-time')
const playAgainButton = document.querySelector('#play-again-button')


/**
 * Timer
 */
let timerActive = false
let elapsedTime = 0
let gameTime = 0
let isDead = false
const timerElement = document.getElementById('timer')
// start timer 
function startTimer() {
    timerActive = true
    elapsedTime = 0
}
// update timer
const updateTimer = () => {
    if (timerActive) {
        gameTime += 1 / 120 
        timerElement.textContent = `Time: ${Math.floor(gameTime)}`
    }
}
// reset timer
function resetTimer(){
    timerActive = false
    gameTime = 0
    elapsedTime = 0
    timerElement.textContent = 'Time: 0'
}
// stop timer
function stopTimer(){
    timerActive = false
}

// play again button
playAgainButton.addEventListener('click', () => {
    winScreen.style.display = 'none'
    startScreen.style.display = 'block'
    sphereBody.position.set(0, 1, 0)
    sphereBody.velocity.set(0, 0, 0)
    sphereBody.angularVelocity.set(0, 0, 0)
    world.gravity.set(0, -9.81, 0)
    elapsedTime = 0
    timerElement.textContent = 'Time: 0'
    isDead = false
})

let start = false

// start button
startButton.addEventListener('click', function(){
    startScreen.style.display = 'none'
    resetTimer()
    startTimer()
    start = true
})


// reset button
exitButton.addEventListener('click', () => {
    winScreen.style.display = 'none' 
    startScreen.style.display = 'block' 
        sphereBody.position.set(0, 1, 0)
        sphereBody.velocity.set(0, 0 ,0)
        sphereBody.angularVelocity.set(0, 0, 0)
        world.gravity.set(0, -9.81, 0)
        resetTimer()
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Loaders
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('./matcaps/3.png')
matcapTexture.colorSpace = THREE.SRGBColorSpace

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/*
Physics World
*/
const world = new CANNON.World()
world.gravity.set(0, -9.81, 0)

//Physics Materials
const defaultMaterial = new CANNON.Material('default')

//contact material
const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction: 0.1,
        restitution: 1.0
    }
)
world.addContactMaterial(defaultContactMaterial)
world.defaultContactMaterial = defaultContactMaterial

/**
 * objects
 */

//Three.js Sphere + Mesh
const sphereGeo = new THREE.SphereGeometry(1, 20, 20)
const matCapMat = new THREE.MeshMatcapMaterial()
matCapMat.matcap = matcapTexture

const sphereMesh = new THREE.Mesh(sphereGeo, matCapMat)
scene.add(sphereMesh)
sphereMesh.castShadow = true

// player object sphere
const sphereShape = new CANNON.Sphere(1)
const sphereBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 1, 0), // change to 40, 1, 271 for easy mode
    shape: sphereShape,
    material: defaultContactMaterial,
})
sphereBody.velocity.y = 0
world.addBody(sphereBody)



// create platform function
function createPlatform(width, height, depth, position){
    const platformMaterial = new THREE.MeshStandardMaterial({
        color: '#777777',
        metalness: 0.3,
        roughness: 0.9,
    })
    const platformMesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), 
    platformMaterial
)
platformMesh.position.copy(position)
platformMesh.receiveShadow = true
scene.add(platformMesh)

//physics platform body
const platformShape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2))
const platformBody = new CANNON.Body({
    type: CANNON.Body.STATIC,
    position: position, // position
    material: defaultContactMaterial
})
platformBody.receiveShadow = true
platformBody.addShape(platformShape)
world.addBody(platformBody)
    return { mesh: platformMesh, body: platformBody, originalColor:platformMaterial.color.clone() }
}

// create platforms
function createPlatformLayout(){
    //platforms object
    const platforms = [
        createPlatform(40, 0.25, 40, new THREE.Vector3(0, 0, 0)),
        createPlatform(25, 0.25, 25, new THREE.Vector3(0, 0, 35)), 
        createPlatform(8, 0.25, 12, new THREE.Vector3(0, 0, 54)), 
        createPlatform(8, 0.25, 8, new THREE.Vector3(5, 0, 65)),
        createPlatform(8, 0.25, 8, new THREE.Vector3(-5, 0, 65)),
        createPlatform(10, 0.25, 10, new THREE.Vector3(-5, 0, 75)),
        createPlatform(7, 0.25, 7, new THREE.Vector3(-5, 0, 85)),
        createPlatform(7, 0.25, 7, new THREE.Vector3(-5, 0, 95)),
        createPlatform(7, 0.25, 7, new THREE.Vector3(-5, 0, 105)),
        createPlatform(7, 0.25, 7, new THREE.Vector3(-5, 0, 115)),
        createPlatform(15, 0.25, 20, new THREE.Vector3(5, 0, 130)),
        createPlatform(8, 0.25, 8, new THREE.Vector3(8, 0, 155)),
        createPlatform(8, 0.25, 8, new THREE.Vector3(20, 0, 165)),
        createPlatform(8, 0.25, 8, new THREE.Vector3(30, 0, 165)),
        createPlatform(8, 0.25, 8, new THREE.Vector3(35, 0, 165)),
        createPlatform(8, 0.25, 8, new THREE.Vector3(40, 0, 180)),
        createPlatform(4, 0.25, 4, new THREE.Vector3(40, 0, 190)),
        createPlatform(4, 0.25, 4, new THREE.Vector3(40, 0, 195)),
        createPlatform(4, 0.25, 4, new THREE.Vector3(40, 0, 200)),
        createPlatform(4, 0.25, 4, new THREE.Vector3(40, 0, 210)),
        createPlatform(2, 0.25, 10, new THREE.Vector3(40, 0, 230)),
        createPlatform(2, 0.25, 10, new THREE.Vector3(40, 0, 260)),
        createPlatform(0.5, 0.25, 10, new THREE.Vector3(40, 0, 275)),
        createPlatform(10, 0.25, 10, new THREE.Vector3(40, 0, 300)),
    ]
    return platforms
}
let platforms = createPlatformLayout()
platforms.receiveShadow = true

/*
BACKGROUND
*/
const backgroundMat = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,

    uniforms: {
        uTime: new THREE.Uniform(0),
    },
    side: THREE.BackSide
})
const backgroundGeo = new THREE.SphereGeometry(700, 32, 32)
const backgroundMesh = new THREE.Mesh(backgroundGeo, backgroundMat)
scene.add(backgroundMesh)


/*
Input Handling
*/ 
// when a key is pressed
const keys = { w: false, a: false, s: false, d: false, space: false,
               W: false, A: false, S: false, D: false,
               up: false, down: false, left: false, right: false } //object containing all the keys, default to not pressed (false)
document.addEventListener('keydown', (event) => {
    if (event.key in keys) {
        keys[event.key] = true
    }
    // Add handling for arrow keys
    if (event.key === 'ArrowUp') keys.up = true
    if (event.key === 'ArrowDown') keys.down = true
    if (event.key === 'ArrowLeft') keys.left = true
    if (event.key === 'ArrowRight') keys.right = true
})

// when a key is released 
document.addEventListener('keyup', (event) => {
    if (event.key in keys) keys[event.key] = false
       
    if (event.key === 'ArrowUp') keys.up = false
    if (event.key === 'ArrowDown') keys.down = false
    if (event.key === 'ArrowLeft') keys.left = false
    if (event.key === 'ArrowRight') keys.right = false
})

// jump mechanic
let isGrounded = true
let isJumping = false

// Collision event listener
sphereBody.addEventListener('collide', (event) => {
    platforms.forEach(platform => {
        if (event.body === platform.body && sphereBody.velocity.y <= 0.1) {
            isGrounded = true
            isJumping = false
            sphereBody.velocity.y = 0
        }
    // find which platform was landed on
    const collidedPlatform = platforms.find(platform => platform.body === event.body)
    console.log(collidedPlatform)
        // change platform color
        if(collidedPlatform){
            collidedPlatform.mesh.material.color.set('#FF0000')
            collidedPlatform.isFading = true
        }
    })
})

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5) 
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 5.8)
directionalLight.castShadow = true

// Light settings
directionalLight.position.set(0, 50, 0) 
directionalLight.target.position.set(0, 0, 0) 
scene.add(directionalLight)
scene.add(directionalLight.target) 

// shadow settings
directionalLight.shadow.mapSize.set(4048, 4048) 
directionalLight.shadow.camera.near = 0.5
directionalLight.shadow.camera.far = 500 
directionalLight.shadow.camera.left = -500
directionalLight.shadow.camera.right = 500 
directionalLight.shadow.camera.top = 400
directionalLight.shadow.camera.bottom = -400 


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 15, -30)
camera.rotation.y = Math.PI
scene.add(camera)
camera.near = 0.1
camera.far = 1000
camera.updateProjectionMatrix()


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()
let oldElapsedTime = 0

const tick = () =>
{
    let elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - oldElapsedTime
    oldElapsedTime = elapsedTime

    const currentTime = clock.getElapsedTime()
    updateTimer()


    // Update Physics world
    world.step(1/60, deltaTime, 3 )

    // change platform color
    platforms.forEach(platform => {
        if (platform.isFading){
            platform.mesh.material.color.lerp(platform.originalColor, deltaTime * 2)

            if (platform.mesh.material.color.equals(platform.originalColor)){
                platform.isFading = false
            }
        }
    })

 
    // apply the jump
    if (!isJumping) {
        sphereBody.applyImpulse(new CANNON.Vec3(0, 7, 0), sphereBody.position)
        isGrounded = false
        isJumping = true
    }

    //update sphere position / quaternion
    sphereMesh.position.copy(sphereBody.position)
    sphereMesh.quaternion.copy(sphereBody.quaternion)

    //update floor position
    platforms.forEach(platform => {
        platform.mesh.position.copy(platform.body.position)
        platform.mesh.quaternion.copy(platform.body.quaternion)
    })

    // update background
    backgroundMat.uniforms.uTime.value = elapsedTime


    // Apply WASD movement
    const force = 5;
    // lowercase
    if (keys.w) sphereBody.applyForce(new CANNON.Vec3(0, 0, +force), sphereBody.position)
    if (keys.s) sphereBody.applyForce(new CANNON.Vec3(0, 0, -force), sphereBody.position)
    if (keys.a) sphereBody.applyForce(new CANNON.Vec3(+force, 0, 0), sphereBody.position)
    if (keys.d) sphereBody.applyForce(new CANNON.Vec3(-force, 0, 0), sphereBody.position)
    // uppercase
    if (keys.W) sphereBody.applyForce(new CANNON.Vec3(0, 0, +force), sphereBody.position)
    if (keys.S) sphereBody.applyForce(new CANNON.Vec3(0, 0, -force), sphereBody.position)
    if (keys.A) sphereBody.applyForce(new CANNON.Vec3(+force, 0, 0), sphereBody.position)
    if (keys.D) sphereBody.applyForce(new CANNON.Vec3(-force, 0, 0), sphereBody.position)
    //arrow keys 
    if (keys.up) sphereBody.applyForce(new CANNON.Vec3(0, 0, +force), sphereBody.position)
    if (keys.down) sphereBody.applyForce(new CANNON.Vec3(0, 0, -force), sphereBody.position)
    if (keys.left) sphereBody.applyForce(new CANNON.Vec3(+force, 0, 0), sphereBody.position)
    if (keys.right) sphereBody.applyForce(new CANNON.Vec3(-force, 0, 0), sphereBody.position)

    //update camera
    camera.position.x = sphereBody.position.x
    camera.position.z = sphereBody.position.z - 30
    
    //death reset
    if (sphereBody.position.y < -20){
        sphereBody.position.set(0, 1, 0)
        sphereBody.velocity.set(0, 0 ,0)
        sphereBody.angularVelocity.set(0, 0, 0)
        resetTimer()
        startTimer()
        isDead = true
    }

    // victory screen
    const lastPlatform = platforms[platforms.length - 1]
    const detectionThreshold = 3.0
    if (
        Math.abs(sphereBody.position.x - lastPlatform.body.position.x) < detectionThreshold &&
        Math.abs(sphereBody.position.y - lastPlatform.body.position.y) < detectionThreshold &&
        Math.abs(sphereBody.position.z - lastPlatform.body.position.z) < detectionThreshold
    ) {
        stopTimer()
        world.gravity.set(0, 0, 0)
        winScreen.style.display = 'block'
        finalTime.innerHTML = `${Math.floor(gameTime)} seconds`
    }
  
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
