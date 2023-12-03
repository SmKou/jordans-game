const app = {
    view: document.getElementById('view'),
    game: document.getElementById('game'),
    ui: document.getElementById('ui'),
    keyboard: document.querySelector('keyboard'),
    keys: document.querySelectorAll('.keyboard button'),
    toggle: {
        ui: document.getElementById('toggle-ui'),
        keyboard: document.getElementById('keyboard'),
        controls: document.getElementById('controls'),
        shift: document.getElementById('shift')
    },
    space: document.getElementById('space'),
    pad: {
        up: document.getElementById('up'),
        down: document.getElementById('down'),
        left: document.getElementById('left'),
        right: document.getElementById('right'),
        menu: document.getElementById('menu'),
        confirm: document.getElementById('confirm'),
        cancel: document.getElementById('cancel')
    },
    state: {
        isUI: true,
        isKeybrd: true,
        isCtrl: true,
        isUppercase: false,
        isMenu: false
    }
}

ui.toggle.elem.addEventListener('click', () => {
    ui.toggle.state = !ui.toggle.state
    if (ui.toggle.state)
        ui.ctrl.elem.classList.remove('collapsed')
    else
        ui.ctrl.elem.classList.add('collapsed')
})