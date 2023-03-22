import {createRouter, createWebHistory} from "vue-router"
import PostListV8 from '../view/PostListV8.vue'
import PostDetailViewV11 from '../view/PostDetailViewV11.vue'
import AuthViewV12 from '../view/AuthViewV12.vue'
import LoginViewV21 from '../view/LoginViewV21.vue'
import DashboardViewV21 from '../view/DashboardViewV21.vue'
import LoginViewV23 from '../view/LoginViewV23.vue'
import NoteCreateViewV23 from '../view/NoteCreateViewV23.vue'
import NoteListViewV23 from '../view/NoteListViewV23.vue'
import RegisterViewV23 from '../view/RegisterViewV23.vue'
import useAuthV23 from '../store/authV23'
import ServicesV24 from '../view/ServicesV24.vue'
import ContactV24 from '../view/ContactV24.vue'

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
//REDIRECT
// forma para redireccionar rutas, en el name poner el name del componente a donde quiero redireccionar
// ejemplo al ir a la ruta inicial, te manda a la ruta /post
// {
// path: '/',
// redirect: {name: 'PostListV8'}
{
path: '/services-v24',
name: 'Services-v24',
component: ServicesV24,
meta: {
requireAuth: false
}
},
{
path: '/contact-v24',
name: 'Contact-v24',
component: ContactV24,
meta: {
requireAuth: false
}
},
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
},
{
path: '/login-v23',
name: 'login-v23',
component: LoginViewV23,
meta: {
requireAuth: false
}
},
{
path: '/note-create-v23',
name: 'note-create-v23',
component: NoteCreateViewV23,
meta: {
requireAuth: true
}
},
{
path: '/note-list-v23',
name: 'note-list-v23',
component: NoteListViewV23,
meta: {
requireAuth: true
}
},
{
path: '/register-v23',
name: 'register-v23',
component: RegisterViewV23,
meta: {
requireAuth: false
}
}]
})




// V21 configuaracion q verifica si es true o false y segun esta da el acceso a la ruta o no
// depende del tipo de auth backend, firebase, nube, etc
//https://youtu.be/blTAbR-SAjY?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=1509
// router.beforeEach((to,from,next)=> {
// la var auth si pongo true estaria permitiendo el acceso a la ruta /dasboard
// const auth = false
// const needAuth = to.meta.requireAuth

// if(needAuth && !auth){
// next('login')
// } else {
// next()
// }
// })

//V23 configuracion para acceder con una base de datos y un servidor activos
// https://youtu.be/TqfrKULUuYY?list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&t=2615
router.beforeEach((to,from,next)=> {
const authV23 = useAuthV23()
const isAuthV23 = authV23.token
if((to.meta.requireAuth) && (isAuthV23 == null)){
next('login-v23')
} else {
next()
}
})

export default router
