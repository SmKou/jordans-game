import { Canvas } from '@react-three/fiber'
import { useWindowSize } from './@core/helpers'

const styles = {
    root: (width, height) => ({
        display: 'flex',
        width: `${width - (width % 2)}px`,
        height: `${height - (height % 2)}px`,
        justifyContent: 'center',
        alignItems: 'center'
    })
}

const urls = [
    ...Object.values(spriteData).map(datum => datum.src),
    ...Object.values(soundData).map(datum => datum.src)
].reduce((acc, val) => acc.concat(val), [])

function App() {
    const [width, height] = useWindowSize()
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
