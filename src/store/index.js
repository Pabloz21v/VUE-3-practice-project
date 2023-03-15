import { createStore } from "vuex";

// Video 18 VUEX
// https://www.youtube.com/watch?v=1sV7SpyDbwE

export default createStore({
    // state un equivalente al data()
    state:{
        counter: 1,
        jwt: '',
        error: ''
    },
    // para lo metodos getter
    // valor computed
    getters:{
        times2(state){
            return state.counter*2
        }
    },
    // equivalente a setters y permite modificar el estado de los states sincronas
    //set sync
    mutations:{
        setCounter(state, value){
            state.counter = value;
        }
    },
    // permite modificar el estado de los states asincronas set(async-awayt)
    actions:{
        async login(state, email,password){
            try{
                const res = await fetch('https://hfp69ilv.directus.app/auth/login', {
                    mothod: 'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }) 
                const response = await res.json()
                if('errors' in response){
                    state.error = "Login failed"
                    return false
                }
                state.jwt = response.data.access_token
                return true
            }catch(error){
                state.error ="Login failed"
                return false
            }
        }
    },
    //permite subdividir el store y compartimentarlo
    modules:{
        
    }
})

