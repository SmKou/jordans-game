import { useWindowSize } from './@core/useWindowSize'
import Game from './@core/Game'
import Scene from './@core/Scene'
import SceneManager from './@core/SceneManager'
import AssetLoader from './@core/AssetLoader'

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

export default function App() {
    const [width, height] = useWindowSize()
    return (
        <div styles={styles.root(width, height)}>
            <Game cameraZoom={80}>
                <AssetLoader urls={urls} placeholder="Loading assets...">
                    <SceneManager defaultScene="">
                        <Scene id=""></Scene>
                    </SceneManager>
                </AssetLoader>
            </Game>
        </div>
    )
}
