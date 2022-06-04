import { BoxBufferGeometry, BoxGeometry, BufferGeometry, FileLoader, Line, LineBasicMaterial, Mesh, Object3D, PerspectiveCamera, Scene, ShaderMaterial, Vector3, WebGLRenderer } from "three"

    
const shaderLoader = new FileLoader();


const vert: {data?:string} = {};
const frag: {data?:string} = {};
shaderLoader.load("../shaders/phong.vert", (data) => vert["data"] = (data) as string);
shaderLoader.load("../shaders/phong.frag", (data) => frag["data"] = (data) as string);

const camera = new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 15, 100 );
camera.lookAt( 0, 0, 0 );
const renderer = new WebGLRenderer();

const Render = () => { 
    // renderer.clear()
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    
    const scene = new Scene();
    
    //create a blue LineBasicMaterial
    const material = new LineBasicMaterial( { color: 0x0000ff } );
    const shaderMaterial = new ShaderMaterial(  {
        vertexShader: vert.data,
        fragmentShader: frag.data
    });
    
    const points = [];
    points.push( new Vector3( - 10, 0, 0 ) );
    points.push( new Vector3( 0, 10, 0 ) );
    points.push( new Vector3( 10, 0, 0 ) );
    
    const geometry = new BufferGeometry().setFromPoints( points );
    const geometryB = new BoxGeometry(10, 11, 10);

    
    const line = new Line( geometry, material );
    const box =  new Mesh(geometryB, shaderMaterial)
    
    scene.add( line );
    scene.add(box)
    renderer.render( scene, camera );


}

export const UpdateCamera = (position?: Vector3, lookAt?: Vector3) => {
    if (position) {
        const correctedVector = position.applyMatrix4(camera.modelViewMatrix);
        camera.position.set(correctedVector.x, correctedVector.y, correctedVector.z); 
    }
    if (lookAt) camera.lookAt(lookAt);
}

export default Render;