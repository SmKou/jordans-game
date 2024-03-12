const genders = {
    m: ['male', 'boy', 'man', 'men'],
    f: ['female', 'girl', 'woman', 'women'],
    n: ['neutral', 'kid', 'adult', 'neutrals'],
    i: ['intersexual', 'kid', 'adult', 'intersexuals']
}

// const find_gender = (gender) => {
//     for (const v of Object.keys(genders))
//         if (genders[v].includes(gender)) return v;
//     return ''
// }

// const quantify = (arr) => {
//     const diff = []
//     for (const v of arr)
//         if (!diff.includes(v)) { diff.push(v) }
//     return diff
// }

// const gender = (character) => {
//     if (Array.isArray(character)) {
//         if (!character.length) return '';
//         else if (character.length === 1) { character = character[0] }
//         else {
//             const c_genders = []
//             c_genders.push(find_gender(character[0].main_gender))
//             c_genders.push(find_gender(character[1].main_gender))
//             for (let i = 2; i < character.length; ++i)
//                 c_genders.push(find_gender(character[i].main_gender))
//             const allOneGender = quantify(c_genders)
//             const allOneAgeGroup = quantify(character.map(c => c.age_group))
//         }
//     }

//     const k = find_gender(character.main_gender)
// }

const scripts = {
    opening: [
        { lucas: {
            ipt: [],
            dialog: () => "Are they a boy or a girl?"
        }},
        { bruthilda: {
            ipt: ['player'],
            dialog: (player) => `A ${genders[player.init_gender][1]}, dear`
        }},
        { lucas: {
            ipt: [],
            dialog: () => "What do we name them?"
        }},
        { bruthilda: {
            ipt: ['player'],
            helper: (player) => {
                const name = player.init_gender === 'm' ? "Luther" : "Cassia"
                player.init_name = name
                return name
            },
            dialog: (player, name = this.helper(player)) => `${name}. ${name} is a good name, I think.`
        }},
        { lucas: {
            ipt: [],
            dialog: () => "Hm? What is it?"
        }},
        { bruthilda: {
            ipt: ['player'],
            dialog: (player) => `Nothing, love. ${player.init_name} will do.`
        }},
        { lucas: {
            ipt: [],
            dialog: () => "I agree. Did you hear about Skellington's kid? I bet our children will get along. Were they a boy or a girl?"
        }},
        { bruthilda: {
            ipt: ['deuteragonist'],
            dialog: (deuteragonist) => ``
        }}
    ]
}