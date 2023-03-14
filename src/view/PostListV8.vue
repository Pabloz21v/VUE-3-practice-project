<template>
    <h1>Listado de posts</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id" v-show="post.id <= '10'">
            <RouterLink :to="{ name: 'PostDetailViewV11', params: { id: post.id } }">
                {{ post . title }}
            </RouterLink>
        </li>
    </ul>
    <RouterLink to="../">
            Volver atras
        </RouterLink>
</template>

<!-- con Composition Setup -->
<script setup>
    import {
        onMounted
    } from 'vue';
    import PostService from '../services/PostServiceV8'

    const service = new PostService()
    const posts = service.getPosts()
    onMounted(async () => {
        await service.fetchAll()
    })
</script>

//
<!-- con option API -->
//
<!-- <script>
    //     import {
    //         defineComponent
    //     } from 'vue';
    //     import PostService from '../../services/PostService'
    //     export default defineComponent({
    //         name: 'PostListV8',
    //         data() {
    //             const service = new PostService()
    //             const posts = service.getPosts()
    //             return {
    //                 posts
    //             }
    //         },
    //         async mounted() {
    //             await this.service.fetchAll()
    //         }
    //     })
    // 
</script> -->

//
<!-- con composition API modo tradicional -->
//
<!-- <script>
    //     import {
    //         defineComponent,
    //         onMounted
    //     } from 'vue';
    //     import PostService from '../../services/PostService'
    //     export default defineComponent({
    //         name: 'PostListV8',
    //         setup() {
    //             const service = new PostService()
    //             const posts = service.getPosts()
    //             onMounted(async () => {
    //                 await service.fetchAll()
    //             })
    //             return {
    //                 posts
    //             }
    //         }
    //     })
    // 
</script> -->

<style scoped lang="scss">
    .post-list {
        width: 50vw;
        height: 75px0;
        padding: 20px;
        list-style-type: none;

        li {
            padding: 10px;
            width: 100%;
            border: 1px solid #CCC;
            color: greenyellow;
        }

        li:hover {
            background-color: darken(#ff00ff, 5%);
        }
    }
</style>
