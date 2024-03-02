import { resolveMapTile } from './scene'

const mapData = mapDataString(`
#################
#-WT#T--WT-W---T#
#--------------o#
#o--#---####--###
#####---#WoW--TW#
#CCC#---T-------#
#o-------------o#
#################
`)

export default OfficeScene = () => (
    <>
        <GameObject name="map">
            <ambientLight />
            <TileMap data={mapData} resolver={resolveMapTile} defineMapSize />
        </GameObject>
        <GameObject x={16} y={5}>
            <Collider />
            <Interactable />
            <ScenePortal name="exit" enterDirection={[-1, 0]} target="other/start" />
        </GameObject>
        <Player x={6} y={3} />
    </>
)