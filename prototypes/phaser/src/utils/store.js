import React from "react";


export const textSpeedSettingValues = { SLOW: 0.08, MED: 0.05, FAST: 0.03 }




export default function useGameStore() {
    const [storage, setStorage] = useState(storage?.getItem('storage_setting') || storageSettingValues.ON)
    const [initial_save, setInitialSave] = useState(storage.getItem('initial_save_setting') || false)
    const [autosave, setAutosave] = useState(storage.getItem('autosave_setting') || 0)
    
    const [text_speed, setTextSpeed] = useState(storage.getItem('text_speed_setting') || textSpeedSettingValues.MED)

    
}