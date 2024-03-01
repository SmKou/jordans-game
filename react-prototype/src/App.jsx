import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 5, 5]} />
        <mesh>
          <sphereGeometry args={[2,2,2]} /> 
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App