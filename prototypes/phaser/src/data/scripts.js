export const beginning = [
    {
        dialog: "In the beginning, there were the Orgs. Together, they formed and cultivated life as we know it in this world.",
        show: new Array(7).fill("shadow_portrait")
    },
    {
        dialog: "The first was Xilen who roamed scorched lands and the charred mountains, flowing with rivers of lava.",
        swap: ["shadow_portrait", "xilen_portrait"]
    },
    {
        dialog: "Second was Brigon, the first dragon.",
        swap: ["shadow_portrait", "brigon_portrait"]
    }
]

export const birth = [
    {
        character: "lucas"
    }
]

const birth_dialog = [
    {
        character: "Lucas",
        dialog: "Are they a boy or a girl?"
    },
    {
        required: ['protatogonist_initial_gender', 'protagonist_initial_name'],
        character: "Bruthilda",
        dialog: `${protagonist_initial_name}. ${protagonist_initial_name} is a good name, I think.`
    },
    {
        character: "Lucas",
        dialog: "Hm? What is it?"
    },
    {
        character: "Bruthilda",
        dialog: ""
    }
]