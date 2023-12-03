const ui = {
    bg: {
        elem: document.getElementById('bg'),
        ctx: ''
    },
    app: {
        elem: document.getElementById('app'),
        ctx: ''
    },
    toggle: {
        elem: document.getElementById('toggle-controls'),
        state: true
    },
    ctrl: {
        elem: document.getElementById('controls'),
        up: document.getElementById('up'),
        down: document.getElementById('down'),
        left: document.getElementById('left'),
        right: document.getElementById('right'),
        menu: document.getElementById('menu'),
        confirm: document.getElementById('confirm'),
        cancel: document.getElementById('cancel')
    }
}

ui.bg.elem.width = ui.bg.elem.offsetWidth
ui.bg.elem.height = ui.bg.elem.offsetHeight
ui.bg.ctx = ui.bg.elem.getContext('2d')

ui.app.elem.width = ui.app.elem.offsetWidth
ui.app.elem.height = ui.app.elem.offsetHeight
ui.app.ctx = ui.app.elem.getContext('2d')

ui.toggle.elem.addEventListener('click', () => {
    ui.toggle.state = !ui.toggle.state
    if (ui.toggle.state)
        ui.ctrl.elem.classList.remove('collapsed')
    else
        ui.ctrl.elem.classList.add('collapsed')
})