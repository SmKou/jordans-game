import useLocalStorage from "../utils/useLocalStorage"

export function BirthMemory() {
    const storage = useLocalStorage()
    const [player_name, setPlayerName] = useState(storage.get(player_name) || '') 
}