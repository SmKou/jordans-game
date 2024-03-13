import useLocalStorage from "./useLocalStorage";

export const GameStateValues = {
    StartMenu: 'start',
    Dream: 'dream',
    GameMenu: 'menu',
    GameScene: 'game',
    Inventory: 'inventory',
    Loading: 'load'
}

export default function useGameStorage() {
    const storage = useLocalStorage()

    const [game_state, setGameState] = useState(GameStateValues.StartMenu)

    const [registry_by_id] = useState(storage.get('registry_by_id') || new Map())
    const [registry_by_name] = useState(storage.get('registry_by_name') || new Map())
    const [registry_by_xy] = useState(storage.get('registry_by_xy') || new Map())
    const [registry_by_layer] = useState(storage.get('registry_by_layer') || new Map())

    const index_by_equals = (objs, ref) => {
        for (let i = 0; i < objs.length; ++i) {
            if (objs[i].equals(ref))
                return i
        }
        return -1
    }
    
    const registryUtils = useMemo(
        () => ({
            registerGameObject(id, ref) {
                registry_by_id.set(id, ref)
                registry_by_name.set(ref.name, ref)

                const { transform } = ref
                const xy = `${transform.x},${transform.y}`
                const xyObjs = registry_by_xy.get(xy) || []
                xyObjs.push(ref)
                registry_by_xy.set(xy, xyObjs)

                const layerObjs = registry_by_layer.get(ref.layer) || []
                layerObjs.push(ref)
                registry_by_layer.set(ref.layer, layerObjs)
            },
            unregisterGameObject(id, ref) {
                registry_by_id.delete(id)
                registry_by_name.delete(ref.name)
                
                const { transform } = ref
                const xy = `${transform.x},${transform.y}`
                const xyObjs = registry_by_xy.get(xy)
                if (xyObjs)
                    xyObjs.splice(index_by_equals(xyObjs, ref), 1)

                const layerObjs = registry_by_layer.get(ref.layer)
                if (layerObjs)
                    layerObjs.splice(index_by_equals(layerObjs, ref), 1)
            },
            findGameObjectById(id) { return registry_by_id.get(id) },
            findGameObjectByName(name) { return registry_by_name.get(name) },
            findGameObjectsByXY(x, y) {
                const objs = registry_by_xy.get(`${x},${y}`)
                if (objs)
                    return objs.filter(obj => !obj.disabled)
                return []
            },
            findGameObjectsByLayer(layer) {
                const objs = registry_by_layer.get(layer)
                if (objs)
                    return objs.filter(obj => !obj.disabled)
                return []
            }
        }),
        [registry_by_id, registry_by_name, registry_by_xy, registry_by_layer]
    )

    const [geo_index] = useState(storage.get('geo_index') || new Map())
    const [peum_index] = useState(storage.get('peum_index') || new Map())
    const [fig_index] = useState(storage.get('fig_index') || new Map())
    const indexUtils = useMemo(
        () => ({
            addGeo() {},
            addPeum() {},
            addFig() {}
        }),
        []
    )

    const [active_geos] = useState(storage.get('active_geos') || new Map())
    const [geo_inventory] = useState(storage.get('geo_inventory') || new Map())
    const [peum_inventory] = useState(storage.get('peum_inventory') || new Map())
    const [fig_inventory] = useState(storage.get('fig_inventory') || new Map())
    const [items_inventory] = useState(storage.get('items_inventory') || new Map())

    const inventoryUtils = useMemo(
        () => ({
        }),
        [activeGeos, geoInventory, peumInventory, figInventory, itemsInventory]
    )

    const save = () => {
        storage.add('registry_by_id', registry_by_id)
        storage.add('registry_by_name', registry_by_name)
        storage.add('registry_by_xy', registry_by_xy)
        storage.add('registry_by_layer', registry_by_layer)
        storage.add('geo_index', geo_index)
        storage.add('peum_index', peum_index)
        storage.add('fig_index', fig_index)
        storage.add('active_geos', active_geos)
        storage.add('geo_inventory', geo_inventory)
        storage.add('peum_inventory', peum_inventory)
        storage.add('fig_inventory', fig_inventory)
        storage.add('items_inventory', items_inventory)
    }

    const update = (game) => {
        if (game_state !== game) {
            setGameState(game)
            save()
        }
    }

    return {
        gameState: game_state,
        update: setGameState,
        ...registryUtils,
        ...indexUtils,
        ...inventoryUtils
    }
}