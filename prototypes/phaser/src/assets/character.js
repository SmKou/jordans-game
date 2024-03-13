const age_group = age => {}

export default function character({ name, creature, origin, age, level, pos, dir }) {
    const [id, setId] = useState(`${name}_${origin}_${age_group(age)}`)
}

export function player() {}