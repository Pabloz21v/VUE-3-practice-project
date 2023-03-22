import {defineStore} from 'pinia'
export const usePersistencia = defineStore('usePersistencia',{
    state: ()=>{
        return{
            count: 1
        }    
    },
    actions:{
        iniciar(){
            // recupera el valor de count en el local storage
            const iniciarCount = localStorage.getItem('count')
            if(iniciarCount){
                this.count = parseInt(iniciarCount)
            }
        },
        aumento(val = 1){
            this.count += val
            //guardo en localStorage el valor
            localStorage.setItem('count', this.count.toString())
        }
    },
    // en esta linea se indica si tendra este store la persistencia
    // persist: true
    persist:{
        // elijo donde se almacenará
        storage: sessionStorage,
        // dentro de paths llevo el control de esta variable y no del resto
        paths: ['count']
    }
})