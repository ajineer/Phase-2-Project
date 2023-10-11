import { create } from "zustand";


const useStore = create((set) =>({

    current: 0, 
    setCurrent: (newCurrent) => set({ current:newCurrent }),
    pantry: [],
    setPantry: (newPantry) => set({ pantry:newPantry }),
    groceryList: [],
    setGroceryList: (newGroceryList) => set({ groceryList:newGroceryList }),
    groceryListidx: 0,
    setGroceryListidx: (newGroceryListidx) => set({ groceryListidx:newGroceryListidx }),
    currentGlist: [],
    setCurrentGlist: (newCurrentGlist) => set({ currentGlist:newCurrentGlist })
}))

export default useStore