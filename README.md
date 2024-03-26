# Jordan's Game

By: Stella Marie

Pokemon parody rpg made with React and Phaser

## Description

**Inspired by:** Pokemon Red
**Spec by:** Jordan (my nephew)
**Design by:** Stella Marie (Sm Kou)

### Project Setup

User Input
- game menu
- gamepad
- dialog (narration)
- dialog options
- keyboard: keypress | button

What data is passed when game state changes or when controls are used?

    To setup the Start screen requires a dialog and two options: new game and load game. Depending on whether the player has played through the introduction scenes, if the boolean flags are all true, new game opens a delete confirmation modal, while load game loads the last scene played. Otherwise, new game loads the introduction scenes and load game is disabled.

**Scenes**
| Scene         | Mn  | GP  | Dn  | Do  | Kb  |
| ------------- | --- | --- | --- | --- | --- |
| Start Menu    |     |  X  |     |  X  |     |
| Dream         |     |  X  |  X  |  X  |  X  |
| Battle        |     |  X  |  X  |  X  |     |
| Main (Game)   |  X  |  X  | Collapsible     |
| Inventory     |     | GBA |  X  |  X  |     |

**Game Menu**
- Index --------> Gameboy
- Inventory ----> Gameboy
- Geos ---------> Gameboy
- Options: sfx, text speed, user orientation, key mapping, new game
- Save
  and Dream

**Gamepad**
Start Menu
Dream
Battle
Main
Inventory

## Complete Setup

**Deployment**
```bash
git subtree push --prefix ui origin gh-pages
```

## Known Bugs

## License

[MIT](https://choosealicense.com/licenses/mit/)
[License](./LICENSE)

Jordan's Game © 2023 by Stella Marie (Sm Kou)