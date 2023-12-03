const load = () => {
    app.game.width = app.game.offsetWidth
    app.game.height = app.game.offsetHeight
    
    app.settings.port.ctx = app.game.getContext('2d')
    app.settings.port.width = app.game.width
    app.settings.port.height = app.game.height

    return app.settings.port
}

const resize = function() {
    if (!app.browser.timeout)
        clearTimeout(app.browser.timeout)

    app.browser.timeout = setTimeout(() => setup(), 400)
}

const setup = () => gesso(load())()

window.onload = () => setup()

window.onresize = () => resize()