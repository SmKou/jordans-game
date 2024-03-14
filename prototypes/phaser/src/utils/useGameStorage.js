import React, { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

export const GameStateValues = {
    StartMenu: 'start',
    Dream: 'dream',
    GameMenu: 'menu',
    GameScene: 'game',
    Inventory: 'inventory',
    Loading: 'load'
}

export const RegistryContext = React.createContext(null)
export const IndexContext = React.createContext(null)
export const InventoryContext = React.createContext(null)

export function useRegistryStorage() {
    const storage = useLocalStorage()
    const [registry_by_id] = useState(storage.get('registry_by_id') || new Map())
    const [registry_by_name] = useState(storage.get('registry_by_name') || new Map())
    const [registry_by_xy] = useState(storage.get('registry_by_xy') || new Map())
    const [registry_by_layer] = useState(storage.get('registry_by_layer') || new Map())

    const indexFrEquals = (objs, ref) => {
        for (const i of objs.keys())
            if (objs[i].equals(ref)) return i
        return -1
    }

    const registerGameObject = useCallback(
        (id, ref) => {
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
        [registry_by_id, registry_by_name, registry_by_xy, registry_by_layer]
    )

    const unregisterGameObject = useCallback(
        (id, ref) => {
            registry_by_id.delete(id)
            registry_by_name.delete(ref.name)
            
            const { transform } = ref
            const xy = `${transform.x},${transform.y}`
            const xyObjs = registry_by_xy.get(xy)
            if (xyObjs)
                xyObjs.splice(index_by_equals(xyObjs, ref), 1)

            const layerObjs = registry_by_layer.get(ref.layer)
            if (layerObjs)
                layerObjs.splice(indexFrEquals(layerObjs, ref), 1)
        },
        [registry_by_id, registry_by_name, registry_by_xy, registry_by_layer]
    )

    const findGameObjectById = useCallback(
        (id) => registry_by_id.get(id),
        [registry_by_id]
    )

    const findGameObjectByName = useCallback(
        (name) => registry_by_name.get(name),
        [registry_by_name]
    )

    const findGameObjectsByXY = useCallback(
        (x, y) => registry_by_xy.get(`${x},${y}`)?.filter(obj => !obj.disabled),
        [registry_by_xy]
    )

    const findGameObjectsByLayer = useCallback(
        (layer) => registry_by_layer.get(layer)?.filter(obj => !obj.disabled),
        [registry_by_layer]
    )

    const save = useCallback(
        () => {
            storage.add("registry_by_id", registry_by_id)
            storage.add("registry_by_name", registry_by_name)
            storage.add("registry_by_xy", registry_by_xy)
            storage.add("registry_by_layer", registry_by_layer)
        },
        [storage, registry_by_id, registry_by_name, registry_by_xy, registry_by_layer]
    )

    const clear = useCallback(
        () => {
            storage.remove("registry_by_id")
            storage.remove("registry_by_name")
            storage.remove("registry_by_xy")
            storage.remove("registry_by_layer")
        },
        [storage, registry_by_id, registry_by_name, registry_by_xy, registry_by_layer]
    )

    return {
        registerGameObject,
        unregisterGameObject,
        findGameObjectById,
        findGameObjectByName,
        findGameObjectsByXY,
        findGameObjectsByLayer,
        save,
        clear
    }
}

export function useIndexStorage() {
    const storage = useLocalStorage()
    const [geo_index] = useState(storage.get('geo_index') || new Map())
    const [peum_index] = useState(storage.get('peum_index') || new Map())
    const [fig_index] = useState(storage.get('fig_index') || new Map())

    const addGeo = useCallback()
    
    const addPeum = useCallback()

    const addFig = useCallback()

    const save = useCallback(
        () => {
            storage.add("geo_index", geo_index)
            storage.add("peum_index", peum_index)
            storage.add("fig_index", fig_index)
        },
        [storage, geo_index, peum_index, fig_index]
    )

    const clear = useCallback(
        () => {
            storage.clear("geo_index")
            storage.clear("peum_index")
            storage.clear("fig_index")
        },
        [storage, geo_index, peum_index, fig_index]
    )

    return {
        addGeo,
        addPeum,
        addFig
    }
}

export function useInventoryStorage() {
    const [active_geos] = useState(storage.get('active_geos') || [])
    const [geo_inventory] = useState(storage.get('geo_inventory') || new Map())
    const [peum_inventory] = useState(storage.get('peum_inventory') || new Map())
    const [fig_inventory] = useState(storage.get('fig_inventory') || new Map())
    const [items_inventory] = useState(storage.get('items_inventory') || new Map())

    const addActiveGeo = useCallback()

    const removeActiveGeo = useCallback()

    const addGeo = useCallback()

    const findGeoByName = useCallback()

    /* Types: DRAGON | ELECTRIC | FIRE | FORCE | GHOST | GRASS | GROUND | ICE | POISON | PSYCHIC | ROCK | WATER */
    const findGeosByType = useCallback()

    /* Modes: STANDARD | SHINY | SWEET */
    const findGeosByMode = useCallback()

    /* Classes: DARK | LIGHT */
    const findGeosByClass = useCallback()

    const removeGeo = useCallback()

    const addPeum = useCallback()

    const addFig = useCallback()

    const addItem = useCallback()

    const findItemByName = useCallback()

    const findItemsByType = useCallback()

    const removeItem = useCallback()

    const save = useCallback(
        () => {
            storage.add("active_geos", active_geos)
            storage.add("geo_inventory", geo_inventory)
            storage.add("peum_inventory", peum_inventory)
            storage.add("fig_inventory", fig_inventory)
            storage.add("items_inventory", items_inventory)
        },
        [storage, active_geos, geo_inventory, peum_inventory, fig_inventory, items_inventory]
    )

    const clear = useCallback(
        () => {
            storage.clear("active_geos")
            storage.clear("geo_inventory")
            storage.clear("peum_inventory")
            storage.clear("fig_inventory")
            storage.clear("items_inventory")
        },
        [storage]
    )

    return {
        addActiveGeo,
        removeActiveGeo,
        addGeo,
        findGeoByName,
        findGeosByType,
        findGeosByMode,
        findGeosByClass,
        removeGeo,
        addPeum,
        addFig,
        addItem,
        findItemByName,
        findItemsByType,
        removeItem,
        save,
        clear
    }
}

export default function useGameStorage() {
    const storage = useLocalStorage()

    const [game_state, setGameState] = useState(GameStateValues.StartMenu)

    const update = (game) => {
        if (game_state !== game) {
            setGameState(game)
            save()
        }
    }

    return {
        gameState: game_state,
        update: setGameState,
        ...indexUtils,
        ...inventoryUtils
    }
}