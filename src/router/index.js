import {createRouter, createWebHistory} from "vue-router"
import PostListV8 from '../view/PostListV8.vue'
import PostDetailViewV11 from '../view/PostDetailViewV11.vue'
import AuthViewV12 from '../view/AuthViewV12.vue'
import LoginViewV21 from '../view/LoginViewV21.vue'
import DashboardViewV21 from '../view/DashboardViewV21.vue'



const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
// forma para redireccionar rutas, en el name poner el name del componente a donde quiero redireccionar
// ejemplo al ir a la ruta inicial, te manda a la ruta /post
// {
// path: '/',
// redirect: {name: 'PostListV8'}
// },

{
path: '/login',
name: 'LoginView',
component: LoginViewV21,
meta: {
    requireAuth: false
}
},
{
path: '/dashboard',
name: 'Dashboard',
component: DashboardViewV21,
meta: {
    requireAuth: true,
    // role: 'admin'
}
},
{
path: '/auth',
name: 'AuthViewV12',
component: AuthViewV12,
meta: {
    requireAuth:false
}
},
{
path: '/post',
name: 'PostListV8',
component: PostListV8,
meta: {
    requireAuth:false
}
},
{
path: '/post/:id',
name: 'PostDetailViewV11',
component: PostDetailViewV11,
meta: {
    requireAuth:false
}
}]
})

// V21 configuaracion q verifica si es true o false y segun esta da el acceso a la ruta o no
// depende del tipo de auth backend, firebase, nube, etc
//https://youtu.be/blTAbR-SAjY?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=1509
router.beforeEach((to,from,next)=> {
    // la var auth si pongo true estaria permitiendo el acceso a la ruta /dasboard
    const auth = false
    const needAuth = to.meta.requireAuth
    if(needAuth && !auth){
        next('login')
    } else {
        next()
    }
})

export default router