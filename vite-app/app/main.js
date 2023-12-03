const app = {
    view: document.getElementById('view'),
    game: document.getElementById('game'),
    settings: {
        port: {
            tile: 16,
            block: 32,
        },
        player: {
            win: { x: 0, y: 0 },
            map: { x: 0, y: 0 }
        },
        env: {
            timeofday: 'light_day'
        },
        background: {
            order: [
                'sunrise',
                'morning',
                'dark_day',
                'light_day',
                'dark_day',
                'light_sunset',
                'dark_sunset',
                'evening',
                'night'
            ],
            colors: {
                night: [39,51,89],
                evening: [60,54,88],
                light_sunset: [237,95,75],
                dark_sunset: [102,57,86],
                sunrise: [253,191,104],
                morning: [254,216,145],
                light_day: [255,252,237],
                dark_day: [255,232,192]
            }
        },
        getBg: function() {
            return this.background.colors[this.env.timeofday].join(',')
        }
    },
    ui: document.getElementById('ui'),
    keyboard: document.querySelector('.keyboard'),
    keys: document.querySelectorAll('.keyboard button'),
    toggle: {
        ui: document.getElementById('toggle-ui'),
        btns: document.querySelector('.ui-btns'),
        keyboard: document.getElementById('keyboard'),
        controls: document.getElementById('controls'),
        shift: document.getElementById('shift')
    },
    space: document.getElementById('space'),
    pad: document.querySelector('.pad'),
    pad_btns: {
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
        isTyping: false,
        isCtrl: true,
        isUppercase: false,
        isMenu: false,
        uiHeight: 3
    },
    browser: {
        isMobile: false,
        isStorageEnabled: false,
        storage: '',
        timeout: ''
    }
}

const regex = new RegExp(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i)
app.browser.isMobile = regex.test((
    navigator.userAgent || navigator.vendor || window.opera
).substr(0,4))
if (app.browser.isMobile) app.state.uiHeight += 3
if (app.browser.isMobile) app.view.setAttribute('class', 'ismobile')

const storageAvailable = type => {
    let storage
    try {
        storage = window[type]
        const x = '__storage_test__'
        storage.setItem(x, x)
        storage.removeItem(x)
        return true
    } catch (e) {
        return e instanceof DOMException 
        && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') 
        && storage 
        && storage.length !== 0
    }
}
app.browser.isStorageEnabled = storageAvailable('localStorage')
if (app.browser.isStorageEnabled)
    app.browser.storage = window.localStorage

app.toggle.ui.addEventListener('click', () => {
    app.state.isUI = !app.state.isUI

    if (app.state.isUI) {
        app.keyboard.classList.remove('collapsed')
        app.toggle.btns.classList.remove('collapsed')
        app.pad.classList.remove('collapsed')
        app.view.classList.remove('full')
    } else {
        app.keyboard.classList.add('collapsed')
        app.toggle.btns.classList.add('collapsed')
        app.pad.classList.add('collapsed')
        app.view.classList.add('full')
    }
})

app.toggle.keyboard.addEventListener('click', () => {
    app.state.isKeybrd = !app.state.isKeybrd
})

app.keys.forEach(key => key.addEventListener('click', e => {}))

app.toggle.shift.addEventListener('click', () => {
    app.state.isUppercase = !app.state.isUppercase
})

app.space.addEventListener('click', () => {})

app.toggle.controls.addEventListener('click', () => {
    app.state.isCtrl = !app.state.isCtrl
})

app.pad_btns.up.addEventListener('click', () => {})

app.pad_btns.down.addEventListener('click', () => {})

app.pad_btns.left.addEventListener('click', () => {})

app.pad_btns.right.addEventListener('click', () => {})

app.pad_btns.menu.addEventListener('click', () => {})

app.pad_btns.confirm.addEventListener('click', () => {})

app.pad_btns.cancel.addEventListener('click', () => {})

document.addEventListener('keydown', e => {
    if (app.state.isTyping)
    console.log('typing not implemented')
    else
        switch (e.key) {
            case 'ArrowUp' || 'w':
                app.settings.player.win.y -= e.shiftKey ? 16 : 8
                break
            case 'ArrowDown' || 's':
                app.settings.player.win.y += e.shiftKey ? 16 : 8
                break
            case 'ArrowLeft' || 'a':
                app.settings.player.win.x -= e.shiftKey ? 16 : 8
                break
            case 'ArrowRight' || 'd':
                app.settings.player.win.x += e.shiftKey ? 16 : 8
                break
        }
})

document.addEventListener('keyup', e => {})