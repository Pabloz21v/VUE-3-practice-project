import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'

import './assets/main.css'
// de esta forma estaba originalmente
// createApp(App).mount('#app')

// modificado para las directivas personalizadas simples  agregado el router
const app = createApp(App).use(router)

app.directive('font-size',{
    // https://youtu.be/8bUqKjDnBwY?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=1080
    beforeMount: (el) => {
        el.style.fontSize = "70px"
    }
})
// aplico esta directiva creada de font-size  y custom-size en 
// src\components\datosComputados-V6\EjercicioV6.vue

app.directive('custom-size',{
    beforeMount: (el,binding) => {
        el.style.fontSize =binding.value + "px"
    }
})

// directiva estilo bootstrap 
app.directive('custom-tamanio',{
    beforeMount: (el,binding) => {
        let size = 18
        switch(binding.arg){
            case 'sm': 
                size = 10
                break
            case 'md':
                size = 18
                break
            case 'lg':
                size = 25
                break
            case 'xl':
                size = 40
                break
            case 'xxl':
                size = 72
        }
        el.style.fontSize = size + "px"
    }
})

// directivas personalizadas con modificadores
// tnato para color como tamaña
// aplicado a :
// src\components\directivas-V7-personalizadas\DirectivasPersonalizadasConModificadores.vue
app.directive('custom-font',{
    beforeMount: (el,binding) => {
        let size = 18
        if(binding.modifiers.sm){
            size = 10
        } else if (binding.modifiers.lg){
            size = 25
        } else if (binding.modifiers.xxl){
            size = 72
        }
        el.style.fontSize = size + 'px'

        if(binding.modifiers.red){
            el.style.color = '#ff0000'
        } else if (binding.modifiers.green){
            el.style.color = '#00ff00'
        } else if (binding.modifiers.blue){
            el.style.color = '#0000ff'
        }
    }
})

app.mount('#app')

