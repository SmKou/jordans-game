# Schedule

## States
[X] Start Menu
   - load game from file
[] Dream
   - intro
   - birth
   - identity and appearance
   - player's geos
[] Game Scene
   - movement on tilemap
   - battle
[] Game Menu
[] Inventory
[] Loading

### Intro

In the beginning, the world was split between light and darkness. The lands were scorched and rivers of melted rock flowed from the charred black shells of mountains. Roaming the world was a creature named Xilen.

Show: Xilen

Where Xilen came from and how they came to be is unknown, and for many upon many years, Xilen was content until one day, they heard a whisper. They searched and searched, unsure of this strange sound, and once tired of searching, they found that it followed them everywhere they went. Frustrated, Xilen's anger summoned the magma from deep below, but the whisper stopped them.

"I am air," it explained.

Xilen didn't know what air was. Their anger simmered. They tried to run from the air, and only deep underground did they finally find silence. That silence soon ending with a new sound. It was gruff, quick, repetitive. When they ventured towards the sound, they discovered it was the air and the air was burning.

For the sake of the air, Xilen left their underground hideaway and walked the lands, listening to the air's whispers. It spoke of colors, movement, and life. Xilen did not care for any of these things, but in time, they got used to the air and they came to appreciate the air's company.

Together, Xilen and the air created Brigon who formed water and lakes and rivers.

Show: Brigon

Brigon was soon joined by Astel who formed clouds, bringing about wind and rain.

Show: Astel

Together, these four creatures cultivated life. With the advent of life came a new creature named Krissix who formed spirit, infusing life with a soul.

Between Brigon and Krissix, the first geo was created. Image not available. Though their spoken name has been lost, the first geo is still known to all as Memo.

In time, Memo was followed by the first fig, Zekiu, and the first peum, [Lina]. 

Show: Zekiu
Show: [Lina]

The last time any of these Great creatures were seen was nearly a century ago. With their disappearance, the life essence of all geos, figs, and peums has been running out. If they are not found soon, life in this world will end.

So live while it lasts.

### Dream: Birth

Lucas:      Are they a boy or a girl?

INPUT => protagonist_initial_gender

Bruthila:   A {protagonist_initial_gender}, dear.
Lucas:      What do we name them?
Bruthilda:  {Luther | Cassia}. {Luther | Cassia} is a good name, I think.
Lucas:      Hm? What is it?
Bruthilda:  Nothing, love. {Luther | Cassia} will do.
Lucas:      I agree. Did you hear about Skellington's kid?
            I bet our children will get along. Were they a boy or a girl?

INPUT => deuteragonist_gender

Bruthilda:  A {deuteragonist_gender}, dear.
Lucas:      Right, right. What was their name?
Bruthilda:  Jackie. Jackie Skellington.
Lucas:      du Lamp also had a kid. May be in a nuisance in the future.
            Just like their parents. Were they a boy or a girl?

INPUT => antagonist_gender

Bruthilda:  A {antagonist_gender}, dear.
Lucas:      And what was their name?
Bruthilda:  Genie. Genie du Lamp.
Lucas:      Sounds annoying already. [!]
Leech:      Luc! Luc! Emergency at the lab!
Lucas:      What emer--Bruthilda.
Bruthilda:  I'm find, dear, go. Nice to see you again, Prof. Leech.
Leech:      Aw, thank you, Hilda. [!] That hurt.
Lucas:      Let's--
Leech:      Hurry up, Luc! [!]
            That was your shoe!

### Dream: Identity and Appearance

Many things change, not only time. Is your name still {Luther | Cassia}?

INPUT => protagonist_name

What a funny thing to find acceptance, it’s worth looking for it. Are you still a {protagonist_initial_gender}?

INPUT => protagonist_gender

There are so many things that can change, that do and will change, just as they don't and will not. What do you look like?

SELECT => head shape
SELECT => head style
SELECT => body style

So many colors...
Years ago, your parents gave you a geo each. They are waiting for you to wake up, but let's not devastate them with finding they have no names to you.

This is a gasen given to you by your mother. What will you name them?

Show: young gasenu (sweet)
- Index info
- Stats

INPUT => protagonist_geos: gasen

This is a me'opt given to you by your father. What will you name them?

Show: young ame'opt (shiny)
- Index info
- Stats

INPUT => protagonist_geos: me'opt

Seems you are ready to wake up, but before you go, one last question.
Is this part of your story?

INPUT => player_answers: part_of_story

We will see. For now, you need only understand that this is a moment, a moment you can return to every time you decide to dream. And I will welcome you back every time with something to share. You can find out who I am another time. Welcome to Jordan’s Game. Now, wake up.

## Assets

## NPCs

