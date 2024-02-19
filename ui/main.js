const syst = document.querySelector('.syst')
const ipt = document.querySelector('.ipt')

const addLine = (text, isPlayer = false, isSpoken = false) => {
    const p = document.createElement('p')
    p.setAttribute('class', `${isPlayer ? 'player' : ''} ${isSpoken ? 'speech' : ''}`)
    p.append(document.createTextNode(text))
    syst.append(p)
}

ipt.addEventListener('change', e => {
    const val = e.target.value
    e.target.value = ''
})