# Jordan's Game

By: Stella Marie

Pokemon parody game based on a promise and plan

## Description

1. Geometric shape creatures
2. Spell-based battle mechanic
3. Story-oriented

### Notes

#### Test for Lag
```js
const complexLattice = ({ ctx, tile, x, y }) => {
    const quart = Math.floor(tile / 4)

    ctx.strokeStyle = '#000'

    for (let i = 0; i < 16; ++i) {
        const x_i = i % 4 * 4 + x
        const y_i = Math.floor(i / 4) * 4 + y
        ctx.beginPath()
        ctx.moveTo(x_i, y_i)
        ctx.lineTo(x_i + quart, y_i + quart)
        ctx.moveTo(x_i + quart, y_i)
        ctx.lineTo(x_i, y_i + quart)
        ctx.moveTo(x_i, y_i)
        ctx.closePath()
        ctx.stroke()
    }
}

// in draw
for (let i = 1; i < view.width; i += 16)
    for (let j = 1; j < view.height; j += 16)
        complexLattice({ ctx, tile, x: i, y: j })
```
- Test lag with complexity: 32 lines per 16x16 (non-moving)
- Does not account for varying hardware complexity in executing lines vs shapes
- Move player
- Browser: Mobile, LT, Desktop

## Known Bugs

- Desktop (landscape): initialize with collapsed ui

## License

[MIT](https://choosealicense.com/licenses/mit/)
[License](./LICENSE)

Copyright © 2023 Sm Kou