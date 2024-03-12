import { create, useStore } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { storage_settings } from './useStore'

const settingsSlice = (set) => ({
    storage_settings: storage_settings.ON,
    autosave_settings: 0,
    user_agent: '',
    touch_enabled: false,
    is_mobile: false,
    update_storage_settings: (setting) => set(() => ({ storage_settings: setting  })),
    update_autosave_settings: (delay) => set(() => ({ autosave_settings: delay * (1000 * 60) })),
    update_user_agent: (agent) => set(() => ({ user_agent: agent })),
    update_touch_enabled: (enabled) => set(() => ({ touch_enabled: enabled })),
    update_is_mobile: (mobile) => set(() => ({ is_mobile: mobile }))
})

const userSettingsSlice = (set) => ({})

const inventorySlice = (set) => ({})

const store = create((...a) => (
    persist(
        (set, get) => ({
            _hasHydrated: false,
            set_has_hydrated: state => { set({ _hasHydrated: state }) },
            ...settingsSlice(...a),
            ...inventorySlice(...a)
        }),
        {
            name: 'jordans-game',
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => { state.set_has_hydrated(true) }
        }
    )
))

const createSelectors = (_store) => {
    const store = _store
    store.use = {}
    for (const k of Object.keys(store.getState())) {
        ;(store.use)[k] = () => useStore(_store, (state) => state[k])
    }
    return store
}

export const useGameStore = createSelectors(store) 