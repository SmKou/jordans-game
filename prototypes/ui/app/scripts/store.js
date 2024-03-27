const useLocalStorage = (key, default_value) => {
    const value = window.localStorage.getItem(key)
    if (value === null)
        window.localStorage.setItem(key, default_value)

    return ({
        key,
        value,
        update(val) { this.value = val },
        save() { window.localStorage.setItem(this.key, this.value) },
        remove() { window.localStorage.remove(this.key) }
    })
}

const clear = () => ({
    prompt: "You are about to erase your entire game. Are you sure you want to proceed?",
    callback(permission) {
        if (permission)
            window.localStorage.clear()
    }
})