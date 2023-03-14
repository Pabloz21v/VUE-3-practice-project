import {createRouter, createWebHistory} from "vue-router"
import PostListV8 from '../view/PostListV8.vue'
import PostDetailViewV11 from '../view/PostDetailViewV11.vue'
import AuthViewV12 from '../view/AuthViewV12.vue'

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
// forma para redireccionar rutas, en el name poner el name del componente a donde quiero redireccionar
// ejemplo al ir a la ruta inicial, te manda a la ruta /post
// {
// path: '/',
// redirect:   {name: 'PostListV8'}
// },
{
    path: '/auth',
    name: 'AuthViewV12',
    component: AuthViewV12
    },

{
path: '/post',
name: 'PostListV8',
component: PostListV8
},
{
path: '/post/:id',
name: 'PostDetailViewV11',
component: PostDetailViewV11
}]
})
export default router
