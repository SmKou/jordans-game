class Store {
    constructor() {
        this.db = window.localStorage
    }

    add(key, item) {
        if (item instanceof Map)
            item = { map: Object.fromEntries(item) }
        else if (item instanceof Function)
            item = { fn: item.toString() }
        this.db.setItem(key, JSON.stringify(item))
    }

    addData(key, data) {}

    get(key) {
        const item = JSON.parse(this.db.getItem(key))
        if (item.map)
            return new Map(item.map)
        else if (item.fn)
            return eval("(" + item.fn + ")")
        return item
    }

    getData(key) {}

    remove(key) {
        this.db.removeItem(key)
    }

    clear() {
        const prompt = "You are about to erase your entire game. Are you sure you want to proceed?"
        const callback = (permission) => {
            if (permission) { this.db.clear() }
        }
        return { prompt, callback }
    }
}

class State {
    constructor(store) {
        const sections = document.querySelectorAll("section")
        this.scenes = {}
        for (const section of sections) { this.scenes[section] = "#" + section.id }
        this.current_scene = store.get('current_scene') || this.scenes.StartMenu
        this.next_scene = ''
    }
}


$(document).ready(function() {
    const store = new Store()
    const state = new State(store)

    $("section").hide()
    $(state.current_scene).show()

    function switchScene() {
        $(state.current_scene).hide('fade', {}, 150)
        $(state.next_scene).show('fade', {}, 300)
        state.current_scene = state.next_scene
        state.next_scene = ''
    }
})