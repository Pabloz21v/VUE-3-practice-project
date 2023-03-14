// para conectar al servidor   
// https://hfp69ilv.directus.app/auth/login  
//  email: testuser@gogodev.net  
// password: 12345678 
// actualmetne caido
import { ref } from "vue"

class AuthService {
    constructor(){
        this.jwt= ref('')
        this.error= ref('')
    }
    
    getJwt(){
        return this.jwt
    }

    getError(){
        return this.error
    }

    async login(email,password){
        try{
            const res = await ('https://hfp69ilv.directus.app/auth/login', {
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
                this.error = "Login failed"
                return false
            }
            this.jwt = response.data.access_token
            return true
        }catch(error){
            console.log(error);
        }
    }
}
export default AuthService