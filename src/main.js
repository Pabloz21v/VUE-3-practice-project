import { createApp } from 'vue'
import App from './App.vue'
// V9
// npm install bootstrap
// npm install @popperjs/core
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// v10
// npm install vue-router
import router from './router'
// V18
// npm install vuex para usar store
import store from './store'
//V 19
// npm i pinia para usar pinia
import { createPinia }from 'pinia'
// V20
// npm install vue-cookies
import VueCookies from 'vue-cookies'
// V20
// npm i vue-session
// https://www.npmjs.com/package/vue-session
// import VueSession from 'vue-session'

import './assets/main.css'
// de esta forma estaba originalmente
// createApp(App).mount('#app')

// para la persistencia de los states/store V27
// npm i pinia-plugin-persistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//intalacion de vue3-lazyload (carga peresosa) pluggin V28
//https://www.npmjs.com/package/vue3-lazyload
//npm i vue3-lazyload
import VueLazyLoad from 'vue3-lazyload'
// y agrego el .use(VueLazyLoad) a la constante const app

// creo constantes para trabajar con Pinia
const pinia = createPinia()

// V27
pinia.use(piniaPluginPersistedstate)
// modificado para las directivas personalizadas simples agregado el routerV10,storeV19, cookiesV20, session V20
// en el .use(VueCookies,{expires: '1d'}) se puede agregar mas valores en este ejemplo se pone que expiran las cookies en 1d
// https://youtu.be/tKO_if4M8XA?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=535
// para .use(VueSession)
// https://youtu.be/tKO_if4M8XA?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=1359
const app = createApp(App).use(store).use(VueLazyLoad).use(pinia).use(router).use(VueCookies,{expires: '1d'})

// por algun motivo app.use(VueSession)falla y no carga nada del contenido
// app.use(VueSession)
// COOKIES
// para configurar el cookie
//$cookies.set('auth',1000, expires,path,domain,secure,sameSite)
//para recuperar
// $cookies.get('auth')
// eliminar
// $cookies.remove('auth')
// si existe una cookie
// $cookies.isKey('auth')
// para obtener todas las cookies
// $cookies.keys()

//SESSION
// $session.start()
// $session.set('auth',1000)
// recuperar info de una session
// $session.get('auth')
// saber el id de la session en uso
// $session.id()
//renovar una sesion
// $session.renew()
// eliminar
// $session.destroy()

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


// se agrega .use(pinia) para darle uso
app.mount('#app')

