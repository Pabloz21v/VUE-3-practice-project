// store creado con pinia
// solo se usan state: getters: actions:

import { defineStore } from "pinia";

export const useCounterStore = defineStore('counterV19',{
    // se trabaja parecedio a COMPOSITION API
    state: ()=>{
        return{
            countPinia: 1
        }
    },
    getters:{
        times2Pinia:(state) => state.countPinia *2
    },
    actions:{
        incrementPinia(val = 1) {
            this.countPinia += val
        }
    }
})
